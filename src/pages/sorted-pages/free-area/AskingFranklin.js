import React from 'react';
import Loader from '../../components/elements/Loader';
import AFStickyMenu from '../../components/asking-franklin/AFStickyMenu';
import { Col } from 'react-bootstrap';
import AFWrapper from '../../components/asking-franklin/AFWrapper';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';

export default class AskingFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataKw: [],
            dataIsLoaded: false,
            selectedPanel: 0,
            noDataCount: 0
        }
        this.switchSelectedPanel = this.switchSelectedPanel.bind(this);
    }

    componentDidMount() {
        fetch('https://98w123ci8c.execute-api.eu-west-1.amazonaws.com/prod/suggestions?keyword=' + this.props.match.params.keyword)
        .then((res) => res.json())
        .then((res) => {
            this.setState({
                isLoading: false,
                dataKw: res,
                dataIsLoaded: true
            });
        });
    }

    handleNoData(index) {
        this.setState({
            noDataCount: this.state.noDataCount + 1
        });
    }

    switchSelectedPanel() {
        this.setState({
            selectedPanel: this.state.selectedPanel === 0 ? 1 : 0
        });
    }

    render() {
        return (
            <div id="askingFranklin">
                {
                    this.state.noDataCount > 3 ?
                        <div>
                            <Loader imgNoDataDisplayed content="Aucun résultat trouvé, tenter de lancer une nouvelle recherche avec un mot clé différent"/>
                            <FormRequestFranklin onSubmit={this.requestFanklin} onChange={this.handleKeywordChange}/>
                        </div>
                    : this.state.isLoading ?
                        <Loader loaderDisplayed content="Chargement en cours"/>
                    : this.state.dataIsLoaded ?
                        <main class="d-flex flex-column flex-xl-row">
                            <AFStickyMenu
                                searchContent={this.props.match.params.keyword}
                                numberQuestions={this.state.dataKw.data[0].data.length} 
                                numberPrepo={this.state.dataKw.data[1].data.length} 
                                numberCompa={this.state.dataKw.data[2].data.length} 
                                numberRelated={this.state.dataKw.data[3].data.length}
                            />
                            <Col className="col-12 col-xl-9 px-0 mb-5 w-100">
                                {this.state.dataKw.data.map((x) => {
                                    return <AFWrapper keywordSearch={this.props.match.params.keyword} data={x}/>
                                })}
                            </Col>
                        </main>
                    :
                        <div>
                            <Loader imgNoDataDisplayed content="Aucun résultat trouvé, tenter de lancer une nouvelle recherche avec un mot clé différent"/>
                            <FormRequestFranklin onSubmit={this.requestFanklin} onChange={this.handleKeywordChange}/>
                        </div>
                }
            </div>
        )
    }
}