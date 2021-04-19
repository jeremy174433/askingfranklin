import React from 'react';
import { withTranslation } from 'react-i18next';
import PmyBtn from '../button/PmyBtn';

class Section extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: ''
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.generateContent = this.generateContent.bind(this);
    }

    handleUpdate(e) {
        this.setState({
            content: e.target.innerHTML
        });
    }

    generateContent() {
        console.log('generate content');
    }

    render() {

        const { t } = this.props;
        
        return (
            <div class="section">
                <div contentEditable="true" data-placeholder="Ce bloc est encore vide, pour générer du contenu il faut écrire au moins 150 caractères" onInput={this.handleUpdate}></div>
                <PmyBtn onClick={this.generateContent} type="button" btnIsSmallPmyOutlineLight textBtn={["Générer du contenu", <br/>, <span class="fz-16-index">(ou appuyez sur tab)</span>]}/>
            </div>
        )
    }
}

export default withTranslation()(Section);