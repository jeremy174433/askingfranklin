import React from 'react';
import i18n from '../../../../i18n';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import StepperFunnel from '../../../components/form/elements/StepperFunnel';
import { 
    Redirect, 
    Link 
} from 'react-router-dom';
import H1 from '../../../components/elements/title/H1';
import Input from '../../../components/form/Input';
import Checkbox from '../../../components/form/Checkbox';
import PmyBtn from '../../../components/button/PmyBtn';
import EyeShowHide from '../../../../assets/img/svg/switch/EyeShowHide';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
import Alert from '../../../components/elements/Alert';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            privacy: '',
            newsletter: '',
            checkboxChecked: false,
            pwdDefaultType: 'password',
            success: false,
            alertIsShowed: false,
            emailIsAlreadyTaken: false,
            redirect: false,
        }
        this.handleInputType = this.handleInputType.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleNewsletter = this.handleNewsletter.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
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

    handleInputType() {
        this.setState({ pwdDefaultType: this.state.pwdDefaultType === 'password' ? 'text' : 'password' });
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    handlePrivacy() {
        this.setState({ privacy: this.state.privacy === '' ? 'privacyChecked' : '' });
    }

    handleNewsletter() {
        this.setState({ newsletter: this.state.newsletter === '' ? 'newsletterChecked' : '' });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleCloseAlert();
        if(this.state.email && this.state.password && this.state.privacy) {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/signup', {
                method: 'POST',
                body: JSON.stringify({ 
                    email: this.state.email, 
                    password: this.state.password,
                    privacy: this.state.privacy ? 1 : 0,
                    newsletter: this.state.newsletter ? 1 : 0
                })
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if(res.error) {
                    console.log(res.error);
                } 
                else {
                    if(res.message === 'This username already exist') {
                        this.setState({
                            alertIsShowed: true,
                            emailIsAlreadyTaken: true
                        });
                    }
                    if (res.message === 'Password should have Caps,                          Special chars, Numbers') {
                        this.setState({
                            alertIsShowed: true
                        });
                    }
                    else {
                        this.setState({
                            success: true,
                            alertIsShowed: true
                        });
                    }
                }
            })
        }
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowed: false,
            emailIsAlreadyTaken: false
        });
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
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={t('alert.signUp.success')}/> }
                {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={t('alert.signUp.emailAlreadyTaken')}/> }
                <Container className="px-0 mt-6">
                    <StepperFunnel activeStep={1} firstStep={t('funnel.stepper.1')} secondStep={t('funnel.stepper.2')} thirdStep={t('funnel.stepper.3')}/>
                </Container>
                <Container className="px-0">
                    <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                        <H1 className="mb-5" title={t('sign.register.h1')}/>
                        <form onSubmit={this.handleSubmit} method="POST" id="signUpForm">
                            <Input 
                                onChange={this.handleEmail} 
                                value={this.state.email}
                                type="email" 
                                label={t('form.label.email')}
                                for="email"
                                required={true}
                                infoMsg={this.state.email.length < 1 ? t('alert.form.fieldRequired') : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail')}
                            />
                            <Input 
                                containerStyle="input-password-column"
                                onChange={this.handlePassword} 
                                value={this.state.password}
                                type={this.state.pwdDefaultType} 
                                label={t('form.label.password')}
                                labelInfo={[t('form.label.passwordPattern1'), <br class="d-block d-sm-none"/>, t('form.label.passwordPattern2')]}
                                minLength={8} 
                                for="password"
                                onClick={this.handleInputType}
                                inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} 
                                required={true}
                                infoMsg={!this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && t('alert.form.patternPassword')}
                            />
                            <Checkbox 
                                label={[ t('form.checkbox.labelTcs-1'), <Link to={t('url.tcs')} target="_blank" rel="noopener" title={t('titleElementBrowser.tcs')} class="fz-16">{t('form.checkbox.labelTcs-2')}</Link>, <em class="fz-14 ml-1">{t('form.checkbox.labelTcs-3')}</em>]} 
                                onChange={this.handlePrivacy} 
                                for="checkPrivacy"
                                value={this.state.privacy} 
                                required={true}
                                className="pb-3"
                            />
                            <Checkbox 
                                label={[ t('form.checkbox.labelNewsletter'), <em class="fz-14">{t('footer.newsletter.rhythm')}</em>]} 
                                onChange={this.handleNewsletter} 
                                for="checkNewsletterSignUp"
                                value={this.state.newsletter} 
                                className="mb-3 pb-3"
                            />
                            <PmyBtn 
                                type="submit" 
                                title={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || !this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) || this.state.privacy === '' ? t('titleElementBrowser.form.registerError') : t('sign.register.cta')}
                                isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || !this.state.password.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) || this.state.privacy === ''} 
                                btnIsMediumPmyFull 
                                textBtn={t('sign.register.cta')} 
                                className="w-sm-100"
                            />
                        </form>
                        <div class="d-flex flex-column mt-3 pt-3">
                            <ArrowTextLink redirectTo={t('link.signIn')} textLink={t('sign.register.linkSignIn')}/>
                        </div>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(SignUp);