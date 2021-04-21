import React from 'react';
import { withTranslation } from 'react-i18next';
import Section from './Section';

class Wysiwyg extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
        this.handleAddSection = this.handleAddSection.bind(this);
    }

    handleKeyDown(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }

    handleAddSection() {
        console.log('add section');
    }

    render() {

        const { t } = this.props;

        return (
            <div className="block-writing mt-5 pt-3">
                <div contentEditable class="title" data-placeholder="Choisissez un titre pour votre article" aria-label="Choisissez un titre pour votre article" onKeyDown={this.handleKeyDown}></div>
                <Section handleAddSection={this.handleAddSection}/>
            </div>
        )
    }
}

export default withTranslation()(Wysiwyg);