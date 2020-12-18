import React from 'react';
import ModalDialog from '../ui/modal/ModalDialog';

const TestModal = props => {
    return (
        <ModalDialog size='mini' header='Test Modal' show={props.show}>
            <div>The date is: {props.data}</div>
        </ModalDialog>
    )
}

export default TestModal;