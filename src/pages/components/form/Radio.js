import React from 'react';

export default class Radio extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleSelect(this.props.value);
    }

    render() {
        return (
            <div onClick={this.handleClick} className={this.props.isChecked ? 'filter-active filters-input-container' : 'filters-input-container'}>
                
                <input 
                    type="radio" 
                    value={this.props.value}
                    id={this.props.value} 
                    name={this.props.name}
                    checked={this.props.isChecked}
                />

                <label for={this.props.value}>
                    <span></span> {/* <span> correspond to the bullet */}
                    <span class={this.props.labelInfo ? 'radio-label mr-2' : 'radio-label'}>{this.props.label}</span>
                    {this.props.labelInfo && <span class="fz-14">({this.props.labelInfo})</span> }
                </label>

            </div>
        )
    }
}
