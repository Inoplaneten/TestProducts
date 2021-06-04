import React from 'react';
import { connect } from 'react-redux';
import { ModalBox } from './ModalBox';
import { ModalWindow } from './ModalWindow/ModalWindow';
import { ModalContent } from './ModalWindow/ModalContent/ModalContent';
import { setHiddenModal } from './../../redux/actions/action';

const ModalThxBoxContainer = ({modalThx, setHiddenModal}) => {
    return (
        <ModalBox 
            isActive={modalThx.isActive}
            onClick={() => setHiddenModal(modalThx.name)}
        >
            <ModalWindow 
                onClick={e => e.stopPropagation()} 
                closeModal={() => setHiddenModal(modalThx.name)}
            >
                <ModalContent>
                    <p>
                        Thank you for the order!
                    </p>
                    <p>
                        We will contact you shortly!
                    </p>
                </ModalContent>
            </ModalWindow>
        </ModalBox>
    )
}

const mapStateToProps = state => ({
    modalThx: {
        name: state.modals.modalThx.name,
        isActive: state.modals.modalThx.isActive
    }
})

export default connect(mapStateToProps, { setHiddenModal })(ModalThxBoxContainer);