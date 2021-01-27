import React from 'react';

export default class Tabs extends React.Component {

    render() {
  
        const customClass = this.props.className && this.props.className;
        const tabStyle = ' pmy-tab d-flex flex-row align-items-center justify-content-center position-relative fw-600 fz-18 ' + customClass;

        return (
            <button 
                type={this.props.type} 
                disabled={this.props.isDisabled} 
                onClick={this.props.onClick}
                style={this.props.style}
                title={this.props.title}
                class={tabStyle}
            >

                {this.props.iconTabBefore && <span class="d-flex align-items-center mr-3">{this.props.iconTabBefore}</span> }
                {this.props.textTab && <span>{this.props.textTab}</span> }

                {this.props.badgeTitle && <span class="pmy-tab-badge position-absolute rounded px-1 fz-12">{this.props.badgeTitle}</span> }
            </button>
        )
    }
}