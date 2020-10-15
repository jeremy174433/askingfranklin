import React from 'react';
import { Helmet } from 'react-helmet';
import Loader from '../../components/elements/Loader';
import { Redirect } from 'react-router-dom';
import AFStickyMenu from '../../components/asking-franklin/AFStickyMenu';
import { 
    Container, 
    Col 
} from 'react-bootstrap';
import AFWrapper from '../../components/asking-franklin/AFWrapper';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';
import { refreshTokenFnc } from '../../../utils/refreshToken';

export default class AskingFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            dataKw: [],
            dataIsLoaded: false,
            selectedPanel: 0,
            nbResults: 0,
            keywordSearch: '',
            newKeywordSearch: '',
            redirectBlocked: false,
            redirectLogin: false
        }
        this.switchSelectedPanel = this.switchSelectedPanel.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.requestFanklin = this.requestFanklin.bind(this);
        this.fetchFranklin = this.fetchFranklin.bind(this);
    }

    fetchFranklin(keyword) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const token = localStorage.getItem('af_token');
        var headers = token != null ? { headers: { Authorization: token }} : { headers: {} };
        this.setState({
            isLoading: true,
            dataIsLoaded: false,
            keywordSearch: keyword.replace(/-/g, ' ')
        }, () => {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/suggestions?keyword=' + keyword, headers)
            .then((res) => res.json())
            .then((res) => {
                if (res.blocked) {
                    this.setState({
                        redirectBlocked: true
                    });
                    localStorage.removeItem('af_token');
                }
                else if (res.invalid_token) {
                    refreshTokenFnc(this.fetchFranklin, keyword);
                }
                else {
                    var nbResults = 0;
                    {res.data.map((x, index) => {
                        nbResults += x.data.map((x) => x.suggestions.length).reduce(reducer);
                    })}
                    this.setState({
                        isLoading: false,
                        dataKw: res,
                        nbResults: nbResults,
                        dataIsLoaded: true
                    });
                }
            });
        })
    }

    componentDidMount() {
        this.fetchFranklin(this.props.match.params.keyword);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.keyword !== this.props.match.params.keyword) {
          this.fetchFranklin(this.props.match.params.keyword);
        }
    }

    switchSelectedPanel() {
        this.setState({
            selectedPanel: this.state.selectedPanel === 0 ? 1 : 0
        });
    }

    handleKeywordChange(e) {
        this.setState({
            newKeywordSearch: e.target.value.replace(/-/g, ' ')
        });
    }

    requestFanklin = (e) => {
        e.preventDefault();
        this.props.history.push('/recherche/' + this.state.newKeywordSearch.replace(/ /g, '-'));
    }

    render() {

        const launchNewRequest = <Container className="d-flex flex-column px-0">
                                    <Loader imgNoDataDisplayed content="Aucun résultat trouvé, tentez de lancer une nouvelle recherche avec un mot clé différent"/>
                                    <Col md="12" lg="8" className="mx-auto px-0">
                                        <FormRequestFranklin 
                                            onSubmit={this.requestFanklin} 
                                            onChange={this.handleKeywordChange}
                                            value={this.state.newKeywordSearch} 
                                            keyword={this.state.newKeywordSearch}
                                        />
                                    </Col>
                                </Container>;

        if (this.state.redirectBlocked) {
            return <Redirect to="/limite-de-recherches"/>
        }

        if (this.state.redirectLogin) {
            return <Redirect to="/connexion"/>
        }

        if (this.state.isLoading) {
            return  <div class="layout-style"> 
                        <Helmet>
                            <title>Chargement en cours...</title>
                            <meta name="description" content="Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                            <meta name="robots" content="noindex, follow"/>
                        </Helmet>
                        <Container id="askingFranklin" className="px-0">
                            <Loader loaderDisplayed content="Chargement en cours"/>
                        </Container>
                    </div>
        }

        else if (this.state.nbResults === 0) {
            return  <div class="layout-style"> 
                        <Helmet>
                            <title>Aucun résultat trouvé - Asking Franklin</title>
                            <meta name="description" content="Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                            <meta name="robots" content="noindex, follow"/>
                        </Helmet>
                        <Container id="askingFranklin" className="px-0">
                            <div>{launchNewRequest}</div>
                        </Container>
                    </div>
        }

        else if (this.state.dataIsLoaded) {
            return  <div class="layout-style">
                        <Helmet>
                            <title>{this.state.keywordSearch.charAt(0).toUpperCase() + this.state.keywordSearch.slice(1)} - Asking Franklin</title>
                            <meta name="description" content="Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                            <meta name="robots" content="noindex, follow"/>
                        </Helmet>
                        <Container id="askingFranklin" className="px-0">
                            <main class="d-flex flex-column flex-xl-row">
                                <AFStickyMenu searchContent={this.state.keywordSearch} dataNumber={this.state.dataKw} handleNoData={this.handleNoData}/>
                                <Col className="col-12 col-xl-9 px-0 mb-5 w-100">
                                    {this.state.dataKw.data.map((x) => {
                                        return <AFWrapper keywordSearch={this.state.keywordSearch} data={x}/>
                                    })}
                                </Col>
                            </main>
                        </Container>
                    </div>
        }

        else {
            return  <div class="layout-style">
                        <Helmet>
                            <title>Aucun résultat trouvé - Asking Franklin</title>
                            <meta name="description" content="Asking Franklin, l’outil qui vous permet de découvrir les questions et mots clés liés aux requêtes Google des internautes."/>
                            <meta name="robots" content="noindex, follow"/>
                        </Helmet>
                        <Container id="askingFranklin" className="px-0">
                            <div>{launchNewRequest}</div>
                        </Container>
                    </div>
        }
    }
}