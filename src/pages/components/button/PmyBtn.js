import React from 'react';

export default class PmyBtn extends React.Component {

    render() {

        const defaultClass = this.props.className + ' d-flex flex-row align-items-center justify-content-center rounded fw-600 fz-18 ';

        const defaultPmyOutlineLight = ' pmy-btn pmy-btn-outline-light ';
        const defaultPmyOutlineFull = ' pmy-btn pmy-btn-outline-full ';
        const defaultPmyFull = ' pmy-btn pmy-btn-full color-light ';

        const sizeSmall = ' py-1 px-2 ';
        const sizeMedium = ' py-2 px-4 ';
        const sizeLarge = ' py-3 px-5 ';

        return (
            <div class={this.props.containerStyle}>
                <button 
                    type={this.props.type} 
                    disabled={this.props.isDisabled} 
                    onClick={this.props.onClick}
                    class={
                        this.props.btnIsSmallPmyOutlineFull ? sizeSmall + defaultPmyOutlineFull + defaultClass
                        : this.props.btnIsSmallPmyOutlineLight ? sizeSmall + defaultPmyOutlineLight + defaultClass
                        : this.props.btnIsSmallPmyFull ? sizeSmall + defaultPmyFull + defaultClass
                        : this.props.btnIsMediumPmyOutlineLight ? sizeMedium + defaultPmyOutlineLight + defaultClass
                        : this.props.btnIsMediumPmyOutlineFull ? sizeMedium + defaultPmyOutlineFull + defaultClass
                        : this.props.btnIsMediumPmyFull ? sizeMedium + defaultPmyFull + defaultClass
                        : this.props.btnIsLargePmyOutlineLight ? sizeLarge + defaultPmyOutlineLight + defaultClass
                        : this.props.btnIsLargePmyOutlineFull ? sizeLarge + defaultPmyOutlineFull + defaultClass
                        : this.props.btnIsLargePmyFull ? sizeLarge + defaultPmyFull + defaultClass
                        : this.props.customBtnClass + ' p-0 border-0'
                    }
                >

                    {/* If link is present on component */}
                    {this.props.redirectTo &&
                        <a href={this.props.redirectTo} target={this.props.target}
                        class={
                            this.props.linkIsSmallPmyOutlineFull ? sizeSmall + defaultPmyOutlineFull + defaultClass
                            : this.props.linkIsSmallPmyOutlineLight ? sizeSmall + defaultPmyOutlineLight + defaultClass
                            : this.props.linkIsSmallPmyFull ? sizeSmall + defaultPmyFull + defaultClass
                            : this.props.linkIsMediumPmyOutlineLight ? sizeMedium + defaultPmyOutlineLight + defaultClass
                            : this.props.linkIsMediumPmyOutlineFull ? sizeMedium + defaultPmyOutlineFull + defaultClass
                            : this.props.linkIsMediumPmyFull ? sizeMedium + defaultPmyFull + defaultClass
                            : this.props.linkIsLargePmyOutlineLight ? sizeLarge + defaultPmyOutlineLight + defaultClass
                            : this.props.linkIsLargePmyOutlineFull ? sizeLarge + defaultPmyOutlineFull + defaultClass
                            : this.props.linkIsLargePmyFull ? sizeLarge + defaultPmyFull + defaultClass
                            : null
                        }>
                            {this.props.iconLinkBefore && <span class="mr-3">{this.props.iconLinkBefore}</span> }
                            {this.props.textLink}
                            {this.props.iconLinkAfter && <span class="ml-3">{this.props.iconLinkAfter}</span> }
                        </a>
                    }

                    {this.props.iconBtnBefore && <span class="mr-3">{this.props.iconBtnBefore}</span> }
                    {this.props.textBtn && <span>{this.props.textBtn}</span> }
                    {this.props.iconBtnAfter && <span class="ml-3">{this.props.iconBtnAfter}</span> }

                </button>
            </div>
        )
    }
}