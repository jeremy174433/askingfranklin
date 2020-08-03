import React from 'react';
import { 
    Row, 
    Col,
    Table
} from 'react-bootstrap';
import ExternalLink from '../../../assets/img/svg/ExternalLink';

export default class AFTable extends React.Component {

    render() {
        return (
            <Row className="asking-franklin-table mx-0 px-0 d-flex flex-column flex-md-row">
                {this.props.data.map((x) => {
                    if (x.suggestions.length > 0) {
                        return  <Col sm="12" md="6" className="mb-3 pb-3 px-3">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th class="align-middle px-2 w-100 fz-18 fw-400">{x.word}</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {x.suggestions.map((y) => {
                                                return (
                                                    <tr>
                                                        <td class="align-middle py-1 px-2">{y}</td>
                                                        <td class="px-0 align-middle">
                                                            <a 
                                                                href={"https://www.google.fr/search?q=" + y}  
                                                                title="Nouvel onglet : afficher la requête sur Google" 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                class="d-flex rounded-circle p-2">
                                                                <ExternalLink width="14" fill="#2B2B2B"/>
                                                            </a>
                                                        </td>
                                                    </tr>   
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                </Col>
                    }
                })}
            </Row>
        )
    }
}