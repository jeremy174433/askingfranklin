import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import VideoSecondary from '../../../../assets/video/VideoSecondary.mp4';
import H1 from '../../../components/elements/title/H1';
import PmyBtn from '../../../components/button/PmyBtn';

class ConfirmationPayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if(localStorage.getItem('af_is_sub') <= '0') {
            this.setState({
                redirect: true
            });
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.paymentConfirm')}</title>
                <meta name="description" content={this.props.t('description.paymentConfirm')}/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    render() {

        const { t } = this.props;

        if (this.state.redirect) { 
            return <Redirect to="/"/>
        }

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner mt-6' : 'layout-style mt-6'}>
                {this.customHeadElement()}
                <Container>
                    <StepperFunnel activeStep={2} firstStep={t('funnel.stepperPayment.1')} secondStep={t('funnel.stepperPayment.2')} thirdStep={t('funnel.stepperPayment.3')}/>
                </Container>
                <Container className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 block-style position-relative overflow-visible">
                    <Col md="12" lg="6" className="mt-0 mb-5 my-md-5 px-0">
                        <H1 className="mb-5" title={t('funnel.paymentConfirmation.h1')}/>
                        <p class="mb-5 d-flex flex-column fw-600">{t('funnel.paymentConfirmation.p')}</p>
                        <PmyBtn redirectTo="/" linkIsLargePmyFull textLink={t('funnel.paymentConfirmation.cta')} customBtnClass="w-md-100"/>
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

export default withTranslation()(ConfirmationPayment);