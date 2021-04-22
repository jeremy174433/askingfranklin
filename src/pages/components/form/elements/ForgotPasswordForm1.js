import React from 'react';
import { withTranslation } from 'react-i18next';
import Input from '../Input';
import PmyBtn from '../../button/PmyBtn';
import Alert from '../../elements/Alert';

class ForgotPasswordForm1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            success: false,
            alertIsShowedCodeSent: false,
            alertIsShowed: false,
            error: false,
            alertIsShowedLimit: false,
            emailSent: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleCloseAlert();
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/forgot-password', {
            method: 'POST',
            body: JSON.stringify({ username: this.state.email })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            this.setState({
                success: true,
                alertIsShowedCodeSent: true,
                emailSent: true
            });
        })
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowedCodeSent: false,
            error: false,
            alertIsShowedLimit: false
        });
    }

    render() {

        const { t } = this.props;

        return (
            <form onSubmit={this.handleSubmit} method="POST">
                <Input 
                    onChange={this.handleEmail} 
                    type="email" 
                    label={t('form.label.email')}
                    for="email" 
                    required={true} 
                    infoMsg={this.state.email.length < 1 ? t('alert.form.fieldRequired') : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail')}
                />
                <PmyBtn 
                    type="submit" 
                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/)} 
                    btnIsMediumPmyFull 
                    textBtn={t('sign.forgotPassword.cta1')} 
                    className="w-sm-100"
                />
                {this.state.success && <Alert className={this.state.alertIsShowedCodeSent ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="successMessage" msg={[ t('alert.forgotPassword.sendVerifCode'), <span class="fw-600">{this.state.email}</span>]}/> }
                {this.state.error && <Alert className={this.state.alertIsShowedLimit ? 'alert-msg-visible alert-msg-no-sticky' : 'alert-msg-no-sticky'} alertId="errorMessage" msg={t('alert.forgotPassword.errorLimit')}/> }
            </form>
        )
    }
}

export default withTranslation()(ForgotPasswordForm1);