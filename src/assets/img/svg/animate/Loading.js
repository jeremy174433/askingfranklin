import React from 'react';

export default class Loading extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">
                <rect x="0" y="13" width="4" height="5">
                    <animate attributeName="height" values="5;21;5" begin="0s" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="13; 5; 13" begin="0s" dur="1s" repeatCount="indefinite"/>
                </rect>
                <rect x="10" y="13" width="4" height="5">
                    <animate attributeName="height" values="5;21;5" begin="0.15s" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="13; 5; 13" begin="0.15s" dur="1s" repeatCount="indefinite"/>
                </rect>
                <rect x="20" y="13" width="4" height="5">
                    <animate attributeName="height" values="5;21;5" begin="0.3s" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="y" values="13; 5; 13" begin="0.3s" dur="1s" repeatCount="indefinite"/>
                </rect>
            </svg>
        )
    }
}