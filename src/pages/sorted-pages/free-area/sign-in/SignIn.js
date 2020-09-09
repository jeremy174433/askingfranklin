import React from 'react';
import H1 from '../../../components/elements/title/H1';
import { 
    Link, 
    Redirect 
} from 'react-router-dom';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import Input from '../../../components/form/Input';
import Checkbox from '../../../components/form/Checkbox';
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
        var token = localStorage.getItem('af_token');
        if(token) {
            this.setState({
                redirect:true
            });
        }
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
        this.setState({
            alertIsShowed: false,
            error: false
        })
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/auth', {
            method: 'POST',
            body: JSON.stringify({ username: this.state.email, password: this.state.password })
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
                this.setState({
                    redirect: true,
                    toPlan:res.is_sub[0] == null ? true : false
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
                <div id="signIn">
                    {this.state.error && 
                        <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="La combinaison « email / mot de passe » est incorrect"/>
                    }
                    <Container className="px-0 mt-6">
                        <H1 className="mb-5 pb-5" title="Connexion à votre compte Asking Franklin"/>
                        <p class="mb-3">La connexion est réservée aux membres pro. <Link to="/tarifs">Découvrir les avantages Asking Franklin Pro</Link></p>
                        <p class="mb-5 pb-5">Vous pouvez continuer à utiliser Asking Franklin en accédant à la <Link to="/">version gratuite</Link></p>
                        <form onSubmit={this.handleSubmit} method="POST">
                            <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                                <Input 
                                    onChange={this.handleEmail} 
                                    type="email" 
                                    label="Votre email" 
                                    for="email" 
                                    name={this.for} 
                                    id={this.for} 
                                    required={true} 
                                    infoMsg={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && 'Le format de l\'adresse email n\'est pas correct'}
                                />
                                <Input 
                                    onChange={this.handlePassword} 
                                    type="password" 
                                    label="Votre mot de passe" 
                                    for="password" 
                                    name={this.for} 
                                    id={this.for} 
                                    required={true} 
                                    infoMsg={this.state.password.length < 8 && 'Le mot de passe doit contenir au moins 8 caractères'}
                                />
                                <Checkbox 
                                    label="Se souvenir de moi" 
                                    for="rememberMe" 
                                    name={this.for} 
                                    id={this.for} 
                                    value="rememberMe" 
                                    className="mb-3 pb-3"
                                />
                                <PmyBtn 
                                    type="submit" 
                                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || this.state.password.length < 8} 
                                    btnIsMediumPmyFull 
                                    textBtn="Se connecter" 
                                    className="w-md-100"
                                />
                            </Col>
                        </form>
                        <div class="d-flex flex-column mt-3 pt-3">
                            <ArrowTextLink redirectTo="/mot-de-passe-oublie" textLink="Mot de passe oublié ?" className="mb-3"/>
                            <ArrowTextLink redirectTo="/inscription" textLink="Créer un compte et passer à la version Pro"/>
                        </div>
                    </Container>
                </div>
            )
        }
    }
}