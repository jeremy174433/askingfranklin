import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Input from '../../../components/form/Input';
import PmyBtn from '../../../components/button/PmyBtn';
import EyeShowHide from '../../../../assets/img/svg/switch/EyeShowHide';
import Alert from '../../../components/elements/Alert';

class ForgotPasswordForm2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            code: '',
            newPassword: '',
            pwdDefaultType: 'password',
            success: false,
            alertIsShowed: false,
            error: false,
            alertIsShowedError: false,
            passwordIsChanged: false
        }
        this.handleCode = this.handleCode.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleSubmitConfirm = this.handleSubmitConfirm.bind(this);
        this.handleInputType = this.handleInputType.bind(this);
    }

    handleCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    
    handleNewPassword(e) {
        this.setState({
            newPassword: e.target.value
        });
    }

    handleInputType() {
        this.setState({ pwdDefaultType: this.state.pwdDefaultType === 'password' ? 'text' : 'password' });
    }

    handleSubmitConfirm(event) {
        event.preventDefault();
        this.handleCloseAlert();
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/confirm-forgot-password', {
            method: 'POST',
            body: JSON.stringify({ code: this.state.code, password: this.state.newPassword, username: this.state.email })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.message === 'Password has been changed successfully') {
                this.setState({
                    error: false,
                    success: true,
                    alertIsShowed: true,
                    passwordIsChanged: true
                });
            }
            else if(res.message === 'Unknown error An error occurred (LimitExceededException) when calling the ConfirmForgotPassword operation: Attempt limit exceeded, please try after some time. ') {
                this.setState({
                    error: true,
                    success: false,
                    alertIsShowedLimit: true
                });
            }
            else {
                this.setState({
                    error: true,
                    success: false,
                    alertIsShowedError: true
                });
            }
        })
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowedCodeSent: false,
            error: false,
            alertIsShowedError: false,
        });
    }

    render() {

        const { t } = this.props;

        return (
            <form onSubmit={this.handleSubmitConfirm} method="POST">
                <Input 
                    onChange={this.handleCode} 
                    disabled={this.state.passwordIsChanged === true} 
                    type="text" 
                    value={this.state.code} 
                    label={t('form.label.codeSentByEmail') + this.state.email} 
                    for="fp_codeToken"
                    maxlength={6} 
                    minlength={6} 
                    required={true} 
                    infoMsg={this.state.code.length !== 6 && t('alert.form.codePattern')}
                />
                <Input 
                    containerStyle="input-password-column"
                    onChange={this.handleNewPassword} 
                    disabled={this.state.passwordIsChanged === true} 
                    type={this.state.pwdDefaultType} 
                    value={this.state.newPassword} 
                    label={t('form.label.newPassword')}
                    labelInfo={[ t('form.label.passwordPattern1'), <br class="d-block d-sm-none"/>, t('form.label.passwordPattern2')]}
                    minLength={8} 
                    for="fp_newPassword"
                    onClick={this.handleInputType} 
                    inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} 
                    required={true} 
                    infoMsg={!this.state.newPassword.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && t('alert.form.patternPassword')}
                />
                <PmyBtn 
                    type="submit" 
                    isDisabled={this.state.code.length !== 6 || !this.state.newPassword.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) || this.state.passwordIsChanged === true} 
                    btnIsMediumPmyFull 
                    textBtn={t('sign.forgotPassword.cta2')}  
                    className="w-sm-100"
                />
                {this.state.success && <Alert className={this.state.alertIsShowed ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="successMessage" msg={[ t('alert.forgotPassword.success'), <Link to={t('url.signIn')}>{t('alert.forgotPassword.successLink')}</Link>]}/> }
                {this.state.error && <Alert className={this.state.alertIsShowedError ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="errorMessage" msg={t('alert.forgotPassword.error')}/> }
            </form>
        )
    }
}

export default withTranslation()(ForgotPasswordForm2);