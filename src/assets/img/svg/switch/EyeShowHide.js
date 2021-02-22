import React from 'react';
import { withTranslation } from 'react-i18next';

class EyeShowHide extends React.Component {

    render() {

        const { t } = this.props;

        switch(this.props.icon) {

            case 'hide':
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.99 19" width={this.props.width} height={this.props.height} fill="#2B2B2B">
                            <title>{t('actions.hide')}</title>
                            <path d="M12,7a5,5,0,0,1,5,5,4.853,4.853,0,0,1-.36,1.83l2.92,2.92A11.817,11.817,0,0,0,22.99,12a11.827,11.827,0,0,0-11-7.5,11.645,11.645,0,0,0-3.98.7l2.16,2.16A4.853,4.853,0,0,1,12,7ZM2,4.27,4.28,6.55l.46.46A11.8,11.8,0,0,0,1,12a11.822,11.822,0,0,0,15.38,6.66l.42.42L19.73,22,21,20.73,3.27,3ZM7.53,9.8l1.55,1.55A2.821,2.821,0,0,0,9,12a3,3,0,0,0,3,3,2.821,2.821,0,0,0,.65-.08l1.55,1.55A4.967,4.967,0,0,1,7.53,9.8Zm4.31-.78,3.15,3.15.02-.16a3,3,0,0,0-3-3Z" transform="translate(-1 -3)"/>
                        </svg>

            default:
                // show
                return  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 15" width={this.props.width} height={this.props.height} fill="#2B2B2B">
                            <title>{t('actions.show')}</title>
                            <path d="M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z" transform="translate(-1 -4.5)"/>
                        </svg>
        }   

    }
}

export default withTranslation()(EyeShowHide);