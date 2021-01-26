import React from 'react';

export default class Flag extends React.Component {

    render() {
        switch(this.props.icon) {
            case 'fr':
                return  <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 32 20.966">
                            <g transform="translate(0 -88.273)">
                                <path d="M2.4,88.273A2.4,2.4,0,0,0,0,90.67v16.172a2.4,2.4,0,0,0,2.4,2.4h8.27V88.273Z" fill="#41479b"/>
                                <rect width="10.667" height="20.966" transform="translate(10.667 88.273)" fill="#f5f5f5"/>
                                <path d="M349.6,88.273h-8.27v20.966h8.27a2.4,2.4,0,0,0,2.4-2.4V90.67A2.4,2.4,0,0,0,349.6,88.273Z" transform="translate(-320)" fill="#ff4b55"/>
                            </g>
                        </svg>

            case 'gb':
                return  <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 32 20.966">
                            <g transform="translate(0 -88.275)">
                                <path d="M29.6,88.276H2.4a2.4,2.4,0,0,0-2.4,2.4v16.172a2.4,2.4,0,0,0,2.4,2.4H29.6a2.4,2.4,0,0,0,2.4-2.4V90.673A2.4,2.4,0,0,0,29.6,88.276Z" transform="translate(0 -0.001)" fill="#41479b"/>
                                <path d="M31.967,90.275a2.4,2.4,0,0,0-2.363-2H28.98l-10.221,6.7v-6.7H13.241v6.7L3.02,88.275H2.4a2.4,2.4,0,0,0-2.363,2L8.769,96H0v5.517H8.769L.033,107.24a2.4,2.4,0,0,0,2.363,2H3.02l10.221-6.7v6.7h5.517v-6.7l10.221,6.7H29.6a2.4,2.4,0,0,0,2.363-2l-8.736-5.724H32V96H23.231Z" fill="#f5f5f5"/>
                                <g transform="translate(0 88.275)">
                                    <path d="M17.655,88.276h-3.31V97.1H0v3.31H14.345v8.828h3.31v-8.828H32V97.1H17.655Z" transform="translate(0 -88.276)" fill="#ff4b55"/>
                                    <path d="M10.2,307.708l11.661-7.57H19.832L9.224,307.024A2.4,2.4,0,0,0,10.2,307.708Z" transform="translate(-8.648 -286.897)" fill="#ff4b55"/>
                                    <path d="M315.987,300.138H313.96l11.295,7.332a2.407,2.407,0,0,0,.768-.817Z" transform="translate(-294.337 -286.897)" fill="#ff4b55"/>
                                    <path d="M4.049,96.694l9.858,6.4h2.027L4.763,95.842A2.406,2.406,0,0,0,4.049,96.694Z" transform="translate(-3.796 -95.369)" fill="#ff4b55"/>
                                    <path d="M302.165,98.2l10.627-6.9a2.4,2.4,0,0,0-.981-.679L300.138,98.2Z" transform="translate(-281.379 -90.48)" fill="#ff4b55"/>
                                </g>
                            </g>
                        </svg>

            case 'es':
                return  <svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 32 21.987">
                            <g transform="translate(0 -77.6)">
                                <path d="M0,304.8v4.181a3.117,3.117,0,0,0,3.1,3.148H28.9a3.117,3.117,0,0,0,3.1-3.148V304.8Z" transform="translate(0 -212.542)" fill="#d32030"/>
                                <path d="M28.9,77.6H3.1A3.117,3.117,0,0,0,0,80.748v4.181H32V80.748A3.117,3.117,0,0,0,28.9,77.6Z" fill="#d32030"/>
                                <path d="M0,140.8v13.832H32V140.8Z" transform="translate(0 -59.123)" fill="#ffd034"/>
                                <g transform="translate(4.49 88.387)">
                                    <path d="M69.6,244.8v2.168a1.961,1.961,0,0,0,3.923,0V244.8Z" transform="translate(-69.6 -244.8)" fill="#a5001c"/>
                                    <rect width="0.619" height="2.994" transform="translate(4.387 0.31)" fill="#a5001c"/>
                                    <path d="M130.245,300.852c-.052-.052-.1-.052-.206-.052a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052a.31.31,0,0,1-.206-.052c-.052,0-.1-.052-.206-.052s-.155,0-.206.052-.1.052-.206.052v.1a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052s.155,0,.206.052.1.052.206.052a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052.31.31,0,0,0,.206.052v-.1A.31.31,0,0,1,130.245,300.852Z" transform="translate(-124.981 -297.187)" fill="#a5001c"/>
                                    <path d="M130.839,304.8a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052a.31.31,0,0,1-.206-.052c-.052,0-.1-.052-.206-.052s-.155,0-.206.052-.1.052-.206.052v.1a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052s.155,0,.206.052.1.052.206.052a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c.052.052.1.052.206.052v-.1a.31.31,0,0,1-.206-.052A.39.39,0,0,0,130.839,304.8Z" transform="translate(-125.729 -300.929)" fill="#a5001c"/>
                                    <path d="M130.839,308a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052a.31.31,0,0,1-.206-.052c-.052,0-.1-.052-.206-.052s-.155,0-.206.052-.1.052-.206.052v.1a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052s.155,0,.206.052.1.052.206.052a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c.052.052.1.052.206.052v-.1a.31.31,0,0,1-.206-.052C130.942,308.052,130.89,308,130.839,308Z" transform="translate(-125.729 -303.923)" fill="#a5001c"/>
                                    <path d="M136.077,295.3a.111.111,0,0,1-.1.1H135.3a.111.111,0,0,1-.1-.1h0a.111.111,0,0,1,.1-.1h.671a.111.111,0,0,1,.1.1Z" transform="translate(-130.968 -291.948)" fill="#a5001c"/>
                                    <path d="M136.077,247.3a.111.111,0,0,1-.1.1H135.3a.111.111,0,0,1-.1-.1h0a.111.111,0,0,1,.1-.1h.671c.052.052.1.052.1.1Z" transform="translate(-130.968 -247.045)" fill="#a5001c"/>
                                </g>
                                <g transform="translate(2.89 88.594)">
                                    <rect width="0.619" height="2.994" transform="translate(0.568 0.103)" fill="#d32030"/>
                                    <path d="M46.245,300.852c-.052-.052-.1-.052-.206-.052a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052a.31.31,0,0,1-.206-.052c-.052,0-.1-.052-.206-.052a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052v.1a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052.465.465,0,0,0,.258.052.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c0,.052.052.052.155.052v-.1C46.348,300.9,46.3,300.9,46.245,300.852Z" transform="translate(-44.8 -297.394)" fill="#d32030"/>
                                    <path d="M46.039,304.8a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052a.31.31,0,0,1-.206-.052c-.052,0-.1-.052-.206-.052a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052v.1a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c.052.052.1.052.206.052a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c.052.052.1.052.206.052v-.1a.31.31,0,0,1-.206-.052C46.194,304.8,46.142,304.8,46.039,304.8Z" transform="translate(-44.8 -301.135)" fill="#d32030"/>
                                    <path d="M46.039,308a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052a.31.31,0,0,1-.206-.052c-.052,0-.1-.052-.206-.052a.31.31,0,0,0-.206.052c-.052.052-.1.052-.206.052v.1a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c.052.052.1.052.206.052a.31.31,0,0,0,.206-.052c.052,0,.1-.052.206-.052a.31.31,0,0,1,.206.052c.052.052.1.052.206.052v-.1a.31.31,0,0,1-.206-.052C46.194,308.052,46.142,308,46.039,308Z" transform="translate(-44.8 -304.129)" fill="#d32030"/>
                                    <path d="M52.077,295.3a.111.111,0,0,1-.1.1H51.3a.111.111,0,0,1-.1-.1h0a.111.111,0,0,1,.1-.1h.671a.111.111,0,0,1,.1.1Z" transform="translate(-50.787 -292.155)" fill="#d32030"/>
                                    <path d="M52.077,248.052a.111.111,0,0,1-.1.1H51.3a.111.111,0,0,1-.1-.1h0a.16.16,0,0,1,.1-.052h.671c.052,0,.1,0,.1.052Z" transform="translate(-50.787 -248)" fill="#d32030"/>
                                </g>
                                <g transform="translate(3.768 84.568)">
                                    <path d="M79.845,233.91a.137.137,0,0,0-.155-.155h0c0-.1-.619-.155-1.394-.155s-1.394.052-1.394.155h0c-.052,0-.1.1-.1.155a.165.165,0,0,0,.155.155c0,.1.619.155,1.394.155s1.394-.052,1.394-.155C79.794,234.065,79.845,234.013,79.845,233.91Z" transform="translate(-75.613 -230.503)" fill="#a5001c"/>
                                    <path d="M64.258,187.665h0l.052-.052h0a.734.734,0,0,0,.1-.31.684.684,0,0,0-.31-.516l.052.052a1.291,1.291,0,0,0-.671-.206h-.258a.051.051,0,0,0-.052.052h-.052v.052h0l-.155-.155h0a.788.788,0,0,0-.516-.206,1.507,1.507,0,0,0-.465.1v.1a.972.972,0,0,1,.413-.1c.31,0,.619.155.619.413v.052a.268.268,0,0,1-.1.206.746.746,0,0,1-.361-.1,1.855,1.855,0,0,0-.568-.1v-.465c0-.052-.1-.1-.155-.1a.268.268,0,0,0,.206-.1h0v-.1h0c0-.1-.052-.155-.155-.206v-.155h.1v-.1h-.1v-.1h-.1v.1h-.1v.1h.1v.155c-.1,0-.155.1-.155.206v.1h0c.052.052.1.1.155.1a.18.18,0,0,0-.1.052v-.052c0-.052,0-.052-.052-.052s-.052,0-.052.052,0,.052.052.052h.052l-.052.052h0a1.031,1.031,0,0,0-.465-.1.6.6,0,0,0-.516.206h0c-.052.052-.155.1-.155.155h0v-.052h-.052a.051.051,0,0,0-.052-.052h-.258a1.291,1.291,0,0,0-.671.206l.052-.052a.568.568,0,0,0-.31.516.553.553,0,0,0,.1.31h0l.052.052h0c-.052,0-.1.052-.1.155a.255.255,0,0,1,.155.052.742.742,0,0,1,.1.155h0v.1c.052.052.052.052.1,0,.052.052.1.155.206.206a.31.31,0,0,0,.206.052h0a.052.052,0,1,0,0,.1h0a.16.16,0,0,1,.1.052l.052.052.1.052h0v.1a6.247,6.247,0,0,1,1.548-.206,5.908,5.908,0,0,1,1.548.206c-.052,0-.052-.052,0-.1h0l.1-.052-.052-.052a.16.16,0,0,1,.1-.052h0c.052,0,.052,0,.052-.052s0-.052-.052-.052h-.1l.052.052a.31.31,0,0,0,.206-.052c.1-.052.155-.155.206-.206H64c.052-.052.052-.1,0-.1h0a.743.743,0,0,1,.1-.155.255.255,0,0,1,.155-.052C64.413,187.768,64.31,187.665,64.258,187.665Zm-3.819-.877h0c-.052,0-.052,0-.052.052s0,.052.052.052v.052a.051.051,0,0,0-.052.052c0,.052,0,.052.052.052h0v.1h-.155a2.271,2.271,0,0,0-.516.1c-.1.052-.155.1-.258.1-.052-.052-.052-.1-.052-.206a.19.19,0,0,1,.052-.155.845.845,0,0,1,.774-.31h.206C60.49,186.735,60.49,186.735,60.439,186.787Zm1.239-.1h0v.206a1.925,1.925,0,0,0-.619.1,3.286,3.286,0,0,1-.361.1.391.391,0,0,1-.1-.206v-.052c0-.206.258-.413.619-.413a.972.972,0,0,1,.413.1v-.052c.052.052.052.1.052.206Zm2.632.31c0-.052-.052-.1-.1-.155C64.258,186.89,64.258,186.942,64.31,186.994Zm-.155.361a1.213,1.213,0,0,0-.774-.258h-.1a.051.051,0,0,0-.052-.052v-.052h0c.052,0,.052,0,.052-.052a.051.051,0,0,0-.052-.052v-.052c.052,0,.052,0,.052-.052s0-.052-.052-.052h0a.051.051,0,0,0-.052-.052h.206a.989.989,0,0,1,.774.31c0,.052.052.1.052.155C64.258,187.252,64.206,187.3,64.155,187.355Z" transform="translate(-59.148 -185.6)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(5.213 2.013)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(5.265 1.858)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(5.316 1.755)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(5.316 1.548)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(5.265 1.394)" fill="#a5001c"/>
                                    <path d="M139.252,204.9c.052,0,.052,0,.052-.052s0-.052-.052-.052-.052,0-.052.052S139.2,204.9,139.252,204.9Z" transform="translate(-133.987 -203.561)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(5.058 1.135)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(4.955 1.032)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(4.8 0.981)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(4.645 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(4.439 0.877)" fill="#a5001c"/>
                                    <path d="M124.852,199.3c.052,0,.052,0,.052-.052a.051.051,0,0,0-.052-.052c-.052,0-.052,0-.052.052A.051.051,0,0,0,124.852,199.3Z" transform="translate(-120.516 -198.323)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(4.129 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(3.974 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(3.819 0.774)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(3.665 0.671)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(3.51 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(3.355 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(3.2 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(2.994 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(2.839 0.671)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.103 2.013)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.052 1.858)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0 1.755)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0 1.548)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.052 1.394)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.103 1.239)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.206 1.135)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.361 1.032)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.516 0.981)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.671 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(0.877 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.032 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.187 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.342 0.877)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.497 0.774)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.652 0.671)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.806 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(1.961 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(2.116 0.619)" fill="#a5001c"/>
                                    <circle cx="0.052" cy="0.052" r="0.052" transform="translate(2.323 0.619)" fill="#a5001c"/>
                                </g>
                                <g transform="translate(3.097 87.51)">
                                    <path d="M53.523,246.452h0c-.052-.052-.206-.052-.361-.052-.206,0-.361,0-.361.052h0v.052a.051.051,0,0,0,.052.052,1.26,1.26,0,0,0,.361.052.349.349,0,0,0,.31-.155Z" transform="translate(-52.49 -245.419)" fill="#d32030"/>
                                    <path d="M49.239,231.871h0c.052-.052.052-.052.052-.1a.111.111,0,0,0-.1-.1h0a.19.19,0,0,0-.155-.052h-.052a.051.051,0,0,0-.052-.052h0c-.052-.052-.052-.052-.155-.052-.052,0-.1,0-.1.052h0c.052,0,.052-.052.1-.052.1,0,.155.052.155.1h0v.052h-.1a.19.19,0,0,1-.155-.052v-.052h0v-.052a.052.052,0,1,1,0-.1h0a.051.051,0,0,0-.052-.052V231.3h.052v-.052h0V231.2h0v.052h-.052v.052h.052v.052a.051.051,0,0,0-.052.052h0a.051.051,0,0,0,.052.052h-.052c-.052,0-.052-.052-.1-.052a.19.19,0,0,0-.155.052h0a.051.051,0,0,0-.052.052h-.052a.19.19,0,0,0-.155.052h0c-.052.052-.1.052-.1.1s0,.052.052.1h0a.051.051,0,0,0-.052.052h.052l.052.052h0v.052h0a.051.051,0,0,0,.052.052h.052v.052a.765.765,0,0,1,.361-.052c.155,0,.31,0,.361.052v-.052h.052l.052-.052h0v-.052h0c.155.1.206.052.206,0,0,.052.052.052,0,0Zm-.929-.206h0v.052h-.052c-.052,0-.1,0-.1.052a.051.051,0,0,0-.052.052v-.1c0-.052.1-.1.206-.1v.052Zm.31,0h0a.19.19,0,0,1-.155.052h-.1v-.052h0c0-.052.052-.1.155-.1l.1.1Zm.619.052Zm0,.1a.051.051,0,0,1-.052-.052h-.155a.268.268,0,0,1,.206.1v-.052Z" transform="translate(-48 -231.2)" fill="#d32030"/>
                                </g>
                                <g transform="translate(4.364 87.51)">
                                    <path d="M67.667,239.2Z" transform="translate(-67.644 -238.684)" fill="#a5001c"/>
                                    <path d="M137.523,246.452h0c-.052-.052-.206-.052-.361-.052-.206,0-.361,0-.361.052h0v.052a.051.051,0,0,0,.052.052,1.26,1.26,0,0,0,.361.052c.155-.1.31-.1.31-.155Z" transform="translate(-132.338 -245.419)" fill="#a5001c"/>
                                    <path d="M131.742,231.871h0c.052,0,.052-.052.052-.1a.111.111,0,0,0-.1-.1h0a.19.19,0,0,0-.155-.052h-.052a.051.051,0,0,0-.052-.052h0c-.052-.052-.052-.052-.155-.052-.052,0-.1,0-.1.052h0c.052,0,.052-.052.1-.052.1,0,.155.052.155.1h0v.052h-.1a.19.19,0,0,1-.155-.052v-.052h0v-.052a.052.052,0,1,1,0-.1h0a.051.051,0,0,0-.052-.052V231.3h.052v-.052h-.052V231.2h-.052v.052h-.052v.052h.052v.052a.051.051,0,0,0-.052.052h0a.051.051,0,0,0,.052.052h-.052c-.052,0-.052-.052-.1-.052a.19.19,0,0,0-.155.052h0a.051.051,0,0,0-.052.052h-.052a.19.19,0,0,0-.155.052h0c-.052.052-.1.052-.1.1s0,.052.052.1h0a.051.051,0,0,0-.052.052h.052l.052.052h0v.052h0a.051.051,0,0,0,.052.052h.052v.052a.765.765,0,0,1,.361-.052c.155,0,.31,0,.361.052v-.052h.052l.052-.052h0v-.052h0c.31.1.31.052.31,0,0,.052.052.052,0,0C131.794,231.923,131.794,231.871,131.742,231.871Zm-.877-.206h0c-.052,0-.052.052,0,0h0v.052h-.052c-.052,0-.1,0-.1.052a.051.051,0,0,0-.052.052v-.1c0-.052.1-.1.206-.1-.052.052-.052.052,0,.052Zm.258,0h0a.19.19,0,0,1-.155.052h-.1v-.052h0c0-.052.052-.1.155-.1.052.052.1.052.1.1Zm.671.052Zm-.052.1a.051.051,0,0,1-.052-.052.18.18,0,0,1-.1-.052h0a.268.268,0,0,1,.206.1c-.052-.1-.052-.052-.052,0Z" transform="translate(-126.351 -231.2)" fill="#a5001c"/>
                                </g>
                                <g transform="translate(3.819 84.516)">
                                    <path d="M61.832,187.794V184.8h-.052v.1h-.1v.1h.1v.155c-.1,0-.155.1-.155.206v.1h0c.052.052.1.1.155.1a.18.18,0,0,0-.1.052v-.052c0-.052,0-.052-.052-.052s-.052,0-.052.052,0,.052.052.052h.052l-.052.052h0a1.031,1.031,0,0,0-.465-.1.6.6,0,0,0-.516.206h0c-.052.052-.155.1-.155.155h0v-.052h-.052a.051.051,0,0,0-.052-.052h-.258a1.291,1.291,0,0,0-.671.206l.052-.052a.568.568,0,0,0-.31.516.553.553,0,0,0,.1.31h0l.052.052h0c-.052,0-.1.052-.1.155a.255.255,0,0,1,.155.052.743.743,0,0,1,.1.155h0v.1c.052.052.052.052.1,0,.052.052.1.155.206.206a.31.31,0,0,0,.206.052h0a.052.052,0,1,0,0,.1h0a.16.16,0,0,1,.1.052l.052.1.1.052h0v.1A4.69,4.69,0,0,1,61.832,187.794Zm-1.239-1.7c0-.206.258-.413.619-.413a.972.972,0,0,1,.413.1v.361a1.925,1.925,0,0,0-.619.1,3.286,3.286,0,0,1-.361.1,2.235,2.235,0,0,1-.052-.258Zm-.31.258a2.272,2.272,0,0,0-.516.1c-.1.052-.155.1-.258.1-.052-.052-.052-.1-.052-.206a.19.19,0,0,1,.052-.155.845.845,0,0,1,.774-.31h.206a.051.051,0,0,1-.052.052h0c-.052,0-.052,0-.052.052s0,.052.052.052v.052a.051.051,0,0,0-.052.052c0,.052,0,.052.052.052h0v.1A.19.19,0,0,1,60.284,186.348Z" transform="translate(-59.2 -184.8)" fill="#d32030"/>
                                    <path d="M77.548,233.6h0c-.826,0-1.445.052-1.445.155h0c-.052,0-.1.1-.1.155a.165.165,0,0,0,.155.155c0,.1.619.155,1.394.155Z" transform="translate(-74.916 -230.452)" fill="#d32030"/>
                                    <path d="M71.561,244.8H69.6v2.168a1.96,1.96,0,0,0,1.961,1.961Z" transform="translate(-68.929 -240.929)" fill="#d32030"/>
                                </g>
                            </g>
                        </svg>
        }   
    }
}