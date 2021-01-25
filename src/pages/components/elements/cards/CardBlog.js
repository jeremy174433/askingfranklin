import React from 'react';
import H3 from '../title/H3';
import Clock from '../../../../assets/img/svg/Clock';
import ArrowTextLink from '../link/ArrowTextLink';

export default class CardBlog extends React.Component {

    render() {
        return (
            <>
                <a href={this.props.redirectTo} class="blog-post-item-header d-block overflow-hidden" title={this.props.title}>
                    <img src={this.props.img} alt={this.props.imgAlt} class="img-fluid"/>
                </a>
                <a href={this.props.redirectTo} class="blog-post-item-body">
                    <H3 className="my-2" title={this.props.title}/>
                </a>
                <p class="d-flex align-items-center mb-3">
                    <Clock/>
                    <time class="ml-2 fz-14" datetime={this.props.date}>Le {this.props.date}</time>
                </p>
                <ArrowTextLink href={this.props.redirectTo} textLink="Lire l'article"/>
            </>
        )
    }
}
