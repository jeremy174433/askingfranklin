import React from 'react';
import { 
  useStripe, 
  useElements, 
  CardElement 
} from '@stripe/react-stripe-js';
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
			// subscription is active, no customer actions required.
			return { subscription, priceId, paymentMethodId };
		} 
		else if (subscription.latest_invoice.payment_intent.status === 'requires_payment_method') {
			// Using localStorage to manage the state of the retry here,
			// feel free to replace with what you prefer.
			// Store the latest invoice ID and status.
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
			// Subscription is active, no customer actions required.
			return { subscription, priceId, paymentMethodId };
		}
		// If it's a first payment attempt, the payment intent is on the subscription latest invoice.
		// If it's a retry, the payment intent will be on the invoice itself.
    	let paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent;
  
		if (paymentIntent.status === 'requires_action' || (isRetry === true && paymentIntent.status === 'requires_payment_method')) {
			return stripe
			.confirmCardPayment(paymentIntent.client_secret, {
				payment_method: paymentMethodId,
			})
			.then((result) => {
				if (result.error) {
					// Start code flow to handle updating the payment details.
					// Display error message in your UI.
					// The card was declined (i.e. insufficient funds, card has expired, etc).
					throw result;
				}
				else {
					if (result.paymentIntent.status === 'succeeded') {
						// Show a success message to your customer.
						// There's a risk of the customer closing the window before the callback.
						// We recommend setting up webhook endpoints later in this guide.
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
				console.log(error);
			});
		} 
		else {
			// No customer action needed.
			return { subscription, priceId, paymentMethodId };
		}
	}

	const retryInvoiceWithNewPaymentMethod = async ({
		paymentMethodId,
		invoiceId,
		priceId
	}) => {
    	return (
      		fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/retry-invoice', {
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
        	// If the card is declined, display an error to the user.
			.then((result) => {
				if (result.error) {
					// The card had an error when trying to attach it to a customer.
					throw result;
				}
				return result.message;
			})
			// Normalize the result to contain the object returned by Stripe.
			// Add the additional details we need.
			.then((result) => {
				return {
					// Use the Stripe 'object' property on the
					// returned result to understand what object is returned.
					invoice: result,
					paymentMethodId: paymentMethodId,
					priceId: priceId,
					isRetry: true
				};
			})
			// Some payment methods require a customer to be on session
			// to complete the payment process. Check the status of the
			// payment intent to handle these actions.
			.then(handlePaymentThatRequiresCustomerAction)
			// No more actions required. Provision your service for the user.
			.then(onSubscriptionComplete)
			.catch((error) => {
				// An error has happened. Display the failure to the user here.
				// We utilize the HTML element we created.
				console.log(error);
			})
    	);
	}

	const onSubscriptionComplete = async (result) => {
		// Payment was successful.
		if (result.subscription.status === 'active') {
			window.location.replace('/paiement/confirmation');
		}
	}

	const createSubscription = async ({ paymentMethodId, priceId }) => {
	var token = localStorage.getItem('af_token');

	return (
		fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/create-subscription', {
			method: 'post',
			headers: {
				'Content-type': 'application/json',
				'Authorization': token
			},
			body: JSON.stringify({
				paymentMethodId: paymentMethodId,
				priceId: priceId
			}),
		})
			.then((response) => {
				return response.json();
			})
			// If the card is declined, display an error to the user.
			.then((result) => {
				if (result.error) {
					// The card had an error when trying to attach it to a customer.
					throw result;
				}
				return result.message;
			})
			// Normalize the result to contain the object returned by Stripe.
			// Add the additional details we need.
			.then((result) => {
				return {
					paymentMethodId: paymentMethodId,
					priceId: priceId,
					subscription: result
				};
			})
			// Some payment methods require a customer to be on session
			// to complete the payment process. Check the status of the
			// payment intent to handle these actions.
			.then(handlePaymentThatRequiresCustomerAction)
			// If attaching this card to a Customer object succeeds,
			// but attempts to charge the customer fail, you
			// get a requires_payment_method error.
			.then(handleRequiresPaymentMethod)
			// No more actions required. Provision your service for the user.
			.then(onSubscriptionComplete)
			.catch((error) => {
				// An error has happened. Display the failure to the user here.
				// We utilize the HTML element we created.
				console.log(error);
			})
		);
	}

	const handleSubmit = async (event) => {
		// We don't want to let default form submission happen here,
		// which would refresh the page.
		event.preventDefault();
		if (!stripe || !elements) {
			// Stripe.js has not yet loaded.
			// Make sure to disable form submission until Stripe.js has loaded.
			return;
		}
		// Get a reference to a mounted CardElement. Elements knows how
		// to find your CardElement because there can only ever be one of
		// each type of element.
		const cardElement = elements.getElement(CardElement);
		// If a previous payment was attempted, get the latest invoice
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
			console.log('[PaymentMethod]', paymentMethod);
			const paymentMethodId = paymentMethod.id;
			if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
				// Update the payment method and retry invoice payment
				const invoiceId = localStorage.getItem('latestInvoiceId');
				retryInvoiceWithNewPaymentMethod({
					paymentMethodId,
					invoiceId,
					priceId
				});
			} 
			else {
				// Create the subscription
				createSubscription({ paymentMethodId, priceId });
			}
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<CardElement options={CARD_ELEMENT_OPTIONS}/>
			<PmyBtn type="submit" isDisabled={!stripe} btnIsMediumPmyFull textBtn={props.pricing ? 'Payer ' + props.pricing.unit_amount + ' €' : 'Confirmer l\'achat'} className="w-md-100 ml-auto mt-4"/>
		</form>
	);
}