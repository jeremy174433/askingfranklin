import React from 'react';
import PrimaryButton from '../button/PrimaryButton';
import Title from '../elements/title/Title';
import AFDataviz from './AFDataviz';
import AFTable from './AFTable';

export default class AFWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedPanel: 0,
            title: ''
        }
        this.selectFirst = this.selectFirst.bind(this);
        this.selectSecond = this.selectSecond.bind(this);
    }

    componentDidMount() {
        var ret = 'erreur';
        switch (this.props.data.type) {
            case 'questions':
                ret = 'Questions';
                break;
            case 'comparaisons':
                ret = 'Comparaisons';
                break;
            case 'prepositions':
                ret = 'Prépositions';
                break;
            case 'related':
                ret = 'Mots relatifs';
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

    render() {

        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return (
            this.props.data.data.map((x) => x.suggestions.length).reduce(reducer) !== 0 &&
                <div id={this.props.data.type} class="block-wrapper">
                    <div class="asking-franklin-container block-style p-0">
                        <div class="asking-franklin-header px-3 pt-3 mb-5">
                            <div class="d-flex flex-row align-items-center">
                                <Title title={this.state.title}/>
                                <span class="d-block d-lg-none ml-2 mb-3 pb-3 fz-14">({this.props.data.data.map((x) => x.suggestions.length).reduce(reducer)})</span>
                            </div>
                            <div class="d-flex flex-row flex-wrap">
                                <PrimaryButton handleChange={this.selectFirst} isSelected={this.state.selectedPanel === 0 && true} text="Graphique"/>
                                <PrimaryButton handleChange={this.selectSecond} isSelected={this.state.selectedPanel === 1 && true} text="Textuel"/>
                            </div>
                        </div>
                        <div class="asking-franklin-body">
                            {
                                this.state.selectedPanel === 0 ?
                                    <AFDataviz related={this.props.data.type === 'related' ? true : false} keywordSearch={this.props.keywordSearch} data={this.props.data.data}/>
                                :
                                    <AFTable data={this.props.data.data}/>
                            }
                        </div>
                    </div>
                </div>
        )
    }
}