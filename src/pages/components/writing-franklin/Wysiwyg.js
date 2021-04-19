import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Section from './Section';
class Wysiwyg extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title:""
        }
    }
    render() {

        const { t } = this.props;

        return (
            <Col className="block-writing block-style px-0 w-100">
                <div contentEditable className="title"></div>
                <Section/>
            </Col>
        )
    }
}

export default withTranslation()(Wysiwyg);