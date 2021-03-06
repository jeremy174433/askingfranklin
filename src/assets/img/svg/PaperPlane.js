import React from 'react';

export default class PaperPlane extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="m61.642 1.066-60 23c-.37.142-.622.489-.641.885s.197.766.552.943l15.355 7.678-1.898 13.286c-.061.424.155.84.538 1.033.143.074.298.109.452.109.256 0 .508-.098.7-.285l7.535-7.372 16.222 10.497c.163.105.352.16.543.16.097 0 .193-.014.288-.042.281-.085.51-.288.628-.558l21-48c.016-.04.208-.534-.084-.961-.247-.361-.733-.52-1.19-.373zm-57.164 24.055 50.38-19.313-36.945 26.03zm14.451 8.448 33.491-23.596-35.013 34.252zm21.627 14.952-14.855-9.612 33.321-32.597z"/>
                <path d="m-.071 50h14.142v2h-14.142z" transform="matrix(.707 -.707 .707 .707 -34.012 19.887)"/>
                <path d="m2.343 40h11.314v2h-11.314z" transform="matrix(.707 -.707 .707 .707 -26.648 17.665)"/>
                <path d="m6.1 53.999h19.799v2h-19.799z" transform="matrix(.707 -.707 .707 .707 -34.204 27.423)"/>
            </svg>
        )
    }
}