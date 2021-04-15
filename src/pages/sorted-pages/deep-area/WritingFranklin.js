import React from 'react';
import { withTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Sidebar from '../../components/writing-franklin/Sidebar';
import Wysiwyg from '../../components/writing-franklin/Wysiwyg';

class CreateArticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
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

    render() {

        const { t } = this.props;

        return (
            <div class={this.props.bannerIsActive ? 'layout-style-banner' : 'layout-style'}>
                {this.customHeadElement()}
                <Container id="writingFranklin" className="px-0 mt-6 w-100 text-center d-flex flex-column flex-xl-row">
                    <Sidebar/>
                    <Wysiwyg/>
                </Container>
            </div>
        )
    }
}

export default withTranslation()(CreateArticle);