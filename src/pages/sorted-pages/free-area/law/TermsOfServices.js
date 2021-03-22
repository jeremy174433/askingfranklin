import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import H2 from '../../../components/elements/title/H2';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class TermsOfServices extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Conditions Générales d'Utilisation - Asking Franklin</title>
                <meta name="description" content="Conditions Générales d'Utilisation - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
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

                    <H1 className="mb-4" title={t('tcs.h1')}/>
                    <p>{t('tcs.dateEffect')}</p>
                    <p class="mb-5">{t('tcs.dateUpdate')}</p>

                    {/* --- Preamble --- */}
                    <section>
                        <H2 className="mb-3" title={t('tcs.introduction.title')}/>
                        <p class="mb-3">{t('tcs.introduction.p1')}</p>
                        <p class="mb-3">{t('tcs.introduction.p2')}</p>
                        <p class="mb-3">{t('tcs.introduction.p3')}</p>
                        <p class="mb-3">{t('tcs.introduction.p4')}</p>
                        <p><Link to="/">{t('url.domain.website')}</Link>{t('tcs.introduction.p5b')}</p>
                    </section>

                    <p class="fz-24 mt-5 mb-4">{t('tcs.summary.title')}</p>
                    <ul>
                        <li class="mb-3"><AnchorLink href="#article-1">{t('tcs.summary.article1')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-2">{t('tcs.summary.article2')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-3">{t('tcs.summary.article3')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-4">{t('tcs.summary.article4')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-5">{t('tcs.summary.article5')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-6">{t('tcs.summary.article6')}</AnchorLink></li>
                        <li class="mb-3"><AnchorLink href="#article-7">{t('tcs.summary.article7')}</AnchorLink></li>
                        <li><AnchorLink href="#article-8">{t('tcs.summary.article8')}</AnchorLink></li>
                    </ul>
                
                    {/* --- Article 1 --- */}
                    <section>
                        <H2 id="article-1" className="pt-6 mb-3" title={t('tcs.summary.article1')}/>
                        <p>{t('tcs.1.p1a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.1.p1b')}</p>
                        <ul class="ml-3 ml-md-5 mt-5">
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('tcs.1.ul.1')}</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('tcs.1.ul.2')}</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('tcs.1.ul.3')}</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('tcs.1.ul.4')}</li>
                            <li class="mb-3"><span class="mr-2">&bull;</span>{t('tcs.1.ul.5a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.1.ul.5b')}</li>
                            <li><span class="mr-2">&bull;</span>{t('tcs.1.ul.6')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>.</li>
                        </ul>
                    </section>

                    {/* --- Article 2 --- */}
                    <section>
                        <H2 id="article-2" className="pt-6 mb-3" title={t('tcs.summary.article2')}/>
                        <p class="mb-3">{t('tcs.2.p1')}</p>
                        <p>{t('tcs.2.p2')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>.</p>
                    </section>

                    {/* --- Article 3 --- */}
                    <section>
                        <H2 id="article-3" className="pt-6 mb-3" title={t('tcs.summary.article3')}/>
                        <p class="mb-3">{t('tcs.3.p1')}</p>
                        <p class="mb-3">{t('tcs.3.p1a')}<br/>{t('tcs.3.p1b')}</p>
                        <p class="mb-3">{t('tcs.3.p2')}</p>
                        <p class="mb-3">{t('tcs.3.p2a')}<br/>{t('tcs.3.p2b')}</p>
                        <p class="mb-3">{t('tcs.3.p3')}</p>
                        <p>{t('tcs.3.p3a')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>.<br/>{t('tcs.3.p3b')}</p>
                    </section>

                    {/* --- Article 4 --- */}
                    <section>
                        <H2 id="article-4" className="pt-6 mb-3" title={t('tcs.summary.article4')}/>
                        <p class="mb-3">{t('tcs.4.p1')}</p>
                        <p class="mb-3">{t('tcs.4.p2')}</p>
                        <p class="mb-3">{t('tcs.4.p3')}</p>
                        <p class="mb-3">{t('tcs.4.p4')}</p>
                        <p>{t('tcs.4.p5')}</p>
                    </section>

                    {/* --- Article 5 --- */}
                    <section>
                        <H2 id="article-5" className="pt-6 mb-3" title={t('tcs.summary.article5')}/>
                        <p class="mb-3">{t('tcs.5.p1a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.5.p1b')}</p>
                        <p class="mb-3">{t('tcs.5.p2a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.5.p2b')}</p>
                        <p class="mb-3">{t('tcs.5.p3')}</p>
                        <p class="mb-3">{t('tcs.5.p4a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.5.p4b')}</p>
                        <p>{t('tcs.5.p5')}</p>
                    </section>

                    {/* --- Article 6 --- */}
                    <section>
                        <H2 id="article-6" className="pt-6 mb-3" title={t('tcs.summary.article6')}/>
                        <p>{t('tcs.6.p1a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.6.p1b')}</p>
                    </section>

                    {/* --- Article 7 --- */}
                    <section>
                        <H2 id="article-7" className="pt-6 mb-3" title={t('tcs.summary.article7')}/>
                        <p class="mb-3">{t('tcs.7.p1')}</p>
                        <p class="mb-3">{t('tcs.7.p2a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.7.p2b')}</p>
                        <p class="mb-3">{t('tcs.7.p3a')}<Link to="/">{t('url.domain.website')}</Link>{t('tcs.7.p3b')}.</p>
                        <p class="mb-3">{t('tcs.7.p4')}</p>
                        <p class="mb-3">{t('tcs.7.p5')}</p>
                        <p class="mb-3">{t('tcs.7.p6')}</p>
                        <p>{t('tcs.7.p7')}</p>
                    </section>

                    {/* --- Article 8 --- */}
                    <section>
                        <H2 id="article-8" className="pt-6 mb-3" title={t('tcs.summary.article8')}/>
                        <p class="mb-3">{t('tcs.8.p1')}</p>
                        <p>{t('tcs.8.p2')}<a href="mailto:contact@askingfranklin.com">{t('contactEmail')}</a>.</p>
                    </section>

                </Container>
            </div>
        )
    }
}

export default withTranslation()(TermsOfServices);