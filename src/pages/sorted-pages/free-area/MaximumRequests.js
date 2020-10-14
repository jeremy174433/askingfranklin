import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import VideoSecondary from '../../../assets/video/VideoSecondary.mp4';
import H1 from '../../components/elements/title/H1';
import FeaturesList from '../../components/elements/FeaturesList';
import PmyBtn from '../../components/button/PmyBtn';

export default class MaximumRequests extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Limite de recherches atteinte - Asking Franklin</title>
                <meta name="description" content="Limite de recherches atteinte - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
            </Helmet>
        );
    }

    render() {
        return (
            <div class="layout-style">
                {this.customHeadElement()}
                <Container id="maximumRequests" className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 mt-6 block-style position-relative overflow-visible">
                    <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                        <H1 className="mb-5" title="Vous avez atteint le nombre maximum de recherches gratuites pour aujourd'hui..."/>
                        <p class="mb-5 d-flex flex-column fw-600">
                            <span class="mb-2">Pour plus de recherches, il est nécessaire de passer à la version Pro.</span>
                            <span>Profiter ainsi de toute la puissance de Asking Franklin :</span>
                        </p>
                        <FeaturesList className="mt-4 mb-5"/>
                        <PmyBtn redirectTo="/tarifs" linkIsLargePmyFull textLink="Passer à la version Pro" customBtnClass="w-md-100"/>
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