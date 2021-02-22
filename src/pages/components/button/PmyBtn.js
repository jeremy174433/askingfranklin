import React from 'react';

export default class PmyBtn extends React.Component {

    render() {

        const baseDefaultClass = ' d-flex flex-row align-items-center justify-content-center rounded fw-600 fz-18';
        const defaultClass = this.props.className ? this.props.className + baseDefaultClass : baseDefaultClass;

        const defaultPmyOutlineLight = ' pmy-btn pmy-btn-outline-light ';
        const defaultPmyOutlineFull = ' pmy-btn pmy-btn-outline-full ';
        const defaultPmyFull = ' pmy-btn pmy-btn-full color-light ';

        const sizeSmall = ' py-1 px-2 ';
        const sizeMedium = ' py-2 px-4 ';
        const sizeLarge = ' py-3 px-4 px-sm-5 ';

        const smallOutlineFull = sizeSmall + defaultPmyOutlineFull + defaultClass;
        const smallOutlineLight = sizeSmall + defaultPmyOutlineLight + defaultClass;
        const smallFull = sizeSmall + defaultPmyFull + defaultClass;
        const mediumOutlineLight = sizeMedium + defaultPmyOutlineLight + defaultClass;
        const mediumOutlineFull = sizeMedium + defaultPmyOutlineFull + defaultClass;
        const mediumFull = sizeMedium + defaultPmyFull + defaultClass;
        const largeOutlineLight = sizeLarge + defaultPmyOutlineLight + defaultClass;
        const largeOutlineFull = sizeLarge + defaultPmyOutlineFull + defaultClass;
        const largeFull = sizeLarge + defaultPmyFull + defaultClass;

        return (
            <div class={this.props.containerStyle} style={this.props.style}>
                <button 
                    type={this.props.type} 
                    disabled={this.props.isDisabled} 
                    onClick={this.props.onClick}
                    title={this.props.title}
                    class={
                        this.props.btnIsSmallPmyOutlineFull ? smallOutlineFull
                        : this.props.btnIsSmallPmyOutlineLight ? smallOutlineLight
                        : this.props.btnIsSmallPmyFull ? smallFull
                        : this.props.btnIsMediumPmyOutlineLight ? mediumOutlineLight
                        : this.props.btnIsMediumPmyOutlineFull ? mediumOutlineFull
                        : this.props.btnIsMediumPmyFull ? mediumFull
                        : this.props.btnIsLargePmyOutlineLight ? largeOutlineLight
                        : this.props.btnIsLargePmyOutlineFull ? largeOutlineFull
                        : this.props.btnIsLargePmyFull ? largeFull
                        : this.props.customBtnClass ? this.props.customBtnClass + ' p-0 border-0' : 'p-0 border-0'
                    }
                >

                    {/* If link is present on component */}
                    {this.props.redirectTo &&
                        <a 
                            href={this.props.redirectTo} 
                            target={this.props.target}
                            rel={this.props.rel}
                            class={
                                this.props.linkIsSmallPmyOutlineFull ? smallOutlineFull
                                : this.props.linkIsSmallPmyOutlineLight ? smallOutlineLight
                                : this.props.linkIsSmallPmyFull ? smallFull
                                : this.props.linkIsMediumPmyOutlineLight ? mediumOutlineLight
                                : this.props.linkIsMediumPmyOutlineFull ? mediumOutlineFull
                                : this.props.linkIsMediumPmyFull ? mediumFull
                                : this.props.linkIsLargePmyOutlineLight ? largeOutlineLight
                                : this.props.linkIsLargePmyOutlineFull ? largeOutlineFull
                                : this.props.linkIsLargePmyFull ? largeFull
                                : this.props.customLinkClass && this.props.customLinkClass
                            }
                        >
                            {this.props.iconLinkBefore && <span class="d-flex align-items-center mr-3">{this.props.iconLinkBefore}</span> }
                            {this.props.textLink}
                            {this.props.iconLinkAfter && <span class="d-flex align-items-center ml-3">{this.props.iconLinkAfter}</span> }
                        </a>
                    }

                    {this.props.iconBtnBefore && <span class="d-flex align-items-center mr-3">{this.props.iconBtnBefore}</span> }
                    {this.props.textBtn && <span>{this.props.textBtn}</span> }
                    {this.props.iconBtnAfter && <span class="d-flex align-items-center ml-3">{this.props.iconBtnAfter}</span> }

                </button>
            </div>
        )
    }
}