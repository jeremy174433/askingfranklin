import React from 'react';
import { Container } from 'react-bootstrap';
import SocialMedia from '../../../assets/img/svg/switch/SocialMedia';

export default class Footer extends React.Component {

    render() {
        return (
            <footer id="footer" class="px-4 px-xl-5 py-5">
                <Container className="px-0">
                    <div class="pb-5">
                        <ul class="d-flex flex-column flex-md-row align-items-center">
                            <li>
                                <a href="/" class="footer-link d-block py-2 px-3 mr-0 mr-md-3 mb-3 mb-md-0 rounded">Accueil</a>
                            </li>
                            <li>
                                <a href="/tarifs" class="footer-link d-block py-2 px-3 mr-0 mr-md-3 mb-3 mb-md-0 rounded">Devenir Pro</a>
                            </li>
                            <li>
                                <a href="/mentions-legales" class="footer-link d-block py-2 px-3 mr-0 mr-md-3 mb-3 mb-md-0 rounded">Mentions légales</a>
                            </li>
                            <li>
                                <a href="/conditions-generales-d-utilisation" class="footer-link d-block py-2 px-3 mr-0 mr-md-3 mb-3 mb-md-0 rounded">CGU</a>
                            </li>
                            <li>
                                <a href="/conditions-generales-de-vente" class="footer-link d-block py-2 px-3 rounded">CGV</a>
                            </li>
                        </ul>
                    </div>
                    <div class="d-flex flex-column flex-md-row justify-content-between pt-5">
                        <p class="text-center order-1 order-md-0">Asking Franklin, par <a href="https://sortvoices.fr" target="_blank" rel="noopener" title="Ouvrir dans un nouvel onglet : sortvoices.fr">Sortvoices</a>. tous droits réservés.</p>
                        <ul class="social-media-wrapper d-flex flex-row justify-content-center order-0 order-md-1 mb-5 mb-md-0">
                            <li>
                                <a href="https://www.facebook.com/sortvoices" target="_blank" class="d-flex align-items-center justify-content-center mr-4 rounded" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : Facebook">
                                    <SocialMedia icon="facebook" height="18" fill="#FFF"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/sortvoices" target="_blank" class="d-flex align-items-center justify-content-center mr-4 rounded" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : Twitter">
                                    <SocialMedia icon="twitter" width="18" fill="#FFF"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/sortvoices/" target="_blank" class="d-flex align-items-center justify-content-center rounded" rel="nofollow noopener" title="Ouvrir dans un nouvel onglet : LinkedIn">
                                    <SocialMedia icon="linkedin" width="18" fill="#FFF"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </footer>
        )
    }
}