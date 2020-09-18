import React from 'react';
import { Container } from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import Title from '../../components/elements/title/Title';
import Input from '../../components/form/Input';
import EyeShowHide from '../../../assets/img/svg/switch/EyeShowHide';
import Checkbox from '../../components/form/Checkbox';
import PmyBtn from '../../components/button/PmyBtn';
import Alert from '../../components/elements/Alert';
import {Link} from 'react-router-dom'
import { csvParse } from 'd3';
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
            success: false,
            emailIsAlreadyTaken: false,
            subscriptionState: false,
            alertIsShowed: false,
            noSubscription:true,
            passwordChanged:false,
            emailChanged:false
        }
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

    componentDidMount() {
        var token = localStorage.getItem('af_token');
        if (token) {
            fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-plan', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                this.setState({
                    subscriptionInProgress: res.message.length > 0  && !res.message[0].cancel_at_period_end ? true : false,
                    noSubscription: res.message.length == 0 ? true : false
                });
                if(res.message[0] && res.message[0].cancel_at_period_end) {
                    var s = new Date(res.message[0].cancel_at * 1000).toLocaleDateString("fr-FR")
                    this.setState({
                        subscriptionEnd:s
                    })
                }
                });
            fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-email', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.setState({
                        curr_email:res.message[0]
                    })
                });
        } else {
            this.props.history.push('/plans');
        }
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
            subscriptionInProgress: this.state.subscriptionInProgress === true ? false : true 
        });
    }

    handleSubmitEmail(event) { 
        event.preventDefault()
        var username = localStorage.getItem('af_username');
        var token = localStorage.getItem('af_token');
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/change-email', {
            headers: {
                'Authorization': token
            },
            method: 'POST',
            body: JSON.stringify({username:username, new_email:this.state.newEmail})
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                console.log(res)
                if(res.message == "Email as been changed successfully"){
                    this.setState({
                        alertIsShowed:true,
                        emailChanged:true
                    })
                    fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/get-email', {
                        headers: {
                            'Authorization': token
                        },
                        method: 'GET',
                        })
                        .then(res => {
                            return res.json();
                        })
                        .then(res => {
                            this.setState({
                                curr_email:res.message[0]
                            })
                        });
                }
            });
    }

    handleSubmitPassword(event) {
        event.preventDefault()
        var username = localStorage.getItem('af_username');
        var token = localStorage.getItem('af_token');
        fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/change-password', {
            headers: {
                'Authorization': token
            },
            method: 'POST',
            body: JSON.stringify({username:username, proposed_password:this.state.newPassword})
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                if(res.message == "Password has been changed successfully"){
                    this.setState({
                        alertIsShowed:true,
                        passwordChanged:true
                    })
                }
            });
    }

    handleSubmitCheckbox(e) {
        e.preventDefault();
        var token = localStorage.getItem("af_token");
        if(this.state.subscriptionEnd){
            fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/reactivate-subscription', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.setState({
                        subscriptionState:true,
                        subscriptionInProgress:true,
                        subscriptionEnd:null
                    })
                });
        } else {
            fetch('https://78fhc2ffoc.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/cancel-subscription', {
                headers: {
                    'Authorization': token
                },
                method: 'GET',
                })
                .then(res => {
                    return res.json();
                })
                .then(res => {
                    this.setState({
                        subscriptionState:true,
                        subscriptionInProgress:false,
                        subscriptionEnd: new Date(res.message.cancel_at * 1000).toLocaleDateString("fr-FR")
                    })
                });
        }
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            emailIsAlreadyTaken: false,
            subscriptionState: false,
            alertIsShowed: false
        });
    }

    render() {
        return (
            <Container className="px-0 mt-6">
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="La modification a été appliquée avec succès"/> }
                {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="L'email choisi est déjà utilisé par un autre compte"/> }
                {this.state.passwordChanged && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre mot de passe a bien été modifié"/> }
                {this.state.emailChanged && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre email a bien été modifié"/> }
                {this.state.subscriptionState && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={['Votre désabonnement a bien été enregistré. Vous restez Pro jusqu\'à la fin de votre abonnement en cours le : ', <span>31/08/2020</span>]}/> }
                <div class="block-style">
                    <H1 className="mb-3" title="Paramètres"/>
                    <ul class="d-flex flex-row align-items-center flex-wrap">
                        <li class={this.state.tabActive === 0 ? 'link-active mt-4 mr-4' : 'mt-4 mr-4'}>
                            <PmyBtn onClick={this.handleSelectAccount} isDisabled={this.state.tabActive === 0} btnIsMediumPmyOutlineLight textBtn="Compte" className={this.state.tabActive === 0 && 'pmy-btn-full'}/>
                        </li>
                        <li class={this.state.tabActive === 1 ? 'link-active mt-4' : 'mt-4'}>
                            <PmyBtn onClick={this.handleSelectSubscription} isDisabled={this.state.tabActive === 1} btnIsMediumPmyOutlineLight textBtn="Abonnement" className={this.state.tabActive === 1 && 'pmy-btn-full'}/>
                        </li>
                    </ul>
                    <main class="px-md-3 mx-md-3 mb-3">
                        {
                            this.state.tabActive === 0 ?
                                <section class="mt-6">
                                    <form onSubmit={this.handleSubmitEmail} method="" class="block-style d-flex flex-column">
                                        <Title title="Votre email"/>
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
                                            infoMsg={!this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && 'Le format de l\'adresse email n\'est pas correct'}
                                        />
                                        <PmyBtn type="submit" isDisabled={!this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)} btnIsMediumPmyFull textBtn="Sauvegarder" title="Sauvegarder"/>
                                    </form>
                                    <form onSubmit={this.handleSubmitPassword} method="" class="block-style d-flex flex-column mt-6">
                                        <Title title="Votre mot de passe"/>
                                        <Input
                                            label="Votre nouveau mot de passe"
                                            labelInfo="8 caractères minimum"
                                            for="actualPassword"
                                            minLength={8}
                                            value={this.state.newPassword}
                                            type="password"
                                            onClick={this.handleInputType}
                                            inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                            required={true}
                                            onChange={this.handleNewPassword}
                                            infoMsg={this.state.newPassword.length < 8 && 'Le mot de passe doit contenir au moins 8 caractères'}
                                        />
                                        <Input
                                            label="Confirmation de votre nouveau mot de passe"
                                            minLength={8}
                                            for="newPassword"
                                            value={this.state.newPasswordConfirmation}
                                            type={this.state.pwdDefaultType}
                                            onClick={this.handleInputType}
                                            inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                            required={true}
                                            onChange={this.handleNewPasswordConfirmation}
                                            infoMsg={this.state.newPassword !==  this.state.newPasswordConfirmation && 'Les deux mots de passe ne correspondent pas'}
                                        />                        
                                        <PmyBtn type="submit" isDisabled={(this.state.newPasswordConfirmation !==  this.state.newPassword) || this.state.newPassword.length < 8} btnIsMediumPmyFull textBtn="Sauvegarder" title="Sauvegarder"/>
                                    </form>
                                </section>
                            : this.state.tabActive === 1 &&
                                true ? !this.state.noSubscription ?<form onSubmit={this.handleSubmitCheckbox} method="" class="block-style d-flex flex-column mt-6">
                                    <Title title={"Votre abonnement"}/>
                                    <Checkbox
                                        label={this.state.subscriptionEnd ? "Vous avez désactivé votre abonnement, il prendra fin le " + this.state.subscriptionEnd  : "Abonné(e) à Asking Franklin Pro"}
                                        for="subscription"
                                        value="subscription"
                                        checked={this.state.subscriptionInProgress}
                                        onChange={this.handleSubscriptionState}
                                    />
                                    <p class="mt-1 mb-3 pb-3 pl-1 ml-4 fz-14">Décocher la case puis cliquez sur Sauvegarder pour annuler le renouvellement automatique de votre abonnement (celui-ci prendra fin au terme de sa période de validité)</p>
                                    <PmyBtn type="submit" btnIsMediumPmyFull textBtn="Sauvegarder" title="Sauvegarder"/>
                                </form> : <div class="block-style d-flex flex-column mt-6"><p class="mt-1 mb-3 pb-3 pl-1 ml-4 fz-14">Vous n'avez pas d'abonnement Asking Franklin. <Link to="/plans">Devenir pro</Link></p></div> : <div className="block-style d-flex flex-column mt-6">Vous n'avez pas d'abonnement actif Asking Franklin.</div>
                        }
                    </main>
                </div>
            </Container>
        )
    }
}