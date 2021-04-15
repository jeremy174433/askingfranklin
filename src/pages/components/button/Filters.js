import React from 'react';
import i18n from 'i18next';
import ArrowDropdown from '../../../assets/img/svg/ArrowDropdown';
import Radio from '../form/Radio';
import Flag from '../../../assets/img/svg/switch/Flag';

const countries = {
    "fr": {
        items: [
            { label: <><Flag icon="de"/>Allemagne</>, value: "de" },
            { label: <><Flag icon="be"/>Belgique</>, value: "be" },
            { label: <><Flag icon="ca"/>Canada</>, value: "ca" },
            { label: <><Flag icon="es"/>Espagne</>, value: "es" },
            { label: <><Flag icon="us"/>États-Unis</>, value: "us" },
            { label: <><Flag icon="fr"/>France</>, value: "fr" },
            { label: <><Flag icon="it"/>Italie</>, value: "it" },
            { label: <><Flag icon="nl"/>Pays-Bas</>, value: "nl" },
            { label: <><Flag icon="uk"/>Royaume-Uni</>, value: "uk" },
            { label: <><Flag icon="ch"/>Suisse</>, value: "ch" }
        ]
    },
    "en": {
        items: [
            { label: <><Flag icon="be"/>Belgium</>, value: "be" },
            { label: <><Flag icon="ca"/>Canada</>, value: "ca" },
            { label: <><Flag icon="fr"/>France</>, value: "fr" },
            { label: <><Flag icon="de"/>Germany</>, value: "de" },
            { label: <><Flag icon="it"/>Italy</>, value: "it" },
            { label: <><Flag icon="nl"/>Netherlands</>, value: "nl" },
            { label: <><Flag icon="es"/>Spain</>, value: "es" },
            { label: <><Flag icon="ch"/>Switzerland</>, value: "ch" },
            { label: <><Flag icon="uk"/>United Kingdom</>, value: "uk" },
            { label: <><Flag icon="us"/>United States</>, value: "us" }
        ]
    }
};

const languages = {
    "fr": {
        items: [
            { label: <><Flag icon="de"/>Allemand</>, value: "de" },
            { label: <><Flag icon="uk"/>Anglais</>, value: "uk" },
            { label: <><Flag icon="es"/>Espagnol</>, value: "es" },
            { label: <><Flag icon="fr"/>Français</>, value: "fr" },
            { label: <><Flag icon="nl"/>Néerlandais</>, value: "nl" },
            { label: <><Flag icon="it"/>Italien</>, value: "it" }
        ]
    },
    "en": {
        items: [
            { label: <><Flag icon="uk"/>English</>, value: "uk" },
            { label: <><Flag icon="fr"/>French</>, value: "fr" },
            { label: <><Flag icon="nl"/>Dutch</>, value: "nl" },
            { label: <><Flag icon="de"/>German</>, value: "de" },
            { label: <><Flag icon="it"/>Italian</>, value: "it" },
            { label: <><Flag icon="es"/>Spanish</>, value: "es" }
        ]
    }
};

export default class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: this.props.alreadySelected ? true : false,
            selectedValue: this.props.isPreselectedCountry ? { value: i18n.t('form.filters.countries.selectedCode') } : this.props.isPreselectedLanguage && { value: i18n.t('form.filters.languages.selectedCode') },
            selectedItem: ''
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
            selectedItem: value.label
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
                    <span class="data-placeholder">{this.state.selectedItem ? this.state.selectedItem : this.props.selectedSaved}</span>
                    <ArrowDropdown/>
                </div>
                <div class="filters-dropdown-container">
                    <div class="filters-container">
                        {
                            this.props.isPreselectedCountry ?
                                countries[i18n.languages[0]].items.map((country) => {
                                    return <Radio handleSelect={this.handleSelect} name="filterCountries" label={country.label} value={{ value: country.value, label: country.label.props.children[1] }} isChecked={this.state.selectedValue.value === country.value ? true : false}/>
                                })

                            : this.props.isPreselectedLanguage &&
                                languages[i18n.languages[0]].items.map((language) => {
                                    return <Radio handleSelect={this.handleSelect} name="filterLanguages" label={language.label} value={{ value: language.value, label: language.label.props.children[1] }} isChecked={this.state.selectedValue.value === language.value ? true : false}/>
                                })
                        }
                    </div>
                </div>
            </div>
        )
    }
}