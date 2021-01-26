import React from 'react';
import Input from './Input';
import PmyBtn from '../button/PmyBtn';
import Filters from '../button/Filters';
import Close from '../../../assets/img/svg/Close';

export default class FormRequestFranklin extends React.Component {
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
        console.log('country changed to : ', value);
    }

    handleLanguageChange(value) {
        console.log('language changed to : ', value);
    }

    toggleOptions() {
        this.setState({
            optsDropdown: !this.state.optsDropdown ? true : false
        });
    }

    render() {

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
                        style={this.props.hideLabel && { height: '66px' } }
                        inputStyle="h-100"
                        placeholder="Saisissez un mot clé, un produit, une marque..."
                    />
                    <PmyBtn type="submit" redirectTo={true} isDisabled={this.props.isDisabled} rel="nofollow" textLink="Explorer" linkIsLargePmyFull containerStyle={this.props.containerStyle} customBtnClass="w-100 h-100" className="h-100" style={ this.props.hideLabel && { height: '66px', maxHeight: '66px' } }/>
                    {this.props.formOptionsResultsPage && <p onClick={this.toggleOptions} class="mt-3 ml-auto d-none d-xl-block">Plus d'options</p> }
                </form>
                <div class={this.state.optsDropdown ? 'filters-options-research-visible' + optsItems : optsItems}>
                    {this.props.formOptionsResultsPage &&
                        <div onClick={this.toggleOptions} class="ml-auto my-2 d-none d-xl-flex state-interaction-element" title="Fermer">
                            <Close width="12" fill="#2B2B2B"/>
                        </div>
                    }
                    <Filters handleFunc={this.handleCountryChange} isPreselectedCountry={true} id="btnCountries" label="Pays de recherche"/>
                    <Filters handleFunc={this.handleLanguageChange} isPreselectedLanguage={true} id="btnLanguages" label="Langue de recherche"/>
                </div>
            </div>
        )
    }
}
