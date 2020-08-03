import React from 'react';
import Input from '../form/Input';
import PmyBtn from '../button/PmyBtn';

export default class Filters extends React.Component {
    
    render() {
        return (
            <form autocomplete="off" onSubmit={this.props.onSubmit} class="d-flex flex-column">
                <Input
                    spacingReduce="mt-5 mb-4 pb-0"
                    hideLabel
                    for="inputKeywords"
                    onChange={this.props.onChange}
                    type="text"
                    value={this.props.value}
                    placeholder="Saisissez un mot clé, un produit, une marque..."
                    autocomplete="false"
                />
                <PmyBtn onClick={this.props.onSubmit} type="submit" textBtn="Rechercher" btnIsLargePmyFull className="w-100"/>
            </form>
        )
    }
}
