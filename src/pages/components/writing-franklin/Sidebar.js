import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import PmyBtn from '../button/PmyBtn';
import Add from '../../../assets/img/svg/Add';
import Input from '../form/Input';

const articlesList = [
    { id: 1, title: "comment le seo peut aider votre rédaction de contenu" },
    { id: 2, title: "rédiger pour un article de blog" },
    { id: 3, title: "article non défini" }
]

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nbrArticles: 0,
            currentArticle: 0
        }
        this.handleCreateNewSubject = this.handleCreateNewSubject.bind(this);
        this.handleSelectArticle = this.handleSelectArticle.bind(this);
    }

    handleCreateNewSubject() {
        console.log('create new subject');
    }

    handleSelectArticle(e) {
        var articleIndex = e.target.dataset.key;
        if(this.state.currentArticle !== articleIndex) { 
            this.setState({
                currentArticle: articleIndex
            }, () => {
                console.log('if current = ', this.state.currentArticle);
            });
        } 
        else {
            this.setState({
                currentArticle: 'NOTHING'
            }, () => {
                console.log('else current = ', this.state.currentArticle);
            });
        }
    }

    render() {

        const { t } = this.props;
        const articleClass = ' article-item d-flex flex-row justify-content-between align-items-center p-3';

        return (
            <Col xl="3" className="block-style block-writing-sidebar d-flex d-xl-block flex-column p-0 mr-xl-5 mb-5 mb-xl-0">
                <div class="m-3">
                    <PmyBtn onClick={this.handleCreateNewSubject} type="button" btnIsMediumPmyOutlineLight textBtn="Nouvel article" title="Nouvel article" iconBtnBefore={<Add width="14" fill="#673AB7"/>} className="ml-auto fz-16-index"/>
                    <p class="my-2 text-right"><span>{this.state.nbrArticles}</span> article{this.state.nbrArticles > 1 && 's'}</p>
                    <Input type="search" hideLabel={true} for="filterArticles" placeholder="Rechercher un article..." containerStyle="mb-0 pb-0"/>
                </div>
                <div class="text-left articles-wrapper">
                    {articlesList.map((article, index) => {
                        console.log(index)
                        return (
                            <div onClick={this.handleSelectArticle} data-key={index} key={index} class={this.state.currentArticle === index ? 'article-selected ' + articleClass : articleClass} title={article.title}>
                                <p>{article.title}</p>
                                <span>|</span>
                            </div>
                        ) 
                    })}
                </div>
            </Col>
        )
    }
}

export default withTranslation()(Sidebar);