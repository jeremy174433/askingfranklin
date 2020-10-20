import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import VideoSecondary from '../../../../assets/video/VideoSecondary.mp4';
import H1 from '../../../components/elements/title/H1';
import PmyBtn from '../../../components/button/PmyBtn';

export default class ConfirmationPayment extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Version Pro - Asking Franklin, votre outil SEO français</title>
                <meta name="description" content="Vous êtes désormais un membre Pro - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    render() {
        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner mt-6' : 'layout-style mt-6'}>
                {this.customHeadElement()}
                <Container>
                    <StepperFunnel activeStep={2} firstStep="Choix de l'offre" secondStep="Paiement" thirdStep="Débuter en Pro"/>
                </Container>
                <Container className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 block-style position-relative overflow-visible">
                    <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                        <H1 className="mb-5" title="Votre paiement a été accepté"/>
                        <p class="mb-5 d-flex flex-column fw-600">Vous pouvez à présent accéder aux avantages Pro de Asking Franklin, en illimité.</p>
                        <PmyBtn redirectTo="/" linkIsLargePmyFull textLink="Utiliser Asking Franklin" customBtnClass="w-md-100"/>
                    </Col>
                    <Col md="12" lg="6" className="px-0 d-flex align-items-center justify-content-center">
                        <video loop autoPlay muted style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                            <source src={VideoSecondary} type="video/mp4"/>
                        </video>
                    </Col>
                </Container>
            </div>
        )
    }
}