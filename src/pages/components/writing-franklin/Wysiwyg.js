import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Section from './Section';

class Wysiwyg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    handleKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }

    render() {

        const { t } = this.props;

        return (
            <Col className="block-writing block-style px-0 w-100">
                <div contentEditable class="title" data-placeholder="Choisir un titre pour son article" onKeyDown={this.handleKeyDown}></div>
                <Section/>
            </Col>
        )
    }
}

export default withTranslation()(Wysiwyg);