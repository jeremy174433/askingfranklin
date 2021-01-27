import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class AFStickyMenuList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        var ret = 'erreur';
        switch (this.props.text) {
            case 'questions':
                ret = 'Questions';
                break;
            case 'comparaisons':
                ret = 'Comparaisons';
                break;
            case 'prepositions':
                ret = 'Prépositions';
                break;
            case 'related':
                ret = 'Mots relatifs';
                break;
            default:
                ret = ret;
        }
        this.setState({
            text: ret
        });
    }

    render() {
        return (
            <AnchorLink href={'#' + this.props.text} class="nav-link-style">
                {this.state.text} &nbsp;
                <span>({this.props.volume})</span>
            </AnchorLink>
        )
    }
}