import React from 'react';
import Input from './Input';
import PmyBtn from '../button/PmyBtn';

export default class FormRequestFranklin extends React.Component {

    render() {

        var formStyle = ' d-flex flex-column flex-md-row flex-lg-column flex-xl-row mt-5'

        return (
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
            </form>
        )
    }
}
