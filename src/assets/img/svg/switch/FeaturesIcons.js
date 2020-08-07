import React from 'react';

export default class FeaturesIcons extends React.Component {

    render() {
        switch(this.props.icon) {
            case 'search':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#2B2B2B">
                            <path d="M14.435,13.063h-.723l-.256-.247a5.955,5.955,0,1,0-.64.64l.247.256v.723L17.637,19,19,17.637Zm-5.489,0a4.117,4.117,0,1,1,4.117-4.117A4.111,4.111,0,0,1,8.946,13.063Z" transform="translate(-3 -3)"/>
                        </svg>

            case 'filter':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10.667" width="16" height="10.667" fill="#2B2B2B">
                            <path d="M9.222,16.667h3.556V14.889H9.222ZM3,6V7.778H19V6Zm2.667,6.222H16.333V10.444H5.667Z" transform="translate(-3 -6)"/>
                        </svg>

            case 'support':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19.5" width="16" height="19.5" fill="#2B2B2B">
                            <path d="M12,22a2.006,2.006,0,0,0,2-2H10A2.006,2.006,0,0,0,12,22Zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5,1.5,0,1,0-3,0v.68C7.64,5.36,6,7.92,6,11v5L4,18v1H20V18Zm-2,1H8V11c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5Z" transform="translate(-4 -2.5)"/>
                        </svg>
                
            case 'file':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 21" width="16" height="20" fill="#2B2B2B">
                            <g transform="translate(-873.5 -675.5)">
                                <path d="M14,2H6A2,2,0,0,0,4.01,4L4,20a2,2,0,0,0,1.99,2H18a2.006,2.006,0,0,0,2-2V8Z" transform="translate(870 674)" fill="transparent" stroke="#2B2B2B" stroke-width="2"/>
                                <rect width="8" height="2" transform="translate(878 690)"/>
                                <rect width="8" height="2" transform="translate(878 686)"/>
                                <path d="M3.878.314,8.7,3.095,1.113,5.1Z" transform="translate(884.652 686.531) rotate(-120)"/>
                            </g>
                        </svg>

            case 'image':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#2B2B2B">
                            <path d="M17.222,3H4.778A1.783,1.783,0,0,0,3,4.778V17.222A1.783,1.783,0,0,0,4.778,19H17.222A1.783,1.783,0,0,0,19,17.222V4.778A1.783,1.783,0,0,0,17.222,3Zm0,14.222H4.778V4.778H17.222Zm-4.48-5.964L10.3,14.4l-1.742-2.1L6.111,15.444h9.778Z" transform="translate(-3 -3)"/>
                        </svg>
        }   
    }
}