import React from 'react';
import { withTranslation } from 'react-i18next';
import Tick from '../../../assets/img/svg/Tick';
import PmyBtn from '../../components/button/PmyBtn';
import Settings from '../../../assets/img/svg/navigation/Settings';
import LateralModal from '../partials/modals/LateralModal';
import H3 from '../elements/title/H3';
import Alert from '../../components/elements/Alert';

class Heading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            lastUpdate: '16h21',
            defaultCreativitySelected: true,
            defaultLengthSelected: true,
            creativitySelected: '',
            textLengthSelected: '',
            successParam: false
        }
        this.handleOpenPricing = this.handleOpenPricing.bind(this);
        this.getCreativity = this.getCreativity.bind(this);
        this.getTextLength = this.getTextLength.bind(this);
        this.handleModalCloseNoSaved = this.handleModalCloseNoSaved.bind(this);
        this.handleClickCtaBtn = this.handleClickCtaBtn.bind(this);
        this.handleCloseAlert = this.handleCloseAlert.bind(this);
    }

    handleOpenPricing() {
        console.log('open modal');
    }

    getCreativity(e) {
        let getType = e.target.dataset.type;
        this.setState({
            defaultCreativitySelected: false,
            creativitySelected: getType
        });
    }

    getTextLength(e) {
        let getType = e.target.dataset.type;
        this.setState({
            defaultLengthSelected: false,
            textLengthSelected: getType
        });
    }

    handleModalCloseNoSaved() {
        console.log('nosaved');
        this.setState({
            defaultCreativitySelected: true,
            defaultLengthSelected: true,
            creativitySelected: '',
            textLengthSelected: ''
        });
    }

    handleClickCtaBtn() {
        console.log('click cta');
        this.setState({
            successParam: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    successParam: false
                });
            }, 5000);
        });
    }

    handleCloseAlert() {
        this.setState({
            successParam: false
        });
    }

    render() {

        const { t } = this.props;

        const parameters = 
            <div class="writing-franklin-header-bottom state-interaction-element position-absolute mt-3" style={{ right: 0 }}>
                <Settings width="16" fill="#2B2B2B"/>
            </div>;

        return (
            <div class="writing-franklin-header position-relative">
                {this.state.successParam && <Alert onClick={this.handleCloseAlert} className={this.state.successParam && !this.props.bannerIsActive ? 'alert-msg-visible alert-msg-no-banner' : this.state.successParam ? 'alert-msg-visible' : ''} alertId="successMessage" msg="Param??tres enregistr??s"/> }
                <div class="writing-franklin-header-top d-flex flex-column-reverse flex-md-row align-items-center pb-3">
                    {this.state.lastUpdate &&
                        <p class="mt-3 mt-md-0 ml-auto ml-md-0 mr-md-auto fz-14">
                            <Tick width="14" fill="#00C851"/>
                            <span class="ml-2">Derni??re mise ?? jour auto : {this.state.lastUpdate}</span>
                        </p>
                    }
                    <div class="d-flex flex-column flex-md-row align-items-center ml-auto">
                        <p class="mb-2 mb-md-0 w-md-100 text-right">2000 cr??dits restants</p>
                        <PmyBtn onClick={this.handleOpenPricing} type="button" btnIsMediumPmyFull textBtn="D??bloquer plus de cr??dits" containerStyle="ml-md-3"/>
                    </div>
                </div>
                {this.props.currentArticleId &&
                    <LateralModal 
                        handleModalCloseNoSaved={this.handleModalCloseNoSaved}
                        handleClickCtaBtn={this.handleClickCtaBtn} 
                        trigger={parameters} 
                        triggerTitle="Param??tres" 
                        modalTitle="Param??tres de l'IA"
                        ctaFooterPrimary="Appliquer et retourner ?? l'??diteur"
                    >
                        <H3 title="Cr??ativit?? dans les propositions" className="mb-3"/>
                        <div class="btn-choices-container d-flex flex-row">
                            <button onClick={this.getCreativity} type="button" data-type="low" class={this.state.creativitySelected === 'low' && 'parameter-selected'}>Faible</button>
                            <button onClick={this.getCreativity} type="button" data-type="middle" class={this.state.defaultCreativitySelected ? 'parameter-selected' : this.state.creativitySelected === 'middle' && 'parameter-selected'}>Moyenne</button>
                            <button onClick={this.getCreativity} type="button" data-type="high" class={this.state.creativitySelected === 'high' && 'parameter-selected'}>Haute</button>
                        </div>
                        <div class="bgc-info mt-3 p-3 rounded">
                            <p class="mb-3 fz-16">?? quoi correspond la cr??ativit?? de l'IA ?</p>
                            <p class="fz-14">R??gler la cr??ativit?? permet de mieux contr??ler le caract??re al??atoire dans la g??n??ration des textes. <br/> Plus la cr??ativit?? est faible, plus le contenu g??n??r?? deviendra d??terministe et r??p??titif.</p>
                        </div>
                        <H3 title="Longueur des textes g??n??r??s" className="mt-5 mb-3"/>
                        <div class="btn-choices-container d-flex flex-row">
                            <button onClick={this.getTextLength} type="button" data-type="short" class={this.state.defaultLengthSelected ? 'parameter-selected' : this.state.textLengthSelected === 'short' && 'parameter-selected'}>Courte</button>
                            <button onClick={this.getTextLength} type="button" data-type="long" class={this.state.textLengthSelected === 'long' && 'parameter-selected'}>Longue</button>
                        </div>
                        <div class="bgc-info mt-3 p-3 rounded">
                            <p class="mb-3 fz-16">?? quoi correspond la longueur des textes g??n??r??s ?</p>
                            <p class="fz-14">S??lectionner ?? courte ?? pour avoir une g??n??ration moyenne comprise entre 1 et 2 phrases. <br/> S??lectionner ?? longue ?? pour avoir une g??n??ration moyenne comprise entre 2 et 3 phrases.</p>
                        </div>
                    </LateralModal>
                }
            </div>
        )
    }
}

export default withTranslation()(Heading);