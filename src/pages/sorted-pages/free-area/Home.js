import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { 
    Container,
    Row,
    Col
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom'; 
import VideoHome from '../../../assets/video/VideoHome.mp4';
import H1 from '../../components/elements/title/H1';
import H2 from '../../components/elements/title/H2';
import PmyBtn from '../../components/button/PmyBtn';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';
import CardReview from '../../components/elements/cards/CardReview';
import CardTestimonial from '../../components/elements/cards/CardTestimonial';
import CardBlog from '../../components/elements/cards/CardBlog';
import GoogleSearch from '../../../assets/img/svg/illustrations/GoogleSearch';
import Control from '../../../assets/img/png/illustrations/illustration-control.png';
import Ideas from '../../../assets/img/png/illustrations/illustration-ideas.png';
import ThomasCubel from '../../../assets/img/png/testimonials/thomas-cubel.jpg';
import MargauxMaziere from '../../../assets/img/png/testimonials/margaux-maziere.jpg';
import SofianeTazdait from '../../../assets/img/png/testimonials/sofiane-tazdait.jpg';
import Dots from '../../../assets/img/svg/decorating/Dots';
import WaveSectionSeparator from '../../../assets/img/svg/decorating/waves/WaveSectionSeparator';
import WaveEndingTop from '../../../assets/img/svg/decorating/waves/WaveEndingTop';
import Blob1 from '../../../assets/img/svg/decorating/blob/Blob1';
import Blob2 from '../../../assets/img/svg/decorating/blob/Blob2';
import Blob3 from '../../../assets/img/svg/decorating/blob/Blob3';
import Blob4 from '../../../assets/img/svg/decorating/blob/Blob4';
import Blob5 from '../../../assets/img/svg/decorating/blob/Blob5';
import Blob6 from '../../../assets/img/svg/decorating/blob/Blob6';
import Blob7 from '../../../assets/img/svg/decorating/blob/Blob7';
import Blob8 from '../../../assets/img/svg/decorating/blob/Blob8';
import Blob9 from '../../../assets/img/svg/decorating/blob/Blob9';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywordSearch: '',
            languageSearch: 'fr',
            countrySearch: 'fr',
            redirect: false,
            lastArticles: []
        }
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.requestFanklin = this.requestFanklin.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
    }
    
    componentDidMount() {
        window.scrollTo(0, 0);
        fetch('https://blog.askingfranklin.com/wp-json/wp/v2/posts?per_page=3&_embed')
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                lastArticles: res
            });
        })
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.props.t('title.homepage')}</title>
                <meta name="description" content={this.props.t('description.homepage')}/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    handleKeywordChange(e) {
        this.setState({
            keywordSearch: e.target.value
        });
    }
    handleCountryChange(value){
        this.setState({
            countrySearch:value
        })
    }
    handleLanguageChange(value){
        this.setState({
            languageSearch:value
        })
    }
    requestFanklin = () => {
        this.setState({
            redirect: true
        });
    }

    render() {

        const { t } = this.props;
        const cardRowBlog = 'd-flex flex-column flex-lg-row align-items-center align-items-lg-start ';

        if(this.state.redirect) {
            return <Redirect to={ t('url.resultAF') + this.state.keywordSearch.replace(/ /g, '-') + '?lang=' + this.state.languageSearch + '&country=' + this.state.countrySearch}/>
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
                            <H1 title={t('homepage.h1')}/>
                            <FormRequestFranklin 
                                onSubmit={this.requestFanklin} 
                                onChange={this.handleKeywordChange} 
                                value={this.state.keywordSearch} 
                                keyword={this.state.keywordSearch}
                                hideLabel={true}
                                isDisabled={this.state.keywordSearch.length === 0}
                                handleLanguageChange={this.handleLanguageChange}
                                handleCountryChange={this.handleCountryChange}
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
                        <H2 className="mb-5" title={t('homepage.h2a')}/>
                        <div className="d-flex flex-row justify-content-center flex-wrap">
                            <CardReview
                                title={t('homepage.reviews.1.title')}
                                authorName={t('homepage.reviews.1.author')}
                                authorProfession={t('homepage.reviews.1.about')}
                                postLink={t('url.external.reviews.1')}
                            />
                            <CardReview
                                title={t('homepage.reviews.2.title')}
                                authorName={t('homepage.reviews.2.author')}
                                authorProfession={t('homepage.reviews.2.about')}
                                postLink={t('url.external.reviews.2')}
                            />
                            <CardReview
                                title={t('homepage.reviews.3.title')}
                                authorName={t('homepage.reviews.3.author')}
                                authorProfession={t('homepage.reviews.3.about')}
                                postLink={t('url.external.reviews.3')}
                            />
                            <CardReview
                                title={t('homepage.reviews.4.title')}
                                authorName={t('homepage.reviews.4.author')}
                                authorProfession={t('homepage.reviews.4.about')}
                                postLink={t('url.external.reviews.4')}
                            />
                        </div>
                    </Container>
                </section>

                <section class="home-section-3">
                    <Container className="d-flex flex-column flex-lg-row pt-0 pt-lg-5">
                        <Col md="12" lg="6" className="px-0">
                            <Blob4 className="blob-4 d-none d-xl-block"/>
                            <H2 className="mb-5" title={t('homepage.h2b')}/>
                            <p class="fz-18">{t('homepage.p1')}</p>
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
                            <img src={Control} alt={t('altImg.homepage.1')} class="img-fluid"/>
                        </Col>
                        <Col md="12" lg="6" className="d-flex flex-column justify-content-center order-0 order-lg-1 px-0 pt-5 pt-lg-0">
                            <H2 className="mb-5" title={t('homepage.h2c')}/>
                            <p class="fz-18 mb-5">{t('homepage.p2')}</p>
                            <PmyBtn redirectTo={t('url.pricing')} linkIsLargePmyOutlineFull textLink={t('homepage.cta.1')} customBtnClass="w-sm-100"/>
                        </Col>
                    </Container>
                    <Blob6 className="blob-6 d-none d-lg-block"/>
                    <Dots className="dots-3"/>
                    <WaveSectionSeparator className="wave-bottom-4"/>
                </section>

                <section class="home-section-5">
                    <Container className="d-flex flex-column flex-lg-row">
                        <Col md="12" lg="6" className="d-flex flex-column justify-content-center px-0">
                            <H2 className="mb-5" title={t('homepage.h2d')}/>
                            <blockquote>
                                <p class="fz-18 fw-600">{t('homepage.p3-1')} <br/> {t('homepage.p3-2')}</p>
                            </blockquote>
                            <p class="fz-18 mt-3 mb-5 pt-3">{t('homepage.p4')}</p>
                            <PmyBtn redirectTo="/#top" linkIsLargePmyOutlineFull textLink={t('homepage.cta.2')} customBtnClass="w-sm-100"/>
                        </Col>
                        <Col md="12" lg="6" className="d-flex justify-content-center justify-content-lg-start px-0 pl-lg-5 mt-5 mt-lg-0">
                            <img src={Ideas} alt={t('altImg.homepage.2')} class="img-fluid"/>
                        </Col>
                    </Container>
                </section>

                <section class="home-section-6 position-relative px-0 px-lg-4 px-xl-5">
                    <Blob7 className="blob-7"/>
                    <Container className="slider-container position-relative d-flex flex-row justify-content-xl-around pb-3 pb-lg-0 px-0 px-xl-0">
                        <Col md="12" lg="4" xl="3" className="slider-item px-0">
                            <CardTestimonial
                                img={ThomasCubel}
                                testimonial={t('homepage.testimonials.1.text')}
                                fullname={t('homepage.testimonials.1.author')}
                                jobAndCompany={t('homepage.testimonials.1.about')}
                            />
                        </Col>
                        <Col md="12" lg="4" xl="3" className="slider-item px-0 mt-5">
                            <CardTestimonial   
                                img={MargauxMaziere}
                                testimonial={t('homepage.testimonials.2.text')}
                                fullname={t('homepage.testimonials.2.author')}
                                jobAndCompany={t('homepage.testimonials.2.about')}
                            />
                        </Col>
                        <Col md="12" lg="4" xl="3" className="slider-item px-0 mt-6">
                            <CardTestimonial 
                                img={SofianeTazdait}
                                testimonial={t('homepage.testimonials.3.text')}
                                fullname={t('homepage.testimonials.3.author')}
                                jobAndCompany={t('homepage.testimonials.3.about')}
                            />  
                        </Col>
                        <Dots className="dots-4"/>
                        <Blob8 className="blob-8 d-none d-lg-block"/>
                    </Container>
                </section>

                <section class="home-section-7 position-relative pt-5">
                    <Container className="px-0">
                        <div class="d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <PmyBtn redirectTo="/#top" linkIsLargePmyFull textLink={t('homepage.cta.2')} containerStyle="text-center mb-5 mb-md-0 mr-md-5 w-sm-100" customBtnClass="w-sm-100" style={{zIndex: 1}}/>
                            <PmyBtn redirectTo={t('url.pricing')} linkIsLargePmyOutlineLight textLink={t('homepage.cta.1')} containerStyle="text-center w-sm-100" customBtnClass="w-sm-100" style={{zIndex: 1}}/>
                        </div>
                    </Container>
                    {!this.state.lastArticles.length < 1 &&  <Blob9 className="blob-9"/> }
                </section>

                {!this.state.lastArticles.length < 1 &&
                    <section class="home-section-8 position-relative overflow-hidden pt-6">
                        <WaveEndingTop className="wave-top-5"/>
                        <Container className="px-0 position-relative">
                            <H2 className="mb-5" title={t('homepage.h2e')}/>
                            <Dots className="dots-5"/>
                            <Row className={this.state.lastArticles.length < 3 ? cardRowBlog + 'justify-content-lg-start' : cardRowBlog + 'justify-content-lg-around'}>
                                {this.state.lastArticles.map((article) => {
                                    return (
                                        <Col xs="12" sm="8" md="6" lg="4" className={this.state.lastArticles.length < 3 ? 'blog-post-item px-0 mt-5 mr-5' : 'blog-post-item px-0 mt-5'}>
                                            <CardBlog
                                                redirectTo={article.link}
                                                img={article._embedded['wp:featuredmedia'][0].source_url} imgAlt={article._embedded['wp:featuredmedia'][0].alt_text}
                                                title={article.title.rendered}
                                                date={new Date(article.date).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            />
                                        </Col>
                                    )
                                })}
                            </Row>
                            <Dots className="dots-6"/>
                        </Container>
                    </section>
                }

            </div>
        )
    }    
}

export default withTranslation()(Home);