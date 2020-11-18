import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import H1 from '../../../components/elements/title/H1';
import Input from '../../../components/form/Input';
import PmyBtn from '../../../components/button/PmyBtn';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
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
            alertIsShowedCodeSent: false,
            alertIsShowed: false,
            error: false,
            alertIsShowedError: false,
            alertIsShowedLimit: false,
            emailSent: false,
            passwordIsChanged: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleCode = this.handleCode.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleSubmitConfirm = this.handleSubmitConfirm.bind(this);
        this.handleInputType = this.handleInputType.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Mot de passe oublié - Asking Franklin</title>
                <meta name="description" content="Mot de passe oublié ? Changez le mot de passe de votre espace ici !"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
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
            alertIsShowed: false,
            error: false,
            alertIsShowedError: false
        });
    }

    render() {
        return (
            <div id="forgotPassword" class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowedCodeSent && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowedCodeSent ? 'alert-msg-visible' : ''} alertId="successMessage" msg={['Un code de vérification vient d\'être envoyé à l\'email : ', <span class="fw-600">{this.state.email}</span>]}/> }
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={['Votre mot de passe a bien été changé. Vous pouvez maintenant ', <Link to='/connexion'>vous connecter</Link>]}/> }
                {this.state.error && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowedError && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowedError ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="Une erreur est survenue. Vérifiez votre code et votre nouveau mot de passe"/> }
                {this.state.error && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowedLimit && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowedLimit ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="Une erreur est survenue. La limite de requête a été atteinte, réessayez dans quelques minutes"/> }
                {!this.state.emailSent ? 
                    <Container className="px-0 mt-6">
                        <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                            <H1 className="mb-5" title="Mot de passe oublié"/>
                            <form onSubmit={this.handleSubmit} method="POST">
                                <Input 
                                    onChange={this.handleEmail} 
                                    type="email" 
                                    label="Votre email" 
                                    for="email" 
                                    required={true} 
                                    infoMsg={this.state.email.length < 1 ? 'Ce champ est requis' : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && 'Le format de l\'adresse email n\'est pas correct'}
                                />
                                <PmyBtn 
                                    type="submit" 
                                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/)} 
                                    btnIsMediumPmyFull 
                                    textBtn="Recevoir un email de réinitialisation" 
                                    className="w-sm-100"
                                />
                            </form>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink redirectTo="/connexion" textLink="Se connecter à Asking Franklin"/>
                            </div>
                        </Col>
                    </Container>
                :
                    <Container className="px-0 mt-6">
                        <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                            <H1 className="mb-5" title="Mot de passe oublié"/>
                            <form onSubmit={this.handleSubmitConfirm} method="POST">
                                <Input 
                                    onChange={this.handleCode} 
                                    disabled={this.state.passwordIsChanged === true} 
                                    type="text" 
                                    value={this.state.code} 
                                    label={'Renseignez le code envoyé par email à ' + this.state.email} 
                                    for="codeToken" 
                                    name={this.for} 
                                    id={this.for} 
                                    maxlength={6} 
                                    minlength={6} 
                                    required={true} 
                                    infoMsg={this.state.code.length !== 6 && 'Le code doit contenir 6 caractères'}
                                />
                                <Input 
                                    containerStyle="input-password-column"
                                    onChange={this.handleNewPassword} 
                                    disabled={this.state.passwordIsChanged === true} 
                                    type={this.state.pwdDefaultType} 
                                    value={this.state.newPassword} 
                                    label="Votre nouveau mot de passe" 
                                    labelInfo={['8 caractères minimum, ', <br class="d-block d-sm-none"/>, 'dont au moins 1 chiffre']}
                                    minLength={8} 
                                    for="newPassword" 
                                    name={this.for} 
                                    id={this.for} 
                                    onClick={this.handleInputType} 
                                    inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} 
                                    required={true} 
                                    infoMsg={!this.state.newPassword.match(/^(?=.*\d)(?=.*?[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) && 'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre'}
                                />
                                <PmyBtn 
                                    type="submit" 
                                    isDisabled={this.state.code.length !== 6 || !this.state.newPassword.match(/^(?=.*\d)(?=.*?[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/) || this.state.passwordIsChanged === true} 
                                    btnIsMediumPmyFull 
                                    textBtn="Réinitialiser le mot de passe" 
                                    className="w-sm-100"
                                />
                            </form>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink redirectTo="/connexion" textLink="Se connecter à Asking Franklin"/>
                            </div>
                        </Col>
                    </Container>
                }
            </div>
        )
    }
}
