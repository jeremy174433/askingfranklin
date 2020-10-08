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
import PaperPlane from '../../../assets/img/svg/PaperPlane';
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
            toShow: [],
            selectedCategoryIndex: 0,
            useFiltered: false,
            noResult: false
        }
        this.handleSearchTopic = this.handleSearchTopic.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSearchTopic(e) {
        if(e.target.value.length > 2) {
            var ret = [];
            for (var i= 0; i < accordionItems.length; i++) {
                for(var j= 0; j < accordionItems[i].questions.length; j++){
                    if (accordionItems[i].questions[j].question.toLowerCase().includes(e.target.value.toLowerCase()) || accordionItems[i].questions[j].content.toLowerCase().includes(e.target.value.toLowerCase())){
                        ret.push(accordionItems[i].questions[j])
                    }
                }
            }
            this.setState({
                useFiltered: true,
                toShow: ret,
                noResult: ret.length == 0 ? true : false
            });
        } 
        else {
            this.setState({
                useFiltered: false,
                toShow: []
            });
        }

    }

    changeCategory(e) {
        this.setState({
            selectedCategoryIndex: parseInt(e.currentTarget.getAttribute('num'))
        });
    }

    render() {
        return (
            <div class="layout-style">
                <Container id="faq" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">

                    <Row className="mx-0 mb-5 w-md-100">
                        <Col sm="12" className="px-0 d-flex flex-column">
                            <H1 className="mb-5" title="Bonjour, comment pouvons-nous vous aider ?"/>
                            <Input onChange={this.handleSearchTopic} hideLabel={true} type="search" placeholder="Rechercher un sujet ou posez une question..." containerStyle="w-100 mr-0 mr-sm-4 mb-4 mb-sm-0 pb-0"/>
                            {!this.state.useFiltered && 
                                <p class="mt-5">Ou sélectionnez une catégorie pour trouver rapidement la réponse à votre question</p>
                            }
                        </Col>
                    </Row>

                    {!this.state.useFiltered && 
                        <Row className="mx-0 mb-5 w-100 d-flex flex-row">
                            {accordionItems.map((accordionItem,idx) =>
                                <Col onClick={this.changeCategory} num={idx} sm="12" md="4" className={idx === this.state.selectedCategoryIndex ? 'categorie-list-faq categorie-list-faq-selected' : 'categorie-list-faq'}>
                                    <FaqIcons icon={accordionItem.categoryIcon} height="24"/>
                                    <p class="mt-4">{accordionItem.category}</p>
                                </Col>
                            )}
                        </Row>
                    }

                    {!this.state.useFiltered &&
                        <Col sm="12" className="px-0 mb-5">
                            <H2 className="mb-4" title={accordionItems[this.state.selectedCategoryIndex].categoryTitle}/>
                            <H3 title={accordionItems[this.state.selectedCategoryIndex].categorySubtitle}/>
                        </Col>
                    }
                    {(!this.state.noResult && this.state.useFiltered) &&  
                        <p class="fz-24 fw-600">
                            {this.state.toShow.length === 1 ? 
                                [this.state.toShow.length, <span class="pl-1 fz-20 fw-400"> résultat a été trouvé</span>] 
                            :
                                [this.state.toShow.length, <span class="pl-1 fz-20 fw-400"> résultats ont étés trouvés</span>]
                            }
                        </p>
                    }
                    {this.state.noResult &&  
                        <p class="fz-20">Aucun résultat n'a pu être trouvé, essayer avec un autre terme</p>
                    }

                    <Row className="mx-0 my-5 w-100 d-flex flex-column">
                        <Col sm="12" className="question-faq d-flex flex-column text-left px-0">
                            <Accordion defaultActiveKey="-1">
                                {
                                    !this.state.useFiltered ? accordionItems[this.state.selectedCategoryIndex].questions.map((accordionItem) =>
                                        <AccordionItem eventKey={accordionItem.key} title={accordionItem.question} content={accordionItem.content}></AccordionItem>
                                    )
                                    : this.state.toShow.map((accordionItem) =>
                                        <AccordionItem eventKey={accordionItem.key} title={accordionItem.question} content={accordionItem.content}></AccordionItem>
                                    )
                                }
                            </Accordion>
                        </Col>
                    </Row>

                    <Row className="faq-contact-infos mx-0 mt-5 pt-4 pb-4 pb-md-5 px-3 w-100 d-flex flex-column flex-nowrap rounded">
                        <p class="text-left fw-600">Vous n'avez pas trouvé l'information que vous cherchez ?</p>
                        <div class="d-flex flex-row justify-content-center flex-wrap mt-5">
                            <Col sm="12" md="4" lg="3" className="faq-contact-infos-block px-0 mr-0 mr-md-5 mb-4 mb-md-0">
                                <Link to="/contact" class="d-flex flex-column align-items-center p-3 rounded">
                                    <PaperPlane height="20" fill="#2B2B2B"/>
                                    <span class="mt-3 mb-2 fw-600">Contactez-nous</span>
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