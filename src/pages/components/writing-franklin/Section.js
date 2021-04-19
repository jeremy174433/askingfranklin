import React from 'react';
import { withTranslation } from 'react-i18next';
import PmyBtn from '../button/PmyBtn';

class Section extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content: '',
            minLength: 150
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
                <div class="d-flex flex-row justify-content-between">
                    <PmyBtn onClick={this.generateContent} type="button" isDisabled={this.state.content.length < this.state.minLength} btnIsSmallPmyFull textBtn={["Générer du contenu", <br/>, <span class="fz-16-index">(ou appuyez sur tab)</span>]}/>
                    {this.state.content.length < this.state.minLength && 
                        <p class="fz-14">Saisissez au moins {this.state.minLength - this.state.content.length} caractères</p>
                    }
                </div>
            </div>
        )
    }
}

export default withTranslation()(Section);