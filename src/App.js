import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Navbar from './pages/components/partials/Navbar';
import Footer from './pages/components/partials/Footer';
import Home from './pages/sorted-pages/free-area/Home';
import AskingFranklin from './pages/sorted-pages/free-area/AskingFranklin';
import Pricing from './pages/sorted-pages/free-area/Pricing';
import Error404 from './pages/sorted-pages/free-area/Error404';
import SignIn from './pages/sorted-pages/free-area/sign-in/SignIn';
import SignUp from './pages/sorted-pages/free-area/sign-in/SignUp';
import ForgotPassword from './pages/sorted-pages/free-area/sign-in/ForgotPassword';
import MaximumRequests from './pages/sorted-pages/free-area/MaximumRequests';
import LegalNotices from './pages/sorted-pages/free-area/law/LegalNotices';
import TermsOfServices from './pages/sorted-pages/free-area/law/TermsOfServices';
import TermsOfSales from './pages/sorted-pages/free-area/law/TermsOfSales';
import ChoosePlan from './pages/sorted-pages/deep-area/ChoosePlan';
import BackToTop from 'react-back-to-top-button';
import ArrowLight from './assets/img/svg/ArrowLight';

export default class App extends React.Component {

    render() {
        return (
            <div id="App">
                <div class="layout-style">
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route path='/connexion' component={SignIn}/>
                            <Route path='/inscription' component={SignUp}/>
                            <Route path='/mot-de-passe-oublie' component={ForgotPassword}/>
                            <Route path='/recherche/:keyword' component={AskingFranklin}/>
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/tarifs' component={Pricing}/>
                            <Route exact path='/plans' component={ChoosePlan}/>
                            <Route path="/limite-de-recherches" component={MaximumRequests}/>
                            <Route path="/mentions-legales" component={LegalNotices}/>
                            <Route path="/conditions-generales-d-utilisation" component={TermsOfServices}/>
                            <Route path="/conditions-generales-de-vente" component={TermsOfSales}/>
                            <Route path="*" component={Error404}/>
                        </Switch>
                    </Router>
                </div>
                <Footer/>
                <BackToTop showAt={2500} speed={1000} easing="easeOutSine">
                    <ArrowLight width="22" fill="#FFF"/>
                </BackToTop>
            </div>
        )
    }
}