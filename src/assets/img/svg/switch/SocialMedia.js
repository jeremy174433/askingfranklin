import React from 'react';

export default class SocialMedia extends React.Component {

    render() {
        switch(this.props.icon) {
            case 'facebook':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.999 18" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                            <path d="M16,2V2h0V5.6H14.2c-.621,0-.9.728-.9,1.35V9.2H16v3.6H13.3V20L9.7,20V12.8H7V9.2H9.7V5.6A3.6,3.6,0,0,1,13.3,2Z" transform="translate(-7 -2)"/>
                        </svg>

            case 'twitter':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.149 18" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                            <path d="M23.69,6.131a9.084,9.084,0,0,1-2.61.716,4.558,4.558,0,0,0,2-2.514,9.1,9.1,0,0,1-2.886,1.1A4.548,4.548,0,0,0,12.449,9.58,12.9,12.9,0,0,1,3.083,4.832,4.549,4.549,0,0,0,4.489,10.9a4.527,4.527,0,0,1-2.058-.568c0,.019,0,.038,0,.057a4.547,4.547,0,0,0,3.645,4.456,4.553,4.553,0,0,1-2.052.078,4.549,4.549,0,0,0,4.245,3.156,9.117,9.117,0,0,1-5.644,1.945,9.228,9.228,0,0,1-1.084-.064A12.862,12.862,0,0,0,8.506,22,12.841,12.841,0,0,0,21.435,9.071q0-.3-.013-.588A9.231,9.231,0,0,0,23.69,6.131Z" transform="translate(-1.541 -4)"/>
                        </svg>

            case 'linkedin':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                            <path d="M21,21H17V14.25a2.249,2.249,0,0,0-2.247-1.944A1.808,1.808,0,0,0,13,14.25V21H9V9h4v2a4.592,4.592,0,0,1,3.525-1.763A4.507,4.507,0,0,1,21,13.75ZM7,21H3V9H7ZM5,3A2,2,0,1,1,3,5,2,2,0,0,1,5,3Z" transform="translate(-3 -3)"/>
                        </svg>
        }   
    }
}