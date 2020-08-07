import React from 'react';

export default class Checkbox extends React.Component {
    
    render() {
        return (
            <div onClick={this.props.onClick} onChange={this.props.onChange} class={'position-relative ' + this.props.className}>
                <input 
                    type="checkbox" 
                    class="checkbox-primary"
                    name={this.props.for} 
                    id={this.props.for}
                    value={this.props.value}
                    checked={this.props.checked}
                    required={this.props.required}
                    disabled={this.props.disabled}
                />
                <label for={this.props.for}>
                    {this.props.label}
                    {this.props.labelInfo && <span class="fz-14">&nbsp;{this.props.labelInfo}</span>}
                    <span class="checkbox-primary-checked-circle"></span>
                </label>
            </div>
        )
    }
}