import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { withTranslation } from 'react-i18next';

class AFStickyMenuList extends React.Component {
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
                ret = this.props.t('askingFranklin.results.questions');
                break;
            case 'comparaisons':
                ret = this.props.t('askingFranklin.results.comparaisons');
                break;
            case 'prepositions':
                ret = this.props.t('askingFranklin.results.prepo');
                break;
            case 'related':
                ret = this.props.t('askingFranklin.results.related');
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

export default withTranslation()(AFStickyMenuList)