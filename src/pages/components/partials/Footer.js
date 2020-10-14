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

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_sub: 0
        }
    }

    componentDidMount() {
        var is_sub = localStorage.getItem('af_is_sub');
        this.setState({
            is_sub: is_sub
        });
    }

    render() {
        return (
            <footer id="footer" class="px-4 px-xl-5 py-5">
                <Container className="px-0 pt-5">
                    <Row className="mx-0 pb-5 d-flex flex-column flex-lg-row">
                        <Col lg="3" className="d-flex align-items-center align-items-lg-start pl-lg-0 mb-5 mb-lg-0 pb-5 pb-lg-0">
                            <Link to="/" class="mx-auto mx-lg-0">
                                <Logo icon="white" width="200"/>
                            </Link>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">Liens utiles</p>
                            <ul class="d-flex flex-column">
                                <MenuLink redirectTo="/" textLink="Accueil" linkLocation="footer-link"/>
                                {(localStorage.getItem('af_is_sub') == null || localStorage.getItem('af_is_sub') == 0) && <MenuLink redirectTo="/tarifs" textLink="Tarifs" linkLocation="footer-link"/> }
                                <MenuLink redirectTo="/faq" textLink="FAQ" linkLocation="footer-link"/>
                                <MenuLink redirectTo="/contact" textLink="Contact" linkLocation="footer-link"/>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">Informations</p>
                            <ul class="d-flex flex-column">
                                <MenuLink redirectTo="/mentions-legales" textLink="Mentions légales"rel="nofollow"  linkLocation="footer-link"/>
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
                    <div class="d-flex justify-content-center pb-5 pb-sm-0 pt-5">
                        <p class="fz-14">Asking Franklin {(new Date().getFullYear())}, par <a href="https://sortvoices.fr" target="_blank" title="Ouvrir dans un nouvel onglet : sortvoices.fr">Sortvoices</a>. Tous droits réservés.</p>
                    </div>
                </Container>
            </footer>
        )
    }
}