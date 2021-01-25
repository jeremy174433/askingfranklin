import React from 'react';
import { Col } from 'react-bootstrap';
import H3 from '../title/H3';
import ArrowTextLink from '../link/ArrowTextLink';

export default class CardReview extends React.Component {

    render() {
        return (
             <Col sm="8" md="5" xl="3" className="card-review p-3">
                <H3 className="mb-3 fw-600" title={this.props.title}/>
                <p class="fz-14 fw-600">{this.props.authorName}</p>
                <p class="mb-3 fz-14">{this.props.authorProfession}</p>
                <ArrowTextLink href={this.props.postLink} textLink="Lire l'article" target="_blank" rel="noopener noreferrer"/>
            </Col>
        )
    }
}
