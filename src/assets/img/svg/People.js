import React from 'react';

export default class People extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M10,10A3,3,0,1,0,7,7,3,3,0,0,0,10,10Zm0,1.5c-2,0-6,1.005-6,3V16H16V14.5C16,12.505,12,11.5,10,11.5Z" transform="translate(-4 -4)"/>
            </svg>
        )
    }
}