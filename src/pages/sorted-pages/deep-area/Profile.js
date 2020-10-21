import React from 'react';
import { Helmet } from 'react-helmet';
import { refreshTokenFnc } from '../../../utils/refreshToken';
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

export default class Profile extends React.Component {
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
                if(error == 'TypeError: Failed to fetch') {
                    refreshTokenFnc(this.loadPageData, false);
                }
            })
        } 
        else {
            this.props.history.push('/plans');
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
            console.log(res)
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
                    if(error == 'TypeError: Failed to fetch') {
                        refreshTokenFnc(this.componentDidMount, false);
                    }
                })
            }
        })
        .catch(error => {
            if(error == 'TypeError: Failed to fetch') {
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
            if(error == 'TypeError: Failed to fetch') {
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
                if(error == 'TypeError: Failed to fetch') {
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
                if(error == 'TypeError: Failed to fetch') {
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
        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="profilePage" className="px-0 mt-6">
                    {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="L'email choisi n'est pas disponible, veuillez en choisir un différent"/> }
                    {this.state.emailChanged && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="La modification de votre email a été effectuée avec succès"/> }
                    {this.state.passwordChanged && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="La modification de votre mot de passe a été effectuée avec succès"/> }
                    {this.state.subscriptionState && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="La modification de votre abonnement a été effectuée avec succès"/> }
                    <div class="block-style">
                        <H1 className="mb-3" title="Paramètres"/>
                        <div class="d-flex flex-row flex-wrap mt-5">
                            <Tabs onClick={this.handleSelectAccount} isDisabled={this.state.tabActive === 0} textTab="Compte" title="Compte" className={this.state.tabActive === 0 ? 'pmy-tab-selected' : ''}/>
                            <Tabs onClick={this.handleSelectSubscription} isDisabled={this.state.tabActive === 1} textTab="Abonnement" title="Abonnement" className={this.state.tabActive === 1 ? 'pmy-tab-selected' : ''}/>
                        </div>
                        <main class="px-md-3 mx-md-3 mb-3">
                            {this.state.tabActive === 0 ?
                                <section class="mt-6">
                                    <form onSubmit={this.handleSubmitEmail} method="POST" class="block-style d-flex flex-column">
                                        <H4 className="mb-3 pb-3 fw-600" title="Votre email"/>
                                        <Input
                                            label="Adresse email actuelle"
                                            for="actualEmail"
                                            type="email"
                                            value={this.state.curr_email}
                                            disabled={true}
                                        />
                                        <Input
                                            label="Votre nouvelle adresse email"
                                            for="newEmail"
                                            value={this.state.newEmail}
                                            type="email"
                                            required={true}
                                            onChange={this.handleNewEmail}
                                            infoMsg={this.state.newEmail.length < 1 ? 'Ce champ est requis' : !this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && 'Le format de l\'adresse email n\'est pas correct' || this.state.newEmail === this.state.curr_email && 'L\'email ne peut pas être identique au précédent utilisé'}
                                        />
                                        <PmyBtn type="submit" isDisabled={!this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || this.state.newEmail === this.state.curr_email} btnIsMediumPmyFull className="w-sm-100" textBtn="Sauvegarder" title="Sauvegarder"/>
                                    </form>
                                    <form onSubmit={this.handleSubmitPassword} method="POST" class="block-style d-flex flex-column mt-6">
                                        <H4 className="mb-3 pb-3 fw-600" title="Votre mot de passe"/>
                                        <Input
                                            containerStyle="input-password-column"
                                            label="Votre nouveau mot de passe"
                                            labelInfo={['8 caractères minimum, ', <br class="d-block d-sm-none"/>, 'dont au moins 1 chiffre']}
                                            for="newPassword"
                                            minLength={8}
                                            value={this.state.newPassword}
                                            type={this.state.pwdDefaultType}
                                            onClick={this.handleInputType}
                                            inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                            required={true}
                                            onChange={this.handleNewPassword}
                                            infoMsg={!this.state.newPassword.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/) && 'Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre'}
                                        />
                                        <Input
                                            label="Confirmation de votre nouveau mot de passe"
                                            for="newPasswordConfirmation"
                                            minLength={8}
                                            value={this.state.newPasswordConfirmation}
                                            type={this.state.pwdDefaultType}
                                            onClick={this.handleInputType}
                                            inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                            required={true}
                                            onChange={this.handleNewPasswordConfirmation}
                                            infoMsg={this.state.newPassword !== this.state.newPasswordConfirmation && 'Les deux mots de passe ne correspondent pas'}
                                        />                        
                                        <PmyBtn type="submit" isDisabled={(this.state.newPasswordConfirmation !== this.state.newPassword) || !this.state.newPassword.match(/^(?=.*?[0-9])[a-zA-Z0-9âäàéèùêëîïôöñç#$%&'"()*+.°²\/:;,<=>!?§@\[\\\]^_`{|}~-]{8,}$/)} btnIsMediumPmyFull className="w-sm-100" textBtn="Sauvegarder" title="Sauvegarder"/>
                                    </form>
                                </section>
                            : this.state.tabActive === 1 && true && !this.state.noSubscription ?
                                <form onSubmit={this.handleSubmitCheckbox} class="block-style d-flex flex-column mt-6">
                                    <H4 className="mb-3 pb-3 fw-600" title="Votre abonnement"/>
                                    <Checkbox
                                        label={
                                            this.state.subscriptionEnd ? 
                                                ['Vous avez désactivé le renouvellement automatique de votre abonnement, il prendra fin le ', <span class="fw-600">{this.state.subscriptionEnd}</span>] 
                                            : 
                                                ['Abonné(e) à Asking Franklin Pro, prochain renouvellement le ', <span class="fw-600">{this.state.currentPeriodEnd}</span>]
                                        }
                                        for="subscription"
                                        value="subscription"
                                        checked={this.state.subscriptionInProgress}
                                        onChange={this.handleSubscriptionState}
                                    />
                                    <p class="mt-1 mb-3 pb-3 pl-1 ml-4 fz-14">
                                        {!this.state.subscriptionEnd ? 
                                            ['Décocher la case puis sauvegarder pour annuler le renouvellement automatique de votre abonnement (celui-ci prendra fin au terme de sa période de validité)', <br/>, 'Vous pourrez réactiver simplement votre abonnement en cochant de nouveau la case tant que celui-ci n\'est pas arrivé à son terme'] 
                                        : 
                                            'Vous pouvez réactiver simplement votre abonnement tant que celui-ci n\'est pas arrivé à son terme en cochant la case puis en cliquant sur sauvegarder'
                                        }
                                    </p>
                                    <PmyBtn type="submit" isDisabled={this.state.countClickCheckbox === 0} btnIsMediumPmyFull className="w-sm-100" textBtn="Sauvegarder" title="Sauvegarder"/>
                                </form>
                            : 
                                <div class="block-style d-flex flex-column mt-6">
                                    <p class="mt-3 mb-2 fw-600">Vous n'avez pas d'abonnement en cours.</p>
                                    <p class="fw-600">Devenez Pro et profitez ainsi de toute la puissance de Asking Franklin :</p>
                                    <FeaturesList className="my-3 py-3"/>
                                    <PmyBtn redirectTo="/plans" linkIsMediumPmyFull textLink="Passer à la version Pro" customBtnClass="w-md-100"/>
                                </div> 
                            }
                        </main>
                    </div>
                </Container>
            </div>
        )
    }
}