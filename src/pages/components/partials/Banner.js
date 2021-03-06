import React from 'react';
import i18n from '../../../i18n';
import { withTranslation } from 'react-i18next';
import { Container } from 'react-bootstrap';
import Countdown from 'react-countdown';
import Close from '../../../assets/img/svg/Close';

function Banner(props) {

    const t = i18n.t.bind(i18n);

    const bannerClass = ' px-4 px-xl-5 py-5 py-lg-2 w-100';

    const Completionist = () => <p class="promotion-timer promotion-timer-ended">{t('banner.end')}⏱</p>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist/>;
        } 
        else {
            return <p class="promotion-timer promotion-timer-count">{days}<span>{t('banner.date.d')}</span> {hours}<span>{t('banner.date.h')}</span> {minutes}<span>{t('banner.date.m')}</span> {seconds}<span>{t('banner.date.s')}</span></p>;
        }
    };

    return (
        <div id="banner" class={props.bannerIsActive ? bannerClass : 'banner-not-showed' + bannerClass}>
            <Container className="px-0 pb-3 pb-lg-0 d-flex flex-lg-row align-items-center justify-content-lg-center position-relative">
                <div class="d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between justify-content-xl-center w-100">
                    <p class="promotion-text mb-5 mb-lg-0 pr-0 pr-lg-4 pr-xl-5 mr-0 mr-lg-4 mr-xl-5 text-center text-lg-left">
                        <span class="fz-18 fw-600">{t('banner.promo.title')}</span>
                        <span class="promotion-percentage ml-1 fw-600">-20%</span>
                        <span class="mx-2 fz-18">{t('banner.promo.withCode')}</span>
                        <span class="promotion-code fw-600">BFRANKLIN20</span>
                    </p>
                    <Countdown date={Date.now() + ( Date.parse('27 Feb 2021 23:59:59 GMT') - Date.now() ) } renderer={renderer}/>
                </div>
                <div onClick={props.onClick} class="state-interaction-element position-absolute d-flex d-lg-none" style={{ top: '-24px', right: '0' }} title={t('actions.hide')}>
                    <Close width="16" height="16" fill="#FFF"/>
                </div>
            </Container>
        </div>
    );

} 

export default withTranslation()(Banner);