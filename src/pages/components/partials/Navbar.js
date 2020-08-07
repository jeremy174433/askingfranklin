import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/svg/Logo';
import People from '../../../assets/img/svg/People';
import Rocket from '../../../assets/img/svg/Rocket';
import LogOut from '../../../assets/img/svg/LogOut';
import PmyBtn from '../button/PmyBtn';
import MobileMenu from './MobileMenu';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false
        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleLogOut(event) {
        event.preventDefault();
        localStorage.removeItem('token_name');
        window.location.replace('/');
        this.setState({
            isConnected: false
        });
    }

    render() {
        return (
            <nav id="navbar" class="px-4 px-xl-5 py-2 w-100 d-flex justify-content-center position-fixed overflow-hidden">
                <Container className="px-0 d-flex flex-lg-row align-items-center justify-content-lg-center">
                    <Link to="/" class="mr-4 
                    mr-md-5">
                        <Logo width="171"/>
                    </Link>
                    <div class="d-none d-md-block ml-auto">
                            {
                                this.state.isConnected === true ?
                                    <ul class="d-flex flex-row align-items-center">
                                        <li>
                                            <Link onClick={this.handleLogOut} class="nav-link d-flex flex-row py-2 px-3 rounded">
                                                <LogOut width="16" fill="#2B2B2B"/>
                                                <span class="ml-3">Déconnexion</span>
                                            </Link>
                                        </li>
                                    </ul>
                                : this.state.isConnected === false &&
                                    <ul class="d-flex flex-row align-items-center">
                                        <li>
                                            <Link to="/connexion" class="nav-link d-flex flex-row py-2 px-3 rounded">
                                                <People width="16" fill="#2B2B2B"/>
                                                <span class="ml-3">Connexion</span>
                                            </Link>
                                        </li>
                                        <li class="ml-5 nav-btn-cta">
                                            <PmyBtn redirectTo="/tarifs" linkIsMediumPmyFull iconLinkBefore={<Rocket width="16"/>} textLink="Devenir Pro" className="rounded-0"/>
                                        </li>
                                    </ul>
                            }
                    </div>
                    <MobileMenu userConnected={this.state.isConnected} onClickLogOut={this.handleLogOut}/>
                </Container>
            </nav>
        )
    }
}