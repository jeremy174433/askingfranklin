import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import { 
  Redirect
} from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Alert from '../.././components/elements/Alert';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_IHTunL8Iumhmuvbs095NhSyP00F3UiY2Hd");

export default class Payment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      redirect:false,
      product:{},
      paymentErrorShowed:false,
      errormsg:""
    }
    this.handlePaymentError = this.handlePaymentError.bind(this);
    this.handleCloseAlert = this.handleCloseAlert.bind(this);
  }
  componentDidMount(){
    if (!localStorage.getItem('product') || !localStorage.getItem('af_token')){
      this.setState(
        {
          redirect:true
        }
      )
    } else {
      var token = localStorage.getItem("af_token")
      var product = localStorage.getItem("product")
      fetch("https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-product", {
        headers:{
            "Authorization":token
        },
        body: JSON.stringify({
          product_id: product,
        }),
        method: "POST",
      })
      .then(res=>{
          return res.json()
      })
      .then(res=>{
          if(res.message == "Unauthorized"){
            this.setState({
                redirect:true
            })
          } else {
            this.setState({
                product:res.message,
            })
          }
      })
    }
  }
  handlePaymentError(e){
    this.setState({
      paymentErrorShowed:true,
      errormsg:e
    })
  }
  handleCloseAlert(){
    this.setState({
      paymentErrorShowed:false
    })
  }
    render(){
      return(this.state.redirect ? <Redirect to="/plans"/> :
            <Elements stripe={stripePromise}>
              {this.state.paymentErrorShowed && <Alert onClick={this.handleCloseAlert} className={this.state.paymentErrorShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={"Une erreur est survenue durant votre paiement... Err : "+this.state.errormsg}/>}
              produit prix : {this.state.product ? this.state.product.unit_amount : ""}
              <CheckoutForm handlePaymentError={this.handlePaymentError}/>
            </Elements>)   
    }
}

