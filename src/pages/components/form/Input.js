import React from 'react';

export default class Input extends React.Component {

    render() {

        const classListWrapper = ' input-primary-wrapper d-flex flex-column position-relative';

        return (
            <div className={this.props.spacingReduce ? this.props.spacingReduce + classListWrapper : 'mb-3 pb-3' + classListWrapper}>
                <label for={this.props.for} className={this.props.hideLabel ? 'input-primary-label d-none' : 'input-primary-label d-flex flex-column flex-sm-row align-items-start justify-content-start mb-2'}>
                    {this.props.label} &nbsp;
                    {this.props.labelInfo && <span class="fz-14">({this.props.labelInfo})</span>}
                </label>
                <input 
                    type={this.props.type} 
                    name={this.props.for} 
                    id={this.props.for}
                    class="input-primary"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    minLength={this.props.minLength}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    onChange={this.props.onChange}
                /> 
                {this.props.inputHasIcon &&
                    <div onClick={this.props.onClick} class="input-primary-icon">
                        {this.props.inputHasIcon}
                    </div>
                }
            </div>
        )
    }
}