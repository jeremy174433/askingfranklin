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
import FaqIcons from '../../../assets/img/svg/switch/FaqIcons';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/elements/AccordionItem';
import LifeSaver from '../../../assets/img/svg//LifeSaver';
import SpeechBubble from '../../../assets/img/svg//SpeechBubble';
import { Link } from 'react-router-dom'; 

var accordionItems = [
    {
        category: "Fonctionnement général",
        categoryIcon: "guides",
        categoryTitle: "Fonctionnement général",
        categorySubtitle: "Lorem ipsum",
        questions: [
            {
                key: "0",
                question: "Quel type de terme je dois rechercher ?",
                content: "Lorem ipsum"
            },
            {
                key: "1",
                question: "Combien de recherches je peux effectuer par jour ?",
                content: "Lorem ipsum"
            },
            {
                key: "2",
                question: "De quelle période proviennent les données des résultats ?",
                content: "Lorem ipsum"
            },
            {
                key: "3",
                question: "Comment trouvez-vous les résultats affichés pour chaque requête ?",
                content: "Lorem ipsum"
            },
            {
                key: "4",
                question: "Comment bien comprendre les différentes parties des branches de résultat de la roue ?",
                content: "Lorem ipsum"
            },
            {
                key: "5",
                question: "Est-ce que je peux modifier les résultats de ma recherche directement dans la roue ?",
                content: "Lorem ipsum"
            },
            {
                key: "6",
                question: "Comment exporter les résultats de ma recherche en CSV ?",
                content: "Lorem ipsum"
            }
        ]
    },
    {
        category: "Paiement & Abonnement",
        categoryIcon: "pricing",
        categoryTitle: "Paiement & Abonnement",
        categorySubtitle: "Lorem ipsum",
        questions: [
            {
                key: "100",
                question: "À quelles fonctionnalités supplémentaires j’ai accès en version Pro ?",
                content: "Lorem ipsum"
            },
            {
                key: "101",
                question: "Est-ce que je suis forcément engagé si je souscris à une offre ?",
                content: "Lorem ipsum"
            },
            {
                key: "102",
                question: "Le paiement en ligne est-il sécurisé ?",
                content: "Lorem ipsum"
            },
            {
                key: "103",
                question: "Quels sont les différents moyens de paiement disponibles ?",
                content: "Lorem ipsum"
            },
            {
                key: "104",
                question: "Comment annuler le renouvellement automatique de mon abonnement ?",
                content: "Lorem ipsum"
            }
        ]
    },
    {
        category: "Mon compte",
        categoryIcon: "account",
        categoryTitle: "Mon compte",
        categorySubtitle: "Lorem ipsum",
        questions: [
            {
                key: "200",
                question: "Est-ce que je peux modifier l’adresse email de mon compte ?",
                content: "Lorem ipsum"
            },
            {
                key: "201",
                question: "Est-ce que je peux modifier le mot de passe de mon compte ?",
                content: "Lorem ipsum"
            }
        ]
    }
]

export default class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchTopic: '',
            toShow: []
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

    search(searchTopic, questions){
        var results = [];
        for (var i= 0; i < questions.length; i++) {
            if (questions[i].content.includes(searchTopic) || questions[i].question.includes(searchTopic)) {
                results.push(questions[i]);
            }
        }
        return results;
    }

    render() {
        return (
            <div class="layout-style">
                <Container id="faq" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <Row className="mx-0 mb-5 w-md-100">
                        <Col sm="12" className="px-0 d-flex flex-column">
                            <H1 className="mb-5" title="Bonjour, comment pouvons-nous vous aider ?"/>
                            <Input onChange={this.handleSearchTopic} hideLabel={true} type="search" placeholder="Rechercher un sujet ou posez une question..." containerStyle="w-100 mr-0 mr-sm-4 mb-4 mb-sm-0 pb-0"/>
                            <p class="mt-5">Ou sélectionnez une catégorie pour trouver rapidement la réponse à votre question</p>
                        </Col>
                    </Row>
                    <Row className="mx-0 mb-5 w-100 d-flex flex-row">
                        {accordionItems.map((accordionItem) =>
                            <Col sm="12" md="4" className="categorie-list-faq">
                                <FaqIcons icon={accordionItem.categoryIcon} height="24"/>
                                <p class="mt-4">{accordionItem.category}</p>
                            </Col>
                        )}
                    </Row>
                    {accordionItems.map((accordionItem) =>
                        <Col sm="12" className="px-0 mb-5">
                            <H2 className="mb-4" title={accordionItem.categoryTitle}/>
                            <H3 title={accordionItem.categorySubtitle}/>
                        </Col>
                    )}
                    <Row className="mx-0 my-5 w-100 d-flex flex-column">
                        <Col sm="12" className="question-faq d-flex flex-column text-left px-0 ">
                            <Accordion defaultActiveKey="-1">
                                {accordionItems[0].questions.map((accordionItem) =>
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