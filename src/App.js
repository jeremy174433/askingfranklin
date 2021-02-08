import React from 'react';
import CookieConsent from 'react-cookie-consent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import Banner from './pages/components/partials/Banner';
import Navbar from './pages/components/partials/Navbar';
import Footer from './pages/components/partials/Footer';
import Home from './pages/sorted-pages/free-area/Home';
import AskingFranklin from './pages/sorted-pages/free-area/AskingFranklin';
import Pricing from './pages/sorted-pages/free-area/Pricing';
import SignIn from './pages/sorted-pages/free-area/sign/SignIn';
import SignUp from './pages/sorted-pages/free-area/sign/SignUp';
import SignUpConfirmation from './pages/sorted-pages/free-area/sign/SignUpConfirmation';
import ForgotPassword from './pages/sorted-pages/free-area/sign/ForgotPassword';
import MaximumRequests from './pages/sorted-pages/free-area/MaximumRequests';
import Faq from './pages/sorted-pages/free-area/Faq';
import Contact from './pages/sorted-pages/free-area/Contact';
import LegalNotices from './pages/sorted-pages/free-area/law/LegalNotices';
import TermsOfServices from './pages/sorted-pages/free-area/law/TermsOfServices';
import TermsOfSales from './pages/sorted-pages/free-area/law/TermsOfSales';
import Error404 from './pages/sorted-pages/free-area/Error404';
import Profile from './pages/sorted-pages/deep-area/Profile';
import ChoosePlan from './pages/sorted-pages/deep-area/conversion-funnel/ChoosePlan';
import Payment from './pages/sorted-pages/deep-area/conversion-funnel/Payment';
import ConfirmationPayment from './pages/sorted-pages/deep-area/conversion-funnel/ConfirmationPayment';
import BackToTop from 'react-back-to-top-button';
import ArrowLight from './assets/img/svg/ArrowLight';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
            bannerIsShowed: false
        }
        this.handleLanguage = this.handleLanguage.bind(this);
        this.handleConnect = this.handleConnect.bind(this);
        this.handleHideBanner = this.handleHideBanner.bind(this);
    }

    componentDidMount() {
        var token = localStorage.getItem('af_token');
        var is_sub = localStorage.getItem('af_is_sub');
        this.setState({
            isConnected: (token && token.length > 0) ? true : false
        });
        if (token && token.length > 0 && is_sub == '1') {
            this.setState({
                bannerIsShowed: false
            });
        }
    }

    handleLanguage(e) {
        var lang = e.target.dataset.lang;
        i18n.changeLanguage(lang);
    }

    handleConnect() {
        var is_sub = localStorage.getItem('af_is_sub');
        this.setState({
            isConnected: this.state.isConnected ? false : true,
            bannerIsShowed: is_sub <= '0' && this.state.bannerIsShowed ? true : false || is_sub == '1' && false
        });
    }

    handleHideBanner() {
        this.setState({
            bannerIsShowed: false
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div id="App">
                {this.state.bannerIsShowed && <Banner onClick={this.handleHideBanner} bannerIsActive={this.state.bannerIsShowed}/> }
                <Router>
                    <Navbar isConnected={this.state.isConnected} className={this.state.bannerIsShowed && 'banner-showed'}/>
                    <div class="d-flex flex-row position-fixed bgc-primary color-light w-100 pl-5" style={{ marginTop: '66px', zIndex: 150 }}>
                        <p onClick={this.handleLanguage} data-lang="en" class="mr-4">English</p>
                        <p onClick={this.handleLanguage} data-lang="fr">Français</p>
                    </div>
                    <Switch>
                        <Route path='/connexion' render={(props) => <SignIn {...props} bannerIsActive={this.state.bannerIsShowed} handleConnect={this.handleConnect}/>}/>
                        <Route exact path='/inscription/confirmation' render={(props) => <SignUpConfirmation {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path='/inscription' render={(props) => <SignUp {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path='/mot-de-passe-oublie' render={(props) => <ForgotPassword {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path='/recherche/:keyword' render={(props) => <AskingFranklin {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="/limite-de-recherches" render={(props) => <MaximumRequests {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="/faq" render={(props) => <Faq {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="/contact" render={(props) => <Contact {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route exact path='/' render={(props) => <Home {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route exact path='/tarifs' render={(props) => <Pricing {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route exact path='/profil' render={(props) => <Profile {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route exact path='/plans' render={(props) => <ChoosePlan {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route exact path='/paiement' render={(props) => <Payment {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route exact path='/paiement/confirmation' render={(props) => <ConfirmationPayment {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="/mentions-legales" render={(props) => <LegalNotices {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="/conditions-generales-d-utilisation" render={(props) => <TermsOfServices {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="/conditions-generales-de-vente" render={(props) => <TermsOfSales {...props} bannerIsActive={this.state.bannerIsShowed}/>}/>
                        <Route path="*" render={(props) => <Error404 {...props} bannerIsActive={this.state.bannerIsShowed}/>} status={404}/>
                    </Switch>
                    <Footer onClickLanguage={this.handleLanguage}/>
                </Router>
                <BackToTop showAt={2500} speed={500} easing="easeInOutQuint">
                    <ArrowLight width="22" fill="#FFF"/>
                </BackToTop>
                <CookieConsent location="bottom" acceptOnScroll={true} buttonText={t('cookiesBar.btn')} cookieName="user-has-accepted-cookies" expires={182}>
                    {t('cookiesBar.text')} &nbsp;<a href="conditions-generales-d-utilisation" target="_blank" rel="noopener" title={t('titleElementBrowser.tcs')}>{t('cookiesBar.information')}</a>
                </CookieConsent>
            </div>
        )
    }
}

export default withTranslation()(App);