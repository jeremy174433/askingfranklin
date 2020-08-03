import React from 'react';

export default class PrimaryButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelected: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            isSelected: this.props.isSelected
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            isSelected: nextProps.isSelected
        });
    }

    handleClick() {
        this.props.handleChange(this.props.idx);
    }

    render() {

        var btnClass = ' pmy-btn pmy-btn-outline-light rounded mr-xs-0 mr-4 mb-4 mb-md-0 mr-4';

        return (
            <button
                onClick={this.handleClick}
                disabled={this.state.isSelected ? true : false}
                className={this.state.isSelected ? 'pmy-btn-full' + btnClass : btnClass}>
                {this.props.text}
            </button>  
        )
    }
}