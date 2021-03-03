import React from 'react';
import i18n from '../../../i18n';
import { withTranslation } from 'react-i18next';
import qs from 'qs';
import { Helmet } from 'react-helmet';
import { refreshTokenFnc } from '../../../utils/refreshToken';
import Loader from '../../components/elements/Loader';
import { Redirect } from 'react-router-dom';
import AFStickyMenu from '../../components/asking-franklin/AFStickyMenu';
import { 
    Container, 
    Col 
} from 'react-bootstrap';
import AFWrapper from '../../components/asking-franklin/AFWrapper';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';

const dictionnaryCountry = {
    "fr": {
        "de": "Allemagne",
        "ca": "Canada",
        "es": "Espagne",
        "us": "États-unis",
        "fr": "France",
        "it": "Italie",
        "uk": "Royaume-Uni",
        "ch": "Suisse"
    },
    "en": {
        "ca": "Canada",
        "fr": "France",
        "de": "Germany",
        "it": "Italy",
        "es": "Spain",
        "ch": "Switzerland",
        "uk": "United Kingdom",
        "us": "Unites States"
    }
};

const dictionnaryLanguage = {
    "fr": {
        "de": "Allemand",
        "uk": "Anglais",
        "es": "Espagnol",
        "fr": "Français",
        "it": "Italien"
    },
    "en": {
        "uk": "English",
        "fr": "French",
        "de": "German",
        "it": "Italian",
        "es": "Spanish"
    }
};

class AskingFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectBlocked: false,
            isLoading: true,
            dataKw: [],
            dataIsLoaded: false,
            selectedPanel: 0,
            nbResults: 0,
            keywordSearch: '',
            newKeywordSearch: '',
            currCountry: i18n.t('form.filters.countries.selected'),
            currLanguage: i18n.t('form.filters.languages.selected'),
            countrySearchCode: i18n.t('form.filters.countries.selectedCode'),
            languageSearchCode: i18n.t('form.filters.languages.selectedCode')
        }
        this.fetchFranklin = this.fetchFranklin.bind(this);
        this.switchSelectedPanel = this.switchSelectedPanel.bind(this);
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleLanguageChange = this.handleLanguageChange.bind(this);
        this.requestFanklin = this.requestFanklin.bind(this);
    }

    fetchFranklin(keyword, lang, country) {
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const token = localStorage.getItem('af_token');
        var headers = token != null ? { headers: { Authorization: token }} : { headers: {} };
        this.setState({
            isLoading: true,
            dataIsLoaded: false,
            keywordSearch: keyword.replace(/-/g, ' ')
        }, () => {
            fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/suggestions?keyword=' + keyword + '&lang=' + lang + '&country=' + country, headers)
            .then((res) => res.json())
            .then((res) => {
                if (res.blocked) {
                    this.setState({
                        redirectBlocked: true
                    });
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
        });
    }

    componentDidMount() {
        var params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        this.setState({
            currCountry: dictionnaryCountry[i18n.languages[0]][params.country],
            currLanguage: dictionnaryLanguage[i18n.languages[0]][params.lang]
        });
        this.fetchFranklin(this.props.match.params.keyword, params.lang, params.country);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(prevProps) {
        var params = qs.parse(this.props.location.search, { ignoreQueryPrefix: true })
        if ((prevProps.match.params.keyword !== this.props.match.params.keyword) || (prevProps.match.params.country !== this.props.match.params.country) || (prevProps.match.params.lang !== this.props.match.params.lang)) {
            this.setState({
                currCountry: dictionnaryCountry[i18n.languages[0]][params.country],
                currLanguage: dictionnaryLanguage[i18n.languages[0]][params.lang]
            });
            this.fetchFranklin(this.props.match.params.keyword, params.lang, params.country);
        }
    }

    customHeadElement() {
        return (
            <Helmet>
                <title>{this.state.keywordSearch.charAt(0).toUpperCase() + this.state.keywordSearch.slice(1)} - {i18n.t('projectName')}</title>
                <meta name="description" content={this.props.t('description.resultAF')}/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
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

    handleCountryChange(value) {
        this.setState({
            countrySearchCode: value
        });
    }

    handleLanguageChange(value) {
        this.setState({
            languageSearchCode: value
        });
    }

    requestFanklin = (e) => {
        e.preventDefault();
        this.props.history.push(i18n.t('url.resultAF') + this.state.newKeywordSearch.replace(/ /g, '-') + '?lang=' + this.state.languageSearchCode + '&country=' + this.state.countrySearchCode);
        this.setState({
            newKeywordSearch: ''
        });
        window.location.reload();
    }

    render() {

        const { t } = this.props;

        const launchNewRequest = 
            <Container id="askingFranklin" className="d-flex flex-column px-0">
                <Loader imgNoDataDisplayed content={t('askingFranklin.data.noResult')}/>
                <Col md="12" lg="8" className="mx-auto px-0">
                    <FormRequestFranklin
                        selectedSavedCountry={this.state.currCountry}
                        selectedSavedLanguage={this.state.currLanguage}
                        onSubmit={this.requestFanklin} 
                        onChange={this.handleKeywordChange} 
                        value={this.state.newKeywordSearch} 
                        keyword={this.state.newKeywordSearch}
                        handleLanguageChange={this.handleLanguageChange}
                        handleCountryChange={this.handleCountryChange}
                        hideLabel={true}
                        isDisabled={this.state.newKeywordSearch.length === 0}
                    />
                </Col>
            </Container>;

        if (this.state.redirectBlocked) {
            return <Redirect to={t('url.searchLimit')}/>
        }

        if (this.state.isLoading) {
            return (
                <>
                    {this.customHeadElement()}
                    <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                        <Container id="askingFranklin" className="px-0">
                            <Loader loaderDisplayed content={t('actions.loading')}/>
                        </Container>
                    </div>
                </>
            );
        }

        else if (this.state.nbResults === 0) {
            return (
                <>
                    {this.customHeadElement()}
                    <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                        {launchNewRequest}
                    </div>
                </>
            );
        }

        else if (this.state.dataIsLoaded) {
            return (
                <>
                    {this.customHeadElement()}
                    <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                        <Container id="askingFranklin" className="px-0">
                            <main class="d-flex flex-column flex-xl-row">
                                <AFStickyMenu 
                                    className={this.props.bannerIsActive && 'banner-showed'}
                                    searchContent={this.state.keywordSearch} 
                                    dataNumber={this.state.dataKw} 
                                    handleNoData={this.handleNoData}
                                    onSubmit={this.requestFanklin} 
                                    onChange={this.handleKeywordChange} 
                                    value={this.state.newKeywordSearch} 
                                    keyword={this.state.newKeywordSearch}
                                    isDisabled={this.state.newKeywordSearch.length === 0}
                                    handleCountryChange={this.handleCountryChange}
                                    handleLanguageChange={this.handleLanguageChange}
                                    currCountry={this.state.currCountry}
                                    currLanguage={this.state.currLanguage}
                                    selectedSavedCountry={this.state.currCountry}
                                    selectedSavedLanguage={this.state.currLanguage}
                                />
                                <Col className="block-results col-12 col-xl-9 px-0 mb-5 w-100">
                                    {this.state.dataKw.data.map((x) => {
                                        return <AFWrapper keywordSearch={this.state.keywordSearch} data={x}/>
                                    })}
                                </Col>
                            </main>
                        </Container>
                    </div>
                </>
            );
        }

        else {
            return (
                <>
                    {this.customHeadElement()}
                    <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                        {launchNewRequest}
                    </div> 
                </>
            );
        }
    }
}

export default withTranslation()(AskingFranklin);