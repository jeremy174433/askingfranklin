import React from 'react';

export default class Textarea extends React.Component {

    render() {

        const classListWrapper = ' textarea-wrapper d-flex flex-column position-relative';

        return (
            <div class={this.props.containerStyle ? this.props.containerStyle + classListWrapper : classListWrapper}>
                <label for={this.props.for} className={this.props.hideLabel ? 'input-primary-label d-none' : 'input-primary-label d-flex flex-column flex-sm-row align-items-start justify-content-start mb-2'}>
                    {this.props.label} &nbsp;
                    {this.props.labelInfo && <span class="fz-14">({this.props.labelInfo})</span>}
                </label>
                <textarea
                    name={this.props.for} 
                    id={this.props.for}
                    className={this.props.inputStyle ? this.props.inputStyle + ' input-textarea' : 'input-textarea'}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.infoMsg ? this.onBlur : this.props.onBlur}
                    onChange={this.props.onChange}
                />
                {this.state.displayTooltip && <InformationInput infoMsg={this.props.infoMsg}/> }
            </div>
        )
    }
}