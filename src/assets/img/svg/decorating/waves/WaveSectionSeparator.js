import React from 'react';

export default class WaveSectionSeparator extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 150" width="1920" height="150" preserveAspectRatio="xMaxYMax slice" fill="#FFF" class={this.props.className}>
                <defs>
                    <filter id="uDrq43S5B2jT" x="0" y="0" width="200%" height="200%">
                        <feOffset result="offOut" in="SourceGraphic" dx="-20" dy="-20" />
                        <feColorMatrix result="matrixOut" in="offOut" type="matrix" values="0.9 0 0 0 0 0 0.9 0 0 0 0 0 0.9 0 0 0 0 0 9 0" />
                        <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                        <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                    </filter>
                </defs>
                <path filter="url(#uDrq43S5B2jT)" d="M0-124.96S310.388-30.166,790.388-10.821,1920-59.186,1920-59.186V25.04H0Z" transform="translate(0 124.96)"/>
            </svg>
        )
    }
}