import React from 'react';

export default class FeaturesIcons extends React.Component {

    render() {
        switch(this.props.icon) {
            case 'search':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.076 17.085" width="16" fill="#2B2B2B">
                        <path d="M9.5,4a6.5,6.5,0,0,1,4.932,10.734l5.644,5.644-.707.707L13.724,15.44A6.5,6.5,0,1,1,9.5,4Zm0,1A5.5,5.5,0,1,0,15,10.5,5.5,5.5,0,0,0,9.5,5Z" transform="translate(-3 -4)"/>
                    </svg>
                ); 

            case 'filter':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 390 390" width="16" fill="#2B2B2B">
                        <path d="M362.072,63c0.1-0.3-0.1-0.6-0.1-0.9V10c0.2-5.3-4-9.8-9.4-10c-0.1,0-0.2,0-0.3,0h-314.7c-5.3,0-9.7,4.4-9.6,9.7
                        c0,0.1,0,0.2,0,0.3v52.1c0,0.3-0.2,0.6-0.1,0.9c0,0.1-0.1,0.3,0,0.4c0,0.2,0,0.4,0,0.5c0,0.2,0,0.3,0.1,0.5
                        c0.1,0.2,0.1,0.3,0.1,0.4c0,0.1,0.1,0.3,0.1,0.5c0,0.1,0.1,0.3,0.1,0.4c0.1,0.2,0.1,0.3,0.2,0.5c0.1,0.1,0.1,0.3,0.2,0.4
                        c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.3,0.2,0.4c0,0.1,0.2,0.3,0.2,0.4c0.1,0.1,0.2,0.3,0.3,0.4s0.2,0.2,0.2,0.3
                        c0,0,0.2,0,0.3,0.1l119.9,141V380c-0.1,3.8,2,7.3,5.5,9c1.3,0.6,2.7,1,4.2,1c2.3,0,4.5-0.8,6.2-2.2l70.6-57.3
                        c2.3-1.9,3.6-4.8,3.5-7.8V209.6l119.8-141c0,0,0.1,0,0.2-0.1c0.1-0.1,0.2-0.2,0.3-0.3c0.1-0.1,0.2-0.3,0.3-0.4s0.2-0.3,0.3-0.4
                        c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0.2-0.4c0.1-0.2,0.1-0.3,0.2-0.5c0.1-0.1,0.1-0.3,0.1-0.4
                        c0.1-0.2,0.1-0.3,0.1-0.5s0.1-0.3,0.1-0.4c0-0.1,0.1-0.3,0.1-0.5c0-0.2,0.1-0.4,0.1-0.5C362.172,63.3,361.972,63.1,362.072,63z
                        M222.572,199.4c-1.6,1.8-2.5,4.1-2.6,6.5v112l-50,41.1V205.9c-0.1-2.4-1-4.7-2.6-6.5L59.172,72h271.6L222.572,199.4z M341.972,52
                        h-294V20h294V52z"/>
                    </svg>
                ); 

            case 'tendancies':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.072 17" width="16" fill="#2B2B2B">
                        <path d="M3,4H4V18L9.581,8.333,15.59,11.8,19.206,5.54l.866.5-4.116,7.129L9.947,9.7,4,20H20v1H3Z" transform="translate(-3 -4)"/>
                    </svg>
                ); 

            case 'users':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -24 512 512" width="16" fill="#2B2B2B">
                        <path d="m413.0625 204.789062c30.519531-19.894531 50.738281-54.320312 50.738281-93.390624 0-61.425782-49.972656-111.398438-111.398437-111.398438-41.117188 0-77.101563 22.394531-96.402344 55.625-19.300781-33.230469-55.28125-55.625-96.398438-55.625-61.425781 0-111.402343 49.972656-111.402343 111.398438 0 39.070312 20.21875 73.496093 50.738281 93.390624-58.003906 23.925782-98.9375 81.074219-98.9375 147.613282v56.230468c0 30.421876 24.75 55.167969 55.167969 55.167969h401.664062c30.421875 0 55.167969-24.746093 55.167969-55.164062v-56.234375c0-66.539063-40.933594-123.6875-98.9375-147.613282zm-60.660156-174.789062c44.882812 0 81.398437 36.515625 81.398437 81.398438 0 44.886718-36.515625 81.402343-81.398437 81.402343-44.886719 0-81.402344-36.515625-81.402344-81.402343 0-44.882813 36.515625-81.398438 81.402344-81.398438zm-96.457032 195.25c-10.890624-8.273438-22.867187-15.175781-35.679687-20.460938 14.652344-9.550781 26.929687-22.453124 35.734375-37.609374 8.800781 15.148437 21.070312 28.042968 35.710938 37.59375-12.691407 5.21875-24.714844 12.085937-35.765626 20.476562zm-177.746093-113.851562c0-44.882813 36.515625-81.398438 81.402343-81.398438 44.882813 0 81.398438 36.515625 81.398438 81.398438 0 44.886718-36.515625 81.402343-81.398438 81.402343-44.886718 0-81.402343-36.515625-81.402343-81.402343zm169.765625 322.402343h-192.796875c-13.878907 0-25.167969-11.289062-25.167969-25.164062v-56.234375c0-71.464844 58.140625-129.601563 129.601562-129.601563 71.460938 0 129.601563 58.140625 129.601563 129.601563v56.234375c0 13.875-11.292969 25.164062-25.167969 25.164062zm234.035156-25.164062c0 13.875-11.289062 25.164062-25.167969 25.164062h-143.730469c3.890626-7.550781 6.101563-16.101562 6.101563-25.164062v-56.234375c0-40.851563-15.4375-78.164063-40.769531-106.421875 21.601562-15.03125 47.347656-23.179688 73.96875-23.179688 71.460937 0 129.597656 58.136719 129.597656 129.601563zm0 0"/>
                    </svg>
                );

            case 'support':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 19" width="16" fill="#2B2B2B">
                        <path d="M12,4.5a.5.5,0,0,0-1,0V6.027A4.5,4.5,0,0,0,7,10.5v5.914L5.414,18H17.586L16,16.414V10.5a4.5,4.5,0,0,0-4-4.473ZM11.5,3A1.5,1.5,0,0,1,13,4.5v.707A5.5,5.5,0,0,1,17,10.5V16l3,3H3l3-3V10.5a5.5,5.5,0,0,1,4-5.293V4.5A1.5,1.5,0,0,1,11.5,3Zm0,19a2.5,2.5,0,0,1-2.45-2h1.035a1.5,1.5,0,0,0,2.829,0H13.95A2.5,2.5,0,0,1,11.5,22Z" transform="translate(-3 -3)"/>
                    </svg>
                );
                
            case 'download':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 18" width="16" fill="#2B2B2B">
                        <path d="M12,4V16.25L17.25,11l.75.664-6.5,6.5L5,11.664,5.75,11,11,16.25V4ZM3,19H4v2H19V19h1v3H3Z" transform="translate(-3 -4)"/>
                    </svg>
                );

        }   
    }
}