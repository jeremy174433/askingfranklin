import React from 'react';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';

export default class FeaturesList extends React.Component {

    render() {

        const classFeatures = ' features-list d-flex flex-column';

        return (    
            <ul class={this.props.className ? this.props.className + classFeatures : classFeatures}>
                <li><FeaturesIcons icon="search"/><span>Nombre illimité de recherches</span></li>
                <li><FeaturesIcons icon="filter"/><span>Requêtes filtrées par pays et langues</span></li>
                {/*<li><FeaturesIcons icon="tendancies"/><span>Tendances des volumes de recherche</span></li>*/}
                <li><FeaturesIcons icon="users"/><span>Utilisateurs illimités en simultané</span></li>
                <li><FeaturesIcons icon="download"/><span>Export en PNG et CSV illimité</span></li>
                <li><FeaturesIcons icon="support"/><span>Réponse prioritaire de l'équipe</span></li>
            </ul>
        )
    }
}
