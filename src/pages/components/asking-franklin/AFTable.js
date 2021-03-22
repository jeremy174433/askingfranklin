import React from 'react';
import { withTranslation } from 'react-i18next';
import { 
    Row, 
    Col,
    Table
} from 'react-bootstrap';
import ExternalLink from '../../../assets/img/svg/ExternalLink';

class AFTable extends React.Component {

    render() {

        const { t } = this.props;

        return (
            <Row className="asking-franklin-table mx-0 px-0 d-flex flex-column flex-md-row">
                {this.props.data.map((x) => {
                    if (x.suggestions.length > 0) {
                        return (
                            <Col sm="12" md="6" className="mb-3 pb-3 px-3">
                                <Table>
                                    <thead>
                                        <tr>
                                            <th class="align-middle px-2 w-100 fz-18 fw-400">{x.word}</th>
                                            <th class="align-middle px-2 w-100 fz-18 fw-400"></th>
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
                                                            title={t('titleElementBrowser.askingFranklin.openInGoogle')} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            class="d-flex rounded p-2">
                                                            <ExternalLink width="14" fill="#2B2B2B"/>
                                                        </a>
                                                    </td>
                                                </tr>   
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Col>
                        );
                    }
                })}
            </Row>
        )
    }
}

export default withTranslation()(AFTable);