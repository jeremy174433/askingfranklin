import React from 'react';
import { refreshTokenFnc } from '../../../utils/refreshToken';
import i18n from '../../../i18n';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import H4 from '../../components/elements/title/H4';
import Tabs from '../../components/button/Tabs';
import PmyBtn from '../../components/button/PmyBtn';
import Input from '../../components/form/Input';
import EyeShowHide from '../../../assets/img/svg/switch/EyeShowHide';
import Checkbox from '../../components/form/Checkbox';
import Alert from '../../components/elements/Alert';
import FeaturesList from '../../components/elements/FeaturesList';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabActive: 0,
            newEmail: '',
            pwdDefaultType: 'password',
            newPasswordConfirmation: '',
            newPassword: '',
            subscriptionInProgress: false,
            emailIsAlreadyTaken: false,
            subscriptionState: false,
            alertIsShowed: false,
            noSubscription: true,
            passwordChanged: false,
            emailChanged: false,
            countClickCheckbox: 0,
            currentPeriodEnd: 0
        }
        this.loadPageData = this.loadPageData.bind(this);
        this.handleSelectAccount = this.handleSelectAccount.bind(this);
        this.handleSelectSubscription = this.handleSelectSubscription.bind(this);
        this.handleNewEmail = this.handleNewEmail.bind(this);
        this.handleNewPasswordConfirmation = this.handleNewPasswordConfirmation.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleInputType = this.handleInputType.bind(this);
        this.handleSubscriptionState = this.handleSubscriptionState.bind(this);
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
        this.handleSubmitCheckbox = this.handleSubmitCheckbox.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    loadPageData() {
        var token = localStorage.getItem('af_token');
        if (token) {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-plan', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.message === 'The incoming token has expired') {
                    refreshTokenFnc(this.loadPageData, false);
                }
                this.setState({
                    subscriptionInProgress: res.message.length > 0  && !res.message[0].cancel_at_period_end ? true : false,
                    noSubscription: res.message.length === 0 ? true : false,
                    currentPeriodEnd: res.message.length === 0 ? false : new Date(res.message[0].current_period_end * 1000).toLocaleDateString(),
                });
                if(res.message[0] && res.message[0].cancel_at_period_end) {
                    var s = new Date(res.message[0].cancel_at * 1000).toLocaleDateString('fr-FR');
                    this.setState({
                        subscriptionEnd: s
                    });
                }
            })
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-email', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.message === 'The incoming token has expired') {
                    refreshTokenFnc(this.loadPageData, false);
                }
                else {
                    this.setState({
                        curr_email: res.message[0]
                    });
                }
            })
            .catch(error => {
                if(error === 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.loadPageData, false);
                }
            })
        } 
        else {
            this.props.history.push(i18n.t('url.offers'));
        }
    }

    componentDidMount() {
        this.loadPageData();
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Mon compte - Asking Franklin</title>
                <meta name="description" content="Votre compte - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    handleSelectAccount() {
        this.setState({
            tabActive: 0
        });
    }

    handleSelectSubscription() {
        this.setState({
            tabActive: 1
        });
    }

    handleNewEmail(e) {
        this.setState({
            newEmail: e.target.value
        });
    }

    handleNewPassword(e) {
        this.setState({
            newPassword: e.target.value
        });
    }

    handleNewPasswordConfirmation(e) {
        this.setState({
            newPasswordConfirmation: e.target.value
        });
    }

    handleInputType() {
        this.setState({ 
            pwdDefaultType: this.state.pwdDefaultType === 'password' ? 'text' : 'password'
        });
    }

    handleSubscriptionState() {
        this.setState({
            subscriptionInProgress: this.state.subscriptionInProgress === true ? false : true,
            countClickCheckbox: this.state.countClickCheckbox === 0 ? 1 : 0
        });
    }

    handleSubmitEmail(event) { 
        event.preventDefault();
        this.handleCloseAlert();
        var username = localStorage.getItem('af_username');
        var token = localStorage.getItem('af_token');
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/change-email', {
            headers: {
                'Authorization': token
            },
            method: 'POST',
            body: JSON.stringify({ username:username, new_email: this.state.newEmail })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if (res.message === 'The incoming token has expired') {
                refreshTokenFnc(this.handleSubmitEmail, event);
            }
            else if(res.message === 'Unknown error An error occurred (AliasExistsException) when calling the AdminUpdateUserAttributes operation: An account with the given email already exists. ') {
                this.setState({
                    alertIsShowed: true,
                    emailIsAlreadyTaken: true
                });
            }
            else if(res.message === 'Email as been changed successfully') {
                this.setState({
                    alertIsShowed: true,
                    emailChanged: true,
                    newEmail: ''
                });
                fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-email', {
                    headers: {
                        'Authorization': token
                    },
                    method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    if (res.message === 'The incoming token has expired') {
                        refreshTokenFnc(this.handleSubmitEmail, event);
                    }
                    else {
                        this.setState({
                            curr_email: res.message[0]
                        });
                    }
                })
                .catch(error => {
                    if(error === 'TypeError: Failed to fetch') {
                        refreshTokenFnc(this.componentDidMount, false);
                    }
                })
            }
        })
        .catch(error => {
            if(error === 'TypeError: Failed to fetch') {
                refreshTokenFnc(this.componentDidMount, false);
            }
        })
    }

    handleSubmitPassword(event) {
        event.preventDefault();
        this.handleCloseAlert();
        var username = localStorage.getItem('af_username');
        var token = localStorage.getItem('af_token');
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/change-password', {
            headers: {
                'Authorization': token
            },
            method: 'POST',
            body: JSON.stringify({ username:username, proposed_password: this.state.newPassword })
        })
        .then(res => {
            return res.json();
        })
        .then(res => {
            if (res.message === 'The incoming token has expired') {
                refreshTokenFnc(this.handleSubmitPassword, event);
            }
            else if(res.message === 'Password has been changed successfully') {
                this.setState({
                    alertIsShowed: true,
                    passwordChanged: true,
                    newPassword: '',
                    newPasswordConfirmation: ''
                });
            }
        })
        .catch(error => {
            if(error === 'TypeError: Failed to fetch') {
                refreshTokenFnc(this.componentDidMount, false);
            }
        })
    }

    handleSubmitCheckbox(e) {
        e.preventDefault();
        this.handleCloseAlert();
        var token = localStorage.getItem('af_token');
        if(this.state.subscriptionEnd) {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/reactivate-subscription', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.message === 'The incoming token has expired') {
                    refreshTokenFnc(this.handleSubmitCheckbox, e);
                } 
                else {
                    this.setState({
                        alertIsShowed: true,
                        subscriptionState: true,
                        subscriptionInProgress: true,
                        subscriptionEnd: null,
                        countClickCheckbox: 0
                    });
                }
            })
            .catch(error => {
                if(error === 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
            })
        } 
        else {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/cancel-subscription', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if (res.message === 'The incoming token has expired') {
                    refreshTokenFnc(this.handleSubmitCheckbox, e)
                }
                else {
                    this.setState({
                        alertIsShowed: true,
                        subscriptionState: true,
                        subscriptionInProgress: false,
                        subscriptionEnd: new Date(res.message.cancel_at * 1000).toLocaleDateString('fr-FR'),
                        countClickCheckbox: 0
                    });
                }
            })
            .catch(error => {
                if(error === 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.componentDidMount, false);
                }
            })
        }
    }

    handleCloseAlert() {
        this.setState({
            emailIsAlreadyTaken: false,
            subscriptionState: false,
            passwordChanged: false,
            subscriptionState: false,
            alertIsShowed: false
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="profilePage" className="px-0 mt-6">
                    {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg={t('alert.profile.emailAlreadyTaken')}/> }
                    {this.state.emailChanged && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={t('alert.profile.successEmail')}/> }
                    {this.state.passwordChanged && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={t('alert.profile.successPassword')}/> }
                    {this.state.subscriptionState && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={t('alert.profile.successStateSubscription')}/> }
                    <div class="block-style">
                        <H1 className="mb-3" title={t('profile.h1')}/>
                        <div class="d-flex flex-row flex-wrap mt-5">
                            <Tabs onClick={this.handleSelectAccount} isDisabled={this.state.tabActive === 0} textTab={t('profile.tabs.account')} title={t('profile.tabs.account')} className={this.state.tabActive === 0 ? 'pmy-tab-selected' : ''}/>
                            <Tabs onClick={this.handleSelectSubscription} isDisabled={this.state.tabActive === 1} textTab={t('profile.tabs.subscription')} title={t('profile.tabs.subscription')} className={this.state.tabActive === 1 ? 'pmy-tab-selected' : ''}/>
                        </div>
                        <main class="px-md-3 mx-md-3 mb-3">
                            {this.state.tabActive === 0 ?
                                <section class="mt-6">
                                    <form onSubmit={this.handleSubmitEmail} method="POST" class="block-style d-flex flex-column">
                                        <H4 className="mb-3 pb-3 fw-600" title={t('profile.sectionTitle.email')}/>
                                        <Input
                                            label={t('form.label.profile.currentEmail')}
                                            for="actualEmail"
                                            type="email"
                                            value={this.state.curr_email}
                                            disabled={true}
                                        />
                                        <Input
                                            label={t('form.label.profile.newEmail')}
                                            for="newEmail"
                                            value={this.state.newEmail}
                                            type="email"
                                            required={true}
                                            onChange={this.handleNewEmail}
                                            infoMsg={this.state.newEmail.length < 1 ? t('alert.form.fieldRequired') : !this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail') || this.state.newEmail === this.state.curr_email && t('alert.form.patternIdenticEmail')}
                                        />
                                        <PmyBtn type="submit" isDisabled={!this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || this.state.newEmail === this.state.curr_email} btnIsMediumPmyFull className="w-sm-100" textBtn={t('actions.save')} title={t('actions.save')}/>
                                    </form>
                                    <form onSubmit={this.handleSubmitPassword} method="POST" class="block-style d-flex flex-column mt-6">
                                        <H4 className="mb-3 pb-3 fw-600" title={t('profile.sectionTitle.password')}/>
                                        <Input
                                            containerStyle="input-password-column"
                                            label={t('form.label.profile.newPassword')}
                                            labelInfo={[ t('form.label.passwordPattern1'), <br class="d-block d-sm-none"/>, t('form.label.passwordPattern2')]}
                                            for="newPassword"
                                            minLength={8}
                                            value={this.state.newPassword}
                                            type={this.state.pwdDefaultType}
                                            onClick={this.handleInputType}
                                            inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                            required={true}
                                            onChange={this.handleNewPassword}
                                            infoMsg={!this.state.newPassword.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/) && t('alert.form.patternPassword')}
                                        />
                                        <Input
                                            label={t('form.label.profile.newPasswordConfirm')}
                                            for="newPasswordConfirmation"
                                            minLength={8}
                                            value={this.state.newPasswordConfirmation}
                                            type={this.state.pwdDefaultType}
                                            onClick={this.handleInputType}
                                            inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                            required={true}
                                            onChange={this.handleNewPasswordConfirmation}
                                            infoMsg={this.state.newPassword !== this.state.newPasswordConfirmation && t('alert.form.patternIdenticPassword')}
                                        />                        
                                        <PmyBtn type="submit" isDisabled={(this.state.newPasswordConfirmation !== this.state.newPassword) || !this.state.newPassword.match(/^(?=.*\d)(?=.*[a-zA-Z0-9]).{8,}$/)} btnIsMediumPmyFull className="w-sm-100" textBtn={t('actions.save')} title={t('actions.save')}/>
                                    </form>
                                </section>
                            : this.state.tabActive === 1 && true && !this.state.noSubscription ?
                                <form onSubmit={this.handleSubmitCheckbox} class="block-style d-flex flex-column mt-6">
                                    <H4 className="mb-3 pb-3 fw-600" title={t('profile.sectionTitle.subscription')}/>
                                    <Checkbox
                                        label={
                                            this.state.subscriptionEnd ? 
                                                [t('profile.subscriptionOff'), <span class="fw-600">{this.state.subscriptionEnd}</span>] 
                                            : 
                                                [t('profile.subscriptionOn'), <span class="fw-600">{this.state.currentPeriodEnd}</span>]
                                        }
                                        for="subscription"
                                        value="subscription"
                                        checked={this.state.subscriptionInProgress}
                                        onChange={this.handleSubscriptionState}
                                    />
                                    <p class="mt-1 mb-3 pb-3 pl-1 ml-4 fz-14">
                                        {!this.state.subscriptionEnd ? 
                                            [t('profile.p1a'), <br/>, t('profile.p1b')] 
                                        : 
                                            t('profile.p2')
                                        }
                                    </p>
                                    <PmyBtn type="submit" isDisabled={this.state.countClickCheckbox === 0} btnIsMediumPmyFull className="w-sm-100" textBtn={t('actions.save')} title={t('actions.save')}/>
                                </form>
                            : 
                                <div class="block-style d-flex flex-column mt-6">
                                    <p class="mt-3 mb-2 fw-600">{t('profile.fallback.p1')}</p>
                                    <p class="fw-600">{t('profile.fallback.p2')}</p>
                                    <FeaturesList className="my-3 py-3"/>
                                    <PmyBtn redirectTo={t('url.offers')} linkIsMediumPmyFull textLink={t('profile.fallback.cta')} customBtnClass="w-md-100"/>
                                </div> 
                            }
                        </main>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(Profile);