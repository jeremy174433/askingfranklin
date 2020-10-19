import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import { 
    Redirect, 
    Link 
} from 'react-router-dom';
import H1 from '../../../components/elements/title/H1';
import Input from '../../../components/form/Input';
import Checkbox from '../../../components/form/Checkbox';
import PmyBtn from '../../../components/button/PmyBtn';
import EyeShowHide from '../../../../assets/img/svg/switch/EyeShowHide';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
import Alert from '../../../components/elements/Alert';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            privacy: '',
            newsletter: '',
            checkboxChecked: false,
            pwdDefaultType: 'password',
            success: false,
            alertIsShowed: false,
            emailIsAlreadyTaken: false,
            redirect: false,
        }
        this.handleInputType = this.handleInputType.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleNewsletter = this.handleNewsletter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        var token = localStorage.getItem('af_token');
        if(token) {
            this.props.history.push('/plans');
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Créer un compte - Asking Franklin</title>
                <meta name="description" content="Créer un compte - Passez à la version Pro d’Asking Franklin en créant votre compte ici !"/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    handleInputType() {
        this.setState({ pwdDefaultType: this.state.pwdDefaultType === 'password' ? 'text' : 'password' });
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
        this.setState({ privacy: this.state.privacy === '' ? 'privacyChecked' : '' });
    }

    handleNewsletter() {
        this.setState({ newsletter: this.state.newsletter === '' ? 'newsletterChecked' : '' });
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
                    privacy: this.state.privacy,
                    newsletter: this.state.newsletter,
                })
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res)
                if(res.error) {
                    console.log(res.error);
                } 
                else {
                    if(res.message === 'This username already exist') {
                        this.setState({
                            alertIsShowed: true,
                            emailIsAlreadyTaken: true
                        });
                    }
                    if (res.message === 'Password should have Caps,                          Special chars, Numbers') {
                        this.setState({
                            alertIsShowed: true
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
        
        if(this.state.redirect) { 
            return <Redirect to={this.props.location.search !== '?ctx=buy' ? '/connexion' : '/connexion?ctx=buy'}/>
        }

        return (
            <div id="signUp" class="layout-style">
                {this.customHeadElement()}
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre compte a bien été créé. Vous allez recevoir un email de confirmation, merci de le valider"/> }
                {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="L'email choisi n'est pas disponible, veuillez en choisir un différent"/> }
                <Container className="px-0 mt-6">
                    <StepperFunnel activeStep={1} firstStep="Choix de l'offre" secondStep="Inscription" thirdStep="Paiement et passage en Pro"/>
                </Container>
                <Container className="px-0">
                    <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                        <H1 className="mb-5" title="Créer un compte Asking Franklin"/>
                        <form onSubmit={this.handleSubmit} method="POST" id="signUpForm">
                            <Input 
                                onChange={this.handleEmail} 
                                value={this.state.email}
                                type="email" 
                                label="Votre email" 
                                for="email" 
                                name={this.for} 
                                id={this.for}
                                required={true}
                                infoMsg={this.state.email.length < 1 ? 'Ce champ est requis' : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && 'Le format de l\'adresse email n\'est pas correct'}
                            />
                            <Input 
                                containerStyle="input-password-column"
                                onChange={this.handlePassword} 
                                value={this.state.password}
                                type={this.state.pwdDefaultType} 
                                label="Votre mot de passe" 
                                labelInfo={['8 caractères minimum, ', <br class="d-block d-sm-none"/>, 'dont au moins 1 chiffre']}
                                minLength={8} 
                                for="password" 
                                name={this.for} 
                                id={this.for} 
                                onClick={this.handleInputType}
                                inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} 
                                required={true}
                                infoMsg={!this.state.password.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/) && 'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre'}
                            />
                            <Checkbox 
                                label={['J\'ai lu et j\'accepte les ', <Link to="/conditions-generales-d-utilisation" target="_blank" rel="noopener" class="fz-16">CGU</Link>, <em class="fz-14 ml-1">(requis)</em>]} 
                                onChange={this.handlePrivacy} 
                                for="checkPrivacy" 
                                name={this.for} 
                                id={this.for} 
                                value={this.state.privacy} 
                                required={true}
                                className="pb-3"
                            />
                            <Checkbox 
                                label={['Je m\'inscris à la newsletter pour recevoir des astuces et conseils pour décoller en SEO, Brand content, Content marketing... ', <em class="fz-14">(pas plus de 1 fois /mois c'est promis !)</em>]} 
                                onChange={this.handleNewsletter} 
                                for="checkNewsletter" 
                                name={this.for} 
                                id={this.for} 
                                value={this.state.newsletter} 
                                className="mb-3 pb-3"
                            />
                            <PmyBtn 
                                type="submit" 
                                title={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || !this.state.password.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/) || this.state.privacy === '' ? 'Il est nécessaire de renseigner tous les champs et d\'accepter les CGU pour s\'inscrire' : 'Créer mon compte'}
                                isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || !this.state.password.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/) || this.state.privacy === ''} 
                                btnIsMediumPmyFull 
                                textBtn="Créer mon compte" 
                                className="w-sm-100"
                            />
                        </form>
                        <div class="d-flex flex-column mt-3 pt-3">
                            <ArrowTextLink redirectTo="/connexion" textLink="J'ai déjà un compte Asking Franklin"/>
                        </div>
                    </Col>
                </Container>
            </div>
        )
    }
}