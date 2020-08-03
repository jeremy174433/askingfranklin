import React from 'react';
import Close from '../../../assets/img/svg/Close';

export default class Alert extends React.Component {

    render() {
        return (
            <div id={this.props.alertId} class={this.props.className ? this.props.className + ' alert-msg' : 'alert-msg'}>
                <div class="container px-0 d-flex flex-row align-items-center">
                    <p class="pr-3 mr-auto">{this.props.msg}</p>
                    <div onClick={this.props.onClick} class="close-alert d-flex" title="Masquer">
                        <Close width="16" height="16" fill="#FFF"/>
                    </div>
                </div>
            </div>
        )
    }
}
