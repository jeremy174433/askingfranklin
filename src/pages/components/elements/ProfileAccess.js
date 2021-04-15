import React from 'react';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import PmyBtn from '../button/PmyBtn';
import ArrowDropdown from '../../../assets/img/svg/ArrowDropdown';
import { Link } from 'react-router-dom';
import Settings from '../../../assets/img/svg/navigation/Settings';
import LogOut from '../../../assets/img/svg/navigation/LogOut';
import Account from '../../../assets/img/svg/navigation/Account';
import Pro from '../../../assets/img/svg/switch/Pro';

class ProfileAccess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.alreadySelected ? true : false,
            isConnected: false
        }
        this.toggleProfileOptions = this.toggleProfileOptions.bind(this);
        this.redirectSign = this.redirectSign.bind(this);
    }

    componentDidMount() {
        var token = localStorage.getItem('af_token');
        this.setState({
            isConnected: (token && token.length >= 0) ? true : false
        });
    }

    toggleProfileOptions() {
        this.setState({
            isOpen: this.state.isOpen ? false : true
        });
    }

    redirectSign() {
        window.location.replace(i18n.t('url.signIn'));
    }

    render() {

        const { t } = this.props;

        var token = localStorage.getItem('af_token');

        const containerStyle = ' btn-profile-ctn position-relative ml-auto mr-3 mr-md-0';
        const btnAccountMobile = ' btn-profile state-interaction-element d-flex d-md-none';

        return (
            <div class={this.props.className ? this.props.className + containerStyle : containerStyle}>
                <PmyBtn onClick={this.toggleProfileOptions} textBtn={t('link.account.btn')} btnIsMediumPmyOutlineFull iconBtnAfter={<ArrowDropdown/>} containerStyle={this.state.isOpen ? 'btn-profile-open btn-profile d-none d-md-block' : 'btn-profile d-none d-md-block'}/>
                <div onClick={token && token.length >= 0 ? this.toggleProfileOptions : this.redirectSign} class={this.state.isOpen ? 'btn-profile-open' + btnAccountMobile : btnAccountMobile}>
                    {localStorage.getItem('af_is_sub') >= 1 && <Pro icon="mobile"/>}
                    <Account width="16" fill="#2B2B2B"/>
                </div>
                <ul class="btn-profile-dropwdown mt-1 py-2 rounded">
                    <li>
                        <Link to={t('url.profile')} onClick={this.toggleProfileOptions} class="d-flex flex-row py-2 px-3">
                            <Settings width="16" fill="#2B2B2B"/>
                            <span class="ml-3">{t('link.account.settings')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this.props.onClickLogOut} class="d-flex flex-row py-2 px-3">
                            <LogOut width="16" fill="#2B2B2B"/>
                            <span class="ml-3">{t('link.account.logout')}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withTranslation()(ProfileAccess);