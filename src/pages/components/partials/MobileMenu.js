import React from 'react';
import { Link } from 'react-router-dom';
import MenuLink from '../../components/elements/link/MenuLink';

export default class MobileMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
        this.handleMobileMenu = this.handleMobileMenu.bind(this);
        this.handleMobileMenuClicked = this.handleMobileMenuClicked.bind(this);
    }

    handleMobileMenu() {
        this.setState({
            isOpen: this.state.isOpen ? false : true
        });
    }

    handleMobileMenuClicked() {
        this.setState({
            isOpen: false 
        });
    }

    render() {

        const classListMobileMenu = ' mobile-menu-wrapper d-block d-md-none ml-auto';

        return (
            <div className={this.state.isOpen ? 'mobile-menu-open' + classListMobileMenu : classListMobileMenu}>
                <div class="mobile-menu-background"></div>
                <div onClick={this.handleMobileMenu} id="mobileMenuNavigation" class="position-relative">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
                <div class="mobile-menu-items d-flex flex-column align-items-center justify-content-center px-5 py-5 w-100 h-100">
                    {
                        this.props.userConnected === true ?
                            <ul class="d-flex flex-column align-items-center">
                                <MenuLink redirectTo="/" onClick={this.handleMobileMenuClicked} textLink="Accueil"/>
                                {localStorage.getItem('af_is_sub') == 0 && <MenuLink redirectTo="/tarifs" onClick={this.handleMobileMenuClicked} textLink="Tarifs"/> }
                                <MenuLink redirectTo="/faq" onClick={this.handleMobileMenuClicked} textLink="FAQ"/>
                                <MenuLink redirectTo="/profil" onClick={this.handleMobileMenuClicked} textLink="Paramètres"/>
                                <MenuLink redirectTo="/" onClick={this.props.onClickLogOut} textLink="Déconnexion"/>
                            </ul>
                        : this.props.userConnected === false &&
                            <ul class="d-flex flex-column align-items-center">
                                <MenuLink redirectTo="/" onClick={this.handleMobileMenuClicked} textLink="Accueil"/>
                                <MenuLink redirectTo="/tarifs" onClick={this.handleMobileMenuClicked} textLink="Tarifs"/>
                                <MenuLink redirectTo="/faq" onClick={this.handleMobileMenuClicked} textLink="FAQ"/>
                                <MenuLink redirectTo="/connexion" onClick={this.handleMobileMenuClicked} textLink="Connexion"/>
                            </ul>
                    }
                </div>
            </div>
        )
    }
}