import React from 'react';
import { Container } from 'react-bootstrap';
import Countdown from 'react-countdown-now';

const Completionist = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist />;
    } 
    else {
        return <p class="promotion-timer">{days}<span>j</span> {hours}<span>h</span> {minutes}<span>m</span> {seconds}<span>s</span></p>;
    }
};

export default class Banner extends React.Component {

    render() {
        return (
            <div id="banner" class="px-4 px-xl-5 py-2 w-100 d-flex justify-content-center position-fixed">
                <Container className="px-0 d-flex flex-lg-row align-items-center justify-content-lg-center">
                    <div class="d-flex flex-row align-items-center justify-content-between">
                        <p class="promotion-text">
                            <span class="fw-600">Offre de lancement :&nbsp;</span>
                            <span class="promotion-percentage fw-600 ">-20%&nbsp;</span>
                            sur l'abonnement Mensuel avec le code :
                            <span class="promotion-code ml-2 fw-600">START-AF-20</span>
                        </p>
                        <Countdown date={Date.now() + 1296000000 } renderer={renderer}/>
                    </div>
                </Container>
            </div>
        )
    }
}