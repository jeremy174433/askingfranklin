import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container, Col } from 'react-bootstrap';
import Flag from '../../../assets/img/svg/switch/Flag';
import Sidebar from '../../components/writing-franklin/Sidebar';
import Heading from '../../components/writing-franklin/Heading';
import Wysiwyg from '../../components/writing-franklin/Wysiwyg';
import Onboarding from '../../components/writing-franklin/Onboarding';

class WritingFranklin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentArticleId: null
        }
        this.handleArticleChange = this.handleArticleChange.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
   
    customHeadElement() {
        return (
            <Helmet>
                <title>Generate a new article</title>
                <meta name="description" content="Generate your own article with Asking Franklin tool"/>
                <meta name="robots" content="noindex, follow"/>
            </Helmet>
        );
    }

    handleArticleChange(articleId) {
        this.setState({
            currentArticleId: articleId
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="writingFranklin" className="px-0 mt-6">
                    <div class="d-flex flex-row mb-3"><Flag icon="uk"/><p class="ml-2">Language supporté : Anglais</p></div>
                    <div class="w-100 d-flex flex-column flex-xl-row">
                        <Sidebar handleArticleChange={this.handleArticleChange} className={this.props.bannerIsActive && 'banner-showed'}/>
                        <Col className="block-style overflow-visible mx-auto p-3 w-100">
                            <Heading/>
                            {
                                this.state.currentArticleId ?
                                    <Wysiwyg currentArticle={this.state.currentArticleId}/> 

                                : 
                                    <Onboarding/>
                            }
                        </Col>
                    </div>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(WritingFranklin);