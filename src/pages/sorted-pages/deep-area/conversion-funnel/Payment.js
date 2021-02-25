import React from 'react';
import { refreshTokenFnc } from '../../../../utils/refreshToken';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import Loader from '../../../components/elements/Loader';
import { 
	Container,
	Row,
	Col
} from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import PmyBtn from '../../../components/button/PmyBtn';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../../components/form/stripe/CheckoutForm';
import FeaturesList from '../../../components/elements/FeaturesList';
import Alert from '../../../components/elements/Alert';

const stripePromise = loadStripe('pk_live_WgN7E438RIWhbBUughEppG0S00G1SQfY87');

class Payment extends React.Component {
		constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			redirect: false,
			product: {},
			plans: [],
			selectedPlan: 1,
			errorPayment: false,
			isLoadingPayment: false,
			couponText: '',
			couponStatus: '',
			couponAmount: 100
		}
		this.handleCloseAlert = this.handleCloseAlert.bind(this);
		this.handlePaymentError = this.handlePaymentError.bind(this);
		this.handleLoading = this.handleLoading.bind(this);
		this.handleCouponChange = this.handleCouponChange.bind(this);
		this.checkCoupon = this.checkCoupon.bind(this);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
		if (!localStorage.getItem('product') || !localStorage.getItem('af_token')) {
			this.setState({
				redirect: true
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
						selectedPlan: product === 'price_1HduRyLB03GdYRbhXrwR1kvW' ? 1 : 0,
						countClick: this.state.countClick + 1
					});
				}
			})
			.catch(error => {
                if(error === 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
            });
			fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-product', {
				headers: {
					'Authorization': token
				},
				body: JSON.stringify({
					product_id: product,
				}),
				method: 'POST',
			})
			.then(res => {
				return res.json();
			})
			.then(res => {
				if (res.message === 'The incoming token has expired') {
                  refreshTokenFnc(this.componentDidMount, false)
                } 
				else if(res.message === 'Unauthorized') {
					this.setState({
						redirect: true
					});
				} 
				else {
					this.setState({
						product: res.message,
						isLoading: false
					});
				}
			})
			.catch(error => {
                if(error === 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
			});
		}
	}

	customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.payment')}</title>
                <meta name="description" content={this.props.t('description.payment')}/>
				<meta name="robots" content="noindex, follow"/>
			</Helmet>
        );
	}

	handleCouponChange(e) {
		this.setState({
			couponText: e.target.value
		});
	}

	checkCoupon() {
		this.setState({
			couponStatus: ''
		});
		fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/retrieve-coupon', {
			body: JSON.stringify({
				coupon: this.state.couponText,
			}),
			method: 'POST',
		})
		.then((res) => res.json())
		.then((res) => {
			if(res.message === 'Invalid coupon') {
				this.setState({
					couponStatus: 'failed',
					couponAmount: 100
				});
			}
			else {
				this.setState({
					couponStatus: !res.message.valid ? 'failed' : res.message,
					couponAmount: !res.message.valid ? 100 : 100 - res.message.percent_off
				});
			}
		})
	}

	handlePaymentError(reason) {
		this.setState({
			errorPayment: reason,
			isLoadingPayment: false
		});
	}

    handleCloseAlert() {
        this.setState({
            errorPayment: false
        });
	}

	handleLoading(){
		this.setState({
			isLoadingPayment: this.state.isLoadingPayment ? false : true
		});
	}

	render() {

		const { t } = this.props;
		const classListCol = 'block-ctn-summary block-style block-pricing pt-4 ';
		
		return (
			<div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
				{this.customHeadElement()}

				{this.state.errorPayment && <Alert onClick={this.handleCloseAlert} className={this.state.errorPayment && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.errorPayment ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={t('alert.payment.error') + this.state.errorPayment}/>}
				
				{this.state.redirect ? 
					<Redirect to={t('url.offers')}/>

				: this.state.isLoading ?
					<Loader loaderDisplayed content={t('actions.loading')}/>

				: this.state.plans.length > 0 ? 
					<Container id="payment" className="px-0 mt-6">
						<H1 className="text-center" title={t('funnels.offers.h1a')}/>
						<PmyBtn redirectTo="/" linkIsLargePmyFull textLink={t('funnels.offers.linkToHome')} containerStyle="pt-5 mt-5 text-center"/>
					</Container>

				:
					<Container id="payment" className="px-0 mt-6">
						<StepperFunnel activeStep={1} firstStep={t('funnel.stepperPayment.1')} secondStep={t('funnel.stepperPayment.2')} thirdStep={t('funnel.stepperPayment.3')}/>
						<Row className="mx-0">
							<Col lg="12" xl="8" className="block-ctn-elements block-style pt-4 mr-0 mr-xl-5 mb-5 mb-xl-0">
								<div class="block-elements-header">
									<p class="d-flex flex-row align-items-center pb-3 fw-600">{t('funnel.payment.form.title')}</p>
								</div>
								{this.state.isLoadingPayment &&
									<div class="mb-5">
										<Loader loaderDisplayed content={t('actions.loading')}/>
									</div>
								}
								<div className={this.state.isLoadingPayment ? 'd-none' : 'block-elements-body mt-4'}>
									<Elements stripe={stripePromise}>
										<CheckoutForm 
											couponAmount={this.state.couponAmount / 100} 
											couponStatus={this.state.couponStatus} 
											couponText={this.state.couponText}
											handleCouponChange={this.handleCouponChange} 
											checkCoupon={this.checkCoupon} 
											pricing={this.state.product} 
											handlePaymentError={this.handlePaymentError} 
											handleLoading={this.handleLoading}
										/>
									</Elements>
								</div>
							</Col>
							<Col lg="12" xl="4" className={classListCol + 'mt-5 mt-xl-0'}>
								<div class="block-summary">
									<div class="block-summary-header">
										<p class="d-flex flex-row align-items-center pb-3 fw-600">{t('funnel.payment.summary.title')}</p>
									</div>
									<div class="block-summary-body rounded p-3 mt-4">
										<H2 className="mb-3" title={t('funnel.payment.summary.proOffer')}/>
										{this.state.selectedPlan === 1 ?
											<div>
												<p class="fz-18 fw-600">{t('funnel.payment.summary.subscriptionDuration1')}</p>
												<p class="price">{t('funnel.pricing.moneyType2')}{(Math.floor((this.state.product.unit_amount / 100) * (this.state.couponAmount / 100))).toFixed(0)}{t('funnel.pricing.moneyType1')}<span>{t('funnel.pricing.priceRhythm')}</span></p>
												<p>{t('funnel.offers.monthly.p1')}</p>
											</div>
										: this.state.selectedPlan === 0 &&
											<div>
												<p class="fz-18 fw-600">{t('funnel.payment.summary.subscriptionDuration2')}</p>
												<p class="price d-flex align-items-baseline">
													{t('funnel.pricing.moneyType2')}{(Math.floor(((this.state.product.unit_amount / 100) / 12)) * (this.state.couponAmount / 100)).toFixed(0)}{t('funnel.pricing.moneyType1')}<span class="d-flex">&nbsp;{t('funnel.pricing.priceRhythm')}
													<span class="d-none d-sm-block"><span class="fw-400">&nbsp;{t('funnel.payment.summary.p1a')}</span>{t('funnel.pricing.moneyType2')}{Math.floor((this.state.product.unit_amount / 100) * (this.state.couponAmount / 100))}{t('funnel.pricing.moneyType1')}<span class="fw-400">{t('funnel.payment.summary.p1b')}</span></span></span>
												</p>
												<span class="d-block d-sm-none mb-2 fw-600"><span class="fw-400">{t('funnel.payment.summary.p1a')}</span>{t('funnel.pricing.moneyType2')}{Math.floor((this.state.product.unit_amount / 100) * (this.state.couponAmount / 100))}{t('funnel.pricing.moneyType1')}<span class="fw-400">{t('funnel.payment.summary.p1b')}</span></span>
												<p>{t('funnel.payment.summary.p2a')}<span class="fw-600">{t('funnel.pricing.priceEconomy')}</span>{t('funnel.payment.summary.p2b')}</p>
											</div>
										}
									</div>
									<p class="block-summary-vat mt-2 mb-4 fz-12">{t('funnel.pricing.infosVAT')}</p>
									<div class="block-summary-footer">
										<p class="my-4 fw-600">{t('funnel.payment.summary.introFeatures')}</p>
										<FeaturesList/>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				}
			</div>
		)
	}
}

export default withTranslation()(Payment);