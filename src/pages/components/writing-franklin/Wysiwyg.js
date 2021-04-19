import React from 'react';
import { withTranslation } from 'react-i18next';
import Section from './Section';

class Wysiwyg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    handleKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }

    render() {

        const { t } = this.props;

        return (
            <div className="block-writing mt-5">
                <div contentEditable class="title" data-placeholder="Choisissez un titre pour votre article" onKeyDown={this.handleKeyDown}></div>
                <Section/>
            </div>
        )
    }
}

export default withTranslation()(Wysiwyg);