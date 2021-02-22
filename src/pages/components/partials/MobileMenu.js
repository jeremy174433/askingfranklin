import React from 'react';
import { withTranslation } from 'react-i18next';
import MenuLink from '../../components/elements/link/MenuLink';

class MobileMenu extends React.Component {
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

        const { t } = this.props;
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
                    <ul class="d-flex flex-column align-items-center">
                        <MenuLink redirectTo="/" onClick={this.handleMobileMenuClicked} textLink={t('link.homepage')}/>
                        {localStorage.getItem('af_is_sub') <= 0 && <MenuLink redirectTo={t('url.pricing')}  onClick={this.handleMobileMenuClicked} textLink={t('link.pricing')}/> }
                        <MenuLink href={t('url.blog')} textLink={t('link.blog')}/>
                        <MenuLink redirectTo={t('url.faq')} onClick={this.handleMobileMenuClicked} textLink={t('link.faq')}/>
                        {!this.props.isConnected && <MenuLink redirectTo={t('url.signIn')} onClick={this.handleMobileMenuClicked} textLink={t('link.signIn')}/> }
                        {this.props.isConnected && <MenuLink redirectTo={t('url.profile')} onClick={this.handleMobileMenuClicked} textLink={t('link.account.settings')}/> }
                        {this.props.isConnected && <MenuLink redirectTo="/" onClick={this.props.onClickLogOut} textLink={t('link.account.logout')}/> }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withTranslation()(MobileMenu);