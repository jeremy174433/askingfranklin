import React from 'react';
import Tabs from '../button/Tabs';
import PmyBtn from '../button/PmyBtn';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';
import H4 from '../elements/title/H4';
import AFDataviz from './AFDataviz';
import AFTable from './AFTable';
import AFTableTendancies from './AFTableTendancies';
import * as d3ToPng from 'd3-svg-to-png'
import { withTranslation } from 'react-i18next';

class AFWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPanel: 0,
            title: ''
        }
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
        this.selectThird = this.selectThird.bind(this);
        this.handleExportPng = this.handleExportPng.bind(this);
    }

    componentDidMount() {
        var ret = this.props.t('askingFranklin.menu.categories.error');
        switch (this.props.data.type) {
            case 'questions':
                ret = this.props.t('askingFranklin.menu.categories.questions');
                break;
            case 'comparaisons':
                ret = this.props.t('askingFranklin.menu.categories.comparaisons');
                break;
            case 'prepositions':
                ret = this.props.t('askingFranklin.menu.categories.prepo');
                break;
            case 'related':
                ret = this.props.t('askingFranklin.menu.categories.related');
                break;
            default:
                ret = ret;
        }
        this.setState({
            title: ret
        });
    }

    selectFirst() {
        this.setState({
            selectedPanel: 0
        });
    }

    selectSecond() {
        this.setState({
            selectedPanel: 1
        });
    }

    selectThird() {
        this.setState({
            selectedPanel: 2
        });
    }

    handleExportPng() {
        var svg = document.querySelector('#' + 'dataviz-' + this.props.data.type + ' svg');
        var g = document.querySelector('#' + 'dataviz-' + this.props.data.type + ' svg g');
        svg.setAttribute('width', '1000');
        svg.setAttribute('height', '1000');
        g.setAttribute('transform', 'translate(500, 500)');
        d3ToPng('#' + 'dataviz-' + this.props.data.type + ' svg', 'askingfranklin-' + this.props.data.type, {scale: 1});
        svg.setAttribute('width', '700');
        svg.setAttribute('height', '700');
        g.setAttribute('transform', 'translate(350, 350)');
    }
    
    render() {

        const { t } = this.props;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return (
            this.props.data.data.map((x) => x.suggestions.length).reduce(reducer) !== 0 &&
                <div id={this.props.data.type} class="block-wrapper">
                    <div class="asking-franklin-container block-style p-0">
                        <div class="asking-franklin-header px-3 pt-3 mb-5">
                            <div class="d-flex flex-row align-items-center">
                                <H4 className="pb-3 mb-3 fw-600" title={this.state.title}/>
                                <span class="d-block d-lg-none ml-2 mb-3 pb-3 fz-14">({this.props.data.data.map((x) => x.suggestions.length).reduce(reducer)})</span>
                            </div>
                            <div class="d-flex flex-column flex-md-row align-items-md-center justify-content-between">
                                <div class="tabs-container d-flex flex-row position-relative w-100">
                                    <Tabs onClick={this.selectFirst} isDisabled={this.state.selectedPanel === 0} textTab={t('askingFranklin.tabs.graph')} title={t('askingFranklin.tabs.graph')} className={this.state.selectedPanel === 0 && 'pmy-tab-selected'}/>
                                    <Tabs onClick={this.selectSecond} isDisabled={this.state.selectedPanel === 1} textTab={t('askingFranklin.tabs.table')} title={t('askingFranklin.tabs.table')} className={this.state.selectedPanel === 1 && 'pmy-tab-selected'}/>
                                    <Tabs onClick={this.selectThird} isDisabled={this.state.selectedPanel === 2 || this.props.trendsIsLoading} textTab={t('askingFranklin.tabs.trends')} title={!this.props.trendsIsLoading ? t('actions.loading') : t('askingFranklin.tabs.trends')} iconTabBefore={this.props.trendsIsLoading && <div class="spinner"></div>} badgeTitle="New" className={this.state.selectedPanel === 2 && 'pmy-tab-selected'}/>
                                </div>
                                {this.state.selectedPanel === 0 && <PmyBtn onClick={this.handleExportPng} type="button" btnIsMediumPmyOutlineFull textBtn={t('askingFranklin.data.pngExport')} title={t('titleElementBrowser.askingFranklin.pngExport')} iconBtnBefore={<FeaturesIcons icon="download"/>} containerStyle="btn-export-to-png position-relative mt-5 mt-md-0" className="fz-16-index"/> }
                            </div>
                        </div>
                        <div class="asking-franklin-body">
                            {
                                this.state.selectedPanel === 0 ?
                                    <AFDataviz ref={this.componentRef} idSvg={'dataviz-' + this.props.data.type} related={this.props.data.type === 'related' ? true : false} keywordSearch={this.props.keywordSearch} data={this.props.data.data} dataTendencies={this.props.dataTrends[this.props.idx]}/>
                                
                                : this.state.selectedPanel === 1 ?
                                    <AFTable data={this.props.data.data}/>

                                : this.state.selectedPanel === 2 &&
                                    <AFTableTendancies data={this.props.dataTrends[this.props.idx]}/>
                            }
                        </div>
                    </div>
                </div>
        )
    }
}

export default withTranslation()(AFWrapper);