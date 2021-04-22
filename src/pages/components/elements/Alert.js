import React from 'react';
import i18n from 'i18next';
import Close from '../../../assets/img/svg/Close';

export default class Alert extends React.Component {

    render() {
        return (
            <div id={this.props.alertId} class={this.props.className ? this.props.className + ' alert-msg' : 'alert-msg'}>
                <div class="container px-0 d-flex flex-row align-items-center">
                    <p class={this.props.onClick && 'pr-3 mr-auto'}>{this.props.msg}</p>
                    {this.props.onClick &&
                        <div onClick={this.props.onClick} class="state-interaction-element" title={i18n.t('actions.hide')}>
                            <Close width="16" height="16" fill="#FFF"/>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
