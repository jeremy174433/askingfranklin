import React from 'react';

export default class ArrowLight extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 386.242 386.242" width={this.props.width} fill={this.props.fill} style={this.props.style}>
                <path d="M374.212,182.3H39.432l100.152-99.767c4.704-4.704,4.704-12.319,0-17.011   c-4.704-4.704-12.319-4.704-17.011,0L3.474,184.61c-4.632,4.632-4.632,12.379,0,17.011l119.1,119.1   c4.704,4.704,12.319,4.704,17.011,0c4.704-4.704,4.704-12.319,0-17.011L39.432,206.36h334.779c6.641,0,12.03-5.39,12.03-12.03   S380.852,182.3,374.212,182.3z" />
            </svg>
        )
    }
}