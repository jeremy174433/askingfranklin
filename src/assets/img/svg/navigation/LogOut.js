import React from 'react';

export default class LogOut extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M11,13V4h1v9Zm8-.5A7.5,7.5,0,1,1,7.6,6.1l.731.731a6.5,6.5,0,1,0,6.348,0L15.4,6.1A7.5,7.5,0,0,1,19,12.5Z" transform="translate(-4 -4)"/>
            </svg>
        )
    }
}