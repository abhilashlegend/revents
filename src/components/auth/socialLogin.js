import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { socialLogin } from '../../firestore/firebaseService';
import { closeModal } from '../../store/actions/modal';

const SocialLogin = () => {
    const dispatch = useDispatch();

    const socialLoginHandler = provider => {
        dispatch(closeModal());
        socialLogin(provider);
    }

    return (
        <>
            <Button icon='facebook' fluid onClick={() => { socialLoginHandler('facebook')}} color='facebook' style={{marginBottom: '15px'}} content='Login with facebook' />
            <Button icon='google' onClick={() => { socialLoginHandler('google')}} fluid color='google plus' content='Login with google' />
        </>
    )
}

export default SocialLogin;