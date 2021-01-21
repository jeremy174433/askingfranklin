import React from 'react';

export default class WaveEndingTop extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 400" width="1920" height="400" preserveAspectRatio="xMaxYMax slice" fill="#FFF" class={this.props.className}>
                <defs>
                    <filter id="gGblo0ayU5P1" x="0" y="0" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="50" dy="50" />
                        <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.9 0 0 0 0 0 0.9 0 0 0 0 0 0.9 0 0 0 0 0 9 0" />
                        <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                <path filter="url(#gGblo0ayU5P1)" d="M1478.191,194.15c189.093,56.108,212.584,78.115,308.028,130.994S1920,400,1920,400V0L0,.482H0S88.445,53.8,369.7,72.852c173.5,11.75,531.424,13.582,660.149,27.859C1114.563,110.107,1289.1,138.042,1478.191,194.15Z"/>
            </svg>       
        )
    }
}