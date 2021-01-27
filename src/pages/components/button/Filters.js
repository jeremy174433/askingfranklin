import React from 'react';
import PmyBtn from './PmyBtn';
import ArrowDropdown from '../../../assets/img/svg/ArrowDropdown';
import Radio from '../form/Radio';
import Flag from '../../../assets/img/svg/switch/Flag';

var countries = [
    {
        items: [
            {
                name: "filterCountry",
                label: <p><Flag icon="ca"/>Canada</p>,
                value: "Canada"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="de"/>Germany</p>,
                value: "Germany"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="fr"/>France</p>,
                value: "France"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="it"/>Italy</p>,
                value: "Italy"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="es"/>Spain</p>,
                value: "Spain"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="gb"/>United Kingdom</p>,
                value: "United Kingdom"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="us"/>United States</p>,
                value: "United States"
            }
        ]
    }
]

var languages = [
    {
        items: [
            {
                name: "filterCountry",
                label: <p><Flag icon="de"/>Deutsch</p>,
                value: "Deutsch"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="gb"/>English</p>,
                value: "English"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="es"/>Español</p>,
                value: "Español"
            },
            {
                name: "filterLanguage",
                label: <p><Flag icon="fr"/>Français</p>,
                value: "Français"
            },
            {
                name: "filterCountry",
                label: <p><Flag icon="it"/>Italiano</p>,
                value: "Italiano"
            }
        ]
    }
]

export default class Filters extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: this.props.alreadySelected ? true : false,
            selectedSaved: this.props.isPreselectedCountry ? ['France'] : this.props.isPreselectedLanguage && ['Français'],
            selectedValue: []
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    toggleDropdown() {
        this.setState({
            isSelected: this.state.isSelected ? false : true
        });
    }

    handleSelect(value) {
        this.setState({
            selectedValue: value
        });
    }

    handleSave() {
        var saved = this.state.selectedValue;
        this.setState({
            selectedSaved: saved
        }, () => {
            this.props.handleFunc(this.state.selectedValue);
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
                                    <Radio handleSelect={this.handleSelect} name={country.name} label={country.label} value={country.value} isChecked={this.state.selectedValue === country.value ? true : false}/>
                                )

                            : this.props.isPreselectedLanguage &&
                                languages[0].items.map((language) =>
                                    <Radio handleSelect={this.handleSelect} name={language.name} label={language.label} value={language.value} isChecked={this.state.selectedValue ===  language.value ? true : false}/>
                                )
                        }
                    </div>
                    <PmyBtn onClick={this.handleSave} type="button" btnIsSmallPmyFull textBtn="Appliquer" containerStyle="p-3" className="fz-16-index"/>
                </div>
            </div>
        )
    }
}