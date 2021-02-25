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

const data = [
    { name: 'A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'G', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'H', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'I', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'J', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'K', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'L', uv: 1890, pv: 4800, amt: 2181 }
];

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
                    {this.props.data.map((x) => {
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
                                                return (
                                                    <tr>
                                                        <td class="align-middle py-1 px-2"><span class="mr-2 mr-md-0">{y}</span>{this.externalLink(y, 'd-md-none')}</td>
                                                        <td class="td-area-chart px-0 align-middle">
                                                            <AreaChart data={data} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    dataKey="uv" 
                                                                    stroke="#673AB7" 
                                                                    strokeWidth={2}
                                                                    dot={{ fill: '#673AB7', stroke: '#673AB7', strokeWidth: 1, fillOpacity: 1}}
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(y)}</td>
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