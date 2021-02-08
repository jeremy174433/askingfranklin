import React from 'react';
import PmyBtn from './PmyBtn';
import ArrowDropdown from '../../../assets/img/svg/ArrowDropdown';
import Radio from '../form/Radio';
import Flag from '../../../assets/img/svg/switch/Flag';

var countries = [
    {
        items: [
            { label: <p><Flag icon="de"/>Allemagne</p>, value: "de" },
            { label: <p><Flag icon="ca"/>Canada</p>, value: "ca" },
            { label: <p><Flag icon="es"/>Espagne</p>, value: "es" },
            { label: <p><Flag icon="us"/>États-Unis</p>, value: "us" },
            { label: <p><Flag icon="fr"/>France</p>, value: "fr" },
            { label: <p><Flag icon="it"/>Italie</p>, value: "it" },
            { label: <p><Flag icon="gb"/>Royaume-Uni</p>, value: "uk" }
        ]
    }
]

var languages = [
    {
        items: [
            { label: <p><Flag icon="de"/>Allemand</p>, value: "de" },
            { label: <p><Flag icon="gb"/>Anglais</p>, value: "uk" },
            { label: <p><Flag icon="es"/>Espagnol</p>, value: "es" },
            { label: <p><Flag icon="fr"/>Français</p>, value: "fr" },
            { label: <p><Flag icon="it"/>Italien</p>, value: "it" }
        ]
    }
]

export default class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: this.props.alreadySelected ? true : false,
            selectedValue: this.props.isPreselectedCountry ? {value:'fr'} : this.props.isPreselectedLanguage && {value:'fr'},
            selectedSaved: this.props.isPreselectedCountry ? 'France' : this.props.isPreselectedLanguage && 'Français'
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    toggleDropdown() {
        this.setState({
            isSelected: this.state.isSelected ? false : true
        });
    }

    handleSelect(value) {
        this.setState({
            selectedValue: value,
            selectedSaved:value.label
        }, () => {
            this.props.handleFunc(value.value);
            this.toggleDropdown();
        });
    }


    render() {

        return (
            <div id={this.props.id} class={this.state.isSelected ? 'filters-dropdown-open btn-filter mt-4' : 'btn-filter mt-4'}>
                <div onClick={this.toggleDropdown} class="btn-filter-header">
                    <span class="data-header">{this.props.label}</span>
                    <span class="data-placeholder">{this.state.selectedSaved}</span>
                    <ArrowDropdown/>
                </div>
                <div class="filters-dropdown-container">
                    <div class="filters-container">
                        {
                            this.props.isPreselectedCountry ?
                                countries[0].items.map((country) =>
                                    <Radio handleSelect={this.handleSelect} name="filterCountries" label={country.label} value={{value:country.value, label: country.label.props.children[1]}} isChecked={this.state.selectedValue.value === country.value ? true : false}/>
                                )

                            : this.props.isPreselectedLanguage &&
                                languages[0].items.map((language) =>
                                    <Radio handleSelect={this.handleSelect} name="filterLanguages" label={language.label} value={{value:language.value, label: language.label.props.children[1]}} isChecked={this.state.selectedValue.value ===  language.value ? true : false}/>
                                )
                        }
                    </div>
                </div>
            </div>
        )
    }
}