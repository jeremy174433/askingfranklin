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
import Alert from '../../../components/elements/Alert';

export default class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            success: false,
            alertIsShowed: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowed: false
        });
    }

    render() {
        return (
            <div id="forgotPassword">
                {this.state.success && 
                    <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre demande a bien été prise en compte. Vous allez recevoir un email de réinitialisation si l'adresse saisie existe bien. Pensez à vérifier vos spams"/>
                }
                <Container className="px-0 mt-5 pt-5">
                    <H1 className="mb-5 pb-5" title="Mot de passe oublié"/>
                    <form onSubmit={this.handleSubmit} method="POST">
                        <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                            <Input onChange={this.handleEmail} type="email" label="Votre email" for="email" name={this.for} id={this.for} required={true}/>
                            <PmyBtn type="submit" btnIsMediumPmyFull textBtn="Réinitialiser le mot de passe" className="w-md-100"/>
                        </Col>
                    </form>
                    <div class="d-flex flex-column mt-3 pt-3">
                        <Link to="/connexion" class="w-max-content">
                            <ArrowLight width="16" fill="#4285F4" style={{ transform: 'rotate(180deg)', marginRight: '1rem' }}/>
                            Se connecter à Asking Franklin
                        </Link>
                    </div>
                </Container>
            </div>
        )
    }
}