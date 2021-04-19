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
        this.handleExport = this.handleExport.bind(this);
        this.handleOpenSettings = this.handleOpenSettings.bind(this);
    }

    handleOpenPricing() {
        console.log('open modal');
    }

    handleExport() {
        console.log('export');
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
                        <span class="ml-2">Dernière mise à jour auto : <span class="fw-600">16h21</span></span>
                    </p>
                    <div class="d-flex flex-column flex-md-row align-items-center ml-auto">
                        <p class="mb-2 mb-md-0 w-md-100 text-right">2000 crédits restants</p>
                        <PmyBtn onClick={this.handleOpenPricing} type="button" btnIsMediumPmyFull textBtn="Débloquer plus de crédits" containerStyle="ml-md-3"/>
                    </div>
                </div>
                <div class="writing-franklin-header-bottom d-flex flex-column-reverse flex-sm-row align-items-center mt-3">
                    <p class="ml-auto ml-sm-0 mt-3 mt-sm-0 fz-14">Language supporté : anglais</p>
                    <div class="d-flex flex-row align-items-center ml-auto">
                        <PmyBtn onClick={this.handleExport} type="button" btnIsMediumPmyOutlineLight textBtn="Exporter en CSV" title="Exporter en CSV" iconBtnBefore={<FeaturesIcons icon="download"/>} containerStyle="mr-3" className="fz-16-index"/>
                        <div onClick={this.handleOpenSettings} class="writing-franklin-parameters">
                            <Settings width="16" fill="#2B2B2B"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Heading);