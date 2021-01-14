import React from 'react';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import Input from '../../../components/form/Input';
import PmyBtn from '../../../components/button/PmyBtn';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
import Alert from '../../../components/elements/Alert';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            error: false,
            alertIsShowed: false,
            redirect: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        var token = localStorage.getItem('af_token');
        if(token) {
            this.setState({
                redirect:true
            });
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Connexion à votre espace - Asking Franklin, votre outil SEO Français</title>
                <meta name="description" content="Connexion - Asking Franklin - Nous sommes ravis de vous revoir ! Connectez-vous à votre espace ici."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
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
                localStorage.setItem('af_is_sub', (res.is_sub == null || res.is_sub[0] == null) ? 0 : 1);
                this.setState({
                    redirect: true,
                    toPlan: (res.is_sub == null || res.is_sub[0] == null) ? true : false
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

        if(this.state.redirect) {
            return <Redirect to={this.state.toPlan ? '/plans' : '/' }/>
        } 
        else {
            return (
                <div id="signIn" class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                    {this.customHeadElement()}
                    {this.state.error && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="La combinaison « email / mot de passe » est incorrect"/> }
                    <Container className="px-0 mt-6 mx-auto">
                        <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                            <H1 className="mb-5" title="Se connecter à Asking Franklin"/>
                            <form onSubmit={this.handleSubmit} method="POST" id="signInForm">
                                <Input 
                                    onChange={this.handleEmail} 
                                    type="email" 
                                    label="Votre email" 
                                    for="email" 
                                    name={this.for} 
                                    id={this.for} 
                                    required={true} 
                                    infoMsg={this.state.email.length < 1 ? 'Ce champ est requis' : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && 'Le format de l\'adresse email n\'est pas correct'}
                                />
                                <Input 
                                    onChange={this.handlePassword} 
                                    type="password" 
                                    label="Votre mot de passe" 
                                    for="password" 
                                    name={this.for} 
                                    id={this.for} 
                                    required={true} 
                                    infoMsg={!this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && 'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre'}
                                />
                                <PmyBtn 
                                    type="submit" 
                                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || !this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/)} 
                                    btnIsMediumPmyFull 
                                    textBtn="Se connecter" 
                                    className="w-sm-100"
                                />
                            </form>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink redirectTo="/mot-de-passe-oublie" textLink="Mot de passe oublié ?" className="mb-3"/>
                                <ArrowTextLink redirectTo="/tarifs" textLink="Créer un compte et passer à la version Pro"/>
                            </div>
                        </Col>
                    </Container>
                </div>
            )
        }
    }
}