import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container, Col } from 'react-bootstrap';
import Sidebar from '../../components/writing-franklin/Sidebar';
import Heading from '../../components/writing-franklin/Heading';
import Wysiwyg from '../../components/writing-franklin/Wysiwyg';
import Onboarding from '../../components/writing-franklin/Onboarding';
import CustomModal from '../../components/partials/modals/CustomModal';
import SignUpForm from '../../components/form/elements/SignUpForm';
import SignInForm from '../../components/form/elements/SignInForm';
import ForgotPasswordForm1 from '../../components/form/elements/ForgotPasswordForm1';
import ForgotPasswordForm2 from '../../components/form/elements/ForgotPasswordForm2';
import H2 from '../../components/elements/title/H2';
import ArrowTextLink from '../../components/elements/link/ArrowTextLink';

class WritingFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
            showSignUp: true,
            showSignIn: false,
            showForgotPwd: false,
            currentArticleId: null
        }
        this.showSignInForm = this.showSignInForm.bind(this);
        this.showSignUpForm = this.showSignUpForm.bind(this);
        this.showForgotPwdForm = this.showForgotPwdForm.bind(this);
        this.handleArticleChange = this.handleArticleChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        var token = localStorage.getItem('af_token');
        this.setState({
            isConnected: (token && token.length > 0) ? true : false
        }, () => {
            if (this.state.isConnected === false) {
                document.body.classList.add('no-y-scroll');
            }
        });
    }
   
    customHeadElement() {
        return (
            <Helmet>
                <title>Generate a new article</title>
                <meta name="description" content="Generate your own article with Asking Franklin tool"/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    showSignInForm() {
        this.setState({
            showSignUp: false,
            showSignIn: true,
            showForgotPwd: false,
        });
    }

    showSignUpForm() {
        this.setState({
            showSignUp: true,
            showSignIn: false,
            showForgotPwd: false,
        });
    }

    showForgotPwdForm() {
        this.setState({
            showSignUp: false,
            showSignIn: false,
            showForgotPwd: true,
        });
    }

    handleArticleChange(articleId) {
        this.setState({
            currentArticleId: articleId
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="writingFranklin" className="px-0 mt-6">
                    <p class="mb-3 fz-14">Language supporté : Anglais</p>
                    <div class="w-100 d-flex flex-column flex-xl-row">
                        <Sidebar handleArticleChange={this.handleArticleChange} className={this.props.bannerIsActive && 'banner-showed'}/>
                        <Col className="block-style overflow-visible mx-auto p-3 w-100">
                            <Heading currentArticleId={this.state.currentArticleId} bannerIsActive={this.props.bannerIsActive}/>
                            {
                                this.state.currentArticleId ?
                                    <Wysiwyg currentArticle={this.state.currentArticleId}/> 
                                : 
                                    <Onboarding/>
                            }
                        </Col>
                    </div>
                </Container>
                
                {this.state.isConnected === false &&
                    <CustomModal modalShowed={true} bodyClassName="d-flex flex-row px-4 py-4">

                        <div class={this.state.showSignUp ? 'wf-sign-up-form form-tab-active' : 'wf-sign-up-form wf-sign-up-form-out'}>
                            <H2 title="Il est nécessaire de se créer un compte pour continuer" className="mb-5"/>
                            <SignUpForm/>
                            <ArrowTextLink onClick={this.showSignInForm} text={t('sign.register.linkSignIn')} className="mt-3"/>
                        </div>

                        <div class={this.state.showSignIn ? 'wf-sign-in-form form-tab-active' : this.state.showForgotPwd ? 'wf-sign-in-form wf-sign-in-form-out-pwd' : 'wf-sign-in-form wf-sign-in-form-out'}>
                            <H2 title="Connecter vous pour commencer à rédiger" className="mb-5"/>
                            <SignInForm handleConnect={this.props.handleConnect}/>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink onClick={this.showForgotPwdForm} text={t('sign.signIn.linkForgotPassword')} className="mb-3"/>
                                <ArrowTextLink onClick={this.showSignUpForm} text={t('sign.signIn.linkRegister')}/>
                            </div>
                        </div>

                        <div class={this.state.showForgotPwd ? 'wf-forgot-pwd-form form-tab-active' : 'wf-forgot-pwd-form wf-forgot-pwd-form-out'}>
                            <H2 title="Récupérer votre mot de passe" className="mb-5"/>
                            {
                                !this.props.emailSent ? 
                                    <ForgotPasswordForm1 emailSent={this.props.emailSent}/>
                                :
                                    <ForgotPasswordForm2/>
                            }
                            <ArrowTextLink onClick={this.showSignInForm} text={t('sign.forgotPassword.linkSignIn')} className="mt-3"/>
                        </div>

                    </CustomModal>
                }

            </div>
        )
    }
}

export default withTranslation()(WritingFranklin);