import React from 'react';
import { 
    Container,
    Col
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'; 
import VideoHome from '../../../assets/video/VideoHome.mp4';
import H1 from '../../components/elements/title/H1';
import H2 from '../../components/elements/title/H2';
import PmyBtn from '../../components/button/PmyBtn';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';
import CardTestimonial from '../../components/elements/CardTestimonial';
import LogoFrenchTech from '../../../assets/img/png/partners/french-tech-logo.png';
import Logo1Kubator from '../../../assets/img/png/partners/1kubator-logo.png';
import LogoDigitalCampus from '../../../assets/img/png/partners/digital-campus-logo.png';
import LogoColissimo from '../../../assets/img/png/partners/colissimo-logo.png';
import LogoGRDF from '../../../assets/img/png/partners/grdf-logo.png';
import GoogleResearch from '../../../assets/img/png/google-research.png';
import Control from '../../../assets/img/png/illustrations/illustration-control.png';
import Ideas from '../../../assets/img/png/illustrations/illustration-ideas.png';
import JeffBezos from '../../../assets/img/png/testimonials/jeff-bezos.jpg';
import TatianaSilva from '../../../assets/img/png/testimonials/tatiana-silva.jpg';
import PaulVanHecke from '../../../assets/img/png/testimonials/paul-van-hecke.jpg';
import Dots from '../../../assets/img/svg/decorating/Dots';
import WaveSectionSeparator from '../../../assets/img/svg/decorating/waves/WaveSectionSeparator';
import Blob1 from '../../../assets/img/svg/decorating/blob/Blob1';
import Blob2 from '../../../assets/img/svg/decorating/blob/Blob2';
import Blob3 from '../../../assets/img/svg/decorating/blob/Blob3';
import Blob4 from '../../../assets/img/svg/decorating/blob/Blob4';
import Blob5 from '../../../assets/img/svg/decorating/blob/Blob5';
import Blob6 from '../../../assets/img/svg/decorating/blob/Blob6';
import Blob7 from '../../../assets/img/svg/decorating/blob/Blob7';
import Blob8 from '../../../assets/img/svg/decorating/blob/Blob8';

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
                <div id="top"></div>

                <section class="home-section-1 position-relative">
                    <Blob3 className="blob-3"/>
                    <Container className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 block-style position-relative overflow-visible">
                        <Blob1 className="blob-1"/>
                        <Blob2 className="blob-2"/>
                        <Dots className="dots-1"/>
                        <Col md="12" lg="6" className="mt-0 mb-5 py-0 my-md-5 py-md-5 px-0">
                            <H1 title="Découvrez les tendances de recherches des internautes sur le web à propos d'un terme clé"/>
                            <FormRequestFranklin 
                                onSubmit={this.requestFanklin} 
                                onChange={this.handleKeywordChange} 
                                value={this.state.keywordSearch} 
                                keyword={this.state.keywordSearch} 
                                isDisabled={this.state.keywordSearch.trim().length <= 1}
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
                        <Col md="12" lg="6" className="px-0 ml-auto d-flex flex-column flex-lg-row align-items-center justify-content-end">
                            <img src={LogoFrenchTech} alt="Logo French Tech"/>
                            <img src={Logo1Kubator} alt="Logo 1Kubator"/>
                            <img src={LogoDigitalCampus} alt="Logo Digital Campus"/>
                            <img src={LogoColissimo} alt="Logo Colissimo"/>
                            <img src={LogoGRDF} alt="Logo GRDF"/>
                        </Col>
                    </Container>
                </section>

                <section class="home-section-3">
                    <Container className="d-flex flex-column flex-lg-row pt-0 pt-lg-5">
                        <Col md="12" lg="6" className="px-0">
                            <Blob4 className="blob-4 d-none d-xl-block"/>
                            <H2 className="mb-5" title="Partez à la découverte de ce que recherche votre audience sur Google"/>
                            <p class="fz-18">Tapez le mot-clé que vous souhaitez et Asking Franklin ira chercher toutes les questions, les recherches et sujets connexes en relation avec ce dernier.</p>
                        </Col>
                        <Col md="12" lg="6" className="d-flex justify-content-center justify-content-lg-end px-0 pl-lg-5 mt-5 mt-lg-0">
                            <img src={GoogleResearch} alt="Une recherche effectuée sur Google" class="img-fluid"/>
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
                            <H2 className="mb-5" title="Prenez les devants et proposez des produits, services et contenus que cherchent vos consommateurs"/>
                            <p class="fz-18">Asking Franklin vous fournit une ressource illimité de mots-clés mais aussi d’idées pour booster votre SEO et nourrir votre stratégie de contenus.</p>
                        </Col>
                    </Container>
                    <Blob6 className="blob-6 d-none d-lg-block"/>
                    <Dots className="dots-3"/>
                    <WaveSectionSeparator className="wave-bottom-4"/>
                </section>

                <section class="home-section-5">
                    <Container className="d-flex flex-column flex-lg-row">
                        <Col md="12" lg="6" className="d-flex flex-column justify-content-center">
                            <H2 className="mb-5" title="En un clic vous avez accès à une source d’idées de contenus venant directement des recherches de votre audience"/>
                            <blockquote>
                                <p class="fz-18 fw-600">Une nouvelle tendance de consommation émerge ? <br/> Une nouvelle mode ?</p>
                            </blockquote>
                            <p class="fz-18 mt-3 pt-3">Grâce à Asking Franklin, prenez une longueur d’avance sur vos concurrents en étant le premier au courant des nouveautés qui arrivent sur le marché.</p>
                        </Col>
                        <Col md="12" lg="6" className="d-flex justify-content-center justify-content-lg-start px-0 pl-lg-5 mt-5 mt-lg-0">
                            <img src={Ideas} alt="Source d'idées de contenus" class="img-fluid"/>
                        </Col>
                    </Container>
                </section>

                <section class="home-section-6 position-relative px-0 px-lg-4 px-xl-5">
                    <Blob7 className="blob-7"/>
                    <Container className="slider-container position-relative d-flex flex-row justify-content-xl-around pb-3 pb-lg-0 px-0 px-xl-0">
                        <Col md="12" lg="4" xl="3" className="slider-item px-0">
                            <CardTestimonial 
                                img={JeffBezos} altImg="Jeff Bezos" 
                                testimonial="Suspendisse nec metus sed diam congue hendrerit. Nulla ac metus fringilla, pellentesque dui ut, tempus odio. Vestibulum dapibus odio nec."
                                fullname="Jeff Bezos" jobAndCompany="Directeur Général d'Amazon"
                                redirectTo="https://www.linkedin.com/in/jeff-bezos-687b0283/"
                            />
                        </Col>
                        <Col md="12" lg="4" xl="3" className="slider-item px-0 mt-5">
                            <CardTestimonial   
                                img={TatianaSilva} altImg="Jeff Bezos" 
                                testimonial="Suspendisse nec metus sed diam congue hendrerit. Nulla ac metus fringilla, pellentesque dui ut, tempus odio. Vestibulum dapibus odio nec."
                                fullname="Tatiana Silva" jobAndCompany="Présentatrice météo à TF1"
                                redirectTo="https://www.linkedin.com/in/tatianaasilva/"
                            />
                        </Col>
                        <Col md="12" lg="4" xl="3" className="slider-item px-0 mt-6">
                            <CardTestimonial   
                                img={PaulVanHecke} altImg="Jeff Bezos" 
                                testimonial="Suspendisse nec metus sed diam congue hendrerit. Nulla ac metus fringilla, pellentesque dui ut, tempus odio. Vestibulum dapibus odio nec."
                                fullname="Paul Van Hecke" jobAndCompany="Lead of Nothing à Paul Emploi"
                                redirectTo="https://www.linkedin.com/in/paul-vanhecke/"
                            />
                        </Col>
                        <Dots className="dots-4"/>
                        <Blob8 className="blob-8 d-none d-lg-block"/>
                    </Container>
                </section>

                <section class="home-section-7">
                    <Container className="px-0">
                        <H2 className="pt-6 text-center" title="Découvrez un outil clés en main et répondez au mieux aux attentes de votre audience"/>
                        <div class="mt-6 d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <PmyBtn redirectTo="/#top" linkIsLargePmyFull textLink="Essayer gratuitement" containerStyle="text-center mb-5 mb-md-0 mr-md-5"/>
                            <PmyBtn redirectTo="/tarifs" linkIsLargePmyOutlineLight textLink="Voir les avantages Pro" containerStyle="text-center"/>
                        </div>
                    </Container>
                </section>

            </div>
        )
    }
}