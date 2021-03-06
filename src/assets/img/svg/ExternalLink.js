import React from 'react';

export default class ExternalLink extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M14 16v-11l-1 1v9h-12v-12h9l1-1h-11v14z"/>
                <path d="M16 0h-5l1.8 1.8-6.8 6.8 1.4 1.4 6.8-6.8 1.8 1.8z"/>
            </svg>
        )
    }
}