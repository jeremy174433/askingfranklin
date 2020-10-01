import React from 'react';

export default class H2 extends React.Component {

    render() {
        return (
            <h2 id={this.props.id} className={this.props.className ? this.props.className + ' h2 fz-32' : 'h2 fz-32'}>{this.props.title}</h2>
        )
    }
}
