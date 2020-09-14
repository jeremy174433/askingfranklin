import React from 'react';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import VideoMaximumRequests from '../../../../assets/video/VideoMaximumRequests.mp4';
import H1 from '../../../components/elements/title/H1';
import PmyBtn from '../../../components/button/PmyBtn';
import queryString from 'query-string';

export default class ConfirmationSignup extends React.Component {
    componentDidMount(){
        const parsed = queryString.parse(window.location.search);
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/confirm-signup', {
            method: 'POST',
            body: JSON.stringify({ code: parsed.code, username: parsed.username})
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            console.log(res)
        })
    }
    render() {
        return (
            <Container id="maximumRequests" className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 mt-6 block-style position-relative overflow-visible">
                <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                    <H1 className="mb-5" title="Votre compte est validé 🚀"/>
                    <p class="mb-5 d-flex flex-column fw-600">Vous pouvez maintenant souscrire à Asking Franklin Pro.</p>
                    <PmyBtn redirectTo="/plans" linkIsLargePmyFull textLink="Me connecter et m'abonner à Asking Franklin" customBtnClass="w-md-100"/>
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