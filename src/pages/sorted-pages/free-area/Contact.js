import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import Input from '../../components/form/Input';
import Textarea from '../../components/form/Textarea';
import PmyBtn from '../../components/button/PmyBtn';
import Alert from '../../components/elements/Alert';

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alertIsShowed: false,
            email: '',
            subject: '',
            content: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.contact')}</title>
                <meta name="description" content={this.props.t('description.contact')}/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    handleEmailChange(e) {
        this.setState({
            email: e.target.value
        });
    }

    handleSubjectChange(e) {
        this.setState({
            subject: e.target.value
        });
    }

    handleContentChange(e) {
        this.setState({
            content: e.target.value
        });
    }

    handleSubmitForm(e) {
        e.preventDefault();
        var headers = {
            'Authorization': localStorage.getItem('sv_token'),
            'Content-Type': 'application/json'
        }
        this.setState({
            alertIsShowed: false
        });
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/send-mail-contact', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                email: this.state.email,
                subject: this.state.subject,
                content: this.state.content
            })
        })
        .then((res) => res.json())
        .then(res => {
            if(res.err === null) {
                this.setState({
                    alertIsShowed: true,
                    email: '',
                    subject: '',
                    content: ''
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
        return false;
    }

    handleCloseAlert() {
        this.setState({
            alertIsShowed: false
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                {this.state.alertIsShowed && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg={t('alert.contact.success')}/> }
                <Container id="contact" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <H1 title={t('contact.h1')}/>
                    <form onSubmit={this.handleSubmitForm} method="POST" class="block-style d-flex flex-column w-100 mt-5">
                        <Row className="mx-0">
                            <Col sm="12" lg="6" className="px-0">
                                <Input
                                    type="text"
                                    label={t('form.label.subject')}
                                    for="contactSubject"
                                    onChange={this.handleSubjectChange}
                                    value={this.state.subject}
                                    containerStyle="mt-3 mr-0 mr-lg-3"
                                    required={true}
                                    infoMsg={this.state.subject.length < 1 && t('alert.form.fieldRequired')}
                                />
                            </Col>
                            <Col sm="12" lg="6" className="px-0">
                                <Input
                                    type="email"
                                    label={t('form.label.email')}
                                    for="contactEmail"
                                    onChange={this.handleEmailChange}
                                    value={this.state.email}
                                    containerStyle="mt-3 ml-0 ml-lg-3"
                                    required={true}
                                    infoMsg={this.state.email.length < 1 && t('alert.form.fieldRequired') || !this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) && t('alert.form.patternEmail')}
                                />
                            </Col>
                        </Row>
                        <Col sm="12" className="px-0">
                            <Textarea
                                label={t('form.label.message')}
                                placeholder={t('form.input.placeholderContact')}
                                for="contactMessage"
                                onChange={this.handleContentChange}
                                value={this.state.content}
                                containerStyle="mb-3 pb-3"
                                required={true}
                                infoMsg={this.state.content.length < 1 && t('alert.form.fieldRequired')}
                            />
                        </Col>
                        <PmyBtn type="submit" isDisabled={!this.state.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/) || this.state.subject.length < 1 || this.state.content.length < 1} btnIsMediumPmyFull textBtn={t('contact.cta')} className="w-sm-100"/>
                    </form>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(Contact);