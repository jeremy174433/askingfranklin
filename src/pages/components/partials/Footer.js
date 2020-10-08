import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                                <li>
                                    <Link to="/" class="footer-link">Accueil</Link>
                                </li>
                                {localStorage.getItem('af_is_sub') == 0 &&
                                    <li>
                                        <Link to="/tarifs" class="footer-link">Tarifs</Link>
                                    </li>
                                }
                                <li>
                                    <Link to="/faq" class="footer-link">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/contact" class="footer-link">Contact</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">La société</p>
                            <ul class="d-flex flex-column">
                                <li>
                                    <Link to="/mentions-legales" rel="nofollow" class="footer-link">Mentions légales</Link>
                                </li>
                                <li>
                                    <Link to="/conditions-generales-d-utilisation"  rel="nofollow" class="footer-link">CGU</Link>
                                </li>
                                <li>
                                    <Link to="/conditions-generales-de-vente" rel="nofollow" class="footer-link">CGV</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start">
                            <p class="footer-title">Nos réseaux</p>
                            <ul class="social-media-wrapper d-flex flex-row">
                                <li>
                                    <a href="https://www.facebook.com/askingfranklin/" target="_blank" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : Facebook">
                                        <SocialMedia icon="facebook" height="18" fill="#FFF"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/AskingFranklin" target="_blank" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : Twitter">
                                        <SocialMedia icon="twitter" width="18" fill="#FFF"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/asking-franklin/" target="_blank" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : LinkedIn">
                                        <SocialMedia icon="linkedin" width="18" fill="#FFF"/>
                                    </a>
                                </li>
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