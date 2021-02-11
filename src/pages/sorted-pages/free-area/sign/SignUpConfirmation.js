import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import VideoSecondary from '../../../../assets/video/VideoSecondary.mp4';
import H1 from '../../../components/elements/title/H1';
import FeaturesList from '../../../components/elements/FeaturesList';
import PmyBtn from '../../../components/button/PmyBtn';
import queryString from 'query-string';

class SignUpConfirmation extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
        const parsed = queryString.parse(window.location.search);
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/confirm-signup', {
            method: 'POST',
            body: JSON.stringify({ 
                code: parsed.code, 
                username: parsed.username,
                newsletter:parsed.newsletter
            })
        })
        .then(res => {
            return res.json();
        })
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Inscription confirmée - Asking Franklin</title>
                <meta name="description" content="Inscription confirmée - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 mt-6 block-style position-relative overflow-visible">
                    <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                        <H1 className="mb-5" title={t('sign.registerConfirmation.h1')}/>
                        <p class="mb-5 d-flex flex-column fw-600">
                            <span class="mb-2">{t('sign.registerConfirmation.p1')}</span>
                            <span>{t('funnel.payment.summary.introFeatures')}</span>
                        </p>
                        <FeaturesList className="mt-4 mb-5"/>
                        <PmyBtn redirectTo={t('url.signIn')} linkIsLargePmyFull textLink={t('sign.registerConfirmation.linkSignIn')} customBtnClass="w-md-100"/>
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

export default withTranslation()(SignUpConfirmation);