import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import Section from './Section';
class Wysiwyg extends React.Component {

    render() {

        const { t } = this.props;

        return (
            <Col className="block-writing block-style px-0 w-100">
                <Section/>
            </Col>
        )
    }
}

export default withTranslation()(Wysiwyg);