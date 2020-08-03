import React from 'react';
import { Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';

export default class AFStickyMenu extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return ( 
            <Col id="stickyMenu" className="col-12 col-xl-3 position-sticky p-0 mr-xl-5 block-style">
                <div class="sticky-menu-header d-flex align-items-center p-3 bgc-primary">
                    <h1 class="color-light fz-18 fw-600">{this.props.searchContent}</h1>
                </div>
                <div class="sticky-menu-body bg-white d-flex flex-column py-4">
                     <Scrollspy items={ ['questions', 'comparaisons', 'prepositions', 'related'] } currentClassName="nav-link-style-active">
                        <li>
                            <a href="#questions" class="nav-link-style">
                                Questions &nbsp;
                                <span>({this.props.numberQuestions})</span>
                            </a>
                        </li>
                        <li>
                            <a href="#comparaisons" class="nav-link-style">
                                Comparaisons &nbsp;
                                <span>({this.props.numberCompa})</span>
                            </a>
                        </li>
                        <li>
                            <a href="#prepositions" class="nav-link-style">
                                Prépositions &nbsp;
                                <span>({this.props.numberPrepo})</span>
                            </a>
                        </li>
                        <li>
                            <a href="#related" class="nav-link-style">
                                Relatifs &nbsp;
                                <span>({this.props.numberRelated})</span>
                            </a>
                        </li>
                    </Scrollspy>
                </div>
            </Col>
        )
    }
}