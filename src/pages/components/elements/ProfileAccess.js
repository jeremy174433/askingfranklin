import React from 'react';
import { withTranslation } from 'react-i18next';
import PmyBtn from '../button/PmyBtn';
import ArrowDropdown from '../../../assets/img/svg/ArrowDropdown';
import { Link } from 'react-router-dom';
import Settings from '../../../assets/img/svg/navigation/Settings';
import LogOut from '../../../assets/img/svg/navigation/LogOut';

class ProfileAccess extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: this.props.alreadySelected ? true : false
        }
        this.toggleProfileOptions = this.toggleProfileOptions.bind(this);
    }

    toggleProfileOptions() {
        this.setState({
            isOpen: this.state.isOpen ? false : true
        });
    }

    render() {

        const { t } = this.props;

        return (
            <div class="btn-profile-ctn position-relative">
                <PmyBtn onClick={this.toggleProfileOptions} textBtn={t('navbar.account.btn')} btnIsMediumPmyOutlineFull iconBtnAfter={<ArrowDropdown/>} containerStyle={this.state.isOpen ? 'btn-profile-open btn-profile' : 'btn-profile' } />
                <ul class="btn-profile-dropwdown mt-1 py-2 rounded">
                    <li>
                        <Link to="/profil" onClick={this.toggleProfileOptions} class="d-flex flex-row py-2 px-3">
                            <Settings width="16" fill="#2B2B2B"/>
                            <span class="ml-3">{t('navbar.account.settings')}</span>
                        </Link>
                    </li>
                    <li>
                        <Link onClick={this.props.onClickLogOut} class="d-flex flex-row py-2 px-3">
                            <LogOut width="16" fill="#2B2B2B"/>
                            <span class="ml-3">{t('navbar.account.logout')}</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default withTranslation()(ProfileAccess);