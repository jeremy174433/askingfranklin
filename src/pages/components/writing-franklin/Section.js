import React from 'react';
import { withTranslation } from 'react-i18next';
import KebabMenu from '../../../assets/img/svg/KebabMenu';
import PmyBtn from '../button/PmyBtn';

class Section extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tagParamIsOpen: false,
            content: '',
            minLength: 150
        }
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleMenuSetTag = this.handleMenuSetTag.bind(this);
        this.setH2 = this.setH2.bind(this);
        this.setH3 = this.setH3.bind(this);
        this.setText = this.setText.bind(this);
        this.generateContent = this.generateContent.bind(this);
    }

    handleUpdate(e) {
        this.setState({
            content: e.target.textContent
        });
    }

    handleMenuSetTag() {
        this.setState({
            tagParamIsOpen: !this.state.tagParamIsOpen ? true : false
        });
    }

    setH2() {
        console.log('set h2');
    }

    setH3() {
        console.log('set h3');
    }

    setText() {
        console.log('set text');
    }

    generateContent() {
        console.log('generate content');
    }

    render() {

        const { t } = this.props;
        const tagOpt = ' article-menu-tag position-absolute flex-column py-2 rounded';
        
        return (
            <div class="section">
                <div class="d-flex flex-row">
                    <div contentEditable="true" onInput={this.handleUpdate} class="w-100 mr-2" data-placeholder="Ce bloc est encore vide, pour générer du contenu il faut écrire au moins 150 caractères" aria-label="Ce bloc est encore vide, pour générer du contenu il faut écrire au moins 150 caractères"></div>
                    <div onFocus={this.handleMenuSetTag} onBlur={this.handleMenuSetTag} tabIndex={0} class="state-interaction-element">
                        <KebabMenu/>
                        <ul class={this.state.tagParamIsOpen ? 'd-flex' + tagOpt : 'd-none' + tagOpt}>
                            <li data-type="h2" onClick={this.setH2}>H2</li>
                            <li data-type="h3" onClick={this.setH3}>H3</li>
                            <li data-type="text" onClick={this.setText}>Texte</li>
                        </ul>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <PmyBtn onClick={this.generateContent} type="button" isDisabled={this.state.content.length < this.state.minLength} btnIsSmallPmyFull textBtn={["Générer du contenu", <br/>, <span class="fz-16-index">(ou appuyez sur tab)</span>]}/>
                    {this.state.content.length < this.state.minLength && 
                        <p class="ml-3 fz-14">Saisissez au moins {this.state.minLength - this.state.content.length} caractères</p>
                    }
                </div>
                <div class="add-section mt-3">
                    <div onClick={this.props.handleAddSection} class="state-interaction-element mx-auto fz-32" title="Ajouter un bloc">+</div>
                </div>
            </div>
        )
    }
}

export default withTranslation()(Section);