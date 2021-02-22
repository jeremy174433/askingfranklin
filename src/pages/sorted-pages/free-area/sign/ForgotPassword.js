import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col 
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import H1 from '../../../components/elements/title/H1';
import Input from '../../../components/form/Input';
import PmyBtn from '../../../components/button/PmyBtn';
import ArrowTextLink from '../../../components/elements/link/ArrowTextLink';
import EyeShowHide from '../../../../assets/img/svg/switch/EyeShowHide';
import Alert from '../../../components/elements/Alert';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            code: '',
            newPassword: '',
            pwdDefaultType: 'password',
            success: false,
            alertIsShowedCodeSent: false,
            alertIsShowed: false,
            error: false,
            alertIsShowedError: false,
            alertIsShowedLimit: false,
            emailSent: false,
            passwordIsChanged: false
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
        this.handleCode = this.handleCode.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleSubmitConfirm = this.handleSubmitConfirm.bind(this);
        this.handleInputType = this.handleInputType.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Mot de passe oublié - Asking Franklin</title>
                <meta name="description" content="Mot de passe oublié ? Changez le mot de passe de votre espace ici !"/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    handleEmail(e) {
        this.setState({
            email: e.target.value
        });
    }
    
    handleCode(e) {
        this.setState({
            code: e.target.value
        });
    }
    
    handleNewPassword(e) {
        this.setState({
            newPassword: e.target.value
        });
    }

    handleInputType() {
        this.setState({ pwdDefaultType: this.state.pwdDefaultType === 'password' ? 'text' : 'password' });
    }

    handleSubmitConfirm(event) {
        event.preventDefault();
        this.handleCloseAlert();
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/confirm-forgot-password', {
            method: 'POST',
            body: JSON.stringify({ code: this.state.code, password: this.state.newPassword, username: this.state.email })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if(res.message === 'Password has been changed successfully') {
                this.setState({
                    error: false,
                    success: true,
                    alertIsShowed: true,
                    passwordIsChanged: true
                });
            }
            else if(res.message === 'Unknown error An error occurred (LimitExceededException) when calling the ConfirmForgotPassword operation: Attempt limit exceeded, please try after some time. ') {
                this.setState({
                    error: true,
                    success: false,
                    alertIsShowedLimit: true
                });
            }
            else {
                this.setState({
                    error: true,
                    success: false,
                    alertIsShowedError: true
                });
            }
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleCloseAlert();
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/forgot-password', {
            method: 'POST',
            body: JSON.stringify({ username: this.state.email })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            this.setState({
                success: true,
                alertIsShowedCodeSent: true,
                emailSent: true
            });
        })
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            alertIsShowedCodeSent: false,
            alertIsShowed: false,
            error: false,
            alertIsShowedError: false
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div id="forgotPassword" class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowedCodeSent && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowedCodeSent ? 'alert-msg-visible' : ''} alertId="successMessage" msg={[ t('alert.forgotPassword.sendVerifCode'), <span class="fw-600">{this.state.email}</span>]}/> }
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={[ t('alert.forgotPassword.success'), <Link to={t('url.signIn')}>{t('alert.forgotPassword.successLink')}</Link>]}/> }
                {this.state.error && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowedError && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowedError ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={t('alert.forgotPassword.error')}/> }
                {this.state.error && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowedLimit && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowedLimit ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={t('alert.forgotPassword.errorLimit')}/> }
                {!this.state.emailSent ? 
                    <Container className="px-0 mt-6">
                        <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                            <H1 className="mb-5" title={t('sign.forgotPassword.h1')}/>
                            <form onSubmit={this.handleSubmit} method="POST">
                                <Input 
                                    onChange={this.handleEmail} 
                                    type="email" 
                                    label={t('form.label.email')}
                                    for="email" 
                                    required={true} 
                                    infoMsg={this.state.email.length < 1 ? t('alert.form.fieldRequired') : !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail')}
                                />
                                <PmyBtn 
                                    type="submit" 
                                    isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/)} 
                                    btnIsMediumPmyFull 
                                    textBtn={t('sign.forgotPassword.cta1')} 
                                    className="w-sm-100"
                                />
                            </form>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink redirectTo={t('url.signIn')} textLink={t('sign.forgotPassword.linkSignIn')}/>
                            </div>
                        </Col>
                    </Container>
                :
                    <Container className="px-0 mt-6">
                        <Col sm="12" lg="8" xl="6" className="px-0 mx-auto">
                            <H1 className="mb-5" title={t('sign.forgotPassword.h1')}/>
                            <form onSubmit={this.handleSubmitConfirm} method="POST">
                                <Input 
                                    onChange={this.handleCode} 
                                    disabled={this.state.passwordIsChanged === true} 
                                    type="text" 
                                    value={this.state.code} 
                                    label={t('form.label.codeSentByEmail') + this.state.email} 
                                    for="codeToken"
                                    maxlength={6} 
                                    minlength={6} 
                                    required={true} 
                                    infoMsg={this.state.code.length !== 6 && t('alert.form.codePattern')}
                                />
                                <Input 
                                    containerStyle="input-password-column"
                                    onChange={this.handleNewPassword} 
                                    disabled={this.state.passwordIsChanged === true} 
                                    type={this.state.pwdDefaultType} 
                                    value={this.state.newPassword} 
                                    label={t('form.label.newPassword')}
                                    labelInfo={[ t('form.label.passwordPattern1'), <br class="d-block d-sm-none"/>, t('form.label.passwordPattern2')]}
                                    minLength={8} 
                                    for="newPassword"
                                    onClick={this.handleInputType} 
                                    inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>} 
                                    required={true} 
                                    infoMsg={!this.state.newPassword.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && t('alert.form.patternPassword')}
                                />
                                <PmyBtn 
                                    type="submit" 
                                    isDisabled={this.state.code.length !== 6 || !this.state.newPassword.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) || this.state.passwordIsChanged === true} 
                                    btnIsMediumPmyFull 
                                    textBtn={t('sign.forgotPassword.cta2')}  
                                    className="w-sm-100"
                                />
                            </form>
                            <div class="d-flex flex-column mt-3 pt-3">
                                <ArrowTextLink redirectTo={t('url.signIn')} textLink={t('sign.forgotPassword.linkSignIn')}/>
                            </div>
                        </Col>
                    </Container>
                }
            </div>
        )
    }
}

export default withTranslation()(ForgotPassword);