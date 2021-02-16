import React from 'react';

export default class Flag extends React.Component {

    render() {
        switch(this.props.icon) {
            case 'ch':
                return(
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <path fill="#FF4B55" d="M473.655,423.724H38.345C17.167,423.724,0,406.557,0,385.379V126.621  c0-21.177,17.167-38.345,38.345-38.345h435.31c21.177,0,38.345,17.167,38.345,38.345V385.38  C512,406.557,494.833,423.724,473.655,423.724z"/>
                        <path fill="#F5F5F5" d="M353.103,220.69H291.31v-61.793c0-4.875-3.953-8.828-8.828-8.828h-52.966  c-4.875,0-8.828,3.953-8.828,8.828v61.793h-61.793c-4.875,0-8.828,3.953-8.828,8.828v52.966c0,4.875,3.953,8.828,8.828,8.828h61.793  v61.793c0,4.875,3.953,8.828,8.828,8.828h52.966c4.875,0,8.828-3.953,8.828-8.828V291.31h61.793c4.875,0,8.828-3.953,8.828-8.828  v-52.966C361.931,224.642,357.978,220.69,353.103,220.69z"/>
                    </svg>
                );
            case 'ca':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <rect x="114.76" y="88.277" fill="#F5F5F5" width="282.48" height="335.45"/>
                        <g>
                            <path fill="#FF4B55" d="M38.345,88.273C17.167,88.273,0,105.44,0,126.618v258.759c0,21.177,17.167,38.345,38.345,38.345   h76.414V88.273H38.345z"/>
                            <path fill="#FF4B55" d="M473.655,88.273h-76.414v335.448h76.414c21.177,0,38.345-17.167,38.345-38.345V126.618   C512,105.44,494.833,88.273,473.655,88.273z"/>
                            <path fill="#FF4B55" d="M309.569,294.757l52.383-29.932l-12.02-6.01c-3.371-1.686-5.301-5.326-4.802-9.063l3.911-29.322   l-22.177,6.452c-4.899,1.426-9.983-1.588-11.085-6.569l-2.124-9.6l-20.823,24.37c-2.886,3.378-8.386,0.798-7.633-3.581   l8.893-51.708l-13.615,3.723c-3.977,1.088-8.177-0.722-10.116-4.36l-14.337-26.871v-0.04l-0.01,0.02l-0.011-0.02v0.04   l-14.337,26.871c-1.941,3.637-6.141,5.447-10.118,4.36l-13.615-3.723l8.893,51.708c0.753,4.378-4.747,6.959-7.634,3.582   l-20.823-24.37l-2.124,9.6c-1.102,4.982-6.186,7.994-11.085,6.569l-22.177-6.452l3.911,29.322c0.499,3.736-1.431,7.377-4.802,9.063   l-12.02,6.009l52.383,29.933c5.426,3.101,7.804,9.677,5.615,15.53l-4.478,11.977l44.885-3.832c2.484-0.212,4.598,1.788,4.525,4.279   l-1.414,48.044h8.828L259,322.71c-0.073-2.492,2.041-4.491,4.525-4.279l44.906,3.834l-4.478-11.977   C301.766,304.434,304.143,297.857,309.569,294.757z"/>
                        </g>
                    </svg>
                );

            case 'de':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <path fill="#464655" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v73.471h512v-73.471  C512,105.443,494.833,88.276,473.655,88.276z"/>
                        <path fill="#FFE15A" d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345  v-73.471H0V385.379z"/>
                        <rect y="200.09" fill="#FF4B55" width="512" height="111.81"/>
                    </svg>
                );

