import React from 'react';
import { 
    Container,
    Col
} from 'react-bootstrap';
import VideoHome from '../../../assets/video/VideoHome.mp4';
import H1 from '../../components/elements/title/H1';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';
import { Redirect } from 'react-router-dom';
import BlobRed from '../../../assets/img/png/blob/blob_red.png';
import BlobYellow from '../../../assets/img/png/blob/blob_yellow.png';
import BlobPurple from '../../../assets/img/png/blob/blob_purple.png';
import BlobBlue from '../../../assets/img/png/blob/blob_blue.png';

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
            <Container id="home" className="d-flex flex-column flex-lg-row px-4 py-5 p-md-5 mt-6 block-style position-relative overflow-visible">
                <Col md="12" lg="6" className="mt-0 mb-5 py-0 my-md-5 py-md-5 px-0">
                    <H1 title={['Grâce à l\'IA Franklin ', <br class="d-none d-md-block"/>, 'découvrez les tendances de recherches ', <br class="d-none d-md-block"/>, 'des internautes sur le web ', <br class="d-none d-md-block"/>, 'à propos d\'un terme clé']}/>
                    <FormRequestFranklin 
                        onSubmit={this.requestFanklin} 
                        onChange={this.handleKeywordChange} 
                        value={this.state.keywordSearch} 
                        keyword={this.state.keywordSearch} 
                        isDisabled={this.state.keywordSearch.trim().length <= 1}
                    />
                </Col>
                <Col md="12" lg="6" className="px-0 d-flex align-items-center justify-content-center">
                    <video loop autoPlay muted style={{ width: '100%', height: '100%', backgroundColor: '#FFF' }}>
                        <source src={VideoHome} type="video/mp4"/>
                    </video>
                </Col>
                <img src={BlobRed} class="blob blob-1"/>
                <img src={BlobYellow} class="blob blob-2"/>
                <img src={BlobPurple} class="blob blob-3"/>
                <img src={BlobBlue} class="blob blob-4"/>
            </Container>
        )
    }
}