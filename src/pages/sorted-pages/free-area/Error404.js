import React from 'react';
import { Container } from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import ErrorImg from '../../../assets/img/svg/illustrations/ErrorImg';
import PmyBtn from '../../components/button/PmyBtn';

export default class Error404 extends React.Component {

    render() {
        return (
            <div class="layout-style">
                <Container className="px-0 mt-6 w-100 text-center d-flex flex-column align-items-center">
                    <H1 className="mb-5" title="Oups, la page demandée semble introuvable..."/>
                    <ErrorImg/>
                    <PmyBtn redirectTo="/" linkIsLargePmyFull textLink="Retourner à l'accueil" containerStyle="mt-5 pt-5"/>
                </Container>
            </div>
        )
    }
}