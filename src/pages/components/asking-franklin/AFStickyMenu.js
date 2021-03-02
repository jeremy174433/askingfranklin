import React from 'react';
import { withTranslation } from 'react-i18next';
import { Col } from 'react-bootstrap';
import H1 from '../elements/title/H1';
import Scrollspy from 'react-scrollspy';
import AFStickyMenuList from './AFStickyMenuList';
import { CSVLink } from 'react-csv';
import PmyBtn from '../button/PmyBtn';
import FeaturesIcons from '../../../assets/img/svg/switch/FeaturesIcons';
import FormRequestFranklin from '../../components/form/FormRequestFranklin';

class AFStickyMenu extends React.Component {

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

        const { t } = this.props;
        const reducer = (accumulator, currentValue) => accumulator + currentValue;

        return ( 
            <Col sm="12" xl="3" className="d-flex d-xl-block flex-column p-0 mr-xl-5 mt-6">
                <CSVLink data={this.exportCSV()} filename={this.props.searchContent + "_AskingFranklin.csv"} className="d-flex d-xl-block order-2 order-xl-1 mt-4 mt-xl-0 text-decoration-none">
                    <PmyBtn type="button" btnIsMediumPmyOutlineFull textBtn={t('askingFranklin.menu.csvExport')} title={t('titleElementBrowser.askingFranklin.csvExport')} iconBtnBefore={<FeaturesIcons icon="download"/>} className="w-100 fz-16-index"/>
                </CSVLink>
                <section id="stickyMenu" class={this.props.className ? this.props.className + ' mt-0 mt-xl-4 position-sticky' : 'mt-0 mt-xl-4 position-sticky'}>
                    <div class="block-style p-0">
                        <div class="sticky-menu-header p-3 bgc-primary color-light">
                            <H1 className="mb-2" title={this.props.searchContent}/>
                            <p class="fz-14">{t('askingFranklin.menu.infosResearch.country')} : <span class="fw-600">{this.props.currCountry}</span></p>
                            <p class="fz-14">{t('askingFranklin.menu.infosResearch.lang')} : <span class="fw-600">{this.props.currLanguage}</span></p>
                        </div>
                        <div class="sticky-menu-body bg-white d-flex flex-column py-3">
                            <Scrollspy items={['questions', 'comparaisons', 'prepositions', 'related']} currentClassName="nav-link-style-active">
                                {this.props.dataNumber.data.map((x, index) => {
                                    var volume = x.data.map((x) => x.suggestions.length).reduce(reducer);
                                    return (
                                        <li>
                                            <AFStickyMenuList volume={volume} text={x.type}/>
                                        </li>
                                    );
                                })}
                            </Scrollspy>
                        </div>
                    </div>
                    <FormRequestFranklin
                        selectedSavedCountry={this.props.selectedSavedCountry}
                        selectedSavedLanguage={this.props.selectedSavedLanguage}
                        onSubmit={this.props.onSubmit} 
                        onChange={this.props.onChange} 
                        handleLanguageChange={this.props.handleLanguageChange}
                        handleCountryChange={this.props.handleCountryChange}
                        formOptionsResultsPage={true}
                        value={this.props.value}
                        label={t('form.label.newSearch')}
                        isDisabled={this.props.isDisabled}
                        containerStyle="submit-form-new-search d-flex align-items-end"
                        containerFormStyle="overflow-visible block-style bgc-light p-3 mt-4"
                        className="sticky-menu-new-search"
                    />
                </section>
            </Col>
        )
    }
}
export default withTranslation()(AFStickyMenu);