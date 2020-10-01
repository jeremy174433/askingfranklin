import React from 'react';

export default class H4 extends React.Component {

    render() {
        return (
            <h4 id={this.props.id} className={this.props.className ? this.props.className + ' h4 fz-20' : 'h4 fz-20'}>{this.props.title}</h4>
        )
    }
}
