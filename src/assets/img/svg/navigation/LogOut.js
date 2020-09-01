import React from 'react';

export default class LogOut extends React.Component {

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M245.608,84.392c-5.856-5.857-15.355-5.858-21.213-0.001c-5.857,5.858-5.858,15.355,0,21.213L268.789,150H85.002 c-8.284,0-15,6.716-15,15s6.716,15,15,15h183.785l-44.392,44.392c-5.858,5.858-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.393,10.607,4.393c3.839,0,7.678-1.464,10.606-4.393l69.998-69.998c5.858-5.857,5.858-15.355,0-21.213 L245.608,84.392z"/>
                <path d="M155,330c8.284,0,15-6.716,15-15s-6.716-15-15-15H40V30h115c8.284,0,15-6.716,15-15s-6.716-15-15-15H25 c-8.284,0-15,6.716-15,15v300c0,8.284,6.716,15,15,15H155z"/>
            </svg>
        )
    }
}