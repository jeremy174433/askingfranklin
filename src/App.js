import React from 'react';
import CookieConsent from 'react-cookie-consent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './pages/components/partials/Navbar';
import Footer from './pages/components/partials/Footer';
import Home from './pages/sorted-pages/free-area/Home';
import AngryHome from './pages/sorted-pages/free-area/lab/AngryHome';
import AskingFranklin from './pages/sorted-pages/free-area/AskingFranklin';
import Pricing from './pages/sorted-pages/free-area/Pricing';
import SignIn from './pages/sorted-pages/free-area/sign-in/SignIn';
import SignUp from './pages/sorted-pages/free-area/sign-in/SignUp';
import ConfirmationSignup from './pages/sorted-pages/free-area/sign-in/SignupConfirmation';
import ForgotPassword from './pages/sorted-pages/free-area/sign-in/ForgotPassword';
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

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false
        }
        this.handleConnect = this.handleConnect.bind(this);
    }

    handleConnect(e, cb) {
        this.setState({
            isConnected: this.state.isConnected ? false : true
        });
    }

    render() {
        return (
            <div id="App">
                <Router>
                    <Navbar isConnected={this.state.isConnected}/>
                    <Switch>
                        <Route path='/connexion' component={(props) => <SignIn {...props} handleConnect={this.handleConnect}/>}/>
                        <Route exact path='/inscription/confirmation' component={ConfirmationSignup}/>
                        <Route path='/inscription' component={SignUp}/>
                        <Route path='/mot-de-passe-oublie' component={ForgotPassword}/>
                        <Route path='/recherche/:keyword' component={AskingFranklin}/>
                        <Route path="/limite-de-recherches" component={MaximumRequests}/>
                        <Route path="/faq" component={Faq}/>
                        <Route path="/contact" component={Contact}/>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/l/01' component={AngryHome}/>
                        <Route exact path='/tarifs' component={Pricing}/>
                        <Route exact path='/profil' component={Profile}/>
                        <Route exact path='/plans' component={ChoosePlan}/>
                        <Route exact path='/paiement' component={Payment}/>
                        <Route exact path='/paiement/confirmation' component={ConfirmationPayment}/>
                        <Route path="/mentions-legales" component={LegalNotices}/>
                        <Route path="/conditions-generales-d-utilisation" component={TermsOfServices}/>
                        <Route path="/conditions-generales-de-vente" component={TermsOfSales}/>
                        <Route path="*" component={Error404}/>
                    </Switch>
                    <Footer/>
                </Router>
                <BackToTop showAt={2500} speed={1000} easing="easeOutSine">
                    <ArrowLight width="22" fill="#FFF"/>
                </BackToTop>
                <CookieConsent location="bottom" acceptOnScroll={true} buttonText="Accepter" cookieName="user-has-accepted-cookies" expires={182}>
                    Ce site web utilise des cookies afin d'améliorer votre expérience de navigation. &nbsp;<a href="conditions-generales-d-utilisation">En savoir plus</a>
                </CookieConsent>
            </div>
        )
    }
}