import React from 'react';
import { withTranslation } from 'react-i18next';
import {
    Row,
    Col,
    Table
} from 'react-bootstrap';
import ExternalLink from '../../../assets/img/svg/ExternalLink';
import { 
    AreaChart, 
    Tooltip, 
    Area 
} from 'recharts';


class AFTableTendancies extends React.Component {
    
    externalLink = (y, d) => (
        <a 
            href={"https://www.google.fr/search?q=" + y}  
            title={this.props.t('titleElementBrowser.askingFranklin.openInGoogle')} 
            target="_blank" 
            rel="noopener noreferrer"
            class={'d-flex rounded p-2 ' + d}
        >
            <ExternalLink width="14" fill="#2B2B2B"/>
        </a>
    );

    render() {

        const { t } = this.props;

        return (
            <>
                <p class="px-3 mb-3">{t('askingFranklin.data.trendsPeriod')}</p>
                <Row className="asking-franklin-table asking-franklin-table-tendancies mx-0 px-0 d-flex flex-column flex-md-row">
                    {this.props.data.data.map((x) => {
                        if (x.suggestions.length > 0) {
                            return (
                                <Col sm="12" className="mb-3 pb-3 px-3">
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th class="align-middle px-2 w-100 fz-18 fw-400">{x.word}</th>
                                                <th class="align-middle px-2 w-100 fz-18 fw-400">{t('askingFranklin.data.evolution')}</th>
                                                <th class="align-middle px-2 w-100 fz-18 fw-400"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {x.suggestions.map((y) => {
                                                var hasData = y.gtrend.reduce((prev,next) => prev + next.data, 0);
                                                return (
                                                    hasData > 0 && 
                                                        <tr>
                                                            <td class="align-middle py-1 px-2"><span class="mr-2 mr-md-0">{y.text}</span>{this.externalLink(y.text, 'd-md-none')}</td>
                                                            <td class="td-area-chart px-0 align-middle">
                                                                <AreaChart data={y.gtrend} width={400} height={48} style={{ top: '9px' }}>
                                                                    <Tooltip contentStyle={{ color: '#673AB7' }}/>
                                                                    <defs>
                                                                        <linearGradient id="volumetryGradientPrimary" x1="0" y1="0" x2="0" y2="1">
                                                                            <stop offset="0%" stopColor="#673AB7" stopOpacity={0.5}/>
                                                                            <stop offset="100%" stopColor="#673AB7" stopOpacity={0.25}/>
                                                                        </linearGradient>
                                                                    </defs>
                                                                    <Area 
                                                                        name={t('askingFranklin.data.evolution')}
                                                                        type="monotone" 
                                                                        fill="url(#volumetryGradientPrimary)"
                                                                        dataKey="data" 
                                                                        stroke="#673AB7" 
                                                                        strokeWidth={2}
                                                                        dot={{ fill: '#673AB7', stroke: '#673AB7', strokeWidth: 1, fillOpacity: 1}}
                                                                        activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                    />
                                                                </AreaChart>
                                                            </td>
                                                            <td class="px-0 align-middle">{this.externalLink(y.text)}</td>
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
            </>
        )
    }
}

export default withTranslation()(AFTableTendancies);