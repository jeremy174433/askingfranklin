import React from 'react';
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
import { Redirect } from 'react-router-dom';
import {refreshTokenFnc} from '../../../../utils/refreshToken'

export default class ChoosePlan extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alreadySelected:0,
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
        if(!localStorage.getItem('af_token')) {
            this.setState({
                redirectToLogin: true
            });
        } 
        else {
            var token = localStorage.getItem('af_token');
            var product = localStorage.getItem('product');
            fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-plan', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                
                if (res.message === "The incoming token has expired"){
                    /*
                    this.setState({
                        redirectLogin: true
                    });
                    localStorage.removeItem('af_token');
                    */
                    refreshTokenFnc(this.componentDidMount,false)
                }
                else if(res.message === 'Unauthorized') {
                    this.setState({
                        redirectToLogin: true
                    });
                } 
                else {
                    this.setState({
                        plans: res.message,
                        alreadySelected: product === 'price_1HEaGeLB03GdYRbhWsbdlFcx' ? 1 : 0,
                        selectedPlan: product === 'price_1HEaGeLB03GdYRbhWsbdlFcx' ? 1 : 0,
                        countClick: this.state.countClick + 1
                    });
                }
            }).catch(error=>{
                if(error === "TypeError: Failed to fetch"){
                    refreshTokenFnc(this.componentDidMount,false)
                }
            })
        }
    }
    
    handleSelectedMonthlyPlan() {
        localStorage.setItem('product', 'price_1HEaGeLB03GdYRbhWsbdlFcx')
        this.setState({ 
            redirectSelectedMonthly: true
        });
    }

    handleSelectedAnnualPlan() {
        localStorage.setItem('product', 'price_1HAYTSLB03GdYRbhIt2Rqm9G')
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

        if (this.state.redirectSelectedMonthly || this.state.redirectSelectedAnnual) { 
            return <Redirect to='/paiement'/>
        }
        if (this.state.redirectToLogin) { 
            return <Redirect to='/connexion'/>
        }

        const classListRow = ' col-12 d-flex flex-row justify-content-center mx-0 mt-5 pt-5 px-0';
        const classListCol = ' block-pricing block-pricing-pro block-pricing-choose-plan mb-5 mb-lg-0 p-4 bgc-light rounded ';
        const customColPlan1 = ' block-pricing-choose-plan-monthly mr-0 mr-lg-5';
        const customColPlan2 = ' block-pricing-choose-plan-annual ml-0 ml-lg-5';

        return (
            <div class="layout-style">
                {this.state.plans.length > 0 ?
                    <Container id="pricing" className="px-0 mt-6">
                        <H1 className="text-center" title="Vous avez déja un abonnement Asking Franklin Pro actif"/>
                        <PmyBtn redirectTo="/" linkIsLargePmyFull textLink="Retourner à l'accueil" containerStyle="pt-5 mt-5 text-center"/>
                    </Container>
                :
                    <Container id="pricing" className="px-0 mt-6">
                        <StepperFunnel activeStep={0}/>
                        <H1 className="text-center" title="Passez à la vitesse supérieure en choisissant l'offre mensuel ou annuel"/>
                        {this.state.selectedPlan !== 0 &&
                            <p class='text-center mt-5 fz-18'>
                                Vous aviez sélectionné l'offre&nbsp;
                                {this.state.alreadySelected === 1 && <span class="fw-600">Mensuel</span>}
                                {this.state.alreadySelected === 2 && <span class="fw-600">Annuel</span>}
                            </p>
                        }
                        <Row className={this.state.selectedPlan === 0 ? classListRow
                            : this.state.selectedPlan === 1 ? 'plan-preselected plan-preselected-monthly' + classListRow
                            : this.state.selectedPlan === 2 && 'plan-preselected plan-preselected-annual' + classListRow
                        }>
                            <Col onClick={this.handleChangePlanToMonthly} sm="12" md="8" lg="6" xl="4" className={this.state.selectedPlan === 2 ? this.state.classBlur + classListCol + customColPlan1 : classListCol + customColPlan1}>
                                <div class="block-prices">
                                    <H2 className="mt-4 mb-3" title="Mensuel"/>
                                    <p class="price">49€<span> /mois</span></p>
                                    <p>Payer mensuellement</p>
                                    <p>Sans engagement</p>
                                    <PmyBtn onClick={this.handleSelectedMonthlyPlan} isDisabled={this.state.selectedPlan === 2} btnIsLargePmyFull textBtn="Choisir l'offre Pro mensuel" containerStyle="mt-5 mb-4 w-100" className="w-100"/>
                                </div>
                            </Col>
                            <Col onClick={this.handleChangePlanToAnnual} sm="12" md="8" lg="6" xl="4" className={this.state.selectedPlan === 1 ? this.state.classBlur + classListCol + customColPlan2 : classListCol + customColPlan2}>
                                <div class="block-prices">
                                    <H2 className="mt-4 mb-3" title="Annuel"/>
                                    <p class="price">39€<span> /mois</span></p>
                                    <p>Souscrivez pour <span class="fw-600">468€/an</span>. Réglable en une fois<br/><span class="fz-14">(renouvellement automatique en fin de contrat)</span></p>
                                    <PmyBtn onClick={this.handleSelectedAnnualPlan} isDisabled={this.state.selectedPlan === 1} btnIsLargePmyFull textBtn="Choisir l'offre Pro annuel" containerStyle="mt-5 mb-4 w-100" className="w-100"/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}