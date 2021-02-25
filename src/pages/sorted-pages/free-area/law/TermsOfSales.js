import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class TermsOfSales extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Conditions Générales de Vente - Asking Franklin</title>
                <meta name="description" content="Conditions Générales de Vente - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                <meta name="robots" content="index, follow"/>
            </Helmet>
        );
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container className="px-0 mt-6">

                    <H1 className="mb-4" title={t('gtcs.h1')}/>
                    <p>{t('gtcs.dateEffect')}</p>
                    <p class="mb-5">{t('gtcs.dateUpdate')}</p>

                    {/* --- Preamble --- */}
                    <section>
                        <H2 className="mb-3" title={t('gtcs.introduction.title')}/>
                        <p class="mb-3">{t('gtcs.introduction.p1')}</p>
                        <p class="mb-3">{t('gtcs.introduction.p2a')}<Link to="/">{t('url.domain.website')}</Link>{t('gtcs.introduction.p2b')}</p>
                        <p>{t('gtcs.introduction.p3')}</p>
                    </section>

                    <p class="fz-24 mt-5 mb-4">{t('gtcs.summary.title')}</p>
                    <ul>
                        <li class="mb-3"><AnchorLink href="#article-1">{t('gtcs.summary.article1')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-2">{t('gtcs.summary.article2')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-3">{t('gtcs.summary.article3')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-4">{t('gtcs.summary.article4')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-5">{t('gtcs.summary.article5')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-6">{t('gtcs.summary.article6')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-7">{t('gtcs.summary.article7')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-8">{t('gtcs.summary.article8')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-9">{t('gtcs.summary.article9')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-10">{t('gtcs.summary.article10')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-11">{t('gtcs.summary.article11')}</AnchorLink></li>
                        <li><AnchorLink href="#article-12">{t('gtcs.summary.article12')}</AnchorLink></li>
                    </ul>

                    {/* --- Article 1 --- */}
                    <section>
                        <H2 id="article-1" className="pt-6 mb-3" title={t('gtcs.summary.article1')}/>
                        <p>
                            {t('gtcs.1.p1')}<br/>
                            {t('gtcs.1.p2')}<Link to="/">{t('url.domain.website')}</Link>.<br/>
                            {t('gtcs.1.p3')}<Link to="/">{t('url.domain.website')}</Link>.<br/>
                            {t('gtcs.1.p4')}<br/>
                            {t('gtcs.1.p5')}<br/>
                            {t('gtcs.1.p6')}
                        </p>
                    </section>
                
                    {/* --- Article 2 --- */}
                    <section>
                        <H2 id="article-2" className="pt-6 mb-3" title={t('gtcs.summary.article2')}/>
                        <p>
                            {t('gtcs.2.p1')}<br/>
                            {t('gtcs.2.p2')}<br/>
                            {t('gtcs.2.p3')}<br/>
                            {t('gtcs.2.p4')}<br/>
                            {t('gtcs.2.p5')}<br/>
                            {t('gtcs.2.p6')}<br/>
                            {t('gtcs.2.p7')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>.
                        </p>
                    </section>

                    {/* --- Article 3 --- */}
                    <section>
                        <H2 id="article-3" className="pt-6 mb-3" title={t('gtcs.summary.article3')}/>
                        <p>
                            {t('gtcs.3.p1')}<br/>
                            {t('gtcs.3.p2')}
                        </p>
                    </section>

                    {/* --- Article 4 --- */}
                    <section>
                        <H2 id="article-4" className="pt-6 mb-3" title={t('gtcs.summary.article4')}/>
                        <p> {t('gtcs.4.p1')}</p>
                    </section>

                    {/* --- Article 5 --- */}
                    <section>
                        <H2 id="article-5" className="pt-6 mb-3" title={t('gtcs.summary.article5')}/>
                        <p>
                            {t('gtcs.5.p1a')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>{t('gtcs.5.p1b')}<br/>
                            {t('gtcs.5.p2')}<br/>
                            {t('gtcs.5.p3')}<br/>
                            {t('gtcs.5.p4')}
                        </p>
                    </section>

                    {/* --- Article 6 --- */}
                    <section>
                        <H2 id="article-6" className="pt-6 mb-3" title={t('gtcs.summary.article6')}/>
                        <p>
                            {t('gtcs.6.p1')}<br/>
                            {t('gtcs.6.p2a')}{t('funnel.pricing.price-1')}{t('gtcs.6.p2b')}<br/>
                            {t('gtcs.6.p3a')}{t('funnel.pricing.price-2')}{t('gtcs.6.p3b')}{t('funnel.pricing.priceTotalNow')}{t('gtcs.6.p3c')}<br/>
                            {t('gtcs.6.p4')}<br/>
                            {t('gtcs.6.p5')}<br/>
                            {t('gtcs.6.p6')}
                        </p>
                    </section>

                    {/* --- Article 7 --- */}
                    <section>
                        <H2 id="article-7" className="pt-6 mb-3" title={t('gtcs.summary.article7')}/>
                        <p>
                            {t('gtcs.7.p1')}<br/>
                            {t('gtcs.7.p2')}<br/>
                            {t('gtcs.7.p3')}
                        </p>
                    </section>

                    {/* --- Article 8 --- */}
                    <section>
                        <H2 id="article-8" className="pt-6 mb-3" title={t('gtcs.summary.article8')}/>
                        <p>
                            {t('gtcs.8.p1')}<br/>
                            {t('gtcs.8.p2')}<Link to="/">{t('url.domain.website')}</Link>.<br/>
                            {t('gtcs.8.p3')}<br/>
                            {t('gtcs.8.p4')}<br/>
                            {t('gtcs.8.p5')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>. 
                        </p>
                    </section>

                    {/* --- Article 9 --- */}
                    <section>
                        <H2 id="article-9" className="pt-6 mb-3" title={t('gtcs.summary.article9')}/>
                        <p>{t('gtcs.9.p1')}</p>
                    </section>

                    {/* --- Article 10 --- */}
                    <section>
                        <H2 id="article-10" className="pt-6 mb-3" title={t('gtcs.summary.article10')}/>
                        <p>
                            {t('gtcs.10.p1')}<br/>
                            {t('gtcs.10.p2')}
                        </p>
                    </section>

                    {/* --- Article 11 --- */}
                    <section>
                        <H2 id="article-11" className="pt-6 mb-3" title={t('gtcs.summary.article11')}/>
                        <p class="mb-3">{t('gtcs.11.p1')}</p>
                        <p class="mb-3"> {t('gtcs.11.p2')}</p>
                        <p>{t('gtcs.11.p3')}<Link to="/">{t('url.domain.website')}</Link>.</p>
                    </section>

                    {/* --- Article 12 --- */}
                    <section>
                        <H2 id="article-12" className="pt-6 mb-3" title={t('gtcs.summary.article12')}/>
                        <p class="mb-3">{t('gtcs.12.p1')}</p>
                        <p class="mb-3">
                            {t('gtcs.12.p2')}<br/>
                            {t('gtcs.12.p3a')}<Link to="/">{t('url.domain.website')}</Link>{t('gtcs.12.p3b')}<br/>
                            {t('gtcs.12.p4')}<Link to="/">{t('url.domain.website')}</Link>.<br/>
                            {t('gtcs.12.p5')}<Link to="/">{t('url.domain.website')}</Link>.
                        </p>
                        <p>{t('gtcs.12.p6')}:</p>
                        <ul class="ml-3 ml-md-5 my-5">
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('gtcs.12.ul1.1a')}<Link to="/">{t('url.domain.website')}</Link>{t('gtcs.12.ul1.1b')} ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('gtcs.12.ul1.2')}<Link to="/">{t('url.domain.website')}</Link> ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('gtcs.12.ul1.3')} ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('gtcs.12.ul1.4')} ;</li>
                            <li><span class="mr-2">&bull;</span>{t('gtcs.12.ul1.5')}</li>
                        </ul>
                        <p class="mb-3">{t('gtcs.12.p7')}</p>
                        <p>{t('gtcs.12.p8')}</p>
                        <ul class="ml-3 ml-md-5 mt-5">
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('gtcs.12.ul2.1')} ;</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('gtcs.12.ul2.2')} ;</li>
                            <li><span class="mr-2">&bull;</span>{t('gtcs.12.ul2.3')}</li>
                        </ul>
                    </section>

                </Container>
            </div>
        )
    }
}

export default withTranslation()(TermsOfSales);