import React from 'react';

export default class Close extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M33,7.82,30.18,5,19,16.18,7.82,5,5,7.82,16.18,19,5,30.18,7.82,33,19,21.82,30.18,33,33,30.18,21.82,19Z" transform="translate(-5 -5)" />
            </svg>
        )
    }
}