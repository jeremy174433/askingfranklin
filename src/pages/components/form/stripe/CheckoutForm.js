import React from 'react';
import { refreshTokenFnc } from '../../../../utils/refreshToken';
import { 
	Row,
	Col 
} from 'react-bootstrap';
import Input from '../Input';
import { 
  useStripe, 
  useElements, 
  CardElement 
} from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import Checkbox from '../Checkbox';
import PmyBtn from '../../button/PmyBtn';

const CARD_ELEMENT_OPTIONS = {
	style: {
		base: {
			color: "#2B2B2B",
			fontFamily: '"Assistant", sans-serif',
			fontSmoothing: "antialiased",
			fontSize: "16px", 
			"::placeholder": {
				color: "#9A9A9A",
			},
		},
		invalid: {
			color: "#FF4444",
			iconColor: "#FF4444",
		},
	},
};

export default function CheckoutForm(props) {

	const stripe = useStripe();
	const elements = useElements();
	const handleRequiresPaymentMethod = async ({
		subscription,
		paymentMethodId,
		priceId
	}) => {
   		if (subscription.status === 'active') {
			return { subscription, priceId, paymentMethodId };
		} 
		else if (subscription.latest_invoice.payment_intent.status === 'requires_payment_method') {
			localStorage.setItem('latestInvoiceId', subscription.latest_invoice.id);
			localStorage.setItem('latestInvoicePaymentIntentStatus', subscription.latest_invoice.payment_intent.status);
			throw { error: { message: 'Your card was declined.' } };
		} 
		else {
			return { subscription, priceId, paymentMethodId };
		}
	}

	const handlePaymentThatRequiresCustomerAction = async ({
		subscription,
		invoice,
		priceId,
		paymentMethodId,
		isRetry
	}) => {
		if (subscription && subscription.status === 'active') {
			return { subscription, priceId, paymentMethodId };
		}
		if (typeof subscription == "string"){
			throw subscription
		}
    	let paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent;
		if (paymentIntent.status === 'requires_action' || (isRetry === true && paymentIntent.status === 'requires_payment_method')) {
			return stripe
			.confirmCardPayment(paymentIntent.client_secret, {
				payment_method: paymentMethodId,
			})
			.then((result) => {
				if (result.error) {
					throw result;
				}
				else {
					if (result.paymentIntent.status === 'succeeded') {
						return {
							priceId: priceId,
							subscription: subscription,
							invoice: invoice,
							paymentMethodId: paymentMethodId
						};
					}
				}
			})
			.catch((error) => {
				props.handlePaymentError(error);
			});
		} 
		else {
			return { subscription, priceId, paymentMethodId };
		}
	}

	const retryInvoiceWithNewPaymentMethod = async ({
		paymentMethodId,
		invoiceId,
		priceId
	}) => {
    	return (
      		fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/retry-invoice', {
				method: 'post',
				headers: {
					'Content-type': 'application/json'
				},
				body: JSON.stringify({
					paymentMethodId: paymentMethodId,
					invoiceId: invoiceId
				}),
			})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				if (result.error) {
					throw result;
				}
				return result.message;
			})
			.then((result) => {
				if (result.message === 'The incoming token has expired') {
                    refreshTokenFnc(this.componentDidMount());
				}
				else {
					return {
						invoice: result,
						paymentMethodId: paymentMethodId,
						priceId: priceId,
						isRetry: true
					};
				}
			})
			.catch(error => {
                if (error === 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
            })
			.then(handlePaymentThatRequiresCustomerAction)
			.then(onSubscriptionComplete)
			.catch((error) => {
				props.handlePaymentError()
			})
    	);
	}

	const onSubscriptionComplete = async (result) => {
		var token = localStorage.getItem('af_token');
		fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/register-db-subscription', {
			method: 'post',
			headers: {
				'Content-type': 'application/json',
				'Authorization': token
			},
			body: JSON.stringify({
				id_price: result.priceId,
				id_subscription: result.subscription.id
			}),
		})
		.then((res) => res.json())
		.then((res) => {
			console.log(res)
			if(res.message === "User registered"){
				localStorage.setItem('af_is_sub', 1);
				window.location.replace('/paiement/confirmation');
			}
			if (res.message === 'The incoming token has expired') {
				refreshTokenFnc(this.componentDidMount());
			}
			if (res.message === 'The incoming token has expired') {
				refreshTokenFnc(this.componentDidMount());
			}
			else if (res.subscription.status === 'active') {
				localStorage.setItem('af_is_sub', 1);
				window.location.replace('/paiement/confirmation');
			}
		})
		.catch(error => {
			if (error === 'TypeError: Failed to fetch') {
				refreshTokenFnc(this.componentDidMount, false);
			}
		})
	}

	const createSubscription = async ({ paymentMethodId, priceId, name, line1, city, postalCode, coupon}) => {
		var token = localStorage.getItem('af_token');
		return (
			fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/create-subscription', {
				method: 'post',
				headers: {
					'Content-type': 'application/json',
					'Authorization': token
				},
				body: JSON.stringify({
					paymentMethodId: paymentMethodId,
					priceId: priceId,
					name: name,
					line1: line1,
					city: city,
					postal_code: postalCode,
					coupon:coupon
				}),
			})
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				if (result.error) {
					throw result;
				}
				return result;
			})
			.then((result) => {
				if (result.message === 'The incoming token has expired') {
					refreshTokenFnc(this.componentDidMount, false);
				} 
				else {
					return {
						paymentMethodId: paymentMethodId,
						priceId: priceId,
						subscription: result.message
					};
				}
			})
			.catch(error => {
				if(error === 'TypeError: Failed to fetch') {
					refreshTokenFnc(this.componentDidMount, false);
				}
			})
			.then(handlePaymentThatRequiresCustomerAction)
			.then(handleRequiresPaymentMethod)
			.then(onSubscriptionComplete)
			.catch((error) => {
				props.handlePaymentError(error);
			})
		);
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		props.handleLoading()
		if (!stripe || !elements) {
			return;
		}
		var name = event.target.elements.name.value
		var line1 = event.target.elements.line1.value
		var city = event.target.elements.city.value
		var postalCode = event.target.elements.postal_code.value
		var coupon = props.couponStatus != "failed" && props.couponStatus.valid ? props.couponStatus.id : null
		const cardElement = elements.getElement(CardElement);
		const latestInvoicePaymentIntentStatus = localStorage.getItem('latestInvoicePaymentIntentStatus');
		const priceId = localStorage.getItem('product');
		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement
		});

		if (error) {
			console.log('[createPaymentMethod error]', error);
		} 
		else {
			const paymentMethodId = paymentMethod.id;
			if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
				const invoiceId = localStorage.getItem('latestInvoiceId');
				retryInvoiceWithNewPaymentMethod({
					paymentMethodId,
					invoiceId,
					priceId
				});
			} 
			else {
				createSubscription({ paymentMethodId, priceId, name, line1, city, postalCode, coupon});
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<Row className="d-flex flex-row mx-0">
				<Col sm="12" md="6" className="px-0 pl-md-0 pr-md-3">
					<Input
						label="Nom complet ou raison sociale"
						for="name"
						name="name"
						id="name"
						type="text"
						required={true}
					/>
				</Col>
				<Col sm="12" md="6" className="px-0 pr-md-0 pl-md-3">
					<Input
						label="Adresse de facturation"
						for="line1"
						name="line1"
						type="text"
						required={true}
					/>
				</Col>
			</Row>
			<Row className="d-flex flex-row mx-0">
				<Col sm="12" md="6" className="px-0 pl-md-0 pr-md-3">
					<Input
						label="Ville"
						for="city"
						name="city"
						type="text"
						required={true}
					/>
				</Col>
				<Col sm="12" md="6" className="px-0 pr-md-0 pl-md-3">
					<Input
						label="Code postal"
						for="postal_code"
						name="postal_code"
						id="postal_code"
						type="text"
						required={true}
					/>
				</Col>
			</Row>
			<CardElement options={CARD_ELEMENT_OPTIONS}/>
			{props.pricing.unit_amount == 4900 &&
				<Row className="mx-0 d-flex flex-column">
					<Col sm="12" md="6" className="px-0 pt-3 mt-3 d-flex flex-column flex-sm-row">
						<Input
							disabled={props.couponAmount != 1}
							type="text"
							hideLabel={true}
							placeholder="Votre code promotionnel..."
							for="promotion_code"
							name="promotion_code"
							id="promotion_code"
							containerStyle="mb-0 pb-0 w-100"
							onChange={props.handleCouponChange}
						/>
						<PmyBtn type="button" onClick={props.checkCoupon} isDisabled={props.couponAmount != 1} btnIsMediumPmyFull textBtn="Vérifier" containerStyle="ml-0 ml-sm-4 mt-4 mt-sm-0" className="h-100"/>
					</Col>
					{props.couponStatus != '' && (props.couponStatus != 'failed' && props.couponStatus.valid ? 
						<p class="color-success mt-3 fz-14">Félicitations, vous bénéficiez désormais de {props.couponStatus.percent_off}% de réduction sur l'abonnement mensuel pour une durée de {props.couponStatus.duration_in_months} mois</p>
					: 
						<p class="color-danger mt-3 fz-14">Le code saisi ne correspond à aucun code promotionnel actif</p>
					)}
				</Row>
			}
			<Checkbox 
				label={['J\'ai lu et j\'accepte les ', <Link to="/conditions-generales-de-vente" target="_blank" rel="noopener" title="Ouvrir dans un nouvel onglet : CGV Asking Franklin" class="fz-16">CGV</Link>, <span class="fz-14 ml-1">(requis)</span>]} 
				onChange={props.handleTermsOfSales} 
				for="checkTermsOfSales" 
				name={props.for} 
				id={props.for} 
				value={props.termsOfSales} 
				required={true} 
				className="my-3 py-3"
			/>
			<div class="d-flex flex-column flex-sm-row justify-content-end align-items-center">
				<PmyBtn redirectTo="/plans" linkIsMediumPmyOutlineLight textLink="Précédent" containerStyle="w-sm-100 mr-0 mr-sm-4 mt-4" customBtnClass="w-sm-100"/>
				<PmyBtn type="submit" isDisabled={!stripe} btnIsMediumPmyFull textBtn={props.pricing ? 'Payer ' + Math.floor((props.pricing.unit_amount / 100) * props.couponAmount) + ' €' : 'Confirmer l\'achat'} containerStyle="w-sm-100 mt-4" className="w-sm-100"/>
			</div>
		</form>
	);
}