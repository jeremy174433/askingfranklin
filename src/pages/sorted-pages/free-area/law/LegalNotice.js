import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import { Link } from 'react-router-dom';

class LegalNotice extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Mentions légales - Asking Franklin</title>
                <meta name="description" content="Mentions légales - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
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
                    <H1 className="mb-5" title={t('legalNotice.h1')}/>
                    <section>
                        <p class="mb-4">{t('legalNotice.applicability')}</p>
                        <p class="mb-3">
                            <span class="fw-600">{t('legalNotice.p1.s1')}</span> <Link to="/">askingfranklin.com</Link> <br/>
                            <span class="fw-600">{t('legalNotice.p1.s2')}</span> <Link to="/">https://www.askingfranklin.com</Link>
                        </p>
                        <p class="mb-3">
                            <span class="fw-600">{t('legalNotice.p2.s1')}</span> <br/>
                            SAS Sortvoices, 75 avenue du 11 novembre, 33290 Blanquefort, France <br/>
                            Contact : <a href="tel:+33771592516">+33 7 71 59 25 16</a> - <a href="mailto:contact@sortvoices.fr">contact@askingfranklin.com</a> <br/>
                            RCS : 835 152 620 <br/>
                            SIRET : 83515262000018 <br/>
                            {t('legalNotice.p2.s2')} : 1000€ <br/>
                            {t('legalNotice.p2.s3')} : FR58835152620
                        </p>
                        <p class="mb-3">
                            <span class="fw-600">{t('legalNotice.p3.s1')}</span> Romain CERNIK <br/>
                            <span class="fw-600">{t('legalNotice.p3.s2')}</span> {t('legalNotice.p3.s2a')}
                        </p>
                    </section>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(LegalNotice);