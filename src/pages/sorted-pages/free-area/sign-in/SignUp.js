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
import ArrowLight from '../../../../assets/img/svg/ArrowLight';
import Alert from '../../../components/elements/Alert';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            privacy: 'privacyChecked',
            pwdDefaultType: 'password',
            success: false,
            alertIsShowed: false,
            redirect: false
        }
        this.handleInputType = this.handleInputType.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
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

    handlePrivacy(e) {
        this.setState({
            privacy: e.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
        if(this.state.email && this.state.password && this.state.privacy) {
            this.setState({
                redirect: true
            });
        }
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowed: false
        });
    }

    render() {

        if (this.state.redirect) { 
            return <Redirect to='/plans'/>
        }

        return (
            <div id="signUp">
                {this.state.success && 
                    <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={['Votre compte a bien été créé. Vous pouvez maintenant ', <Link to="/connexion">vous connecter</Link>]}/>
                }
                <Container className="px-0 mt-5 pt-5">
                    <H1 className="mb-5 pb-5" title="Créer un compte Asking Franklin"/>
                    <p class="mb-5 pb-5">Vous pouvez aussi continuer à utiliser Asking Franklin en accédant à la <Link to="/">version gratuite</Link> sans avoir besoin de vous inscrire</p>
                    <form onSubmit={this.handleSubmit} method="POST">
                        <Col sm="12" lg="8" xl="6" className="px-0 d-flex flex-column">
                            <Input onChange={this.handleEmail} type="email" label="Votre email" for="email" name={this.for} id={this.for} required={true}/>
                            <Input onChange={this.handlePassword} type={this.state.pwdDefaultType} label="Votre mot de passe" labelInfo="8 caractères minimum" minLength={8} for="password" name={this.for} id={this.for} onClick={this.handleInputType} inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} required={true}/>
                            <Checkbox 
                                label={['J\'ai lu et j\'accepte les ', <Link to="/conditions-generales-d-utilisation" class="fz-16">CGU</Link>,' et ', <Link to="/conditions-generales-de-vente" class="fz-16">CGV</Link>]} 
                                for="checkPrivacy" name={this.for} id={this.for} value={this.state.privacy} required={true} className="mb-3 pb-3"
                            />
                            <PmyBtn type="submit" btnIsMediumPmyFull textBtn="Créer mon compte" className="w-md-100"/>
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