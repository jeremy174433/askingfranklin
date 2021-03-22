import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/svg/switch/Logo';
import MenuLink from '../../components/elements/link/MenuLink';
import Rocket from '../../../assets/img/svg/navigation/Rocket';
import PmyBtn from '../button/PmyBtn';
import Pro from '../../../assets/img/svg/switch/Pro';
import ProfileAccess from '../elements/ProfileAccess';
import MobileMenu from './MobileMenu';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
            is_sub: 0
        }
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    componentDidMount() {
        var token = localStorage.getItem('af_token');
        var is_sub = localStorage.getItem('af_is_sub');
        if(token) {
            this.setState({
                isConnected: true,
                is_sub: is_sub
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

        const { t } = this.props;

        const navClass = ' px-4 px-xl-5 py-2 w-100 d-flex justify-content-center position-fixed ';

        return (
            <nav id="navbar" class={this.props.className ? this.props.className + navClass : navClass}>
                <Container className="px-0 d-flex flex-lg-row align-items-center justify-content-lg-center">
                    <Link to="/" class="mr-2">
                        <Logo icon="global"/>
                    </Link>
                    <div class="d-none d-md-block ml-auto">
                        <ul class="d-flex flex-row align-items-center position-relative">
                            <MenuLink href={t('url.blog')} textLink={t('link.blog')} containerStyle="mr-3"/>
                            <MenuLink redirectTo={t('url.faq')} textLink={t('link.faq')}/>
                            {localStorage.getItem('af_is_sub') == 0 && <MenuLink redirectTo={t('url.pricing')} textLink={t('link.pricing')} containerStyle="ml-3"/> }
                            {!this.state.isConnected && <MenuLink redirectTo={t('url.signIn')} textLink={t('link.signIn')} containerStyle="ml-3"/> }
                            {this.state.isConnected && localStorage.getItem('af_is_sub') != 0 && <MenuLink customMenuItem={<Pro icon="desktop"/>} containerStyle="position-absolute" style={{top: '-10px', right: '150px', zIndex: 1}}/> }
                            {this.state.isConnected && <MenuLink customMenuItem={<ProfileAccess onClickLogOut={this.handleLogOut}/>} containerStyle="ml-5"/> }
                            {!this.state.isConnected && <MenuLink customMenuItem={<PmyBtn redirectTo={t('url.pricing')} linkIsMediumPmyFull iconLinkBefore={<Rocket width="16"/>} textLink={t('link.ctaNotConnected')} className="rounded-0" containerStyle="ml-5 nav-btn-cta"/>}/> }
                        </ul>
                    </div>
                    <ProfileAccess onClickLogOut={this.handleLogOut} className="d-block d-md-none"/>
                    <MobileMenu isConnected={this.state.isConnected} onClickLogOut={this.handleLogOut}/>
                </Container>
            </nav>
        )
    }
}

export default withTranslation()(Navbar);