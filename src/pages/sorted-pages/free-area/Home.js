import React from 'react';
import { 
    Container,
    Col
} from 'react-bootstrap';
import H1 from '../../components/elements/title/H1';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';
import { Redirect } from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keywordSearch: '',
            redirect: false
        }
        this.handleKeywordChange = this.handleKeywordChange.bind(this);
        this.requestFanklin = this.requestFanklin.bind(this);
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

        if(this.state.redirect) {
            return <Redirect to={'/recherche/' + this.state.keywordSearch}/>
        }

        return (
            <Container id="home" className="px-0 pt-5 mt-5">
                <Col xl="6" className="mt-5">
                    <p class="mb-4">Une nouvelle expérience...</p>
                    <H1 title={['Découvrez maintenant les tendances de', <br/>, 'recherches des internautes sur le web', <br/>, 'à propos d\'un terme clé']}/>
                    <FormRequestFranklin onSubmit={this.requestFanklin} onChange={this.handleKeywordChange} value={this.state.keywordSearch} keyword={this.state.keywordSearch}/>
                </Col>
            </Container>
        )
    }
}