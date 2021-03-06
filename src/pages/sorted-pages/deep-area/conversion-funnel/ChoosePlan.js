import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { refreshTokenFnc } from '../../../../utils/refreshToken';
import { Redirect } from 'react-router-dom';
import { 
    Container,
    Row, 
    Col 
} 
from 'react-bootstrap';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import PmyBtn from '../../../components/button/PmyBtn';

class ChoosePlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alreadySelected: 0,
            selectedPlan: 0,
            redirectSelectedMonthly: false,
            redirectSelectedAnnual: false,
            classBlur: 'block-pricing-blur',
            countClick: 0,
            redirectToLogin: false,
            plans: []
        }
        this.handleSelectedMonthlyPlan = this.handleSelectedMonthlyPlan.bind(this);
        this.handleSelectedAnnualPlan = this.handleSelectedAnnualPlan.bind(this);
        this.handleChangePlanToAnnual = this.handleChangePlanToAnnual.bind(this);
        this.handleChangePlanToMonthly = this.handleChangePlanToMonthly.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if(!localStorage.getItem('af_token')) {
            this.setState({
                redirectToLogin: true
            });
        } 
        else {
            var token = localStorage.getItem('af_token');
            var product = localStorage.getItem('product');
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-plan', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.message === 'The incoming token has expired') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
                else if(res.message === 'Unauthorized') {
                    this.setState({
                        redirectToLogin: true
                    });
                } 
                else {
                    this.setState({
                        plans: res.message,
                        alreadySelected: product !== null ? product === this.props.t('funnel.pricing.pricing-code-month') ? 1 : 2 : 0,
                        selectedPlan: product !== null ? product === this.props.t('funnel.pricing.pricing-code-month') ? 1 : 2 : 0,
                        countClick: this.state.countClick + 1
                    });
                }
            })
            .catch(error => {
                if(error == 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
            })
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.offers')}</title>
                <meta name="description" content={this.props.t('description.offers')}/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }
    
    handleSelectedMonthlyPlan() {
        localStorage.setItem('product', this.props.t('funnel.pricing.pricing-code-month'))
        this.setState({ 
            redirectSelectedMonthly: true
        });
    }

    handleSelectedAnnualPlan() {
        localStorage.setItem('product', this.props.t('funnel.pricing.pricing-code-annual'))
        this.setState({ 
            redirectSelectedAnnual: true
        });
    }

    handleChangePlanToAnnual(e) {
        if(e.currentTarget.classList.contains(this.state.classBlur)) {
            this.setState({ 
                selectedPlan: 2,
                countClick: this.state.countClick + 1
            });
        }
    }

    handleChangePlanToMonthly(e) {
        if(e.currentTarget.classList.contains(this.state.classBlur)) {
            this.setState({ 
                selectedPlan: 1,
                countClick: this.state.countClick + 1
            });
        }
    }

    render() {

        const { t } = this.props;

        if (this.state.redirectSelectedMonthly || this.state.redirectSelectedAnnual) { 
            return <Redirect to={t('url.payment')}/>
        }

        if (this.state.redirectToLogin) { 
            return <Redirect to={t('url.signIn')}/>
        }

        const classListRow = ' col-12 d-flex flex-row justify-content-center mx-0 mt-5 pt-5 px-0';
        const classListCol = ' block-pricing block-pricing-pro block-pricing-choose-plan mb-5 mb-lg-0 p-4 bgc-light rounded ';
        const customColPlan1 = ' block-pricing-choose-plan-monthly mr-0 mr-lg-5';
        const customColPlan2 = ' block-pricing-choose-plan-annual ml-0 ml-lg-5';

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                {this.state.plans.length > 0 ?
                    <Container id="pricing" className="px-0 mt-6">
                        <H1 className="text-center" title={t('funnel.offers.h1a')}/>
                        <PmyBtn redirectTo="/" linkIsLargePmyFull textLink={t('funnel.offers.linkToHome')} containerStyle="pt-5 mt-5 text-center"/>
                    </Container>
                :
                    <Container id="pricing" className="px-0 mt-6">
                        <StepperFunnel activeStep={0} firstStep={t('funnel.stepperPayment.1')} secondStep={t('funnel.stepperPayment.2')} thirdStep={t('funnel.stepperPayment.3')}/>
                        <H1 className="text-center" title={t('funnel.offers.h1b')}/>
                        {this.state.selectedPlan !== 0 &&
                            <p class='text-center mt-5 fz-18'>
                                {t('funnel.offers.precedentSelected')}
                                {this.state.alreadySelected === 1 && <span class="fw-600">{t('funnel.pricing.planProType1')}</span>}
                                {this.state.alreadySelected === 2 && <span class="fw-600">{t('funnel.pricing.planProType2')}</span>}
                            </p>
                        }
                        <Row className={this.state.selectedPlan === 0 ? classListRow
                            : this.state.selectedPlan === 1 ? 'plan-preselected plan-preselected-monthly' + classListRow
                            : this.state.selectedPlan === 2 && 'plan-preselected plan-preselected-annual' + classListRow
                        }>
                            <Col onClick={this.handleChangePlanToMonthly} sm="12" md="8" lg="6" xl="4" className={this.state.selectedPlan === 2 ? this.state.classBlur + classListCol + customColPlan1 : classListCol + customColPlan1}>
                                <div class="block-prices">
                                    <H2 className="mt-4 mb-3" title={t('funnel.pricing.planProType1')}/>
                                    <p class="price">{t('funnel.pricing.price-1')}<span>{t('funnel.pricing.priceRhythm')}</span></p>
                                    <p>{t('funnel.offers.monthly.p1')}</p>
                                    <p class="fz-14">{t('funnel.offers.automaticRenewal')}</p>
                                    <PmyBtn onClick={this.handleSelectedMonthlyPlan} isDisabled={this.state.selectedPlan === 2} btnIsLargePmyFull textBtn={this.state.alreadySelected === 1 ? t('funnel.offers.monthly.cta1') : t('funnel.offers.monthly.cta2')} containerStyle="mt-5 mb-4 w-100" className="w-100"/>
                                </div>
                            </Col>
                            <Col onClick={this.handleChangePlanToAnnual} sm="12" md="8" lg="6" xl="4" className={this.state.selectedPlan === 1 ? this.state.classBlur + classListCol + customColPlan2 : classListCol + customColPlan2}>
                                <div class="block-prices">
                                    <H2 className="mt-4 mb-3" title={t('funnel.pricing.planProType2')}/>
                                    <p class="price">{t('funnel.pricing.price-2')}<span>{t('funnel.pricing.priceRhythm')}</span></p>
                                    <p>{t('funnel.offers.annual.p1-a')}<span class="fw-600">{t('funnel.pricing.priceTotalNow')}</span>{t('funnel.offers.annual.p1-b')}</p>
                                    <p class="fz-14">{t('funnel.offers.automaticRenewal')}</p>
                                    <PmyBtn onClick={this.handleSelectedAnnualPlan} isDisabled={this.state.selectedPlan === 1} btnIsLargePmyFull textBtn={this.state.alreadySelected === 2 ? t('funnel.offers.annual.cta1') : t('funnel.offers.annual.cta2')} containerStyle="mt-5 mb-4 w-100" className="w-100"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}

export default withTranslation()(ChoosePlan);