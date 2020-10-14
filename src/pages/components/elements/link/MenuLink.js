import React from 'react';
import { Link } from 'react-router-dom';

export default class MenuLink extends React.Component {

    render() {
        return (
            <li onClick={this.props.onClick} class={this.props.containerStyle} style={this.props.style}>
                {
                    this.props.redirectTo ?
                        <Link to={this.props.redirectTo} class={this.props.linkLocation ? this.props.linkLocation : 'nav-link'} target={this.props.target} rel={this.props.rel} title={this.props.title}>
                            {this.props.linkHasIcon && <span class="mr-3">{this.props.linkHasIcon}</span> }
                            {this.props.textLink && <span>{this.props.textLink}</span> }
                        </Link>
                    : this.props.href ?
                        <a href={this.props.href} class={this.props.linkLocation ? this.props.linkLocation : 'nav-link'} target={this.props.target} rel={this.props.rel} title={this.props.title}>
                            {this.props.linkHasIcon && <span class={this.props.className ? this.props.className : 'mr-3'}>{this.props.linkHasIcon}</span> }
                            {this.props.textLink && <span>{this.props.textLink}</span> }
                        </a>
                    :
                        <span>{this.props.customMenuItem && <span>{this.props.customMenuItem}</span> }</span>
                }
            </li>
        )
    }
}