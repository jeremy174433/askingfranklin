import React from 'react';
import { Redirect } from 'react-router-dom';
import Loader from '../../../components/elements/Loader';
import { 
	Container,
	Row,
	Col
} from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../../../components/form/stripe/CheckoutForm';
import H2 from '../../../components/elements/title/H2';
import FeaturesList from '../../../components/elements/FeaturesList';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_IHTunL8Iumhmuvbs095NhSyP00F3UiY2Hd');

export default class Payment extends React.Component {
		constructor(props) {
		super(props)
		this.state = {
			isLoading: true,
			redirect: false,
			product: {},
			selectedPlan: 1
		}
	}

	componentDidMount() {
		if (!localStorage.getItem('product') || !localStorage.getItem('af_token')) {
			this.setState({
				redirect: true
			});
		} 
		else {
			var token = localStorage.getItem('af_token');
			var product = localStorage.getItem('product');
			fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-product', {
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
				if(res.message === 'Unauthorized') {
					this.setState({
						redirect: true
					});
				} 
				else {
					this.setState({
						product: res.message
					});
				}
			});

			setTimeout(
				function() {
					this.setState({ 
						isLoading: false
					});
				}
				.bind(this), 3000
			);
		}
	}

	render() {

		const classListCol = 'block-ctn-summary block-style block-pricing pt-4 ';

		return(
			this.state.redirect ? 
				<Redirect to='/plans'/>
			: this.state.isLoading ?
				<Loader loaderDisplayed content="Chargement en cours"/>
			:
				<Container id="payment" className="px-0 mt-6">
					<Row className="mx-0">
						<Col lg="12" xl="8" className="block-ctn-elements block-style pt-4 mr-0 mr-xl-5 mt-5 mt-xl-0 order-1 order-xl-0">
							<div class="block-elements-header">
								<p class="d-flex flex-row align-items-center pb-3 fw-600"><span class="d-block d-xl-none">2&nbsp;-&nbsp;</span>Abonnement Pro</p>
							</div>
							<div class="block-elements-body mt-4">
								<Elements stripe={stripePromise}>
									<CheckoutForm pricing={this.state.product}/>
								</Elements>
							</div>
						</Col>
						<Col lg="12" xl="4" className={classListCol + 'mb-5 mb-xl-0'}>
								<div class="block-summary">
									<div class="block-summary-header">
										<p class="d-flex flex-row align-items-center pb-3 fw-600"><span class="d-block d-xl-none">1&nbsp;-&nbsp;</span>Récapitulatif</p>
									</div>
									<div class="block-summary-body rounded p-3 my-4">
										<H2 className="mb-3" title="Asking Franklin Pro"/>
										{this.state.selectedPlan === 1 ?
											<div>
												<p class="fz-18 fw-600">Abonnement Mensuel</p>
												<p class="price">{this.state.product.unit_amount}€<span> /mois</span></p>
												<p>Payer mensuellement, sans engagement</p>
											</div>
										: this.state.selectedPlan === 2 &&
											<div>
												<p class="fz-18 fw-600">Abonnement Annuel</p>
												<p class="price">{this.state.product.unit_amount}€<span> /mois <span class="fw-400">(soit</span> 468€ <span class="fw-400">l'année)</span></span></p>
												<p>Économisez <span class="fw-600">120€</span> par rapport à la version mensuel</p>
											</div>
										}
									</div>
									<div class="block-summary-footer">
										<p class="my-4 fw-600">Profiter de toute la puissance de Asking Franklin :</p>
										<FeaturesList/>
									</div>
								</div>
						</Col>
					</Row>
				</Container>
		)
	}
}