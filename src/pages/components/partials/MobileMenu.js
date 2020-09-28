import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../../../assets/img/svg/navigation/Home';
import People from '../../../assets/img/svg/navigation/People';
import Rocket from '../../../assets/img/svg/navigation/Rocket';
import Settings from '../../../assets/img/svg/navigation/Settings';
import LogOut from '../../../assets/img/svg/navigation/LogOut';

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
                                {localStorage.getItem('af_is_sub') == 0 &&
                                    <li>
                                        <Link to="/tarifs" onClick={this.handleMobileMenuClicked} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                            <Rocket width="16" fill="#FFF"/>
                                            <span class="ml-3">Devenir Pro</span>
                                        </Link>
                                    </li>
                                }
                                <li>
                                    <Link to="/profil" onClick={this.handleMobileMenuClicked} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                        <Settings width="16" fill="#FFF"/>
                                        <span class="ml-3">Paramètres</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/" onClick={this.props.onClickLogOut} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                        <LogOut width="16" fill="#FFF"/>
                                        <span class="ml-3">Déconnexion</span>
                                    </Link>
                                </li>
                            </ul>
                        : this.props.userConnected === false &&
                            <ul class="d-flex flex-column align-items-center">
                                <li>
                                    <Link to="/" onClick={this.handleMobileMenuClicked} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                        <Home width="16" fill="#FFF"/>
                                        <span class="ml-3">Accueil</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/connexion" onClick={this.handleMobileMenuClicked} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                        <People width="16" fill="#FFF"/>
                                        <span class="ml-3">Connexion</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/tarifs" onClick={this.handleMobileMenuClicked} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                        <Rocket width="16" fill="#FFF"/>
                                        <span class="ml-3">Devenir Pro</span>
                                    </Link>
                                </li>
                            </ul>
                    }
                </div>
            </div>
        )
    }
}