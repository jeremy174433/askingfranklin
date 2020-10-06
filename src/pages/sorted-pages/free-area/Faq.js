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
        question: "Quel type de termes dois-je rechercher ?",
        content: "Vous pouvez rechercher n’importe quel terme: un objet, un secteur, un marché, un concurrent, un produit, un animal... etc. La seule limite étant que le mot doit être français, ou en tout cas utilisé dans le langage français (par exemple «call» est un mot anglais, mais utilisé par de nombreux français).Vous ne pouvez pas taper de phrase complète ou d’ensembles de mots car il n’y aurait pas de résultats associés."
    }, {
        key: "1",
        question: "Puis-je modifier les résultats dans la roue ?",
        content: "Vous ne pouvez pas modifier les résultats dans la roue mais vous pouvez cependant modifier la représentation des résultats, en cliquant simplement sur le bouton «texte» à côté de «data»."
    }, {
        key: "2",
        question: "De quelle période proviennent vos données ?",
        content: "Les données sont affichées en temps réel car nous envoyons une requête au moment où vous recherchez le mot clé.Cela signifie que les résultats peuvent être différents d’un jour sur l’autre ou même d’une heure sur l’autre."
    }, {
        key: "3",
        question: "Puis-je changer mon adresse e-mail ?",
        content: "Vous pouvez changer votre adresse e-mail, en cliquant sur «mon compte» en haut à droite, puis dans «mon profil» et enfin en cliquant sur«modifier mon adresse e-mail»."
    }, {
        key: "4",
        question: "Comment est-ce que je change mon mot de passe ?",
        content: "Vous pouvez changer votre mot de passe, en cliquant sur «mon compte» en haut à droite, puis dans «mon profil» et enfin en cliquant sur «modifier mon mot de passe»."
    }, {
        key: "5",
        question: "Suis-je engagé ?",
        content: "Il n’y a pas d’engagement de durée quand vous souscrivez un abonnement sur Asking Franklin. Vous pouvez donc arrêter votre abonnement à tout moment, la résiliation sera effective à l’issue du mois entamé. Vous pourrez dès lors continuer à utiliser votre compte en offre gratuite."
    }, {
        key: "6",
        question: "Comment exporter en CSV ?",
        content: "Pour exporter les résultats en CSV, rien de plus simple, il vous suffit de cliquer sur le bouton «export CSV» sur la page des résultats de recherche."
    }, {
        key: "7",
        question: "Combien de recherches ai-je le droit de faire chaque mois ?",
        content: "Vous pouvez effectuer autant de recherches que vous le souhaitez chaquemois grâce à notre offre payante.Bien sûr, vous pouvez également profiter de Asking Franklin gratuitement,vous pourrez effectuer jusqu’à 3 recherches par jour."
    }, {
        key: "8",
        question: "Le paiement est-il sécurisé ?",
        content: "Le paiement est entièrement sécurisé grâce à notre prestataire agréé."
    }, {
        key: "9",
        question: "Quels sont les moyens de paiement ?",
        content: "Vous pouvez payer par carte bancaire: CB, MasterCard, Visa, American Express... etcToutes les cartes dans le monde entier sont supportées."
    }, {
        key: "10",
        question: "Comment trouvez-vous les résultats ?",
        content: "Nous sommes directement connectés à l’API de Google, ainsi les résultats sont affichés avec une certitude de 100%."
}]

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTopic: '',
            toShow:[]
        }
        this.handleSearchTopic = this.handleSearchTopic.bind(this);
    }
    search(searchTopic, questions){
        var results = []
        for (var i=0; i < questions.length; i++) {
            if (questions[i].content.includes(searchTopic) || questions[i].question.includes(searchTopic)) {
                 results.push(questions[i])
            }
        }
        return results
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