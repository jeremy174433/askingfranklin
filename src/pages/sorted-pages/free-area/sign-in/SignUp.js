import React from 'react';
import H1 from '../../../components/elements/title/H1';
import { 
    Redirect, 
    Link 
} from 'react-router-dom';
import { 
    Container,
    Col 
} from 'react-bootstrap';
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

    handleSubmit(event) {
        event.preventDefault();
        this.handleCloseAlert();
        if(this.state.email && this.state.password && this.state.privacy) {
            fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/signup', {
                method: 'POST',
                body: JSON.stringify({ email:this.state.email, password:this.state.password })
            })
            .then(res=>{
                return res.json();
            })
            .then(res => {
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
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre compte a bien été créé. Vous allez recevoir un email de confirmation, merci de le valider"/> }
                {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="L'email choisi est déjà utilisé par un autre compte"/> }
                <Container className="px-0 mt-6">
                    <H1 className="mb-5" title="Créer un compte Asking Franklin"/>
                    <p class="mb-5">
                        <span class="d-block mb-3">En utilisant la version gratuite vous êtes limités à 3 recherches maximum par jour</span>
                        <ArrowTextLink redirectTo="/tarifs" textLink="Passez dès maintenant aux recherches illimitées avec Asking Franklin Pro"/>
                    </p>
                    <form onSubmit={this.handleSubmit} method="POST" id="signUpForm">
                        <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                            <Input 
                                onChange={this.handleEmail} 
                                value={this.state.email}
                                type="email" 
                                label="Votre email" 
                                for="email" 
                                name={this.for} 
                                id={this.for}
                                required={true}
                                infoMsg={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && 'Le format de l\'adresse email n\'est pas correct'}
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
                                label={['J\'ai lu et j\'accepte les ', <Link to="/conditions-generales-d-utilisation" target="_blank" rel="noopener" class="fz-16">CGU</Link>]} 
                                onChange={this.handlePrivacy} 
                                for="checkPrivacy" 
                                name={this.for} 
                                id={this.for} 
                                value={this.state.privacy} 
                                required={true}
                                className="mb-3 pb-3"
                            />
                            <PmyBtn 
                                type="submit" 
                                title={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || !this.state.password.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/) || this.state.privacy === '' ? 'Il est nécessaire de renseigner tous les champs et d\'accepter les CGU pour s\'inscrire' : 'Créer mon compte'}
                                isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || !this.state.password.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/) || this.state.privacy === ''} 
                                btnIsMediumPmyFull 
                                textBtn="Créer mon compte" 
                                className="w-md-100"
                            />
                        </Col>
                    </form>
                    <div class="d-flex flex-column mt-3 pt-3">
                        <ArrowTextLink redirectTo="/connexion" textLink="J'ai déjà un compte Asking Franklin"/>
                    </div>
                </Container>
            </div>
        )
    }
}