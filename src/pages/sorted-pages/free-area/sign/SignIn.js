import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Redirect } from 'react-router-dom';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import SignInForm from '../../../components/form/elements/SignInForm';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
import Alert from '../../../components/elements/Alert';

class SignIn extends React.Component {
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
            this.setState({
                redirect: true
            });
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.signIn')}</title>
                <meta name="description" content={this.props.t('description.signIn')}/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    render() {

        const { t } = this.props;

        if(this.state.redirect) {
            return <Redirect to={this.state.toPlan ? t('url.offers') : '/' }/>
        } 

        else {
            return (
                <div id="signIn" class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                    {this.customHeadElement()}
                    {this.state.error && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={t('alert.signIn.noMatch')}/> }
                    <Container className="px-0 mt-6 mx-auto">
                        <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                            <H1 className="mb-5" title={t('sign.signIn.h1')}/>
                            <SignInForm handleConnect={this.props.handleConnect}/>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink redirectTo={t('url.forgotPassword')} textLink={t('sign.signIn.linkForgotPassword')} className="mb-3"/>
                                <ArrowTextLink redirectTo={t('url.pricing')} textLink={t('sign.signIn.linkRegister')}/>
                            </div>
                        </Col>
                    </Container>
                </div>
            )
        }
    }
}

export default withTranslation()(SignIn);