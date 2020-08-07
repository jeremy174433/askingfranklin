import React from 'react';
import { Container } from 'react-bootstrap';
import H1 from '../../../components/elements/title/H1';
import { Link } from 'react-router-dom';

export default class LegalNotices extends React.Component {

    render() {
        return (
            <Container className="px-0 mt-6">

                <H1 className="mb-5" title="Mentions Légales"/>

                <section>
                    <p class="mb-4">Mentions légales en application de la loi n°2000-719 du 1er août 2000</p>
                    <p class="mb-3">
                        <span class="fw-600">Nom du site :</span> <Link to="/">askingfranklin.com</Link> <br/>
                        <span class="fw-600">URL complète du site :</span> <Link to="/">https://www.askingfranklin.com</Link>
                    </p>
                    <p class="mb-3">
                        <span class="fw-600">Propriétaire du site :</span> <br/>
                        SAS Sortvoices, 75 avenue du 11 novembre – 33290 Blanquefort <br/>
                        contact : <a href="te:+33771592516">07 71 59 25 16</a> - <a href="mailto:contact@sortvoices.fr">contact@sortvoices.fr</a> <br/>
                        RCS : 835 152 620 <br/>
                        SIRET : 83515262000018 <br/>
                        capital social : 1000€ <br/>
                        Numéro TVA : FR58835152620
                    </p>
                    <p class="mb-3">
                        <span class="fw-600">Directeur de publication :</span> Romain CERNIK <br/>
                        <span class="fw-600">Hébergeur :</span> Ce site est hébergé par la société Amazon Web Services LLC, dont le siège social est situé au P.O. Box 81226 Seattle, WA 98108-1226
                    </p>
                </section>

            </Container>
        )
    }
}