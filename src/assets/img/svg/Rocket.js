import React from 'react';

export default class Rocket extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <g transform="translate(0 -0.001)">
                    <g transform="translate(0.001 11.344)">
                        <path d="M3.948,363.745a.354.354,0,0,0-.056-.044,1.786,1.786,0,0,0-1.833-.639c-1.518.52-1.975,3.834-2.023,4.21a.353.353,0,0,0,.107.261.393.393,0,0,0,.277.111c.376-.047,3.69-.5,4.211-2.023A1.817,1.817,0,0,0,3.948,363.745Z" transform="translate(-0.035 -362.991)"/>
                    </g>
                    <g transform="translate(0 0.001)">
                        <g transform="translate(0 0)">
                            <path d="M15.667,0C11.7,0,8.018,3.243,5.6,6A5.428,5.428,0,0,0,0,10.98a.333.333,0,0,0,.333.355.341.341,0,0,0,.117-.021l2.465-.925,2.7,2.7L4.688,15.55A.334.334,0,0,0,5,16h.022A5.428,5.428,0,0,0,10,10.4c2.762-2.417,6-6.1,6-10.067A.333.333,0,0,0,15.667,0Zm-5,7.333a2,2,0,1,1,2-2A2,2,0,0,1,10.667,7.334Z" transform="translate(0 -0.001)"/>
                        </g>
                    </g>
                    <g transform="translate(9.334 4.001)">
                        <circle cx="1.333" cy="1.333" r="1.333"/>
                    </g>
                </g>
            </svg>
        )
    }
}