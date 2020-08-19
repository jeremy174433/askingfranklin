import React from 'react';

export default class H1 extends React.Component {

    render() {
        return (
            <h1 id={this.props.id} className={this.props.className? this.props.className + ' h1 fz-36' : 'h1 fz-36'}>{this.props.title}</h1>
        )
    }
}
