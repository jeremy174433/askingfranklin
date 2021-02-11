import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import ErrorImg from '../../../assets/img/svg/illustrations/ErrorImg';
import PmyBtn from '../../components/button/PmyBtn';

class Error404 extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>Erreur 404, page introuvable - Asking Franklin</title>
                <meta name="description" content="Erreur 404 - Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <H1 className="mb-5" title={t('404.h1')}/>
                    <ErrorImg/>
                    <PmyBtn redirectTo="/" linkIsLargePmyFull textLink={t('404.cta')} containerStyle="mt-5 pt-5"/>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(Error404);