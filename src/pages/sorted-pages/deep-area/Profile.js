import React from 'react';
import { Container } from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import Title from '../../components/elements/title/Title';
import Input from '../../components/form/Input';
import EyeShowHide from '../../../assets/img/svg/switch/EyeShowHide';
import Checkbox from '../../components/form/Checkbox';
import PmyBtn from '../../components/button/PmyBtn';
import Alert from '../../components/elements/Alert';

export default class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tabActive: 0,
            newEmail: '',
            pwdDefaultType: 'password',
            actualPassword: '',
            newPassword: '',
            subscriptionInProgress: true,
            success: false,
            emailIsAlreadyTaken: false,
            actualPasswordDidntMatch: false,
            subscriptionState: false,
            alertIsShowed: false,
        }
        this.handleSelectAccount = this.handleSelectAccount.bind(this);
        this.handleSelectSubscription = this.handleSelectSubscription.bind(this);
        this.handleNewEmail = this.handleNewEmail.bind(this);
        this.handleActualPassword = this.handleActualPassword.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleInputType = this.handleInputType.bind(this);
        this.handleSubscriptionState = this.handleSubscriptionState.bind(this);
        this.handleSubmitEmail = this.handleSubmitEmail.bind(this);
        this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
        this.handleSubmitCheckbox = this.handleSubmitCheckbox.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
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

    handleActualPassword(e) {
        this.setState({
            actualPassword: e.target.value
        });
    }

    handleNewPassword(e) {
        this.setState({
            newPassword: e.target.value
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

    handleSubmitEmail() { 
        console.log(this.state.newEmail);
    }

    handleSubmitPassword() { 
        console.log(this.state.actualPassword);
        console.log(this.state.newPassword);
    }

    handleSubmitCheckbox() { 
        console.log('désabonnement effectué');
    }

    handleCloseAlert() {
        this.setState({
            success: false,
            emailIsAlreadyTaken: false,
            actualPasswordDidntMatch: false,
            subscriptionState: false,
            alertIsShowed: false
        });
    }

    render() {
        return (
            <Container className="px-0 mt-6">
                {this.state.success && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="La modification a été appliquée avec succès"/> }
                {this.state.emailIsAlreadyTaken && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="L'email choisi est déjà utilisé par un autre compte"/> }
                {this.state.actualPasswordDidntMatch && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="errorMessage" msg="Votre mot de passe actuelle ne semble pas correct"/> }
                {this.state.subscriptionState && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={['Votre désabonnement a bien été enregistré. Vous restez Pro jusqu\'à la fin de votre abonnement en cours le : ', <span>31/08/2020</span>]}/> }
              
                <div class="block-style">
                    <H1 className="mb-5" title="Paramètres"/>
                    <ul class="d-flex flex-row align-items-center ml-5">
                        <li class={this.state.tabActive === 0 ? 'link-active mr-5' : 'mr-5'}>
                            <PmyBtn onClick={this.handleSelectAccount} isDisabled={this.state.tabActive === 0} btnIsMediumPmyOutlineLight textBtn="Compte" className={this.state.tabActive === 0 && 'pmy-btn-full'}/>
                        </li>
                        <li class={this.state.tabActive === 1 ? 'link-active' : null}>
                            <PmyBtn onClick={this.handleSelectSubscription} isDisabled={this.state.tabActive === 1} btnIsMediumPmyOutlineLight textBtn="Abonnement" className={this.state.tabActive === 1 && 'pmy-btn-full'}/>
                        </li>
                    </ul>
                </div>
                <main>
                    {
                        this.state.tabActive === 0 ?
                            <section class="mt-6">
                                <form onSubmit={this.handleSubmitEmail} method="" class="block-style d-flex flex-column">
                                    <Title title="Votre email"/>
                                    <Input
                                        label="Adresse email actuelle"
                                        for="actualEmail"
                                        name={this.for}
                                        id={this.for}
                                        type="email"
                                        value="olivier.durand@entreprise.com"
                                        disabled={true}
                                    />
                                    <Input
                                        label="Nouvelle adresse email"
                                        for="newEmail"
                                        name={this.for}
                                        id={this.for}
                                        value={this.state.newEmail}
                                        type="email"
                                        required={true}
                                        onChange={this.handleNewEmail}
                                    />
                                    <PmyBtn type="submit" isDisabled={!this.state.newEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)} btnIsMediumPmyFull textBtn="Sauvegarder" title="Sauvegarder"/>
                                </form>
                                <form onSubmit={this.handleSubmitPassword} method="" class="block-style d-flex flex-column mt-6">
                                    <Title title="Changer votre mot de passe"/>
                                    <Input
                                        label="Mot de passe actuel"
                                        for="actualPassword"
                                        name={this.for}
                                        id={this.for}
                                        value={this.state.actualPassword}
                                        type="password"
                                        required={true}
                                        onChange={this.handleActualPassword}
                                    />
                                    <Input
                                        label="Nouveau mot de passe"
                                        labelInfo="8 caractères minimum"
                                        minLength={8}
                                        for="newPassword"
                                        name={this.for}
                                        id={this.for}
                                        value={this.state.newPassword}
                                        type={this.state.pwdDefaultType}
                                        onClick={this.handleInputType}
                                        inputHasIcon={<EyeShowHide width="16" icon={this.state.pwdDefaultType === 'text' ? 'hide' : null}/>}
                                        required={true}
                                        onChange={this.handleNewPassword}
                                    />                        
                                    <PmyBtn type="submit" isDisabled={this.state.actualPassword.length < 8 || this.state.newPassword.length < 8} btnIsMediumPmyFull textBtn="Sauvegarder" title="Sauvegarder"/>
                                </form>
                            </section>
                        : this.state.tabActive === 1 &&
                            <form onSubmit={this.handleSubmitCheckbox} method="" class="block-style d-flex flex-column mt-6">
                                <Title title="Abonnement"/>
                                <Checkbox
                                    label="Abonné(e) à Asking Franklin Pro"
                                    for="subscription"
                                    name={this.for}
                                    id={this.for}
                                    value="subscription"
                                    checked={this.state.subscriptionInProgress}
                                    onChange={this.handleSubscriptionState}
                                />
                                <p class="mt-1 mb-3 pb-3 pl-1 ml-4 fz-14">Décocher la case puis cliquez sur Sauvegarder pour annuler le renouvellement automatique de votre abonnement (celui-ci prendra fin au terme de sa période de validité)</p>
                                <PmyBtn type="submit" isDisabled={this.state.subscriptionInProgress === true} btnIsMediumPmyFull textBtn="Sauvegarder" title="Sauvegarder"/>
                            </form>
                        }
                </main>
            </Container>
        )
    }
}