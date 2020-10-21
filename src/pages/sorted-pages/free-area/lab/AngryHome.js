import React from 'react';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Col
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'; 
import VideoHome from '../../../../assets/video/VideoHome.mp4';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import PmyBtn from '../../../components/button/PmyBtn';
import FormRequestFranklin from '../../../components/form/FormRequestFranklin';
import CardTestimonial from '../../../components/elements/CardTestimonial';
import FrenchFlag from '../../../../assets/img/svg/FrenchFlag';
import GoogleSearch from '../../../../assets/img/svg/illustrations/GoogleSearch';
import Control from '../../../../assets/img/png/illustrations/illustration-control.png';
import PierreHusson from '../../../../assets/img/png/testimonials/pierre-husson.jpg';
import MargauxMaziere from '../../../../assets/img/png/testimonials/margaux-maziere.jpg';
import SofianeTazdait from '../../../../assets/img/png/testimonials/sofiane-tazdait.jpg';
import Dots from '../../../../assets/img/svg/decorating/Dots';
import WaveSectionSeparator from '../../../../assets/img/svg/decorating/waves/WaveSectionSeparator';
import Blob1 from '../../../../assets/img/svg/decorating/blob/Blob1';
import Blob2 from '../../../../assets/img/svg/decorating/blob/Blob2';
import Blob3 from '../../../../assets/img/svg/decorating/blob/Blob3';
import Blob4 from '../../../../assets/img/svg/decorating/blob/Blob4';
import Blob5 from '../../../../assets/img/svg/decorating/blob/Blob5';
import Blob6 from '../../../../assets/img/svg/decorating/blob/Blob6';
import Blob8 from '../../../../assets/img/svg/decorating/blob/Blob8';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywordSearch: '',
            redirect: false
        }
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.requestFanklin = this.requestFanklin.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    
    customHeadElement() {
        return (
            <Helmet>
                <title>Asking Franklin - votre outil SEO Français</title>
                <meta name="description" content="Découvrez ce que les internautes recherchent sur Google, optimisez votre contenu et gagnez en visibilité avec Asking Franklin, votre outil SEO Français !"/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    handleKeywordChange(e) {
        this.setState({
            keywordSearch: e.target.value
        });
    }

    requestFanklin = () => {
        this.setState({
            redirect: true
        });
    }

    render() {

        if(this.state.redirect) {
            return <Redirect to={'/recherche/' + this.state.keywordSearch.replace(/ /g, '-')}/>
        }

        return (
            <div id="home">
                {this.customHeadElement()}
                <div id="top"></div>

                <section class={this.props.bannerIsActive ? 'home-section-1 pt-hero-banner position-relative' : 'home-section-1 pt-hero position-relative'}>
                    <Blob3 className="blob-3"/>
                    <Container className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 block-style position-relative overflow-visible">
                        <Blob1 className="blob-1"/>
                        <Blob2 className="blob-2"/>
                        <Dots className="dots-1"/>
                        <Col md="12" lg="6" className="mt-0 mb-5 py-0 my-md-5 py-md-5 px-0">
                            <H1 title="Découvrez ce que recherchent les internautes sur Google"/>
                            <FormRequestFranklin 
                                onSubmit={this.requestFanklin} 
                                onChange={this.handleKeywordChange} 
                                value={this.state.keywordSearch} 
                                keyword={this.state.keywordSearch} 
                            />
                        </Col>
                        <Col md="12" lg="6" className="px-0 d-flex align-items-center justify-content-center">
                            <video loop autoPlay muted style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                                <source src={VideoHome} type="video/mp4"/>
                            </video>
                        </Col>
                    </Container>
                </section>

                <section class="home-section-2">
                    <Container>
                        <Col xl="12" className="px-0 ml-auto d-flex flex-column align-items-center">
                            <H2 className="mb-5 text-center" title="Vous connaissez AnswerThePublic ?"/>
                            <p class="fz-18 fw-600 text-center">
                                Et bien nous faisons exactement la même chose, moins cher. <br/>
                                <span class="d-flex justify-content-center align-items-center mt-2">Et on est français ! <FrenchFlag/></span>
                            </p>
                        </Col>
                    </Container>
                </section>

                <section class="home-section-3">
                    <Container className="d-flex flex-column flex-lg-row pt-0 pt-lg-5">
                        <Col md="12" lg="6" className="px-0">
                            <Blob4 className="blob-4 d-none d-xl-block"/>
                            <H2 className="mb-5" title="Comme chez AnswerThePublic vous avez accès à une source d’idées de contenus venant directement des recherches Google"/>
                            <p class="fz-18">Tapez le mot-clé que vous souhaitez et Asking Franklin ira chercher toutes les questions, les recherches et sujets connexes en relation avec ce dernier.</p>
                        </Col>
                        <Col md="12" lg="6" className="d-flex justify-content-center justify-content-lg-end px-0 pl-lg-5 mt-0 mt-sm-5 mt-lg-0">
                            <GoogleSearch/>
                            <Dots className="dots-2"/>
                        </Col>
                    </Container>
                </section>

                <section class="home-section-4 position-relative py-5">
                    <WaveSectionSeparator className="wave-top-4"/>
                    <Blob5 className="blob-5"/>
                    <Container className="d-flex flex-column flex-lg-row">
                        <Col md="12" lg="6" className="d-flex justify-content-center justify-content-lg-start order-1 order-lg-0 px-0 pr-lg-5 mt-5 mt-lg-0">
                            <img src={Control} alt="Prenez les devants" class="img-fluid"/>
                        </Col>
                        <Col md="12" lg="6" className="d-flex flex-column justify-content-center order-0 order-lg-1 pt-5 pt-lg-0">
                            <H2 className="mb-5" title="Prenez les devants et proposez des produits, services et des contenus que cherchent vos consommateurs"/>
                            <p class="fz-18 mb-5">Asking Franklin vous fournit une ressource illimitée de mots-clés mais aussi d’idées pour booster votre SEO et nourrir votre stratégie de contenus.</p>
                            <PmyBtn redirectTo="/#top" linkIsLargePmyOutlineFull textLink="Essayer gratuitement" customBtnClass="w-sm-100"/>
                        </Col>
                    </Container>
                    <Blob6 className="blob-6 d-none d-lg-block"/>
                    <Dots className="dots-3"/>
                    <WaveSectionSeparator className="wave-bottom-4"/>
                </section>

                <section class="home-section-6 position-relative px-0 px-lg-4 px-xl-5">
                    <Container className="slider-container position-relative d-flex flex-row justify-content-xl-around pb-3 pb-lg-0 px-0 px-xl-0">
                        <Col md="12" lg="4" xl="3" className="slider-item px-0">
                            <CardTestimonial
                                img={PierreHusson}
                                testimonial="Grâce à Asking Franklin, je peux suivre simplement les tendances du marché de Rematch : le sport amateur ! News, concurrents, événements... tout y est !"
                                fullname="Pierre Husson" jobAndCompany="CEO - Rematch"
                            />
                        </Col>
                        <Col md="12" lg="4" xl="3" className="slider-item px-0 mt-5">
                            <CardTestimonial   
                                img={MargauxMaziere}
                                testimonial="En tant que chef de projet, la plateforme Asking Franklin a été un réel atout pour répondre à mon besoin de création d’audits de l’image de marque. Je le recommande à toute personne active dans le marketing, le brand content, la conception de contenus."
                                fullname="Margaux Mazière" jobAndCompany="Chef de projet - Journal Sud Ouest"
                            />
                        </Col>
                        <Col md="12" lg="4" xl="3" className="slider-item px-0 mt-6">
                            <CardTestimonial 
                                img={SofianeTazdait}
                                testimonial="Avant je tentais d'améliorer mon SEO via des suppositions. Désormais, Asking Franklin me permet de savoir quelles sont les requêtes tapées par les internautes pour mon secteur d’activité, ce qui m'aide beaucoup"
                                fullname="Sofiane Tazdaït" jobAndCompany="Product Manager - Freelance"
                            />  
                        </Col>
                        <Dots className="dots-4"/>
                        <Blob8 className="blob-8 d-none d-lg-block"/>
                    </Container>
                </section>

                <section class="home-section-7 position-relative">
                    <Container className="px-0">
                        <H2 className="pt-6 text-center" title="Pourquoi payer plus cher pour la même chose ?"/>
                        <div class="mt-6 d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <PmyBtn redirectTo="/tarifs" linkIsLargePmyFull textLink="S'inscrire et devenir Pro" containerStyle="text-center mb-5 mb-md-0 mr-md-5" style={{zIndex: 1}}/>
                            <PmyBtn redirectTo="/#top" linkIsLargePmyOutlineLight textLink="Essayer gratuitement" containerStyle="text-center" style={{zIndex: 1}}/>
                        </div>
                    </Container>
                    <Dots className="dots-5"/>
                </section>

            </div>
        )
    }    
}