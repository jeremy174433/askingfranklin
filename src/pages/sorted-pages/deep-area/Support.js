import React from 'react';
import { Helmet } from 'react-helmet';
import { refreshTokenFnc } from '../../../utils/refreshToken';
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

export default class Support extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            alertIsShowed: false,
            priority: 'Haute',
            subject: '',
            content: ''
        }
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    loadPageData() {
        var token = localStorage.getItem('af_token');
        var is_sub = localStorage.getItem('af_is_sub');
        if (token && token.length > 0 && is_sub == '1') {
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
                <title>Support Client - Asking Franklin, votre outil SEO Français</title>
                <meta name="description" content="Support Client - Asking Franklin, l’outil français créé à Bordeaux qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
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
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/send-mail-support', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({
                priority: this.state.priority,
                email: this.state.curr_email,
                subject: this.state.subject,
                content: this.state.content
            })
        })
        .then((res) => res.json())
        .then(res => {
            // console.log(res);
            if(res.err === null) {
                this.setState({
                    alertIsShowed: true,
                    priority: this.state.priority,
                    email: this.state.curr_email,
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
        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                {this.state.alertIsShowed && <Alert onClick={this.handleCloseAlert} className={this.state.alertIsShowed && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.alertIsShowed ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Votre message a bien été envoyé, nous reviendrons rapidement vers vous"/> }
                <Container id="support" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <H1 title="Support Client"/>
                    <p class="mt-4">Grâce à la version Pro de Asking Franklin, obtenez une réponse prioritaire de l'équipe support</p>
                    <form onSubmit={this.handleSubmitForm} method="POST" class="block-style d-flex flex-column w-100 mt-5">
                        <Row className="mx-0">
                            <Col sm="12" lg="6" className="px-0">
                                <Input
                                    type="text"
                                    label="Sujet"
                                    for="contactSubject"
                                    name={this.for}
                                    id={this.for}
                                    onChange={this.handleSubjectChange}
                                    value={this.state.subject}
                                    containerStyle="mt-3 mr-0 mr-lg-3"
                                    required={true}
                                    infoMsg={this.state.subject.length < 1 && 'Ce champ est requis'}
                                />
                            </Col>
                            <Col xs="12" sm="9" lg="4" className="px-0">
                                <Input
                                    type="email"
                                    label="Votre adresse email"
                                    for="contactEmail"
                                    value={this.state.curr_email}
                                    containerStyle="mt-3 mx-0 mr-sm-3 mx-lg-3"
                                    disabled={true}
                                />
                            </Col>
                            <Col xs="12" sm="3" lg="2" className="px-0">
                                <Input
                                    type="text"
                                    label="Priorité"
                                    for="priority"
                                    value={this.state.priority}
                                    containerStyle="mt-3 ml-0 ml-sm-3 ml-lg-3"
                                    disabled={true}
                                />
                            </Col>
                        </Row>
                        <Col sm="12" className="px-0">
                            <Textarea
                                label="Votre message"
                                placeholder="Une demande, une question, laissez nous votre message..."
                                for="contactMessage"
                                name={this.for}
                                id={this.for}
                                onChange={this.handleContentChange}
                                value={this.state.content}
                                containerStyle="mb-3 pb-3"
                                required={true}
                                infoMsg={this.state.content.length < 1 && 'Ce champ est requis'}
                            />
                        </Col>
                        <PmyBtn type="submit" isDisabled={this.state.subject.length < 1 || this.state.content.length < 1} btnIsMediumPmyFull textBtn="Envoyer le message" className="w-sm-100"/>
                    </form>
                </Container>
            </div>
        )
    }
}