import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { 
  Redirect
} from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_IHTunL8Iumhmuvbs095NhSyP00F3UiY2Hd");

export default class Payment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      redirect:false
    }
  }
  componentDidMount(){
    if (!localStorage.getItem('product')){
      this.setState(
        {
          redirect:true
        }
      )
    }
  }
    render(){
      return(this.state.redirect ? <Redirect to="/plans"/> :
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>)
          
    }

}

