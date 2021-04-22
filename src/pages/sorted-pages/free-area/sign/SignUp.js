import React from 'react';
import i18n from '../../../../i18n';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import { Redirect } from 'react-router-dom';
import H1 from '../../../components/elements/title/H1';
import SignUpForm from '../../../components/form/elements/SignUpForm';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        var token = localStorage.getItem('af_token');
        if(token) {
            this.props.history.push(i18n.t('url.offers'));
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.signUp')}</title>
                <meta name="description" content={this.props.t('description.signUp')}/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    render() {
        
        const { t } = this.props;
        const ctx = '?ctx=buy';

        if(this.state.redirect) { 
            return <Redirect to={this.props.location.search !== ctx ? t('url.signIn') : t('url.signIn') + ctx}/>
        }

        return (
            <div id="signUp" class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container className="px-0 mt-6">
                    <StepperFunnel activeStep={1} firstStep={t('funnel.stepper.1')} secondStep={t('funnel.stepper.2')} thirdStep={t('funnel.stepper.3')}/>
                </Container>
                <Container className="px-0">
                    <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                        <H1 className="mb-5" title={t('sign.register.h1')}/>
                        <SignUpForm/>
                        <div class="d-flex flex-column mt-3 pt-3">
                            <ArrowTextLink redirectTo={t('url.signIn')} textLink={t('sign.register.linkSignIn')}/>
                        </div>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(SignUp);