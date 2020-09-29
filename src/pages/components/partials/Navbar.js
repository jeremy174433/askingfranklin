import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/svg/Logo';
import People from '../../../assets/img/svg/navigation/People';
import Rocket from '../../../assets/img/svg/navigation/Rocket';
import PmyBtn from '../button/PmyBtn';
import ProfileAccess from '../elements/ProfileAccess';
import MobileMenu from './MobileMenu';

export default class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
            is_sub:0
        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    componentDidMount(){
        var token = localStorage.getItem('af_token');
        var is_sub = localStorage.getItem('af_is_sub')
        if(token) {
            this.setState({
                isConnected:true,
                is_sub:is_sub
            });
        }
        
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isConnected: nextProps.isConnected
        });
    }

    handleLogOut(event) {
        event.preventDefault();
        localStorage.removeItem('af_token');
        localStorage.removeItem('af_refresh_token');
        localStorage.removeItem('af_username');
        localStorage.removeItem('af_is_sub');
        localStorage.removeItem('product');
        window.location.replace('/');
        this.setState({
            isConnected: false
        });
    }

    render() {
        return (
            <nav id="navbar" class="px-4 px-xl-5 py-2 w-100 d-flex justify-content-center position-fixed">
                <Container className="px-0 d-flex flex-lg-row align-items-center justify-content-lg-center">
                    <Link to="/" class="mr-4 mr-md-5">
                        <Logo width="171"/>
                    </Link>
                    <div class="d-none d-md-block ml-auto">
                            {
                                this.state.isConnected === true ?
                                    <ul class="d-flex flex-row align-items-center">
                                        {localStorage.getItem('af_is_sub') == 0 &&
                                            <li>
                                                <Link to="/tarifs" class="nav-link d-flex flex-row py-2 px-3 rounded">
                                                    <Rocket width="16" fill="#2B2B2B"/>
                                                    <span class="ml-3">Devenir Pro</span>
                                                </Link>
                                            </li>
                                        }
                                        <li class="ml-5">
                                            <ProfileAccess onClickLogOut={this.handleLogOut}/>
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