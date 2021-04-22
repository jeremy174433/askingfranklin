import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Input from '../Input';
import Checkbox from '../Checkbox';
import PmyBtn from '../../button/PmyBtn';
import EyeShowHide from '../../../../assets/img/svg/switch/EyeShowHide';
import Alert from '../../elements/Alert';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            privacy: '',
            pwdDefaultType: 'password',
            success: false,
            alertIsShowed: false,
            emailIsAlreadyTaken: false
        }
        this.handleInputType = this.handleInputType.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputType() {
        this.setState({ 
            pwdDefaultType: this.state.pwdDefaultType === 'password' ? 'text' : 'password'
        });
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handlePrivacy() {
        this.setState({ 
            privacy: this.state.privacy === '' ? 'privacyChecked' : ''
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleCloseAlert();
        if(this.state.email && this.state.password && this.state.privacy) {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/signup', {
                method: 'POST',
                body: JSON.stringify({ 
                    email: this.state.email, 
                    password: this.state.password,
                    privacy: this.state.privacy ? 1 : 0
                })
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res.message);
                if(res.error) {
                    console.log(res.error);
                } 
                else {
                    if (res.message === 'This username already exist') {
                        this.setState({
                            alertIsShowed: true,
                            emailIsAlreadyTaken: true
                        });
                    }
                    else {
                        this.setState({
                            success: true,
                            alertIsShowed: true
                        });
                    }
                }
            })
        }
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowed: false,
            emailIsAlreadyTaken: false
        });
    }

    render() {
        
        const { t } = this.props;

        return (
            <form onSubmit={this.handleSubmit} method="POST" id="signUpForm">
                <Input 
                    onChange={this.handleEmail} 
                    value={this.state.email}
                    type="email" 
                    label={t('form.label.email')}
                    for="su_email"
                    required={true}
                    infoMsg={this.state.email.length < 1 ? t('alert.form.fieldRequired') : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail')}
                />
                <Input 
                    containerStyle="input-password-column"
                    onChange={this.handlePassword} 
                    value={this.state.password}
                    type={this.state.pwdDefaultType} 
                    label={t('form.label.password')}
                    labelInfo={[t('form.label.passwordPattern1'), <br class="d-block d-sm-none"/>, t('form.label.passwordPattern2')]}
                    minLength={8} 
                    for="su_password"
                    onClick={this.handleInputType}
                    inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} 
                    required={true}
                    infoMsg={!this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && t('alert.form.patternPassword')}
                />
                <Checkbox 
                    label={[ t('form.checkbox.labelTcs-1'), <Link to={t('url.tcs')} target="_blank" rel="noopener" title={t('titleElementBrowser.tcs')} class="fz-16">{t('form.checkbox.labelTcs-2')}</Link>, <em class="fz-14 ml-1">{t('form.checkbox.labelTcs-3')}</em>]} 
                    onChange={this.handlePrivacy} 
                    for="su_checkPrivacy"
                    value={this.state.privacy} 
                    required={true}
                    className="pb-3 mb-3"
                />
                <PmyBtn 
                    type="submit" 
                    title={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || !this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) || this.state.privacy === '' ? t('titleElementBrowser.form.registerError') : t('sign.register.cta')}
                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || !this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) || this.state.privacy === ''} 
                    btnIsMediumPmyFull 
                    textBtn={t('sign.register.cta')} 
                    className="w-sm-100"
                />
                {this.state.success && <Alert className={this.state.alertIsShowed ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="successMessage" msg={t('alert.signUp.success')}/> }
                {this.state.emailIsAlreadyTaken && <Alert className={this.state.alertIsShowed ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="errorMessage" msg={t('alert.signUp.emailAlreadyTaken')}/> }
            </form>
        )
    }
}

export default withTranslation()(SignUpForm);