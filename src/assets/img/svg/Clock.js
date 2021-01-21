import React from 'react';

export default class Clock extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="12" height="12" fill="#2B2B2B">
                <path d="M11.5,6A7.5,7.5,0,1,1,4,13.5,7.5,7.5,0,0,1,11.5,6Zm0,1A6.5,6.5,0,1,0,18,13.5,6.5,6.5,0,0,0,11.5,7ZM11,9h1v4.363l3.048,1.421-.423.906L11,14Z" transform="translate(-4 -6)"/>
            </svg>
        )
    }
}