import React from 'react';
import { withTranslation } from 'react-i18next';

class Section extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content:""
        }
        this.handleUpdate = this.handleUpdate.bind(this)
    }

    handleUpdate(e){
        this.setState({
            content:e.target.innerHTML
        })
    }
    handleComplete(){
    }
    render() {

        const { t } = this.props;
        
        return (
            <div contentEditable="true" onInput={this.handleUpdate}></div>
        )
    }
}

export default withTranslation()(Section);