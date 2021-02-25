import React from 'react';
import { withTranslation } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class AFStickyMenuList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        var ret = this.props.t('askingFranklin.menu.categories.error');
        switch (this.props.text) {
            case 'questions':
                ret = this.props.t('askingFranklin.menu.categories.questions');
                break;
            case 'comparaisons':
                ret = this.props.t('askingFranklin.menu.categories.comparaisons');
                break;
            case 'prepositions':
                ret = this.props.t('askingFranklin.menu.categories.prepo');
                break;
            case 'related':
                ret = this.props.t('askingFranklin.menu.categories.related');
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

export default withTranslation()(AFStickyMenuList);