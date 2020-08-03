import React from 'react';
import H1 from '../../components/elements/title/H1';
import H2 from '../../components/elements/title/H2';
import { 
    Container,
    Row, 
    Col 
} 
from 'react-bootstrap';
import FeaturesList from '../../../assets/img/svg/switch/FeaturesList';
import Tick from '../../../assets/img/svg/Tick';
import PmyBtn from '../../components/button/PmyBtn';

export default class Pricing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPlan: 0
        }
        this.selectFirstPlan = this.selectFirstPlan.bind(this);
        this.selectSecondPlan = this.selectSecondPlan.bind(this);
    }

    selectFirstPlan() {
        this.setState({
            selectedPlan: 0
        });
    }

    selectSecondPlan() {
        this.setState({
            selectedPlan: 1
        });
    }

    render() {
        return (
            <Container id="pricing" className="px-0 pt-5 mt-5">
                <H1 className="text-center" title="Un outil aux services exceptionnels à un prix juste"/>
                <Row className="col-12 d-flex justify-content-around mx-0 mt-5 pt-5 px-0">
                    <Col sm="12" lg="6" xl="5" className="block-pricing block-pricing-free mb-5 mb-lg-0 mr-0 mr-lg-5 p-4 bgc-light rounded">
                        <H2 className="mb-3" title="Gratuit"/>
                        <p class="mb-3 pb-3">Convient pour les blogueurs et marketeurs indépendants cherchant à savoir quelles sont les requêtes des utilisateurs les plus observées par Google.</p>
                        <p class="price">0€</p>
                        <ul class="features-list my-5 d-flex flex-column">
                            <li><FeaturesList icon="search"/><span>Nombre de recherches par jour limitées <em class="fz-14">(3 maximum)</em></span></li>
                        </ul>
                        <PmyBtn redirectTo="/" linkIsLargePmyOutlineLight textLink="Continuer avec la version gratuite" containerStyle="mb-4" customBtnClass="w-100"/>
                    </Col>
                    <Col sm="12" lg="6" xl="5" className="block-pricing block-pricing-pro mt-5 mt-lg-0 p-4 bgc-light rounded">
                        <H2 className="color-primary mb-3" title="Pro"/>
                        <p class="mb-3 pb-3">Convient pour les agences et entreprises travaillant sur des projets nécessitant l'intervention d'experts SEO et marketeurs spécialistes.</p>
                        <div class="block-prices d-flex flex-column flex-sm-row">
                            <div onClick={this.selectFirstPlan} class="annual-plan mb-4 mb-sm-0 mr-0 mr-sm-4 p-3 w-100 text-center rounded" title="Plan mensuel">
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
                            <div onClick={this.selectSecondPlan} class="monthly-plan p-3 w-100 text-center rounded" title="Plan annuel">
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
                        <ul class="features-list my-5 d-flex flex-column">
                            <li><FeaturesList icon="search"/><span>Nombre de recherches illimitées</span></li>
                            <li><FeaturesList icon="filter"/><span>Requêtes filtrées par langues et pays</span></li>
                            <li><FeaturesList icon="support"/><span>Réponse prioritaire de l'équipe support</span></li>
                            <li><FeaturesList icon="image"/><span>Export des images en haute résolution</span></li>
                        </ul>
                        <PmyBtn redirectTo="/inscription" linkIsLargePmyFull textLink="Passer à la version Pro" containerStyle="mb-4" customBtnClass="w-100"/>
                    </Col>
                </Row>
            </Container>
        )
    }
}