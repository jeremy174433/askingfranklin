import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import PmyBtn from '../button/PmyBtn';
import Add from '../../../assets/img/svg/Add';
import Input from '../form/Input';
import NoData from '../../../assets/img/svg/illustrations/NoData';
import KebabMenu from '../../../assets/img/svg/KebabMenu';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            nbrArticles: 0,
            currentArticle: null,
            currentOpt: false,
            articles: []
        }
        this.refreshArticles = this.refreshArticles.bind(this);
        this.handleCreateNewSubject = this.handleCreateNewSubject.bind(this);
        this.handleSelectArticle = this.handleSelectArticle.bind(this);
        this.handleMenuSelectArticle = this.handleMenuSelectArticle.bind(this);
        this.duplicateArticle = this.duplicateArticle.bind(this);
        this.exportArticle = this.exportArticle.bind(this);
        this.deleteArticle = this.deleteArticle.bind(this);
    }

    refreshArticles() {
        var token = localStorage.getItem('af_token');
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/articles', {
            headers: {
                'Authorization': token
            },
            method: 'GET',
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.setState({
                articles: res.data
            });
        })       
    }

    componentDidMount() {
        this.refreshArticles();     
    }

    handleCreateNewSubject() {
        var token = localStorage.getItem('af_token');
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/articles/create', {
            headers: {
                'Authorization': token
            },
            method: 'POST',
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.refreshArticles();
        })
    }
    
    handleSelectArticle(e) {
        var idArticle = parseInt(e.target.dataset.key);
        this.setState({
            currentArticle: idArticle
        }, () => {
            this.props.handleArticleChange(idArticle);
        });
    }

    handleMenuSelectArticle(e) {
        e.stopPropagation();
        this.setState({
            currentOpt: parseInt(e.target.dataset.key)
        });
    }

    duplicateArticle() {
        console.log('duplicate article');
    }

    exportArticle() {
        console.log('export article');
    }

    deleteArticle(e) {
        var token = localStorage.getItem('af_token');
        fetch('https://te3t29re5k.execute-api.eu-west-1.amazonaws.com/dev/askingfranklin/articles/' + e.target.dataset.id + '/delete', {
            headers: {
                'Authorization': token
            },
            method: 'GET',
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            this.refreshArticles();
        })
    }

    render() {

        const { t } = this.props;
        const containerClass = ' block-style position-sticky d-flex d-xl-block flex-column h-100 p-0 mr-xl-5 mb-5 mb-xl-0';
        const articleClass = ' article-item d-flex flex-row justify-content-between align-items-center p-3';
        const articleOpt = ' article-submenu position-absolute flex-column py-2 rounded';

        return (
            <Col xl="3" id="stickyMenu" className={this.props.className ? this.props.className + containerClass : containerClass}>
                <div class="m-3">
                    <PmyBtn onClick={this.handleCreateNewSubject} type="button" btnIsMediumPmyOutlineLight textBtn="Créer un article" title="Créer un article" iconBtnBefore={<Add width="14" fill="#673AB7"/>} className="ml-auto fz-16-index"/>
                    <p class="my-3 text-right"><span>{this.state.articles.length}</span> article{this.state.articles.length > 1 && 's'}</p>
                    <Input type="search" hideLabel={true} for="filterArticles" placeholder="Rechercher un article..." containerStyle="mb-0 pb-0"/>
                </div>
                <div class="text-left articles-wrapper">
                    {this.state.articles.map((article, index) => {
                        return (
                            <div 
                                onClick={this.handleSelectArticle} 
                                data-key={article[0]}
                                key={index} 
                                class={this.state.currentArticle === article[0] ? 'article-selected' + articleClass : articleClass}
                                title={article.title}
                            >
                                {
                                    article.title ? 
                                        <div class="d-flex flex-column w-100 mr-3 overflow-hidden pointer-events-none">
                                            <p>{article.title}</p>
                                            <p class="fz-14">863 mots</p>
                                        </div> 
                                    :
                                        <div class="d-flex flex-column w-100 mr-3 overflow-hidden pointer-events-none">
                                            <p>Untitled</p>
                                            <p class="fz-14">0 mots</p>
                                        </div>
                                }
                                <div onClick={this.handleMenuSelectArticle} onBlur={this.handleMenuSelectArticle} tabIndex={0} data-key={article[0]} class="article-menu">
                                    <KebabMenu/>
                                    <ul class={this.state.currentOpt === article[0] ? 'd-flex' + articleOpt : 'd-none' + articleOpt}>
                                        <li data-id={article[0]} onClick={this.duplicateArticle}>Dupliquer</li>
                                        <li data-id={article[0]} onClick={this.exportArticle}>Exporter</li>
                                        <li data-id={article[0]} onClick={this.deleteArticle}>Supprimer</li>
                                    </ul>
                                </div>
                            </div>
                        ); 
                    })}
                    {this.state.articles.length === 0 && 
                        <div class="m-3 text-center">
                            <p class="mb-4 fz-18">Aucun article trouvé</p>
                            <NoData/>
                        </div>
                    }
                </div>
            </Col>
        )
    }
}

export default withTranslation()(Sidebar);