import React from 'react';
import { Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import H4 from './title/H4';

export default class AccordionItem extends React.Component {

    render() {
        return (
            <Card className="rounded">
                <Accordion.Toggle as={Card.Header} eventKey={this.props.eventKey} className="p-3 d-flex justify-content-between border-bottom-0">
                    <H4 className="mb-0 fw-600 d-flex align-items-center" title={this.props.title}/>
                    <span class="btn-collapsible ml-3 d-flex align-items-center justify-content-center rounded">+</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={this.props.eventKey}>
                    <Card.Body className="p-0 pt-3 mx-3 mb-3">{this.props.content}</Card.Body>
                </Accordion.Collapse>
            </Card>
        )
    }
}
