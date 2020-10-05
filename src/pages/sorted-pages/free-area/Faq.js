import React from 'react';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import H2 from '../../components/elements/title/H2';
import H3 from '../../components/elements/title/H3';
import Input from '../../components/form/Input';
import PmyBtn from '../../components/button/PmyBtn';
import FaqIcons from '../../../assets/img/svg/switch/FaqIcons';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/elements/AccordionItem';
import LifeSaver from '../../../assets/img/svg//LifeSaver';
import SpeechBubble from '../../../assets/img/svg//SpeechBubble';
import { Link } from 'react-router-dom'; 

var accordionItems = [{
        key: "0",
        question: "Morbi non nulla cursus",
        content: "Integer mauris enim, sodales at ultricies eget, pulvinar a purus. Donec eu nulla eu metus convallis tempor eu ac odio. Maecenas convallis neque id sem sodales lobortis ut non augue."
    }, {
        key: "1",
        question: "Nullam et sem ut felis maximus dapibus in nec lectus",
        content: "Cras non porttitor erat. Morbi porttitor ligula ipsum, ut feugiat leo bibendum ut. In eu ante mollis, molestie orci vitae, finibus arcu. Pellentesque vel quam eget metus euismod facilisis. Curabitur nibh mauris, auctor nec leo et, facilisis auctor purus. Cras at lorem euismod, laoreet sem in, fringilla diam. Aenean facilisis nunc quis ipsum condimentum egestas"
    }, {
        key: "2",
        question: "Orci varius natoque penatibus et magnis dis parturient ?",
        content: "Ut porttitor metus velit, a fringilla odio mattis quis. Vestibulum turpis arcu, finibus eget tempus vel, gravida nec eros. Donec convallis, ex in ultricies efficitur, nulla arcu imperdiet odio, et elementum tellus ante vel est. Donec eget ligula sit amet nibh pretium iaculis. Sed id posuere ante. Vivamus tempor, nisi porta sagittis cursus, lacus arcu luctus quam facilisis auctor purus. Cras at lorem euismod sodales at ultricies eget, pulvinar a purus."
}]

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTopic: ''
        }
        this.handleSearchTopic = this.handleSearchTopic.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSearchTopic(e) {
        this.setState({
            searchTopic: e.target.value
        });
    }

    handleSubmitResearch() {
        console.log('research topic');
    }

    render() {
        return (
            <div class="layout-style">
                <Container id="faq" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <Row className="mx-0 mb-5">
                        <Col sm="12" className="px-0 d-flex flex-column">
                            <H1 className="mb-5" title="Bonjour, comment pouvons-nous vous aider ?"/>
                            <div class="d-flex flex-column flex-sm-row">
                                <Input onChange={this.handleSearchTopic} hideLabel={true} type="search" placeholder="Rechercher un sujet ou posez une question..." containerStyle="w-100 mr-0 mr-sm-4 mb-4 mb-sm-0 pb-0"/>
                                <PmyBtn onClick={this.handleSubmitResearch} type="button" btnIsMediumPmyFull textBtn="Rechercher" isDisabled={this.state.searchTopic.length < 1} className="h-100 w-sm-100"/>
                            </div>
                            <p class="mt-5">Ou sélectionnez une catégorie pour trouver rapidement la réponse à votre question</p>
                        </Col>
                    </Row>
                    <Row className="mx-0 mb-5 w-100 d-flex flex-row">
                        <Col sm="12" md="6" lg="3" className="categorie-list-faq categorie-list-faq-selected">
                            <FaqIcons icon="start" height="24"/>
                            <p class="mt-4">Pour commencer</p>
                        </Col>
                        <Col sm="12" md="6" lg="3" className="categorie-list-faq">
                            <FaqIcons icon="pricing" height="24"/>
                            <p class="mt-4">Plans &amp; Tarifs</p>
                        </Col>
                        <Col sm="12" md="6" lg="3" className="categorie-list-faq">
                            <FaqIcons icon="sales" height="24"/>
                            <p class="mt-4">Questions sur la vente</p>
                        </Col>
                        <Col sm="12" md="6" lg="3" className="categorie-list-faq">
                            <FaqIcons icon="guides" height="24"/>
                            <p class="mt-4">Guide d'usage</p>
                        </Col>
                    </Row>
                    <Col sm="12" className="px-0 mb-5">
                        <H2 className="mb-4" title="Pour commencer"/>
                        <H3 title="Bien débuter son utilisation de l'outil Asking Franklin"/>
                    </Col>
                    <Row className="mx-0 my-5 w-100 d-flex flex-column">
                        <Col sm="12" className="question-faq d-flex flex-column text-left px-0 ">
                            <Accordion defaultActiveKey="-1">
                                {accordionItems.map((accordionItem) =>
                                    <AccordionItem eventKey={accordionItem.key} title={accordionItem.question} content={accordionItem.content}></AccordionItem>
                                )}
                            </Accordion>
                        </Col>
                    </Row>
                    <Row className="faq-contact-infos mx-0 mt-5 pt-4 pb-4 pb-md-5 px-3 w-100 d-flex flex-column flex-nowrap rounded">
                        <p class="text-left">Vous n'avez pas trouvé l'information que vous cherchez ? Contactez-nous.</p>
                        <div class="d-flex flex-row justify-content-center flex-wrap mt-5">
                            <Col sm="12" md="4" lg="3" className="faq-contact-infos-block px-0 mr-0 mr-md-5 mb-4 mb-md-0">
                                <Link to="/assistance" class="d-flex flex-column align-items-center p-3 rounded">
                                    <LifeSaver height="20" fill="#2B2B2B"/>
                                    <span class="mt-3 mb-2 fw-600">Assistance</span>
                                    <span>Laissez-nous un message</span>
                                </Link>
                            </Col>
                            <Col sm="12" md="4" lg="3" className="faq-contact-infos-block px-0">
                                <a href="javascript:void(Tawk_API.toggle())" class="d-flex flex-column align-items-center p-3 rounded">
                                    <SpeechBubble height="20" fill="#2B2B2B"/>
                                    <span class="mt-3 mb-2 fw-600">Chattez avec nous</span>
                                    <span>Posez-nous votre question</span>
                                </a>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        )
    }
}