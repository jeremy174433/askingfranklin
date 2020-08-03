import React from 'react';

export default class Title extends React.Component {

    render() {
        return (
            <h2 className="pb-3 mb-3 fz-18 fw-600">{this.props.title}</h2>
        )
    }
}
