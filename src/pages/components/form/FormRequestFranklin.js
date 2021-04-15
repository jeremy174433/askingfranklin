import React from 'react';
import { withTranslation } from 'react-i18next';
import Input from './Input';
import PmyBtn from '../button/PmyBtn';
import Filters from '../button/Filters';
import Close from '../../../assets/img/svg/Close';

class FormRequestFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            optsDropdown: false
        }
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.toggleOptions = this.toggleOptions.bind(this);
    }
    
    handleCountryChange(value) {
        this.props.handleCountryChange(value)
    }

    handleLanguageChange(value) {
        this.props.handleLanguageChange(value)
    }

    toggleOptions() {
        this.setState({
            optsDropdown: !this.state.optsDropdown ? true : false
        });
    }

    render() {
        
        const { t } = this.props;

        var formStyle = ' d-flex flex-column flex-md-row flex-lg-column flex-xl-row mt-5';
        var optsItems = ' filters-options-research d-flex flex-column flex-md-row';

        return (
            <div class={this.props.containerFormStyle}>
                <form id="formRequestFranklin" autoComplete="off" method="get" onSubmit={this.props.onSubmit} class={this.props.className ? this.props.className + formStyle : formStyle}>
                    <Input
                        containerStyle="mr-0 mr-md-4 mr-lg-0 mr-xl-4 mb-4 mb-md-0 mb-lg-4 mb-xl-0 pb-0 w-100"
                        label={this.props.label}
                        hideLabel={this.props.hideLabel}
                        for="inputKeywords"
                        onChange={this.props.onChange}
                        type="text"
                        value={this.props.value}
                        style={this.props.hideLabel && { height: '64px' } }
                        inputStyle="h-100"
                        placeholder={t('form.input.placeholderFormAF')}
                    />
                    <PmyBtn type="submit" redirectTo={true} isDisabled={this.props.isDisabled} rel="nofollow" textLink={t('form.submit.formAF')} linkIsLargePmyFull containerStyle={this.props.containerStyle} customBtnClass="w-100 h-100" className="h-100" style={ this.props.hideLabel && { height: '64px', maxHeight: '66px' } }/>
                     {this.props.formOptionsResultsPage && <p onClick={this.toggleOptions} class="mt-3 ml-auto d-none d-xl-block">{t('actions.optionsFormAF')}</p> }
                </form>
                <div class={this.state.optsDropdown ? 'filters-options-research-visible' + optsItems : optsItems}>
                    {this.props.formOptionsResultsPage &&
                        <div onClick={this.toggleOptions} class="ml-auto my-2 d-none d-xl-flex state-interaction-element" title={t('actions.cross')}>
                            <Close width="12" fill="#2B2B2B"/>
                        </div>
                    }
                    <Filters handleFunc={this.handleCountryChange} isPreselectedCountry={true} selectedSaved={this.props.selectedSavedCountry} id="btnCountries" label={t('form.filters.countries.label')}/>
                    <Filters handleFunc={this.handleLanguageChange} isPreselectedLanguage={true} selectedSaved={this.props.selectedSavedLanguage} id="btnLanguages" label={t('form.filters.languages.label')}/>
                </div>
            </div>
        )
    }
}

export default withTranslation()(FormRequestFranklin);