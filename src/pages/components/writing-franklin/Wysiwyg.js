import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';

class Wysiwyg extends React.Component {

    render() {

        const { t } = this.props;

        return (
            <Col className="block-writing block-style px-0 w-100">
                <div contentEditable="true"></div>
            </Col>
        )
    }
}

export default withTranslation()(Wysiwyg);