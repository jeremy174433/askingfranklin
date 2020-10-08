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

            case 'users':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 9.455" width="16" height="9.455" fill="#2B2B2B">
                            <path d="M9,6a2.182,2.182,0,1,0,2.182,2.182A2.182,2.182,0,0,0,9,6ZM4.636,7.575a1.818,1.818,0,1,0,1.523,2.807,3.512,3.512,0,0,1-.8-2.2,3.574,3.574,0,0,1,.03-.436A1.8,1.8,0,0,0,4.636,7.575Zm8.727,0a1.8,1.8,0,0,0-.757.17,3.57,3.57,0,0,1,.03.436,3.512,3.512,0,0,1-.8,2.2,1.817,1.817,0,1,0,1.523-2.807ZM9,11.818c-1.455,0-4.364.727-4.364,2.182v1.455h8.727V14C13.364,12.545,10.455,11.818,9,11.818Zm-5.328.7C2.452,12.733,1,13.3,1,14.243v1.212H3.182V14A2.623,2.623,0,0,1,3.672,12.521Zm10.656,0A2.623,2.623,0,0,1,14.818,14v1.455H17V14.243C17,13.3,15.548,12.733,14.328,12.521Z" transform="translate(-1 -6)"/>
                        </svg>

            case 'support':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 19.5" width="16" height="19.5" fill="#2B2B2B">
                            <path d="M12,22a2.006,2.006,0,0,0,2-2H10A2.006,2.006,0,0,0,12,22Zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5,1.5,0,1,0-3,0v.68C7.64,5.36,6,7.92,6,11v5L4,18v1H20V18Zm-2,1H8V11c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5Z" transform="translate(-4 -2.5)"/>
                        </svg>
                
            case 'file':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 20.308" width="16" height="20" fill="#2B2B2B">
                            <g transform="translate(-64 -1.846)">
                                <path d="M75.077,1.846H64V22.154H80V6.769Zm0,2.611,2.312,2.312H75.077Zm3.077,15.851H65.846V3.692h8V8h4.308Z"/>
                                <rect width="8.615" height="1.231" transform="translate(67.692 11.398)"/>
                                <rect width="8.615" height="1.231" transform="translate(67.692 14.152)"/>
                                <rect width="6.615" height="1.231" transform="translate(67.692 16.898)"/>
                                <rect width="4.615" height="1.231" transform="translate(67.692 8.69)"/>
                            </g>
                        </svg>

            case 'image':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="#2B2B2B">
                            <path d="M17.222,3H4.778A1.783,1.783,0,0,0,3,4.778V17.222A1.783,1.783,0,0,0,4.778,19H17.222A1.783,1.783,0,0,0,19,17.222V4.778A1.783,1.783,0,0,0,17.222,3Zm0,14.222H4.778V4.778H17.222Zm-4.48-5.964L10.3,14.4l-1.742-2.1L6.111,15.444h9.778Z" transform="translate(-3 -3)"/>
                        </svg>
        }   
    }
}