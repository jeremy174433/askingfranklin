import React from 'react';
import { withTranslation } from 'react-i18next';
import Input from '../../../components/form/Input';
import PmyBtn from '../../../components/button/PmyBtn';
import Alert from '../../../components/elements/Alert';

class SignInForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false,
            alertIsShowed: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit(event) {
        event.preventDefault();
        this.handleCloseAlert();
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/auth', {
            method: 'POST',
            body: JSON.stringify({ 
                username: this.state.email, 
                password: this.state.password
            })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.error) {
                this.setState({
                    error: true,
                    alertIsShowed: true
                });
            } 
            else {
                localStorage.setItem('af_token', res.token);
                localStorage.setItem('af_refresh_token', res.refresh_token);
                localStorage.setItem('af_username', res.username);
                localStorage.setItem('af_is_sub', (res.is_sub === null || res.is_sub[0] === null) ? 0 : 1);
                this.setState({
                    toPlan: (res.is_sub === null || res.is_sub[0] === null) ? true : false
                });
                this.props.handleConnect(event);
            }
        });
    }

    handleCloseAlert() {
        this.setState({
            error: false,
            alertIsShowed: false
        });
    }

    render() {

        const { t } = this.props;

        return (
            <form onSubmit={this.handleSubmit} method="POST" id="signInForm">
                <Input 
                    onChange={this.handleEmail} 
                    type="email" 
                    label={t('form.label.email')}
                    for="si_email"
                    required={true} 
                    infoMsg={this.state.email.length < 1 ? t('alert.form.fieldRequired') : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail')}
                />
                <Input 
                    onChange={this.handlePassword} 
                    type="password" 
                    label={t('form.label.password')}
                    for="si_password"
                    required={true} 
                    infoMsg={!this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && t('alert.form.patternPassword')}
                />
                <PmyBtn 
                    type="submit" 
                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || !this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/)} 
                    btnIsMediumPmyFull 
                    textBtn={t('sign.signIn.cta')}
                    className="w-sm-100"
                />
                {this.state.error && <Alert className={this.state.alertIsShowed ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="errorMessage" msg={t('alert.signIn.noMatch')}/> }
            </form>
        )
    }
}

export default withTranslation()(SignInForm);