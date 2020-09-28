import React from 'react';
import InformationInput from './elements/InformationInput';

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayTooltip: false
        }
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur() {
        this.setState({
            displayTooltip: true
        });
    }

    render() {

        const classListWrapper = ' input-primary-wrapper d-flex flex-column position-relative';

        return (
            <div class={this.props.containerStyle ? this.props.containerStyle + classListWrapper : classListWrapper}>
                <label for={this.props.for} className={this.props.hideLabel ? 'input-primary-label d-none' : 'input-primary-label d-flex flex-column flex-sm-row align-items-start justify-content-start mb-2'}>
                    {this.props.label} &nbsp;
                    {this.props.labelInfo && <span class="fz-14">({this.props.labelInfo})</span>}
                </label>
                <input 
                    type={this.props.type} 
                    name={this.props.for} 
                    id={this.props.for}
                    className={this.props.inputStyle ? this.props.inputStyle + ' input-primary' : 'input-primary'}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    minLength={this.props.minLength}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.infoMsg ? this.onBlur : this.props.onBlur}
                    onChange={this.props.onChange}
                /> 
                {this.props.inputHasIcon &&
                    <div onClick={this.props.onClick} class="input-primary-icon">
                        {this.props.inputHasIcon}
                    </div>
                }
                {this.state.displayTooltip && <InformationInput infoMsg={this.props.infoMsg}/> }
            </div>
        )
    }
}