import React from 'react';

export default class H3 extends React.Component {

    render() {
        return (
            <h3 id={this.props.id} className={this.props.className ? this.props.className + ' h3 fz-24' : 'h3 fz-24'}>{this.props.title}</h3>
        )
    }
}
