import React from 'react';
import H1 from '../../../components/elements/title/H1';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Input from '../../../components/form/Input';
import PmyBtn from '../../../components/button/PmyBtn';
import ArrowLight from '../../../../assets/img/svg/ArrowLight';
import EyeShowHide from '../../../../assets/img/svg/switch/EyeShowHide';
import Alert from '../../../components/elements/Alert';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            code: '',
            newPassword: '',
            pwdDefaultType: 'password',
            success: false,
            alertIsShowed: false,
            error: false,
            alertIsShowedError: false,
            emailSent: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleCode = this.handleCode.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleSubmitConfirm = this.handleSubmitConfirm.bind(this);
        this.handleCloseAlertError = this.handleCloseAlertError.bind(this);
        this.handleInputType = this.handleInputType.bind(this);
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
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
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/confirm-forgot-password', {
            method: 'POST',
            body: JSON.stringify({ code: this.state.code, password: this.state.newPassword, username: this.state.email })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.message === 'Password has been changed successfully') {
                this.setState({
                    success: true,
                    alertIsShowed: true
                });
            }
            else {
                this.setState({
                    error: true,
                    alertIsShowedError: true
                });
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/forgot-password', {
            method: 'POST',
            body: JSON.stringify({ username: this.state.email })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.message === 'Please check your registered email ID for validation code') {
                this.setState({
                    emailSent: true
                });
            }
        })
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowed: false
        });
    }

    handleCloseAlertError() {
        this.setState({
            error: false,
            alertIsShowedError: false
        });
    }

    render() {
        return (
            <div id="forgotPassword">
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre mot de passe a bien été changé ! Vous pouvez maintenant vous connecter."/> }
                {this.state.error && <Alert onClick={this.handleCloseAlertError} className={this.state.alertIsShowedError ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="Une erreur est survenue. Vérifiez votre code et votre nouveau mot de passe..."/> }
                {
                    !this.state.emailSent ? 
                        <Container className="px-0 mt-6">
                            <H1 className="mb-5 pb-5" title="Mot de passe oublié"/>
                            <form onSubmit={this.handleSubmit} method="POST">
                                <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                                    <Input onChange={this.handleEmail} type="email" label="Votre email" for="email" required={true}/>
                                    <PmyBtn type="submit" isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)} btnIsMediumPmyFull textBtn="Recevoir un mail de réinitialisation" className="w-md-100"/>
                                </Col>
                            </form>
                        </Container>
                    :
                        <Container className="px-0 mt-6">
                            <H1 className="mb-5 pb-5" title="Mot de passe oublié"/>
                            <form onSubmit={this.handleSubmitConfirm} method="POST">
                                <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                                    <Input onChange={this.handleCode} type="text" value={this.state.code} label={'Le code envoyé par mail à ' + this.state.email} for="codeToken" name={this.for} id={this.for} maxlength={6} minlength={6} required={true}/>
                                    <Input onChange={this.handleNewPassword} type={this.state.pwdDefaultType} value={this.state.newPassword} label="Votre nouveau mot de passe" labelInfo="8 caractères minimum" minLength={8} for="newPassword" name={this.for} id={this.for} onClick={this.handleInputType} inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} required={true}/>
                                    <PmyBtn type="submit" isDisabled={this.state.code.length !== 6 || this.state.newPassword.length < 8} btnIsMediumPmyFull textBtn="Réinitialiser le mot de passe" className="w-md-100"/>
                                </Col>
                            </form>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <Link to="/connexion" class="w-max-content">
                                    <ArrowLight width="16" fill="#4285F4" style={{ transform: 'rotate(180deg)', marginRight: '1rem' }}/>
                                    Se connecter à Asking Franklin
                                </Link>
                            </div>
                        </Container>
                }
            </div>
        )
    }
}