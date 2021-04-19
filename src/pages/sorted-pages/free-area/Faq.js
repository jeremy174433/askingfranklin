import React from 'react';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import H2 from '../../components/elements/title/H2';
import Input from '../../components/form/Input';
import FaqIcons from '../../../assets/img/svg/switch/FaqIcons';
import Accordion from 'react-bootstrap/Accordion';
import AccordionItem from '../../components/elements/AccordionItem';
import FeaturesList from '../../components/elements/FeaturesList';
import PaperPlane from '../../../assets/img/svg/PaperPlane';
import SpeechBubble from '../../../assets/img/svg//SpeechBubble';
import { Link } from 'react-router-dom'; 

const accordionItems = {
    "fr": [
        {
            category: "Fonctionnement général",
            categoryIcon: "guides",
            categoryTitle: "Fonctionnement général",
            categorySubtitle: <span>Que vous soyez à la recherche de contenus frais pour votre audience ou de mots clés qui feront mouche pour votre SEO <br class="d-none d-lg-block"/> vous retrouverez ici toutes les questions les plus posées sur l’utilisation d’Asking Franklin</span>,
            questions: [
                {
                    key: "0",
                    question: "Quel type de terme je dois rechercher ?",
                    content: <p>Vous pouvez rechercher n’importe quel terme : <strong class="fw-600">un objet, un secteur, un marché, un concurrent, un produit, un animal... etc.</strong> <br/>
                    Pour que la recherche soit pertinente, le terme doit être en français. Ou en tout cas utilisé dans le langage français (par exemple « call » est un mot anglais, mais utilisé par de nombreux français).
                    <blockquote class="d-block mt-3">En revanche afin d’optimiser les résultats nous vous déconseillons de taper des phrases complètes ou des ensembles de mots car il y aurait peu de résultats associés.</blockquote></p>
                },
                {
                    key: "1",
                    question: "Combien de recherches je peux effectuer par jour ?",
                    content: <p>Vous pouvez effectuer autant de recherches que vous le souhaitez chaque jour grâce à notre offre Pro (payante). <span class="d-block mt-3">Bien sûr, vous pouvez également profiter de Asking Franklin gratuitement, vous pourrez ainsi effectuer jusqu’à 3 recherches gratuitement par jour.</span></p>
                },
                {
                    key: "2",
                    question: "De quelle période proviennent les données des résultats ?",
                    content: <p>Les données sont affichées en temps réel car nous envoyons une requête au moment où vous recherchez le mot clé. Cela signifie que les résultats peuvent être différents d’un jour sur l’autre ou même d’une heure sur l’autre.</p>
                },
                {
                    key: "3",
                    question: "Comment trouvez-vous les résultats affichés pour chaque requête ?",
                    content: <p>Nous sommes directement connectés à l’<abbr title="Application Programming Interface">API</abbr> de Google, ainsi les résultats sont affichés avec une certitude de 100%.</p>
                },
                {
                    key: "4",
                    question: "Comment bien comprendre les différentes parties des branches de résultat dans le graphique ?",
                    content: <div>
                        <h5 class="d-block mb-3 fz-18 fw-600">Questions</h5>
                        <blockquote>Les questions sont généralement utilisées par les internautes en recherche de réponses ou de connaissances sur un sujet ou un thème précis.</blockquote>
                        <p class="d-block mt-3"><span class="fw-600">« comment, pourquoi, qu’est-ce » : </span>questionnement sur un usage ou un comportement.</p>
                        <p class="d-block mt-3"><span class="fw-600">« où, quel, quelle, lequel » : </span>comparaison sur plusieurs choix ou questionnement sur un choix défini.</p>
                        <p class="d-block mt-3"><span class="fw-600">« qui » : </span>selon la formulation, les internautes utiliseront le "qui" pour connaitre une identité ou un comportement.</p>
                        <p class="d-block mt-3"><span class="fw-600">« quoi, quand » : </span>demande de recommandations sur une utilisation.</p>
                        <p class="d-block mt-3"><span class="fw-600">« que » : </span>généralement, les internautes l’utiliseront pour déterminer la meilleure action à prendre.</p>
                        <h5 class="d-block mt-4 mb-3 fz-18 fw-600">Comparaisons</h5>
                        <blockquote>Les comparaisons servent aux internautes à confronter une idée ou à savoir quel est le meilleur choix.</blockquote>
                        <p class="d-block mt-3"><span class="fw-600">« et » : </span>il est utilisé quand l’internaute cherche à savoir si deux choses peuvent être utilisées ensemble.</p>
                        <p class="d-block mt-3"><span class="fw-600">« comme » : </span>souvent utilisé dans le cas d’une recherche de quelque chose similaire à un objet ou une idée.</p>
                        <p class="d-block mt-3"><span class="fw-600">« vs, contre, ou » : </span>leur utilisation est faite pour comparer ou confronter des choses.</p>
                        <h5 class="d-block mt-4 mb-3 fz-18 fw-600">Prépositions</h5>
                        <blockquote>Les prépositions sont utilisées pour obtenir une information plus précise à propos du sujet recherché.</blockquote>
                        <p class="d-block mt-3"><span class="fw-600">« près, au » : </span>ces prépositions sont utilisées pour une recherche géographique, notamment pour déterminer un lieu.</p>
                        <p class="d-block mt-3"><span class="fw-600">« pour » : </span>les internautes l’utilisent pour un besoin de connaissance d’un usage précis.</p>
                        <p class="d-block mt-3"><span class="fw-600">« a » : </span>cette préposition sert pour plusieurs usages : recherche dans un lieu spécifique ou à propos d’une typologie précise.</p>
                        <p class="d-block mt-3"><span class="fw-600">« avec, sans » : </span>les internautes l’utilisent pour rechercher un service, un objet ou un lieu avec ou sans une fonctionnalité spécifique.</p>
                        <h5 class="d-block mt-4 mb-3 fz-18 fw-600">Mots relatifs</h5>
                        <blockquote>Les mots relatifs sont utilisés pour compléter une recherche, généralement dans le cas où l’internaute cherche un résultat en rapport direct avec le sujet employé.</blockquote>
                    </div>
                },
                {
                    key: "5",
                    question: "Est-ce que je peux modifier les résultats de ma recherche directement dans le graphique ?",
                    content: <div>
                        <p>Vous ne pouvez pas modifier les résultats du graphique mais vous pouvez cependant modifier la représentation visuelle des résultats :</p>
                        <p class="mt-3">En cliquant simplement sur le bouton « <span class="fw-600">Tableau</span> » vous aurez alors accès à un tableau regroupant l'ensemble des résultats.</p>
                        <p class="mt-3">En cliquant sur le bouton « <span class="fw-600">Tendances</span> » vous aurez accès à une vue tableau couplée à un graphique. Ce graphique contient le volume de recherche pour certains résultats liés aux requêtes des internautes <span class="fz-14">(les tendances sont basées sur les requêtes effectuées sur Google depuis les 12 derniers mois)</span>.</p>
                    </div>
                },
                {
                    key: "6",
                    question: "Comment exporter les résultats de ma recherche en CSV ?",
                    content: <p>Pour exporter les résultats en CSV, rien de plus simple : il vous suffit de cliquer sur le bouton « <span class="fw-600">Exporter en CSV</span> » sur la page des résultats de recherche. L'ensemble des données récupérées liées à la recherche sera alors exporté.</p>
                },
                {
                    key: "7",
                    question: "Comment exporter les résultats de ma recherche en PNG ?",
                    content: <p>Pour exporter un graphique au format PNG, rien de plus simple : il vous suffit de cliquer sur le bouton « <span class="fw-600">Exporter en PNG</span> » sur la page des résultats de recherche. Chacun des boutons présent sur la page permet d'exporter indépendamment le graphique qui lui est imputé.</p>
                }
            ]
        },
        {
            category: "Paiement & Abonnement",
            categoryIcon: "pricing",
            categoryTitle: "Paiement & Abonnement",
            categorySubtitle: <span>Que vous utilisiez gratuitement Asking Franklin ou passiez à la version Pro <br class="d-none d-lg-block"/> voici toutes les réponses concernant l’engagement et le système de paiement du service</span>,
            questions: [
                {
                    key: "100",
                    question: "À quelles fonctionnalités supplémentaires j’ai accès en version Pro ?",
                    content: <p>En passant à la version Pro, vous aurez accès à un certain nombre de nouvelles fonctionnalités, telles que : <FeaturesList className="mt-3 pt-3"/></p>
                },
                {
                    key: "101",
                    question: "Combien coûte Asking Franklin ?",
                    content: <p>Deux types d'offres sont proposés pour la version payante du produit : <br/>
                    <blockquote class="d-block mt-3"><span class="d-block mb-2 fw-600">Offre Mensuelle : <br/> 49€/mois </span> (Souscription sans engagement)</blockquote> <br/>
                    <blockquote class="d-block mt-3"><span class="d-block mb-2 fw-600">Offre Annuelle : <br/> 39€/mois </span> (468€/an au lieu de 588€ soit 20% de réduction)</blockquote> <br/> 
                    Bien sûr, vous pouvez également profiter de Asking Franklin gratuitement, vous pourrez ainsi effectuer jusqu’à 3 recherches gratuitement par jour.</p>
                },
                {
                    key: "102",
                    question: "Est-ce que je suis forcément engagé si je souscris à une offre ?",
                    content: <p><span class="fw-600">Il n’y a pas d’engagement de durée quand vous souscrivez un abonnement sur Asking Franklin. Vous pouvez donc arrêter votre abonnement à tout moment.</span>
                    <blockquote class="d-block mt-3">Dans le cas où <span class="fw-600">vous avez souscrit un abonnement mensuel</span>, la résiliation sera alors effective dès l'annulation du renouvellement automatique de l'abonnement, vous resterez membre Pro jusqu'au terme de sa période de validité, celui-ci étant valable pour une durée de 30 jours. <br/>
                    <span class="fz-14">(exemple : vous souscrivez ou renouvellez un abonnement le 12 du mois, vous annulez votre abonnement le 23, celui-ci sera automatiquement interrompu le 12 du mois suivant)</span>.</blockquote>
                    <blockquote class="d-block mt-3">Dans le cas où <span class="fw-600">vous avez souscrit un abonnement annuel</span>, la résiliation sera alors effective dès l'annulation du renouvellement automatique de l'abonnement, vous resterez membre Pro jusqu'au terme de sa période de validité, celui-ci étant valable pour une durée de 1 an (365 jours). <br/>
                    <span class="fz-14">(exemple : vous souscrivez ou renouvellez un abonnement au mois de mars, vous annulez votre abonnement annuel en juillet, celui-ci sera automatiquement interrompu au mois de mars suivant)</span>.</blockquote>
                    <span class="d-block mt-3">Note : Même si vous résiliez votre abonnement, tant que celui-ci n'est pas arrivé au terme de sa période de validité, vous avez la possibilité de le réactiver en cochant la case dédiée à l'abonnement sur votre profil puis en cliquant sur sauvegarder.</span>
                    <span class="d-block mt-3"> Vous pourrez dès lors continuer à utiliser votre compte en offre gratuite et limitée à 3 recherches par jour.</span></p>
                },
                {
                    key: "103",
                    question: "Le paiement en ligne est-il sécurisé ?",
                    content: <p>Le paiement par carte bancaire est entièrement sécurisé et crypté grâce à notre prestataire Stripe.</p>
                },
                {
                    key: "104",
                    question: "Quels sont les différents moyens de paiement disponibles ?",
                    content: <p>Vous pouvez payer par carte bancaire : <span class="fw-600">CB, MasterCard, Visa, American Express... etc.</span> Toutes les cartes dans le monde entier sont supportées.</p>
                },
                {
                    key: "105",
                    question: "Comment annuler le renouvellement automatique de mon abonnement ?",
                    content: <p>Vous pouvez annuler le renouvellement automatique de votre abonnement, une fois connecté, en cliquant sur « <span class="fw-600">Mon compte</span> » en haut à droite, puis dans « <span class="fw-600">Paramètres</span> » et enfin dans l'onglet « <span class="fw-600">Abonnement</span> » en décochant la case dédiée à l'abonnement puis en cliquant sur sauvegarder.
                    <span class="d-block mt-3">Note : Si vous résiliez votre abonnement, tant que celui-ci n'est pas arrivé au terme de sa période de validité, vous avez la possibilité de le réactiver en cochant de nouveau la case dédiée à l'abonnement sur votre profil puis en cliquant sur sauvegarder.</span></p>
                }
            ]
        },
        {
            category: "Mon compte",
            categoryIcon: "account",
            categoryTitle: "Mon compte",
            categorySubtitle: "Les questions relatives à la gestion de votre compte",
            questions: [
                {
                    key: "200",
                    question: "Est-ce que je peux modifier l’adresse email de mon compte ?",
                    content: <p>Vous pouvez changer votre adresse email, une fois connecté, en cliquant sur « <span class="fw-600">Mon compte</span> » en haut à droite, puis dans « <span class="fw-600">Paramètres</span> » et enfin dans l'onglet « <span class="fw-600">Compte</span> » vous pourrez modifier votre adresse email.</p>
                },
                {
                    key: "201",
                    question: "Est-ce que je peux modifier le mot de passe de mon compte ?",
                    content: <p>Vous pouvez changer votre mot de passe, une fois connecté, en cliquant sur « <span class="fw-600">Mon compte</span> » en haut à droite, puis dans « <span class="fw-600">Paramètres</span> » et enfin dans l'onglet « <span class="fw-600">Compte</span> » vous pourrez modifier votre mot de passe.</p>
                }
            ]
        }
    ],
    "en": [
        {
            category: "Overall functionning / How it works",
            categoryIcon: "guides",
            categoryTitle: "Overall functionning / How it works",
            categorySubtitle: <span>If you're looking for some new contents or keywords for your audience and your website's SEO, <br class="d-none d-lg-block"/> you will find here the most asked questions about how to use Asking Franklin.</span>,
            questions: [
                {
                    key: "0",
                    question: "What kind of word should I look for ?",
                    content: <p>You can search every word you want or need for you content : <strong class="fw-600">an object, a sector, a market, a competitor, a product, an animal...etc </strong> <br/>
                    To make your search pertinent, your word have to be in french or in english.
                    <blockquote class="d-block mt-3">On the other hand, we don't recommend you to search for a complete sentence or a group of words or you will have a poor number of results.</blockquote></p>
                },
                {
                    key: "1",
                    question: "How many research can I do per day ?",
                    content: <p>You can do as many researches as you want everyday with our premium offer (charged). <span class="d-block mt-3">Also, you can enjoy Asking Franklin for free with 3 searches per day.</span></p>
                },
                {
                    key: "2",
                    question: "Which period did those results come from ?",
                    content: <p>Those results are displayed on real time because we are sending a request when you're searching for a keyword. It means the results can be different depend the day or the hour.</p>
                },
                {
                    key: "3",
                    question: "How do you find the results displayed for each request ?",
                    content: <p>We are directly connected to Google's <abbr title="Application Programming Interface">API</abbr> so the results are displayed with a 100% absolute certainty.</p>
                },
                {
                    key: "4",
                    question: "How fully understand the different parts of the results in the graph ?",
                    content: <div>
                        <h5 class="d-block mb-3 fz-18 fw-600">Questions</h5>
                        <blockquote>Questions are usually used by internet users to find a answer or some knowledge about a specific subject.</blockquote>
                        <p class="d-block mt-3"><span class="fw-600">« how, why, what is » : </span>question about the use or the behavior.</p>
                        <p class="d-block mt-3"><span class="fw-600">« where, what, which » : </span>it's a comparison of several choices or questions on a specific subject.</p>
                        <p class="d-block mt-3"><span class="fw-600">« who » : </span>according to the wording, internet users will use the "who" to know an identity or a behaviour.</p>
                        <p class="d-block mt-3"><span class="fw-600">« what, when » : </span>it's a request for recommandations on using something.</p>
                        <p class="d-block mt-3"><span class="fw-600">« what » : </span>usually, internet users use this to determine the best action to do.</p>
                        <h5 class="d-block mt-4 mb-3 fz-18 fw-600">Comparisons</h5>
                        <blockquote>Comparisons are used by internet users to compare an idea or to know what is the better choice.</blockquote>
                        <p class="d-block mt-3"><span class="fw-600">« and » : </span>it's used when internet user wants to know if two things can be used together.</p>
                        <p class="d-block mt-3"><span class="fw-600">« like » : </span>usually used if the research is similar to an object or an idea.</p>
                        <p class="d-block mt-3"><span class="fw-600">« vs, against, or » : </span>it's used to compare several things.</p>
                        <h5 class="d-block mt-4 mb-3 fz-18 fw-600">Prepositions</h5>
                        <blockquote>Prepositions are used to get very specific information on a subject.</blockquote>
                        <p class="d-block mt-3"><span class="fw-600">« near, at » : </span>thoses prepositions are used for a geographic research to determine a location.</p>
                        <p class="d-block mt-3"><span class="fw-600">« for » : </span>internet users are using it to know a specific use.</p>
                        <p class="d-block mt-3"><span class="fw-600">« with, without » : </span>it's used to search for a service, an object, a location with or without a specific functionality.</p>
                        <h5 class="d-block mt-4 mb-3 fz-18 fw-600">Relateds</h5>
                        <blockquote>Related words are used to complete a research, usually if the user is looking for a result related to the chosen subject.</blockquote>
                    </div>
                },
                {
                    key: "5",
                    question: "Can I change the results of my research directly in the graph ?",
                    content: <div>
                        <p>You can't change the graph's results but you can change the visual representation of results :</p>
                        <p class="mt-3">Just click on « <span class="fw-600">Table</span> » button, you will have an access to the table results.</p>
                        <p class="mt-3">Just click on « <span class="fw-600">Trends</span> » button, you will have access to a table view linked to a graph. This graph contains the search volume for some results related users queries <span class="fz-14">(trends are based on queries made on Google over the last 12 months)</span>.</p>
                    </div>
                },
                {
                    key: "6",
                    question: "How to export results of my research with CSV format ?",
                    content: <p>To export in CSV format, it's very simple ! You just have to click on the « <span class="fw-600">Export in CSV</span> » button on the results page. All the data collected of your search will be exported in CSV.</p>
                },
                {
                    key: "7",
                    question: "How to export results of my research with PNG format ?",
                    content: <p>To export in PNG format, it's very simple ! You just have to click on the « <span class="fw-600">Export in PNG</span> » button on the results page. Each button on each category of results allow to export a specific category.</p>
                }
            ]
        },
        {
            category: "Payment and subscription",
            categoryIcon: "pricing",
            categoryTitle: "Payment and subscription",
            categorySubtitle: <span>Whether you use Asking Franklin for free or switch to the Pro version, <br class="d-none d-lg-block"/> here are all the answers regarding the commitment and payment system of the service.</span>,
            questions: [
                {
                    key: "100",
                    question: "What additional features do I have access to with premium version ?",
                    content: <p>With premium version, you will have access to many features like : <FeaturesList className="mt-3 pt-3"/></p>
                },
                {
                    key: "101",
                    question: "How much does Asking Franklin cost ?",
                    content: <p>There is two premium offers : <br/>
                    <blockquote class="d-block mt-3"><span class="d-block mb-2 fw-600">Monthly supply :  <br/> $59/month </span> (subscription without commitment)</blockquote> <br/>
                    <blockquote class="d-block mt-3"><span class="d-block mb-2 fw-600">Annual supply : <br/> $49/month </span> ($588/years for 1 year ($120 saving)</blockquote> <br/> 
                    Of course, you can use Asking Franklin for free and make 3 searches only per day.</p>
                },
                {
                    key: "102",
                    question: "Am I necessarily committed if I subscribe to an offer ?",
                    content: <p><span class="fw-600">There is no commitment of time when you subscribe to an offer with Asking Franklin. You can stop your subscription anytime you want.</span>
                    <blockquote class="d-block mt-3">If you have subscribed to a monthly supply, the cancellation will then be effective as soon as the automatic renewal of the subscription is cancelled, you will remain a Pro member until the end of its validity period, which is valid for 30 days.<br/>
                    <span class="fz-14">(eg : you subscribe or renew a subscription on the 12th of the month, you cancel your subscription on the 23rd, it will be automatically interrupted on the 12th of the following month)</span>.</blockquote>
                    <blockquote class="d-block mt-3">If you have subscribed to a annual supply, the cancellation will then be effective as soon as the automatic renewal of the subscription is cancelled, you will remain a Pro member until the end of its validity period, which is valid for 1 year or 365 days.<br/>
                    <span class="fz-14">(eg : you subscribe or renew a subscription in March, you cancel your annual subscription in July, it will be automatically interrupted in the following March)</span>.</blockquote>
                    <span class="d-block mt-3">Note : Even if you cancel your subscription, as long as it has not reached the end of its validity period, you can reactivate it by ticking the box dedicated to the subscription on your profile and then, cliking on save.</span>
                    <span class="d-block mt-3"> You can therefore continue to use your account in a free offer limited to 3 searches per day.</span></p>
                },
                {
                    key: "103",
                    question: "Is online payment secure ?",
                    content: <p>Online payment with credit card is entirely secure and encrypted thanks to Stripe.</p>
                },
                {
                    key: "104",
                    question: "What are the different payment methods available ?",
                    content: <p>You can pay with your credit card : <span class="fw-600">CB, MasterCard, Visa, American Express... etc.</span> All credit card on the world are available.</p>
                },
                {
                    key: "105",
                    question: "How do I cancel the automatic renewal of my subscription ?",
                    content: <p>You can cancel the automatic renewal of your subscription when you're connected. Just click on  « <span class="fw-600">My account</span> » at the top right, then click on  « <span class="fw-600">Parameters</span> » and then on « <span class="fw-600">Subscription</span> » by unchecking the box dedicated to the subscription and clicking on save.
                    <span class="d-block mt-3">Note : if you cancel your subscription as long as it has not reached the end of its period of validity, you can reactivate it by checking the box dedicated to the subscription on your profile and then clicking on save.</span></p>
                }
            ]
        },
        {
            category: "My account",
            categoryIcon: "account",
            categoryTitle: "My account",
            categorySubtitle: "All questions regarding to your account.",
            questions: [
                {
                    key: "200",
                    question: "Can I change the email address of my account ?",
                    content: <p>Yes, you can change your email address by clicking on « <span class="fw-600">My account</span> » at top right, then on « <span class="fw-600">Parameters</span> » and then on « <span class="fw-600">Account</span> » to change it.</p>
                },
                {
                    key: "201",
                    question: "Can I change my password ?",
                    content: <p>Yes, you can change your password by clicking on « <span class="fw-600">My account</span> » at top right, then on « <span class="fw-600">Parameters</span> » and then on « <span class="fw-600">Account</span> » to change it.</p>
                }
            ]
        }
    ]
};

class Faq extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            toShow: [],
            selectedCategoryIndex: 0,
            useFiltered: false,
            noResult: false,
            is_sub: 0
        }
        this.handleSearchTopic = this.handleSearchTopic.bind(this);
        this.changeCategory = this.changeCategory.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        var token = localStorage.getItem('af_token');
        var is_sub = localStorage.getItem('af_is_sub');
        if(token) {
            this.setState({
                is_sub: is_sub
            });
        }
    }
    
    customHeadElement() {
        return (
            <Helmet>
               <title>{this.props.t('title.faq')}</title>
                <meta name="description" content={this.props.t('description.faq')}/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }
    
    handleSearchTopic(e) {
        if (e.target.value.length > 2) {
            var ret = [];
            for (var i = 0; i < accordionItems[i18n.languages[0]].length; i++) {
                for (var j = 0; j < accordionItems[i18n.languages[0]][i].questions.length; j++) {
                    if (typeof accordionItems[i18n.languages[0]][i].questions[j].content.props.children === 'string') {
                        var contentQ = accordionItems[i18n.languages[0]][i].questions[j].content.props.children;
                    } 
                    else {
                        var contentQ = accordionItems[i18n.languages[0]][i].questions[j].content.props.children.join();
                    }
                    if ((accordionItems[i18n.languages[0]][i].questions[j].question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')) || (contentQ.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))))) {
                        ret.push(accordionItems[i18n.languages[0]][i].questions[j]);
                    }
                }
            }
            this.setState({
                useFiltered: true,
                toShow: ret,
                noResult: ret.length === 0 ? true : false
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

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="faq" className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">

                    <Row className="mx-0 mb-5 w-md-100">
                        <Col sm="12" className="px-0 d-flex flex-column">
                            <H1 className="mb-5" title={t('faq.h1')}/>
                            <Input onChange={this.handleSearchTopic} hideLabel={true} type="search" placeholder={t('form.input.placeholderFaq')} containerStyle="w-100 mr-0 mr-sm-4 mb-4 mb-sm-0 pb-0"/>
                            {!this.state.useFiltered && 
                                <p class="mt-5">{t('faq.infoCategory')}</p>
                            }
                        </Col>
                    </Row>

                    {!this.state.useFiltered && 
                        <Row className="mx-0 mb-5 w-100 d-flex flex-row">
                            {accordionItems[i18n.languages[0]].map((accordionItem, idx) =>
                                <Col onClick={this.changeCategory} num={idx} sm="12" md="4" className={idx === this.state.selectedCategoryIndex ? 'categorie-list-faq categorie-list-faq-selected' : 'categorie-list-faq'}>
                                    <FaqIcons icon={accordionItem.categoryIcon} height="24"/>
                                    <p class="mt-4">{accordionItem.category}</p>
                                </Col>
                            )}
                        </Row>
                    }

                    {!this.state.useFiltered &&
                        <Col sm="12" className="px-0 mb-5">
                            <H2 className="mb-4" title={accordionItems[i18n.languages[0]][this.state.selectedCategoryIndex].categoryTitle}/>
                            <p>{accordionItems[i18n.languages[0]][this.state.selectedCategoryIndex].categorySubtitle}</p>
                        </Col>
                    }
                    {(!this.state.noResult && this.state.useFiltered) &&  
                        <p class="fz-24 fw-600">
                            {this.state.toShow.length === 1 ? 
                                [this.state.toShow.length, <span class="pl-1 fz-20 fw-400">{t('faq.searchResult.foundOneResult')}</span>] 
                            :
                                [this.state.toShow.length, <span class="pl-1 fz-20 fw-400">{t('faq.searchResult.foundManyResults')}</span>]
                            }
                        </p>
                    }
                    {this.state.noResult &&  
                        <p class="fz-20">{t('faq.searchResult.foundNoResult')}</p>
                    }

                    <Row className="mx-0 my-5 w-100 d-flex flex-column">
                        <Col sm="12" className="question-faq d-flex flex-column text-left px-0">
                            <Accordion defaultActiveKey="-1">
                                {
                                    !this.state.useFiltered ? accordionItems[i18n.languages[0]][this.state.selectedCategoryIndex].questions.map((accordionItem) =>
                                        <AccordionItem eventKey={accordionItem.key} title={accordionItem.question} content={accordionItem.content}/>
                                    )
                                    : this.state.toShow.map((accordionItem) =>
                                        <AccordionItem eventKey={accordionItem.key} title={accordionItem.question} content={accordionItem.content}/>
                                    )
                                }
                            </Accordion>
                        </Col>
                    </Row>

                    <Row className="faq-contact-infos mx-0 mt-5 pt-4 pb-4 pb-md-5 px-3 w-100 d-flex flex-column flex-nowrap rounded">
                        <p class="text-left fw-600">{t('faq.footer.title')}</p>
                        <div class="d-flex flex-row justify-content-center flex-wrap mt-5">
                            <Col sm="12" md="4" lg="3" className="faq-contact-infos-block px-0">
                                <Link to={t('url.contact')} class="d-flex flex-column align-items-center p-3 rounded">
                                    <PaperPlane height="20" fill="#2B2B2B"/>
                                    <span class="mt-3 mb-2 fw-600">{t('faq.footer.contactUs')}</span>
                                    <span>{t('faq.footer.leaveUsMessage')}</span>
                                </Link>
                            </Col>
                            <Col sm="12" md="4" lg="3" className="faq-contact-infos-block px-0 ml-0 ml-md-5 mt-4 mt-md-0">
                                <a href="javascript:void(Tawk_API.toggle())" class="d-flex flex-column align-items-center p-3 rounded">
                                    <SpeechBubble height="20" fill="#2B2B2B"/>
                                    <span class="mt-3 mb-2 fw-600">{t('faq.footer.chatWithUs')}</span>
                                    <span>{t('faq.footer.liveExchange')}</span>
                                </a>
                            </Col>
                        </div>
                    </Row>

                </Container>
            </div>
        )
    }
}


export default withTranslation()(Faq);