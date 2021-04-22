import React from 'react';
import { withTranslation } from 'react-i18next';
import H1 from '../elements/title/H1';
import PmyBtn from '../button/PmyBtn';
import Add from '../../../assets/img/svg/Add';

class Onboarding extends React.Component {

    render() {

        const { t } = this.props;
        
        return (
            <div className="block-onboarding mt-3">
                <H1 title="Bonjour !"/>
                <p class="mt-1 mb-3 fw-600">Aucun contenu présent pour l'instant, il est temps de commencer à écrire !</p>
                <PmyBtn onClick={this.props.handleCreateNewSubject} type="button" btnIsMediumPmyOutlineLight textBtn="Créer un article" title="Créer un article" iconBtnBefore={<Add width="14" fill="#673AB7"/>} className="fz-16-index"/>
                <div class="onboarding-content mt-4 mb-3 py-3">
                    <p class="mb-3 fw-600">Quelques informations utiles pour se lancer :</p>
                    <ol class="ml-3 pl-3">
                        <li>Pour démarrer, il est nécessaire de créer un article (ou bien d'éditer un article existant depuis la liste des articles).</li>
                        <li>Il est d'abord essentiel de choisir un titre à son article, et de paramètrer si besoin l'IA de génération de contenu pour gérer sa créativité et la longueur des textes générés.</li>
                        <li>Il faut ensuite écrire au moins les 150 premiers caractères qui composeront le corps de l'article.</li>
                        <li>Pour générer automatiquement du contenu texte, il suffit d'appuyer sur le bouton de génération de contenu (ou sur la touche « tab »).</li>
                        <li>Baliser les éléments de l'article (titres et paragraphes) est utile pour s'organiser et éviter de gâcher des crédits.</li>
                        <li>Lorsque l'article est rédigé, il est possible de l'exporter en sélectionnant celui désiré depuis la liste des articles.</li>
                        <li>La sauvegarde de l'article est automatique, aucun risque de perdre son contenu.</li>
                        <li>À vos claviers !</li>
                    </ol>
                </div>
                <p class="mb-3 fw-600">Comprendre le fonctionnement des crédits :</p>
                <p>Votre compte dispose d'une somme initiale de 2000 crédits. <br/> Lors d'une génération automatique de contenu, chaque caractère envoyé à l'IA et chaque caractère reçu correspond à 1 crédit soustrait.</p>
            </div>
        )
    }
}

export default withTranslation()(Onboarding);