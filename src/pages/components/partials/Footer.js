import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuLink from '../../components/elements/link/MenuLink';
import Logo from '../../../assets/img/svg/switch/Logo';
import SocialMedia from '../../../assets/img/svg/switch/SocialMedia';
import Input from '../form/Input';
import PmyBtn from '../button/PmyBtn';
import Checkbox from '../form/Checkbox';
import Tick from '../../../assets/img/svg/Tick';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_sub: 0,
            emailNewsletter: '',
            checkCgu: '',
            subscribeSuccess: false,
            subscribeError: false
        }
        this.handleEmailNewsletter = this.handleEmailNewsletter.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmitNewsletter = this.handleSubmitNewsletter.bind(this);
    }

    componentDidMount() {
        var is_sub = localStorage.getItem('af_is_sub');
        this.setState({
            is_sub: is_sub
        });
    }

    handleEmailNewsletter(e) {
        this.setState({
            emailNewsletter: e.target.value
        });
    }

    handlePrivacy() {
        this.setState({ checkCgu: this.state.checkCgu === '' ? 'newsletterChecked' : '' });
    }

    handleSubmitNewsletter(event) {
        event.preventDefault();
        this.setState({
            subscribeError: false,
            subscribeSuccess: false
        });
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/register-newsletter', {
            method: 'POST',
            body: JSON.stringify({ 
                email: this.state.emailNewsletter, 
                checkCgu : this.state.checkCgu
            })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.error) {
                console.log(res.error);
            } 
            else {
                if(res.message === 'Contact already exist') {
                    this.setState({ subscribeError: true });
                }
                else {
                    this.setState({ subscribeSuccess: true });
                }
            }
        });
    }

    render() {
        return (
            <footer id="footer" class="px-4 px-xl-5 py-5">
                <Container className="px-0 pt-5">
                    <Row className="mx-0 pb-5 d-flex flex-column flex-lg-row">
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start pl-lg-0 mb-5 mb-lg-0 pb-5 pb-lg-0">
                            <Link to="/" class="mx-auto mx-lg-0 mb-4">
                                <Logo icon="white" width="200"/>
                            </Link>
                            <p onClick={this.props.onClickLanguage} data-lang="en" class="mb-3">English</p>
                            <p onClick={this.props.onClickLanguage} data-lang="fr">Français</p>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">Liens utiles</p>
                            <ul class="d-flex flex-column">
                                <MenuLink redirectTo="/" textLink="Accueil" linkLocation="footer-link"/>
                                {localStorage.getItem('af_is_sub') <= 0 && <MenuLink redirectTo="/tarifs" textLink="Tarifs" linkLocation="footer-link"/> }
                                <MenuLink href="https://blog.askingfranklin.com" textLink="Blog" linkLocation="footer-link"/>
                                <MenuLink redirectTo="/faq" textLink="FAQ" linkLocation="footer-link"/>
                                <MenuLink redirectTo="/contact" textLink="Contact" linkLocation="footer-link"/>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">Informations</p>
                            <ul class="d-flex flex-column">
                                <MenuLink redirectTo="/mentions-legales" textLink="Mentions légales"rel="nofollow" linkLocation="footer-link"/>
                                <MenuLink redirectTo="/conditions-generales-d-utilisation" textLink="CGU" rel="nofollow" linkLocation="footer-link"/>
                                <MenuLink redirectTo="/conditions-generales-de-vente" textLink="CGV" rel="nofollow" linkLocation="footer-link"/>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start">
                            <p class="footer-title">Nos réseaux</p>
                            <ul class="social-media-wrapper d-flex flex-row">
                                <MenuLink linkHasIcon={<SocialMedia icon="facebook" height="18" fill="#FFF"/>} href="https://www.facebook.com/askingfranklin/" target="_blank" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : Facebook" className="icon-sm"/>
                                <MenuLink linkHasIcon={<SocialMedia icon="twitter" width="18" fill="#FFF"/>} href="https://twitter.com/AskingFranklin" target="_blank" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : Twitter" className="icon-sm"/>
                                <MenuLink linkHasIcon={<SocialMedia icon="linkedin" width="18" fill="#FFF"/>} href="https://www.linkedin.com/company/asking-franklin/" target="_blank" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : LinkedIn" className="icon-sm"/>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="8" lg="6" className="px-0 py-5 mx-auto">
                            <p class="fz-24">Suivez nos actualités 🚀</p>
                            <p class="py-2">Et recevez des astuces et conseils pour décoller en SEO, Brand content, Content marketing...</p>
                            <p class="fz-14">(pas plus de 1 fois /mois c'est promis !)</p>
                            <form onSubmit={this.handleSubmitNewsletter} method="POST" class="form-newsletter pt-3">
                                <div class="d-flex flex-column flex-sm-row mb-3 mb-sm-0">
                                    <Input 
                                        onChange={this.handleEmailNewsletter} 
                                        type="email" 
                                        hideLabel={true}
                                        placeholder="Votre adresse email..."
                                        containerStyle="mb-3 mr-0 mr-sm-4 w-100"
                                        for="emailNewsletter" 
                                        name={this.for} 
                                        id={this.for} 
                                        required={true} 
                                        disabled={this.state.subscribeSuccess}
                                        infoMsg={this.state.emailNewsletter.length < 1 ? 'Ce champ est requis' : !this.state.emailNewsletter.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && 'Le format de l\'adresse email n\'est pas correct' || this.state.subscribeSuccess && ''}
                                    />
                                    <PmyBtn type="submit" isDisabled={!this.state.emailNewsletter.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || this.state.checkCgu === '' || this.state.subscribeSuccess} btnIsMediumPmyFull textBtn="S'abonner" title={this.state.emailNewsletter.length < 1 && 'Ce champ est requis' || !this.state.emailNewsletter.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && 'Le format de l\'adresse email n\'est pas correct' || this.state.checkCgu === '' && 'Il est nécessaire d\'accepter les CGU'} className="w-sm-100 h-100" style={{ height: '48px' }}/>
                                </div>
                                <Checkbox 
                                    label={['J\'ai lu et j\'accepte les ', <Link to="/conditions-generales-d-utilisation" target="_blank" rel="noopener" title="Ouvrir dans un nouvel onglet : CGU Asking Franklin" class="fz-16">CGU</Link>, <em class="fz-14 ml-1">(requis)</em>]} 
                                    onChange={this.handlePrivacy} 
                                    for="checkNewsletter" 
                                    name={this.for} 
                                    id={this.for} 
                                    value={this.state.checkCgu} 
                                    required={true}
                                    className="color-light"
                                />
                            </form>
                            {
                                this.state.subscribeSuccess === true ? 
                                    <div class="d-flex flex-row align-items-center mt-2">
                                        <Tick width="16" fill="#00C851"/>
                                        <p class="color-success fz-14 ml-2">Votre abonnement a bien été enregistré</p>
                                    </div>
                                : this.state.subscribeError === true &&
                                    <p class="color-danger fz-14 mt-2">L'adresse email saisie semble être déjà abonnée à la newsletter</p>
                            }
                        </Col>
                    </Row>
                    <div class="d-flex justify-content-center pb-5 pb-sm-0 pt-5">
                        <p class="fz-14">Asking Franklin {(new Date().getFullYear())}, par <a href="https://sortvoices.fr" target="_blank" title="Ouvrir dans un nouvel onglet : www.sortvoices.fr">Sortvoices</a>. Tous droits réservés.</p>
                    </div>
                </Container>
            </footer>
        )
    }
}