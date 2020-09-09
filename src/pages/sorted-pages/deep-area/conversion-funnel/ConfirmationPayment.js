import React from 'react';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import VideoMaximumRequests from '../../../../assets/video/VideoMaximumRequests.mp4';
import H1 from '../../../components/elements/title/H1';
import PmyBtn from '../../../components/button/PmyBtn';

export default class ConfirmationPayment extends React.Component {

    render() {
        return (
            <Container id="maximumRequests" className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 mt-6 block-style position-relative overflow-visible">
                <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                    <H1 className="mb-5" title="Votre paiement a été accepté"/>
                    <p class="mb-5 d-flex flex-column fw-600">Vous pouvez à présent accéder aux avantages Pro de Asking Franklin, en illimité.</p>
                    <PmyBtn redirectTo="/" linkIsLargePmyFull textLink="Utiliser Asking Franklin" customBtnClass="w-md-100"/>
                </Col>
                <Col md="12" lg="6" className="px-0 d-flex align-items-center justify-content-center">
                    <video loop autoPlay muted style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                        <source src={VideoMaximumRequests} type="video/mp4"/>
                    </video>
                </Col>
            </Container>
        )
    }
}