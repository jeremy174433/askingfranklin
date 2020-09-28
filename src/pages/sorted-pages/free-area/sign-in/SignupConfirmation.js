import React from 'react';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import VideoSecondary from '../../../../assets/video/VideoSecondary.mp4';
import H1 from '../../../components/elements/title/H1';
import FeaturesList from '../../../components/elements/FeaturesList';
import PmyBtn from '../../../components/button/PmyBtn';
import queryString from 'query-string';

export default class SignUpConfirmation extends React.Component {

    componentDidMount() {
        const parsed = queryString.parse(window.location.search);
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/confirm-signup', {
            method: 'POST',
            body: JSON.stringify({ code: parsed.code, username: parsed.username})
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            // console.log(res);
        })
    }

    render() {
        return (
            <div class="layout-style">
                <Container className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 mt-6 block-style position-relative overflow-visible">
                    <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                        <H1 className="mb-5" title="Votre compte est validé 🚀"/>
                        <p class="mb-5 d-flex flex-column fw-600">
                            <span class="mb-2">Vous avez désormais la possibilité de souscire à Asking Franklin.</span>
                            <span>Profiter ainsi de toute la puissance de la version Pro :</span>
                        </p>
                        <FeaturesList className="mt-4 mb-5"/>
                        <PmyBtn redirectTo="/connexion" linkIsLargePmyFull textLink="Se connecter et devenir Pro" customBtnClass="w-md-100"/>
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