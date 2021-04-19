import React from 'react';
import { withTranslation } from 'react-i18next';

class Onboarding extends React.Component {

    render() {

        const { t } = this.props;
        
        return (
            <div className="block-onboarding mt-5">
                <p>onboarding</p>
            </div>
        )
    }
}

export default withTranslation()(Onboarding);