import React from 'react';

export default class Add extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M5,13V12h6V6h1v6h6v1H12v6H11V13Z" transform="translate(-5 -6)"/>
            </svg>
        )
    }
}