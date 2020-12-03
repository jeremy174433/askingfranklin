import React from 'react';
import { Container } from 'react-bootstrap';
import Countdown from 'react-countdown';
import Close from '../../../assets/img/svg/Close';

const Completionist = () => <p class="promotion-timer promotion-timer-ended">Promotion terminé ⏱</p>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <Completionist/>;
    } 
    else {
        return <p class="promotion-timer promotion-timer-count">{days}<span>j</span> {hours}<span>h</span> {minutes}<span>m</span> {seconds}<span>s</span></p>;
    }
};

export default class Banner extends React.Component {
    
    render() {

        const bannerClass = ' px-4 px-xl-5 py-5 py-lg-2 w-100';

        return (
            <div id="banner" class={this.props.bannerIsActive ? bannerClass : 'banner-not-showed' + bannerClass}>
                <Container className="px-0 pb-3 pb-lg-0 d-flex flex-lg-row align-items-center justify-content-lg-center position-relative">
                    <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between justify-content-xl-center w-100">
                        <p class="promotion-text mb-5 mb-lg-0 pr-0 pr-lg-4 pr-xl-5 mr-0 mr-lg-4 mr-xl-5 text-center text-lg-left">
                            <span class="fz-18 fw-600">Offre Black Week : </span>
                            <span class="promotion-percentage fw-600">-20% </span>
                            <span class="fz-18">sur l'abonnement Mensuel avec le code</span>
                            <span class="promotion-code ml-2 fw-600">BFRANKLIN20</span>
                        </p>
                        <Countdown date={Date.now() + ( Date.parse('11 Dec 2020 23:59:59 GMT') - Date.now() ) } renderer={renderer}/>
                    </div>
                    <div onClick={this.props.onClick} class="close-banner position-absolute d-flex d-lg-none" style={{ top: '-24px', right: '0' }} title="Masquer">
                        <Close width="16" height="16" fill="#FFF"/>
                    </div>
                </Container>
            </div>
        )
    }
}