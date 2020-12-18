import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../sandbox/testModal';
import LoginForm from '../../auth/loginForm';

const ModalManager = (props) => {
   const showModal = useSelector(state => state.modal.show);
   const modalType = useSelector(state => state.modal.modal);
   
   let renderedModal = null;
   if(modalType === 'testModal'){
    renderedModal = <TestModal show={showModal} />       
   }
   else if(modalType === 'loginModal'){
       renderedModal = <LoginForm show={showModal} />
   }
    return renderedModal;
}

export default ModalManager;