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
    Area,
    XAxis
} from 'recharts';
import PmyBtn from '../button/PmyBtn';

var dataFake = [
    {
        data:12
    },
    {
        data:55
    },
    {
        data:100
    },
    {
        data:12
    },
    {
        data:55
    },
    {
        data:20
    },
    {
        data:5
    },
    {
        data:55
    },
    {
        data:85
    },
    {
        data:65
    },
    {
        data:55
    },
    {
        data:50
    }
]

class AFTableTendancies extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isConnected: false,
            is_sub: 0
        }
    }

    componentDidMount() {
        var token = localStorage.getItem('af_token');
        var is_sub = localStorage.getItem('af_is_sub');
        if(token) {
            this.setState({
                isConnected: true,
                is_sub: is_sub
            });
        }
    }
    
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
        const isPro = this.state.isConnected && localStorage.getItem('af_is_sub') != 0;

        return (
            <>
                <p class="px-3 mb-3">{t('askingFranklin.data.trendsPeriod')}</p>
                <Row className="asking-franklin-table asking-franklin-table-tendancies mx-0 px-0 d-flex flex-column flex-md-row">
                    {!isPro &&
                        <aside class="block-tendancies-is-blured">
                            <p class="mb-2 fz-22 fw-600">{t('askingFranklin.data.blockCtaTrends.p1')}</p>
                            <p class="fz-18">
                                <span>{t('askingFranklin.data.blockCtaTrends.p2')}</span>
                                <span class="keyword-trends fw-600">{this.props.keywordSearch}</span>
                                <span>{t('askingFranklin.data.blockCtaTrends.p3')}</span>
                            </p>
                            <PmyBtn redirectTo={t('url.pricing')} linkIsLargePmyFull textLink={t('askingFranklin.data.blockCtaTrends.cta')} containerStyle="mt-4"/>
                        </aside>
                    }
                    {this.props.data.data.map((x, index) => {
                        if (x.suggestions.length > 0) {
                            return (<>
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
                                            {isPro && x.suggestions.map((y) => {
                                                const hasData = y.gtrend.reduce((prev,next) => prev + next.data, 0);
                                                return (
                                                    hasData > 0 && 
                                                        <tr>
                                                            <td class="align-middle py-1 px-2"><span class="mr-2 mr-md-0 ">{y.text}</span>{this.externalLink(y.text, 'd-md-none')}</td>
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
                                                                        activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                    />
                                                                  <XAxis dataKey="date" hide={true}/>
                                                                </AreaChart>
                                                            </td>
                                                            <td class="px-0 align-middle">{this.externalLink(y.text)}</td>
                                                        </tr>
                                                );
                                            })}
                                            {!isPro && 
                                                <>
                                                    {/* True data */} 
                                                    <tr>
                                                        <td class="align-middle py-1 px-2"><span class="mr-2 mr-md-0">{x.suggestions[0].text}</span>{this.externalLink(x.suggestions[0].text, 'd-md-none')}</td>
                                                        <td class="td-area-chart px-0 align-middle">
                                                            <AreaChart data={x.suggestions[0].gtrend} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                                <XAxis dataKey="date" hide={true}/>
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(x.suggestions[0].text)}</td>
                                                    </tr>
                                                    {/* Fake data */} 
                                                    <tr>
                                                        <td class="text-blur align-middle py-1 px-2">Malheureusement, il faut payer</td>
                                                        <td class="td-area-chart td-area-chart-blur px-0 align-middle">
                                                            <AreaChart data={dataFake} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(x.suggestions[0].text, 'external-link-hidden')}</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-blur align-middle py-1 px-2">Malheureusement, il faut payer</td>
                                                        <td class="td-area-chart td-area-chart-blur px-0 align-middle">
                                                            <AreaChart data={dataFake} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(x.suggestions[0].text, 'external-link-hidden')}</td>
                                                    </tr>                                                        
                                                    <tr>
                                                        <td class="text-blur align-middle py-1 px-2">Malheureusement, il faut payer</td>
                                                        <td class="td-area-chart td-area-chart-blur px-0 align-middle">
                                                            <AreaChart data={dataFake} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(x.suggestions[0].text, 'external-link-hidden')}</td>
                                                    </tr>                                                        
                                                    <tr>
                                                        <td class="text-blur align-middle py-1 px-2">Malheureusement, il faut payer</td>
                                                        <td class="td-area-chart td-area-chart-blur px-0 align-middle">
                                                            <AreaChart data={dataFake} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(x.suggestions[0].text, 'external-link-hidden')}</td>
                                                    </tr>                                                       
                                                    <tr>
                                                        <td class="text-blur align-middle py-1 px-2">Malheureusement, il faut payer</td>
                                                        <td class="td-area-chart td-area-chart-blur px-0 align-middle">
                                                            <AreaChart data={dataFake} width={400} height={48} style={{ top: '9px' }}>
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
                                                                    activeDot={{ stroke: '#673AB7', strokeWidth: 2 }}
                                                                />
                                                            </AreaChart>
                                                        </td>
                                                        <td class="px-0 align-middle">{this.externalLink(x.suggestions[0].text, 'external-link-hidden')}</td>
                                                    </tr>
                                                </>        
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                                </>
                            );
                        }
                    })}
                </Row>
            </>
        )
    }
}

export default withTranslation()(AFTableTendancies);