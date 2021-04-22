import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
import ForgotPasswordForm1 from '../../../components/form/elements/ForgotPasswordForm1';
import ForgotPasswordForm2 from '../../../components/form/elements/ForgotPasswordForm2';

class ForgotPassword extends React.Component {
    
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.forgotPassword')}</title>
                <meta name="description" content={this.props.t('description.forgotPassword')}/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    render() {

        const { t } = this.props;

        return (
            <div id="forgotPassword" class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container className="px-0 mt-6">
                    <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                        <H1 className="mb-5" title={t('sign.forgotPassword.h1')}/>
                        {
                            !this.props.emailSent ? 
                                <ForgotPasswordForm1 emailSent={this.props.emailSent}/>
                            :
                                <ForgotPasswordForm2/>
                        }
                        <ArrowTextLink redirectTo={t('url.signIn')} textLink={t('sign.forgotPassword.linkSignIn')} className="d-block mt-3 pt-3"/>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(ForgotPassword);