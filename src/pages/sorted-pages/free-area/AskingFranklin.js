import React from 'react';
import Loader from '../../components/elements/Loader';
import AFStickyMenu from '../../components/asking-franklin/AFStickyMenu';
import { 
    Container, 
    Col 
} from 'react-bootstrap';
import AFWrapper from '../../components/asking-franklin/AFWrapper';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';
import { Redirect } from 'react-router-dom';

export default class AskingFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataKw: [],
            dataIsLoaded: false,
            selectedPanel: 0,
            nbResults: 0,
            keywordSearch: ''
        }
        this.switchSelectedPanel = this.switchSelectedPanel.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.requestFanklin = this.requestFanklin.bind(this);
    }

    componentDidMount() {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        fetch('https://98w123ci8c.execute-api.eu-west-1.amazonaws.com/prod/suggestions?keyword=' + this.props.match.params.keyword)
        .then((res) => res.json())
        .then((res) => {
            var nbResults = 0;
            {res.data.map((x, index) => {
                nbResults += x.data.map((x) => x.suggestions.length).reduce(reducer);
            })}
            this.setState({
                isLoading: false,
                dataKw: res,
                nbResults: nbResults,
                dataIsLoaded: true
            }, () => { console.log(res.data); });
        });
    }

    switchSelectedPanel() {
        this.setState({
            selectedPanel: this.state.selectedPanel === 0 ? 1 : 0
        });
    }

    handleKeywordChange(e) {
        this.setState({
            keywordSearch: e.target.value
        });
    }

    requestFanklin = () => {
        this.setState({
            redirect: true
        });
    }

    render() {
        const launchNewRequest = <Container className="d-flex flex-column px-0">
                                    <Loader imgNoDataDisplayed content="Aucun résultat trouvé, tenter de lancer une nouvelle recherche avec un mot clé différent"/>
                                    <Col md="12" lg="8" className="mx-auto px-0">
                                        <FormRequestFranklin 
                                            onSubmit={this.requestFanklin} 
                                            onChange={this.handleKeywordChange}
                                            value={this.state.keywordSearch} 
                                            keyword={this.state.keywordSearch} 
                                            isDisabled={this.state.keywordSearch.length <= 1}
                                        />
                                    </Col>
                                </Container>;
    
        if(this.state.redirect) {
            return <Redirect to={'/recherche/' + this.state.keywordSearch}/>
        }

        if(this.state.isLoading) {
            return  <div id="askingFranklin">
                        <Loader loaderDisplayed content="Chargement en cours"/>
                    </div>
        }
        else if(this.state.nbResults === 0) {
            return  <div id="askingFranklin">
                        <div>{launchNewRequest}</div>
                    </div>
        }
        else if(this.state.dataIsLoaded) {
            return  <div id="askingFranklin">
                        <main class="d-flex flex-column flex-xl-row">
                            <AFStickyMenu searchContent={this.props.match.params.keyword} dataNumber={this.state.dataKw} handleNoData={this.handleNoData}/>
                            <Col className="col-12 col-xl-9 px-0 mb-5 w-100">
                                {this.state.dataKw.data.map((x) => {
                                    return <AFWrapper keywordSearch={this.props.match.params.keyword} data={x}/>
                                })}
                            </Col>
                        </main>
                    </div>
        }
        else {
            return  <div id="askingFranklin">
                        <div>{launchNewRequest}</div>
                    </div>
        }
    }
}