import React from 'react';
import { withTranslation } from 'react-i18next';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';

class FeaturesList extends React.Component {

    render() {

        const { t } = this.props;
        const classFeatures = ' features-list d-flex flex-column';

        return (    
            <ul class={this.props.className ? this.props.className + classFeatures : classFeatures}>
                <li><FeaturesIcons icon="search"/><span>{t('funnel.features.1')}</span></li>
                <li><FeaturesIcons icon="filter"/><span>{t('funnel.features.2')}</span></li>
                <li><FeaturesIcons icon="tendancies"/><span>{t('funnel.features.3')}</span></li>
                <li><FeaturesIcons icon="users"/><span>{t('funnel.features.4')}</span></li>
                <li><FeaturesIcons icon="download"/><span>{t('funnel.features.5')}</span></li>
                <li><FeaturesIcons icon="support"/><span>{t('funnel.features.6')}</span></li>
            </ul>
        )
    }
}

export default withTranslation()(FeaturesList);