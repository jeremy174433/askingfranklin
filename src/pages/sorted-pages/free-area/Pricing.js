import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Row, 
    Col 
} from 'react-bootstrap';
import StepperFunnel from '../../components/form/elements/StepperFunnel';
import H1 from '../../components/elements/title/H1';
import H2 from '../../components/elements/title/H2';
import FeaturesList from '../../components/elements/FeaturesList';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';
import Tick from '../../../assets/img/svg/Tick';
import PmyBtn from '../../components/button/PmyBtn';

export default class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
            selectedPlan: 0
        }
        this.selectFirstPlan = this.selectFirstPlan.bind(this);
        this.selectSecondPlan = this.selectSecondPlan.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.selectFirstPlan();
        var token = localStorage.getItem('af_token');
        if(token) {
            this.setState({
                isConnected: true
            });
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Passez à la version Pro - Asking Franklin, votre outil SEO français</title>
                <meta name="description" content="Améliorez votre référencement et soyez visible en passant à la version Pro d’Asking Franklin ! Requêtes illimitées - Utilisateurs illimités en simultané - Export CSV..."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    selectFirstPlan() {
        localStorage.setItem('product', 'price_1HEaGeLB03GdYRbhWsbdlFcx');
        this.setState({
            selectedPlan: 0,
        });
    }

    selectSecondPlan() {
        localStorage.setItem('product', 'price_1HAYTSLB03GdYRbhIt2Rqm9G');
        this.setState({
            selectedPlan: 1
        });
    }

    render() {
        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="pricing" className="px-0 mt-6">
                    {!this.state.isConnected &&
                        <StepperFunnel activeStep={0} firstStep="Choix de l'offre" secondStep="Inscription" thirdStep="Abonnement et passage en Pro"/>
                    }
                    <H1 className="text-center" title="Découvrez l’outil français pour booster votre SEO, stratégie de contenus, et plus encore..."/>
                    <Row className="col-12 d-flex justify-content-around mx-0 mt-5 pt-5 px-0">
                        <Col sm="12" lg="6" xl="5" className="block-pricing block-pricing-free mb-5 mb-lg-0 mr-0 mr-lg-5 p-4 bgc-light rounded">
                            <H2 className="mb-3" title="Gratuit"/>
                            <p class="mb-3 pb-3">Pour celles et ceux qui veulent tester l’outil, sans trop se mouiller mais avec 3 requêtes par jour.</p>
                            <p class="price">0€</p>
                            <ul class="features-list my-5 d-flex flex-column">
                                <li><FeaturesIcons icon="search"/><span>Nombre limité de recherches par jour <em class="fz-14">(3 maximum)</em></span></li>
                            </ul>
                            <PmyBtn redirectTo="/" linkIsLargePmyOutlineLight textLink="Continuer avec la version gratuite" containerStyle="mb-4" customBtnClass="w-100"/>
                        </Col>
                        <Col sm="12" lg="6" xl="5" className="block-pricing block-pricing-pro mt-5 mt-lg-0 p-4 bgc-light rounded">
                            <H2 className="color-primary mb-3" title="Pro"/>
                            <p class="mb-3 pb-3">Pour celles et ceux qui voient l’avenir en illimité avec un grand A : <br class="d-none d-xl-block"/><span class="fw-600">Asking Franklin</span></p>
                            <div class="block-prices d-flex flex-column flex-sm-row">
                                <div onClick={this.selectFirstPlan} class="annual-plan mb-4 mb-sm-0 mr-0 mr-sm-4 p-3 w-100 text-center rounded" title="Offre mensuelle">
                                    {this.state.selectedPlan === 0 ?
                                        <div class="circle circle-checked d-flex align-items-center justify-content-center">
                                            <div class="d-flex align-items-center justify-content-center">
                                                <Tick width="20" fill="#FFF"/>
                                            </div>
                                        </div>
                                    :                  
                                        <div class="circle"></div>
                                    }
                                    <h3>Mensuel</h3>
                                    <p class="price">49€<span> /mois</span></p>
                                    <p>sans engagement</p>
                                </div>
                                <div onClick={this.selectSecondPlan} class="monthly-plan p-3 w-100 text-center rounded" title="Offre annuelle">
                                {this.state.selectedPlan === 1 ?
                                    <div class="circle circle-checked d-flex align-items-center justify-content-center">
                                        <div class="d-flex align-items-center justify-content-center">
                                            <Tick width="20" fill="#FFF"/>
                                        </div>
                                    </div>
                                :
                                    <div class="circle"></div>
                                }
                                    <h3>Annuel</h3>
                                    <p class="price">39€<span> /mois</span></p>
                                    <p><span class="fz-18 fw-600">468€/an</span>&nbsp; &nbsp;<span class="price-before-reduction">588€/an</span></p>
                                </div>
                            </div>
                            <p class="block-pricing-vat mt-2 fz-12">Les prix indiqués sont en €, hors TVA et sont soumis au taux en vigueur.</p>
                            <FeaturesList className="my-5"/>
                            <PmyBtn redirectTo="/inscription" linkIsLargePmyFull textLink={this.state.isConnected === false ? 'S\'inscrire et devenir Pro' : 'Continuer avec la version Pro'} containerStyle="mb-4" customBtnClass="w-100"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}