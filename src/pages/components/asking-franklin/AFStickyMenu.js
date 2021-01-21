import React from 'react';
import { Col } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import AFStickyMenuList from './AFStickyMenuList';
import { CSVLink } from 'react-csv';
import PmyBtn from '../button/PmyBtn';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';
import FormRequestFranklin from '../../components/form/FormRequestFranklin'

export default class AFStickyMenu extends React.Component {

    exportCSV() {
        var data = [["Type","Prepositions","Suggestions"]];

        for(var x = 0; x < this.props.dataNumber.data.length; x++) {
            for(var i = 0; i < this.props.dataNumber.data[x].data.length; i++) {
                for(var j = 0; j < this.props.dataNumber.data[x].data[i].suggestions.length; j++) {
                    var to_push = [this.props.dataNumber.data[x].type, this.props.dataNumber.data[0].data[i].word, this.props.dataNumber.data[0].data[i].suggestions[j]];
                    data.push(to_push);
                }
            }
        }
        return data;
    }

    render() {

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        const classStickyMenu = ' col-12 col-xl-3 position-sticky p-0 mr-xl-5';

        return ( 
            <Col id="stickyMenu" className={this.props.className ? this.props.className + classStickyMenu : classStickyMenu}>
                <section class="block-style p-0">
                    <div class="sticky-menu-header d-flex align-items-center p-3 bgc-primary">
                        <h1 class="color-light fz-18 fw-600">{this.props.searchContent}</h1>
                    </div>
                    <div class="sticky-menu-body bg-white d-flex flex-column py-4">
                        <Scrollspy items={['questions', 'comparaisons', 'prepositions', 'related']} currentClassName="nav-link-style-active">
                            {this.props.dataNumber.data.map((x, index) => {
                                var volume = x.data.map((x) => x.suggestions.length).reduce(reducer);
                                return <AFStickyMenuList volume={volume} text={x.type}/>
                            })}
                        </Scrollspy>
                    </div>
                    <div class="sticky-menu-footer pb-3 px-3">
                        <CSVLink data={this.exportCSV()} filename={this.props.searchContent + "_AskingFranklin.csv"} className="text-decoration-none">
                            <PmyBtn type="button" btnIsMediumPmyOutlineFull textBtn="Exporter en CSV" title="Exporter en CSV" iconBtnBefore={<FeaturesIcons icon="file"/>}/>
                        </CSVLink>
                    </div>
                </section>
                <FormRequestFranklin
                    onSubmit={this.props.onSubmit} 
                    onChange={this.props.onChange} 
                    value={this.props.value}
                    label="Nouvelle recherche"
                    isDisabled={this.props.isDisabled}
                    containerStyle="submit-form-new-search d-flex align-items-end"
                    className="sticky-menu-new-search block-style p-3"
                />
            </Col>
        )
    }
}