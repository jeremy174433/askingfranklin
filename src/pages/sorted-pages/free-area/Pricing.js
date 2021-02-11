import React from 'react';
import { withTranslation } from 'react-i18next';
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

class Pricing extends React.Component {
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
        localStorage.setItem('product', 'price_1HduRyLB03GdYRbhXrwR1kvW');
        this.setState({
            selectedPlan: 0,
        });
    }

    selectSecondPlan() {
        localStorage.setItem('product', 'price_1HduS4LB03GdYRbhVjfrRi7i');
        this.setState({
            selectedPlan: 1
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="pricing" className="px-0 mt-6">
                    {!this.state.isConnected &&
                        <StepperFunnel activeStep={0} firstStep={t('funnel.stepper.1')} secondStep={t('funnel.stepper.2')} thirdStep={t('funnel.stepper.3')}/>
                    }
                    <H1 className="text-center" title={t('funnel.pricing.h1')} />
                    <Row className="col-12 d-flex justify-content-around mx-0 mt-5 pt-5 px-0">
                        <Col sm="12" lg="6" xl="5" className="block-pricing block-pricing-free mb-5 mb-lg-0 mr-0 mr-lg-5 p-4 bgc-light rounded">
                            <H2 className="mb-3" title={t('funnel.pricing.subtitle-1')}/>
                            <p class="mb-3 pb-3">{t('funnel.pricing.desc-1')}</p>
                            <p class="price">{t('funnel.pricing.price-0')}</p>
                            <ul class="features-list my-5 d-flex flex-column">
                                <li><FeaturesIcons icon="search"/><span>{t('funnel.features.0')} <em class="fz-14">{t('funnel.features.0a')}</em></span></li>
                            </ul>
                            <PmyBtn redirectTo="/" linkIsLargePmyOutlineLight textLink={t('funnel.pricing.cta-1')} containerStyle="mb-4" customBtnClass="w-100"/>
                        </Col>
                        <Col sm="12" lg="6" xl="5" className="block-pricing block-pricing-pro mt-5 mt-lg-0 p-4 bgc-light rounded">
                            <H2 className="color-primary mb-3" title={t('funnel.pricing.subtitle-2')}/>
                            <p class="mb-3 pb-3">{t('funnel.pricing.desc-2')}<br class="d-none d-xl-block"/><span class="fw-600">{t('projectName')}</span></p>
                            <div class="block-prices d-flex flex-column flex-sm-row">
                                <div onClick={this.selectFirstPlan} class="annual-plan mb-4 mb-sm-0 mr-0 mr-sm-4 p-3 w-100 text-center rounded" title={t('titleElementBrowser.monthlyPlan')}>
                                    {this.state.selectedPlan === 0 ?
                                        <div class="circle circle-checked d-flex align-items-center justify-content-center">
                                            <div class="d-flex align-items-center justify-content-center">
                                                <Tick width="20" fill="#FFF"/>
                                            </div>
                                        </div>
                                    :                  
                                        <div class="circle"></div>
                                    }
                                    <h3>{t('funnel.pricing.planProType1')}</h3>
                                    <p class="price">{t('funnel.pricing.price-1')}<span>{t('funnel.pricing.priceRhythm')}</span></p>
                                    <p>{t('funnel.pricing.priceInfos')}</p>
                                </div>
                                <div onClick={this.selectSecondPlan} class="monthly-plan p-3 w-100 text-center rounded" title={t('titleElementBrowser.annualPlan')}>
                                {this.state.selectedPlan === 1 ?
                                    <div class="circle circle-checked d-flex align-items-center justify-content-center">
                                        <div class="d-flex align-items-center justify-content-center">
                                            <Tick width="20" fill="#FFF"/>
                                        </div>
                                    </div>
                                :
                                    <div class="circle"></div>
                                }
                                    <h3>{t('funnel.pricing.planProType2')}</h3>
                                    <p class="price">{t('funnel.pricing.price-2')}<span>{t('funnel.pricing.priceRhythm')}</span></p>
                                    <p><span class="fz-18 fw-600">{t('funnel.pricing.priceTotalNow')}</span>&nbsp; &nbsp;<span class="price-before-reduction">{t('funnel.pricing.priceTotalBefore')}</span></p>
                                </div>
                            </div>
                            <p class="block-pricing-vat mt-2 fz-12">{t('funnel.pricing.infosVAT')}</p>
                            <FeaturesList className="my-5"/>
                            <PmyBtn redirectTo={t('url.signUp')} linkIsLargePmyFull textLink={this.state.isConnected === false ? t('funnel.pricing.cta-2a') : t('funnel.pricing.cta-2b')} containerStyle="mb-4" customBtnClass="w-100"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(Pricing);