import React from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../../store/actions/modal';

const ModalDialog = props => {
    const dispatch = useDispatch();
     
    return (
        <Modal open={props.show} onClose={() => dispatch(closeModal())}  size={props.size}>
            {props.header && <Modal.Header>{props.header}</Modal.Header>}
            <Modal.Content>
                {props.children}
            </Modal.Content>
        </Modal>
    )
}

export default ModalDialog;