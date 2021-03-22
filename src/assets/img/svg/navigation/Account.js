import React from 'react';

export default class Account extends React.Component {

    render() {
        return ( 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.323 513.323" width={this.props.width} height={this.props.height} fill={this.props.fill}>
                <path d="M256.661,257.323c-135.275,0-245.333,110.059-245.333,245.333c0,5.888,4.779,10.667,10.667,10.667    s10.667-4.779,10.667-10.667c0-123.52,100.48-224,224-224s224,100.48,224,224c0,5.888,4.779,10.667,10.667,10.667    c5.888,0,10.667-4.779,10.667-10.667C501.995,367.36,391.936,257.323,256.661,257.323z" />
                <path d="M256.661,0c-64.683,0-117.333,52.629-117.333,117.333s52.651,117.333,117.333,117.333s117.333-52.629,117.333-117.333    S321.344,0,256.661,0z M256.661,213.333c-52.928,0-96-43.072-96-96s43.072-96,96-96c52.928,0,96,43.072,96,96    S309.589,213.333,256.661,213.333z" />
            </svg>
        )
    }
}