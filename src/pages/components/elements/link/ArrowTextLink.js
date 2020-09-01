import React from 'react';
import { Link } from 'react-router-dom';
import ArrowLight from '../../../../assets/img/svg/ArrowLight';

export default class ArrowTextLink extends React.Component {

    render() {
        return (
            <Link to={this.props.redirectTo} class={this.props.className ? this.props.className + ' w-max-content' : 'w-max-content'}>
                <ArrowLight width="16" fill="#4285F4" style={{ transform: 'rotate(180deg)', marginRight: '1rem' }}/>
                {this.props.textLink}
            </Link>
        )
    }
}