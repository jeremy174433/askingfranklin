import React from 'react';
import { withTranslation } from 'react-i18next';
import Tick from '../../../assets/img/svg/Tick';
import PmyBtn from '../../components/button/PmyBtn';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';
import Settings from '../../../assets/img/svg/navigation/Settings';

class Heading extends React.Component {
    constructor(props) {
        super(props)
        this.handleOpenPricing = this.handleOpenPricing.bind(this);
        this.handleOpenSettings = this.handleOpenSettings.bind(this);
    }

    handleOpenPricing() {
        console.log('open modal');
    }

    handleOpenSettings() {
        console.log('display settings');
    }

    render() {

        const { t } = this.props;

        return (
            <div class="writing-franklin-header">
                <div class="writing-franklin-header-top d-flex flex-column-reverse flex-md-row align-items-center pb-3">
                    <p class="mt-3 mt-md-0 ml-auto ml-md-0 mr-md-auto fz-14">
                        <Tick width="14" fill="#00C851"/>
                        <span class="ml-2">Dernière mise à jour auto : 16h21</span>
                    </p>
                    <div class="d-flex flex-column flex-md-row align-items-center ml-auto">
                        <p class="mb-2 mb-md-0 w-md-100 text-right">2000 crédits restants</p>
                        <PmyBtn onClick={this.handleOpenPricing} type="button" btnIsMediumPmyFull textBtn="Débloquer plus de crédits" containerStyle="ml-md-3"/>
                    </div>
                </div>
                <div onClick={this.handleOpenSettings} class="writing-franklin-header-bottom mt-3 ml-auto">
                    <Settings width="16" fill="#2B2B2B"/>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Heading);