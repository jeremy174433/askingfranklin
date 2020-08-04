import React from 'react';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';

export default class FeaturesList extends React.Component {

    render() {

        const classFeatures = ' features-list d-flex flex-column';

        return (
            <ul class={this.props.className ? this.props.className + classFeatures : classFeatures}>
                <li><FeaturesIcons icon="search"/><span>Nombre illimité de recherches</span></li>
                <li><FeaturesIcons icon="filter"/><span>Requêtes filtrées par langues et pays</span></li>
                <li><FeaturesIcons icon="support"/><span>Réponse prioritaire de l'équipe support</span></li>
                <li><FeaturesIcons icon="image"/><span>Export des images en haute résolution</span></li>
            </ul>
        )
    }
}
