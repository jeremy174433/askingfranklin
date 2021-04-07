import React from 'react';
import { withTranslation } from 'react-i18next';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MenuLink from '../../components/elements/link/MenuLink';
import Logo from '../../../assets/img/svg/switch/Logo';
import SocialMedia from '../../../assets/img/svg/switch/SocialMedia';
import Input from '../form/Input';
import PmyBtn from '../button/PmyBtn';
import Checkbox from '../form/Checkbox';
import Tick from '../../../assets/img/svg/Tick';

class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_sub: 0,
            emailNewsletter: '',
            checkCgu: '',
            subscribeSuccess: false,
            subscribeError: false
        }
        this.handleEmailNewsletter = this.handleEmailNewsletter.bind(this);
        this.handlePrivacy = this.handlePrivacy.bind(this);
        this.handleSubmitNewsletter = this.handleSubmitNewsletter.bind(this);
    }

    componentDidMount() {
        var is_sub = localStorage.getItem('af_is_sub');
        this.setState({
            is_sub: is_sub
        });
    }

    handleEmailNewsletter(e) {
        this.setState({
            emailNewsletter: e.target.value
        });
    }

    handlePrivacy() {
        this.setState({ checkCgu: this.state.checkCgu === '' ? 'newsletterChecked' : '' });
    }

    handleSubmitNewsletter(event) {
        event.preventDefault();
        this.setState({
            subscribeError: false,
            subscribeSuccess: false
        });
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/register-newsletter', {
            method: 'POST',
            body: JSON.stringify({ 
                email: this.state.emailNewsletter, 
                checkCgu : this.state.checkCgu
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
                if(res.message === 'Contact already exist') {
                    this.setState({ subscribeError: true });
                }
                else {
                    this.setState({ subscribeSuccess: true });
                }
            }
        });
    }

    render() {

        const { t } = this.props;
        const actualYear = (new Date().getFullYear());

        return (
            <footer id="footer" class="px-4 px-xl-5 py-5">
                <Container className="px-0 pt-5">
                    <Row className="mx-0 pb-5 d-flex flex-column flex-lg-row">
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start pl-lg-0 mb-5 mb-lg-0 pb-5 pb-lg-0">
                            <Link to="/" class="mx-auto mx-lg-0 mb-4">
                                <Logo icon="white" width="200"/>
                            </Link>
                            {/*
                            <ul class="languages-wrapper d-flex flex-row flex-lg-column">
                                <li onClick={this.props.onClickLanguage} data-lang="en" class="footer-link">{t('footer.language.en')}</li>
                                <li onClick={this.props.onClickLanguage} data-lang="fr" class="footer-link">{t('footer.language.fr')}</li>
                            </ul>
                            */}
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">{t('footer.title.1')}</p>
                            <ul class="d-flex flex-column">
                                <MenuLink redirectTo="/" textLink={t('link.homepage')} linkLocation="footer-link"/>
                                {localStorage.getItem('af_is_sub') <= 0 && <MenuLink redirectTo={t('url.pricing')} textLink={t('link.pricing')} linkLocation="footer-link"/> }
                                <MenuLink href={t('url.blog')} textLink={t('link.blog')} linkLocation="footer-link"/>
                                <MenuLink redirectTo={t('url.faq')} textLink={t('link.faq')} linkLocation="footer-link"/>
                                <MenuLink redirectTo={t('url.contact')} textLink={t('link.contact')} linkLocation="footer-link"/>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start mb-5 mb-lg-0">
                            <p class="footer-title">{t('footer.title.2')}</p>
                            <ul class="d-flex flex-column">
                                <MenuLink redirectTo={t('url.notice')} textLink={t('link.legal.notice')} rel="nofollow" linkLocation="footer-link"/>
                                <MenuLink redirectTo={t('url.tcs')} textLink={t('link.legal.tcs')} rel="nofollow" linkLocation="footer-link"/>
                                <MenuLink redirectTo={t('url.gtcs')} textLink={t('link.legal.gtcs')} rel="nofollow" linkLocation="footer-link"/>
                            </ul>
                        </Col>
                        <Col lg="3" className="d-flex flex-column align-items-center align-items-lg-start">
                            <p class="footer-title">{t('footer.title.3')}</p>
                            <ul class="social-media-wrapper d-flex flex-row">
                                <MenuLink linkHasIcon={<SocialMedia icon="facebook" height="18" fill="#FFF"/>} href={t('url.networks.smFacebook')} target="_blank" rel="nofollow noopener" title={t('titleElementBrowser.footer.fb')} className="icon-sm d-flex"/>
                                <MenuLink linkHasIcon={<SocialMedia icon="twitter" width="18" fill="#FFF"/>} href={t('url.networks.smTwitter')} target="_blank" rel="nofollow noopener" title={t('titleElementBrowser.footer.tw')} className="icon-sm d-flex"/>
                                <MenuLink linkHasIcon={<SocialMedia icon="linkedin" width="18" fill="#FFF"/>} href={t('url.networks.smLinkedIn')} target="_blank" rel="nofollow noopener" title={t('titleElementBrowser.footer.lk')} className="icon-sm d-flex"/>
                                <MenuLink linkHasIcon={<SocialMedia icon="youtube" width="18" fill="#FFF"/>} href={t('url.networks.smYouTube')} target="_blank" rel="nofollow noopener" title={t('titleElementBrowser.footer.yt')} className="icon-sm d-flex"/>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="8" lg="6" className="px-0 py-5 mx-auto">
                            <p class="fz-24">{t('footer.newsletter.title')}</p>
                            <p class="py-2">{t('footer.newsletter.subtitle')}</p>
                            <p class="fz-14">{t('footer.newsletter.rhythm')}</p>
                            <form onSubmit={this.handleSubmitNewsletter} method="POST" class="form-newsletter pt-3">
                                <div class="d-flex flex-column flex-sm-row mb-3 mb-sm-0">
                                    <Input 
                                        onChange={this.handleEmailNewsletter} 
                                        type="email" 
                                        hideLabel={true}
                                        placeholder={t('form.input.placeholderEmail')}
                                        containerStyle="mb-3 mr-0 mr-sm-4 w-100"
                                        for="emailNewsletter" 
                                        name={this.for} 
                                        id={this.for} 
                                        required={true} 
                                        disabled={this.state.subscribeSuccess}
                                        infoMsg={this.state.emailNewsletter.length < 1 ? t('alert.form.fieldRequired') : !this.state.emailNewsletter.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail') || this.state.subscribeSuccess && ''}
                                    />
                                    <PmyBtn type="submit" isDisabled={!this.state.emailNewsletter.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || this.state.checkCgu === '' || this.state.subscribeSuccess} btnIsMediumPmyFull textBtn={t('form.submit.newsletter')} title={!this.state.emailNewsletter.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail') || this.state.checkCgu === '' && t('alert.form.acceptanceTcs')} className="w-sm-100 h-100" style={{ height: '48px' }}/>
                                </div>
                                <Checkbox 
                                    label={[t('form.checkbox.labelTcs-1'), <Link to={t('url.tcs')} target="_blank" rel="noopener" title={t('titleElementBrowser.tcs')} class="fz-16">{t('form.checkbox.labelTcs-2')}</Link>, <em class="fz-14 ml-1">{t('form.checkbox.labelTcs-3')}</em>]} 
                                    onChange={this.handlePrivacy} 
                                    for="checkNewsletter" 
                                    name={this.for} 
                                    id={this.for} 
                                    value={this.state.checkCgu} 
                                    required={true}
                                    className="color-light"
                                />
                            </form>
                            {
                                this.state.subscribeSuccess === true ? 
                                    <div class="d-flex flex-row align-items-center mt-2">
                                        <Tick width="16" fill="#00C851"/>
                                        <p class="color-success fz-14 ml-2">{t('alert.form.subscribeNewsletter.success')}</p>
                                    </div>
                                : this.state.subscribeError === true &&
                                    <p class="color-danger fz-14 mt-2">{t('alert.form.subscribeNewsletter.error')}</p>
                            }
                        </Col>
                    </Row>
                    <div class="d-flex justify-content-center pb-5 pb-sm-0 pt-5">
                        <p class="fz-14">{t('footer.subfooter.intro', { actualYear } )}<a href={t('url.external.owner')} target="_blank" title={t('titleElementBrowser.linkOwner')}>{t('footer.subfooter.owner')}</a>{t('footer.subfooter.rights')}</p>
                    </div>
                </Container>
            </footer>
        )
    }
}

export default withTranslation()(Footer);