import React from 'react';
import Input from './Input';
import PmyBtn from '../button/PmyBtn';

export default class FormRequestFranklin extends React.Component {

    render() {
        return (
            <form id="formRequestFranklin" autoComplete="off" method="get" onSubmit={this.props.onSubmit} class="d-flex flex-column flex-md-row flex-lg-column flex-xl-row mt-5">
                <Input
                    spacingReduce="mr-0 mr-md-4 mr-lg-0 mr-xl-4 mb-4 mb-md-0 mb-lg-4 mb-xl-0 w-100"
                    hideLabel
                    for="inputKeywords"
                    onChange={this.props.onChange}
                    type="text"
                    value={this.props.value}
                    placeholder="Saisissez un mot clé, un produit, une marque..."
                />
                <PmyBtn onClick={this.props.onSubmit} type="submit" isDisabled={this.props.isDisabled} textBtn="Explorer" btnIsLargePmyFull className="w-100 h-100"/>
            </form>
        )
    }
}