            case 'es':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <g>
                            <path fill="#C8414B" d="M0,385.379c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345   v-32.276H0V385.379z"/>
                            <path fill="#C8414B" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621v32.276h512v-32.276   C512,105.443,494.833,88.276,473.655,88.276z"/>
                        </g>
                        <rect y="158.9" fill="#FFD250" width="512" height="194.21"/>
                        <path fill="#C8414B" d="M216.276,256l7.485-33.681c0.69-3.102-1.671-6.044-4.849-6.044h-5.272  c-3.177,0-5.537,2.943-4.849,6.044L216.276,256z"/>
                        <rect x="207.45" y="238.34" fill="#F5F5F5" width="17.655" height="75.03"/>
                        <rect x="203.03" y="229.52" fill="#FAB446" width="26.483" height="8.828"/>
                        <g>
                            <rect x="185.38" y="256" fill="#C8414B" width="44.14" height="8.828"/>
                            <polygon fill="#C8414B" points="229.517,291.31 203.034,282.483 203.034,273.655 229.517,282.483  "/>
                            <path fill="#C8414B" d="M83.862,256l7.485-33.681c0.69-3.102-1.671-6.044-4.849-6.044h-5.272   c-3.177,0-5.537,2.943-4.849,6.044L83.862,256z"/>
                        </g>
                        <path fill="#F5F5F5" d="M114.759,229.517c-4.875,0-8.828,3.953-8.828,8.828v57.379c0,10.725,10.01,30.897,44.138,30.897  s44.138-20.171,44.138-30.897v-57.379c0-4.875-3.953-8.828-8.828-8.828H114.759z"/>
                        <g>
                            <path fill="#C8414B" d="M150.069,273.655h-44.138v-35.31c0-4.875,3.953-8.828,8.828-8.828h35.31V273.655z"/>
                            <path fill="#C8414B" d="M150.069,273.655h44.138v22.069c0,12.189-9.88,22.069-22.069,22.069l0,0   c-12.189,0-22.069-9.88-22.069-22.069V273.655z"/>
                        </g>
                        <path fill="#FAB446" d="M105.931,273.655h44.138v22.069c0,12.189-9.88,22.069-22.069,22.069l0,0  c-12.189,0-22.069-9.88-22.069-22.069V273.655z"/>
                        <g>
                            <path fill="#C8414B" d="M141.241,313.28v-39.625h-8.828v43.693C135.697,316.682,138.664,315.228,141.241,313.28z"/>
                            <path fill="#C8414B" d="M123.586,317.348v-43.693h-8.828v39.625C117.336,315.228,120.303,316.682,123.586,317.348z"/>
                        </g>
                        <rect x="114.76" y="256" fill="#FFB441" width="26.483" height="8.828"/>
                        <g>
                            <rect x="114.76" y="238.34" fill="#FAB446" width="26.483" height="8.828"/>
                            <rect x="119.17" y="243.59" fill="#FAB446" width="17.655" height="15.992"/>
                        </g>
                        <rect x="75.03" y="238.34" fill="#F5F5F5" width="17.655" height="75.03"/>
                        <g>
                            <rect x="70.62" y="308.97" fill="#FAB446" width="26.483" height="8.828"/>
                            <rect x="70.62" y="229.52" fill="#FAB446" width="26.483" height="8.828"/>
                        </g>
                        <rect x="66.21" y="317.79" fill="#5064AA" width="35.31" height="8.828"/>
                        <rect x="207.45" y="308.97" fill="#FAB446" width="26.483" height="8.828"/>
                        <rect x="198.62" y="317.79" fill="#5064AA" width="35.31" height="8.828"/>
                        <rect x="123.59" y="220.69" fill="#FAB446" width="52.966" height="8.828"/>
                        <rect x="145.66" y="194.21" fill="#FFB441" width="8.828" height="26.483"/>
                        <g>
                            <path fill="#F5F5F5" d="M141.241,207.448c-7.302,0-13.241-5.94-13.241-13.241c0-7.302,5.94-13.241,13.241-13.241   c7.302,0,13.241,5.94,13.241,13.241C154.483,201.508,148.543,207.448,141.241,207.448z M141.241,189.793   c-2.435,0-4.414,1.978-4.414,4.414c0,2.435,1.978,4.414,4.414,4.414s4.414-1.978,4.414-4.414   C145.655,191.772,143.677,189.793,141.241,189.793z"/>
                            <path fill="#F5F5F5" d="M158.897,207.448c-7.302,0-13.241-5.94-13.241-13.241c0-7.302,5.94-13.241,13.241-13.241   c7.302,0,13.241,5.94,13.241,13.241S166.198,207.448,158.897,207.448z M158.897,189.793c-2.435,0-4.414,1.978-4.414,4.414   c0,2.435,1.978,4.414,4.414,4.414c2.435,0,4.414-1.978,4.414-4.414C163.31,191.772,161.332,189.793,158.897,189.793z"/>
                            <path fill="#F5F5F5" d="M176.552,216.276c-7.302,0-13.241-5.94-13.241-13.241c0-7.302,5.94-13.241,13.241-13.241   c7.302,0,13.241,5.94,13.241,13.241S183.853,216.276,176.552,216.276z M176.552,198.621c-2.435,0-4.414,1.978-4.414,4.414   c0,2.435,1.978,4.414,4.414,4.414c2.435,0,4.414-1.978,4.414-4.414S178.987,198.621,176.552,198.621z"/>
                            <path fill="#F5F5F5" d="M123.586,216.276c-7.302,0-13.241-5.94-13.241-13.241c0-7.302,5.94-13.241,13.241-13.241   c7.302,0,13.241,5.94,13.241,13.241C136.828,210.336,130.888,216.276,123.586,216.276z M123.586,198.621   c-2.435,0-4.414,1.978-4.414,4.414c0,2.435,1.978,4.414,4.414,4.414S128,205.47,128,203.034   C128,200.599,126.022,198.621,123.586,198.621z"/>
                        </g>
                        <path fill="#FAB446" d="M176.552,291.31v4.414c0,2.434-1.98,4.414-4.414,4.414s-4.414-1.98-4.414-4.414v-4.414H176.552   M185.379,282.483h-26.483v13.241c0,7.302,5.94,13.241,13.241,13.241c7.302,0,13.241-5.94,13.241-13.241v-13.241H185.379z"/>
                        <path fill="#FFA0D2" d="M172.138,264.828L172.138,264.828c-4.875,0-8.828-3.953-8.828-8.828v-8.828  c0-4.875,3.953-8.828,8.828-8.828l0,0c4.875,0,8.828,3.953,8.828,8.828V256C180.966,260.875,177.013,264.828,172.138,264.828z"/>
                        <circle fill="#5064AA" cx="150.07" cy="273.65" r="13.241"/>
                        <rect x="145.66" y="176.55" fill="#FAB446" width="8.828" height="26.483"/>
                        <path fill="#C8414B" d="M123.586,220.69l-8.828-8.828l5.171-5.171c7.993-7.993,18.835-12.484,30.14-12.484l0,0  c11.305,0,22.146,4.491,30.14,12.484l5.171,5.171l-8.828,8.828H123.586z"/>
                        <g>
                            <circle fill="#FFD250" cx="150.07" cy="211.86" r="4.414"/>
                            <circle fill="#FFD250" cx="132.41" cy="211.86" r="4.414"/>
                            <circle fill="#FFD250" cx="167.72" cy="211.86" r="4.414"/>
                        </g>
                        <g>
                            <rect x="70.62" y="256" fill="#C8414B" width="44.14" height="8.828"/>
                            <polygon fill="#C8414B" points="70.621,291.31 97.103,282.483 97.103,273.655 70.621,282.483  "/>
                        </g>
                    </svg>
                );

            case 'fr':
                return  (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <path fill="#41479B" d="M38.345,88.273C17.167,88.273,0,105.44,0,126.618v258.759c0,21.177,17.167,38.345,38.345,38.345  h132.322V88.273H38.345z"/>
                        <rect x="170.67" y="88.277" fill="#F5F5F5" width="170.67" height="335.45"/>
                        <path fill="#FF4B55" d="M473.655,88.273H341.333v335.448h132.322c21.177,0,38.345-17.167,38.345-38.345V126.618  C512,105.44,494.833,88.273,473.655,88.273z"/>
                    </svg>
                );

            case 'gb':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <path fill="#41479B" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38  c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621  C512,105.443,494.833,88.276,473.655,88.276z"/>
                        <path fill="#F5F5F5" d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276  v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717  c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977  c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"/>
                        <g>
                            <polygon fill="#FF4B55" points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483    229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517  "/>
                            <path fill="#FF4B55" d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31   C13.377,415.157,18.714,418.955,24.793,421.252z"/>
                            <path fill="#FF4B55" d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"/>
                            <path fill="#FF4B55" d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"/>
                            <path fill="#FF4B55" d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"/>
                        </g>
                    </svg>
                );
                
            case 'it':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <path fill="#73AF00" d="M38.345,88.273C17.167,88.273,0,105.44,0,126.618v258.759c0,21.177,17.167,38.345,38.345,38.345  h132.322V88.273H38.345z"/>
                        <rect x="170.67" y="88.277" fill="#F5F5F5" width="170.67" height="335.45"/>
                        <path fill="#FF4B55" d="M473.655,88.273H341.333v335.448h132.322c21.177,0,38.345-17.167,38.345-38.345V126.618  C512,105.44,494.833,88.273,473.655,88.273z"/>
                    </svg>
                );

            case 'us':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16">
                        <path fill="#F5F5F5" d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38  c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621  C512,105.443,494.833,88.276,473.655,88.276z"/>
                        <g>
                            <path fill="#FF4B55" d="M2.109,114.08H509.89c-5.196-15.017-19.452-25.804-36.235-25.804H38.345   C21.561,88.276,7.306,99.063,2.109,114.08z"/>
                            <rect y="191.49" fill="#FF4B55" width="512" height="25.803"/>
                            <rect y="139.88" fill="#FF4B55" width="512" height="25.803"/>
                            <path fill="#FF4B55" d="M0,260.074c0,4.875,3.953,8.828,8.828,8.828H512v-25.804H0V260.074z"/>
                            <rect y="346.32" fill="#FF4B55" width="512" height="25.804"/>
                            <path fill="#FF4B55" d="M509.891,397.92H2.109c5.197,15.017,19.453,25.804,36.236,25.804h435.31   C490.439,423.724,504.694,412.937,509.891,397.92z"/>
                            <rect y="294.71" fill="#FF4B55" width="512" height="25.803"/>
                        </g>
                        <path fill="#41479B" d="M8.828,268.902h220.69c4.875,0,8.828-3.953,8.828-8.828V97.103c0-4.876-3.953-8.828-8.828-8.828  H38.345C17.167,88.276,0,105.443,0,126.621v133.453C0,264.95,3.953,268.902,8.828,268.902z"/>
                        <g>
                            <path fill="#F5F5F5" d="M24.789,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928L24,122.841l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C23.463,107.778,24.535,107.778,24.789,108.537z"/>
                            <path fill="#F5F5F5" d="M24.789,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,153.496l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,138.433,24.535,138.433,24.789,139.191z"/>
                            <path fill="#F5F5F5" d="M24.789,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,184.151l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,169.087,24.535,169.087,24.789,169.846z"/>
                            <path fill="#F5F5F5" d="M24.789,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,214.805l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,199.741,24.535,199.741,24.789,200.5z"/>
                            <path fill="#F5F5F5" d="M24.789,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928L24,245.459l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C23.463,230.396,24.535,230.396,24.789,231.154z"/>
                            <path fill="#F5F5F5" d="M48.582,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,122.808,48.329,122.808,48.582,123.566z"/>
                            <path fill="#F5F5F5" d="M48.582,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,153.462,48.329,153.462,48.582,154.221z"/>
                            <path fill="#F5F5F5" d="M48.582,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,184.116,48.329,184.116,48.582,184.875z"/>
                            <path fill="#F5F5F5" d="M48.582,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C47.256,214.771,48.329,214.771,48.582,215.529z"/>
                            <path fill="#F5F5F5" d="M72.375,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C71.049,107.778,72.122,107.778,72.375,108.537z"/>
                            <path fill="#F5F5F5" d="M72.375,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,138.433,72.122,138.433,72.375,139.191z"/>
                            <path fill="#F5F5F5" d="M72.375,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,169.087,72.122,169.087,72.375,169.846z"/>
                            <path fill="#F5F5F5" d="M72.375,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,199.741,72.122,199.741,72.375,200.5z"/>
                            <path fill="#F5F5F5" d="M72.375,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C71.049,230.396,72.122,230.396,72.375,231.154z"/>
                            <path fill="#F5F5F5" d="M96.169,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,122.808,95.916,122.808,96.169,123.566z"/>
                            <path fill="#F5F5F5" d="M96.169,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,153.462,95.916,153.462,96.169,154.221z"/>
                            <path fill="#F5F5F5" d="M96.169,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,184.116,95.916,184.116,96.169,184.875z"/>
                            <path fill="#F5F5F5" d="M96.169,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C94.842,214.771,95.916,214.771,96.169,215.529z"/>
                            <path fill="#F5F5F5" d="M119.962,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.591l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C118.636,107.778,119.709,107.778,119.962,108.537z"/>
                            <path fill="#F5F5F5" d="M119.962,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,138.433,119.709,138.433,119.962,139.191z"/>
                            <path fill="#F5F5F5" d="M119.962,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.593l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,169.087,119.709,169.087,119.962,169.846z"/>
                            <path fill="#F5F5F5" d="M119.962,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,199.741,119.709,199.741,119.962,200.5z"/>
                            <path fill="#F5F5F5" d="M119.962,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.026-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C118.636,230.396,119.709,230.396,119.962,231.154z"/>
                            <path fill="#F5F5F5" d="M143.755,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,122.808,143.502,122.808,143.755,123.566z"/>
                            <path fill="#F5F5F5" d="M143.755,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,153.462,143.502,153.462,143.755,154.221z"/>
                            <path fill="#F5F5F5" d="M143.755,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,184.116,143.502,184.116,143.755,184.875z"/>
                            <path fill="#F5F5F5" d="M143.755,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C142.43,214.771,143.502,214.771,143.755,215.529z"/>
                            <path fill="#F5F5F5" d="M167.549,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C166.222,107.778,167.296,107.778,167.549,108.537z"/>
                            <path fill="#F5F5F5" d="M167.549,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,138.433,167.296,138.433,167.549,139.191z"/>
                            <path fill="#F5F5F5" d="M167.549,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,169.087,167.296,169.087,167.549,169.846z"/>
                            <path fill="#F5F5F5" d="M167.549,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,199.741,167.296,199.741,167.549,200.5z"/>
                            <path fill="#F5F5F5" d="M167.549,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C166.222,230.396,167.296,230.396,167.549,231.154z"/>
                            <path fill="#F5F5F5" d="M191.342,123.566l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,122.808,191.089,122.808,191.342,123.566z"/>
                            <path fill="#F5F5F5" d="M191.342,154.221l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,153.462,191.089,153.462,191.342,154.221z"/>
                            <path fill="#F5F5F5" d="M191.342,184.875l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,184.116,191.089,184.116,191.342,184.875z"/>
                            <path fill="#F5F5F5" d="M191.342,215.529l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C190.016,214.771,191.089,214.771,191.342,215.529z"/>
                            <path fill="#F5F5F5" d="M215.136,108.537l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.669   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.466-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.669c-0.643-0.476-0.312-1.496,0.488-1.502l6.177-0.047l1.954-5.86C213.81,107.778,214.882,107.778,215.136,108.537z"/>
                            <path fill="#F5F5F5" d="M215.136,139.191l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,138.433,214.882,138.433,215.136,139.191z"/>
                            <path fill="#F5F5F5" d="M215.136,169.846l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.165-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,169.087,214.882,169.087,215.136,169.846z"/>
                            <path fill="#F5F5F5" d="M215.136,200.5l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.027,0.488,1.502l-4.969,3.67l1.864,5.889   c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889l-4.969-3.67   c-0.643-0.474-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,199.741,214.882,199.741,215.136,200.5z"/>
                            <path fill="#F5F5F5" d="M215.136,231.154l1.954,5.86l6.177,0.047c0.8,0.007,1.131,1.026,0.488,1.502l-4.969,3.67   l1.864,5.889c0.242,0.762-0.627,1.394-1.278,0.928l-5.025-3.592l-5.025,3.592c-0.651,0.465-1.518-0.166-1.278-0.928l1.864-5.889   l-4.969-3.67c-0.643-0.476-0.312-1.495,0.488-1.502l6.177-0.047l1.954-5.86C213.81,230.396,214.882,230.396,215.136,231.154z"/>
                        </g>
                    </svg>
                );

                default:
                    return <em style={{ width: '16px', height: '10px', display: 'inline-block', backgroundColor: 'rgba(0, 0, 0, .5)', borderRadius: '1px', marginRight: '.5rem' }}></em> 

        }   
    }
}