import React from 'react';
import H1 from '../../../components/elements/title/H1';
import { Link } from 'react-router-dom';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import Input from '../../../components/form/Input';
import Checkbox from '../../../components/form/Checkbox';
import PmyBtn from '../../../components/button/PmyBtn';
import ArrowLight from '../../../../assets/img/svg/ArrowLight';
import Alert from '../../../components/elements/Alert';

export default class SignIn extends React.Component {
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
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
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
        console.log('submit');
    }

    handleCloseAlert() {
        this.setState({
            error: false,
            alertIsShowed: false
        });
    }

    render() {
        return (
            <div id="signIn">
                {this.state.error && 
                    <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="La combinaison « email / mot de passe » est incorrect"/>
                }
                <Container className="px-0 mt-5 pt-5">
                    <H1 className="mb-5 pb-5" title="Connexion à votre compte Asking Franklin"/>
                    <p class="mb-3">La connexion est réservée aux membres pro. <Link to="/tarifs">Découvrir les avantages Asking Franklin Pro</Link></p>
                    <p class="mb-5 pb-5">Vous pouvez continuer à utiliser Asking Franklin en accédant à la <Link to="/">version gratuite</Link></p>
                    <form onSubmit={this.handleSubmit} method="POST">
                        <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                            <Input onChange={this.handleEmail} type="email" label="Votre email" for="email" name={this.for} id={this.for} required={true}/>
                            <Input onChange={this.handlePassword} type="password" label="Votre mot de passe" for="password" name={this.for} id={this.for} required={true}/>
                            <Checkbox label="Se souvenir de moi" for="rememberMe" name={this.for} id={this.for} value="rememberMe" className="mb-3 pb-3"/>
                            <PmyBtn type="submit" btnIsMediumPmyFull textBtn="Se connecter" className="w-md-100"/>
                        </Col>
                    </form>
                    <div class="d-flex flex-column mt-3 pt-3">
                        <Link to="/mot-de-passe-oublie" class="mb-3 w-max-content">
                            <ArrowLight width="16" fill="#4285F4" style={{ transform: 'rotate(180deg)', marginRight: '1rem' }}/>
                            Mot de passe oublié ?
                        </Link>
                        <Link to="/inscription" class="w-max-content">
                            <ArrowLight width="16" fill="#4285F4" style={{ transform: 'rotate(180deg)', marginRight: '1rem' }}/>
                            Créer un compte et passer à la version Pro
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
}