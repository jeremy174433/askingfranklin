import React from 'react';
import Modal from 'react-bootstrap/Modal';
import H2 from '../../elements/title/H2';
import Close from '../../../../assets/img/svg/Close';
import PmyBtn from '../../button/PmyBtn';

export default class LateralModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalShowed: false
        }
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleClickCta = this.handleClickCta.bind(this);
    }

    handleShowModal() {
		this.setState({ 
            modalShowed: true
        });
	}

    handleCloseModal() {
		this.setState({ 
            modalShowed: false
        }, () => {
            this.props.handleModalCloseNoSaved();
        });
    }
    
    handleClickCta() {
        this.props.handleClickCtaBtn();
        this.setState({ 
            modalShowed: false
        });
	}

    render() {
        return (
            <>

                <div onClick={this.handleShowModal} title={this.props.triggerTitle}>{this.props.trigger}</div>

                <Modal show={this.state.modalShowed} onHide={this.handleCloseModal} dialogClassName="lateral-modal" className="d-flex align-items-center justify-content-center h-100 mx-auto my-0">

                    <Modal.Header className="d-flex flex-row align-items-center justify-content-between px-0 pb-3 mx-4">
                        <H2 className="mr-2" title={this.props.modalTitle}/>
                        <div onClick={this.handleCloseModal} aria-label="Fermer" class="state-interaction-element">
                            <Close width="14" fill="#2B2B2B"/>
                        </div>
                    </Modal.Header>

                    <Modal.Body className="px-3 px-lg-4 py-4">{this.props.children}</Modal.Body>
                    
                    <Modal.Footer className="px-0 py-3 mx-4">
                        {this.props.ctaFooterSecondary && <PmyBtn onClick={this.handleCloseModal} id="btnModalSecondary" type="button" btnIsMediumPmyOutlineLight textBtn={this.props.ctaFooterSecondary} containerStyle="mr-sm-3 mb-3 mb-sm-0 w-sm-100" className="w-100"/> }
                        <PmyBtn onClick={this.handleClickCta} id="btnModalPrimary" type="button" btnIsMediumPmyFull textBtn={this.props.ctaFooterPrimary} containerStyle="w-sm-100" className="w-100"/>
                    </Modal.Footer>

                </Modal>

            </>
        )
    }
}