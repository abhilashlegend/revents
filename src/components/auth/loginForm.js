import { Form, Formik } from 'formik';
import React from 'react';
import ModalDialog from '../ui/modal/ModalDialog';
import * as Yup from 'yup';
import MyTextInput from '../ui/form/myTextInput';
import { Button, Divider, Label } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { closeModal } from '../../store/actions/modal';
import { signInWithEmail } from '../../firestore/firebaseService';
import SocialLogin from './socialLogin';

const LoginForm = props => {
    const dispatch = useDispatch();

    return (
        <ModalDialog size="mini" show={props.show} header="Login to Re-vents">
            <Formik initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string().required().email(),
                        password: Yup.string().required()
                    })}
                    onSubmit={async (values, {setSubmitting, setErrors}) => {
                        try {
                            await signInWithEmail(values);   
                            setSubmitting(false);
                            dispatch(closeModal());
                        } catch (error) {
                            setSubmitting(false);
                            setErrors({auth: error.message});
                        }
                        
                    }}
            >
                {({isSubmitting, isValid, dirty, errors}) => (
                    <Form className='ui form'>
                         {errors.auth ? <Label color='red' style={{marginBottom: '15px'}} content={ "Problem with username or password" } /> : null}
                        <MyTextInput name='email' placeholder='Email Address' />
                        <MyTextInput name='password' placeholder='Password' type='password' />
                        <Button
                            loading={isSubmitting}
                            disabled={!isValid || !dirty || isSubmitting}
                            type='submit'
                            fluid
                            size='large'
                            color='teal'
                            content='Login'
                        />

                        <Divider horizontal>OR</Divider>

                        <SocialLogin />
                    </Form>
                )}
            </Formik>
        </ModalDialog>
    )
}

export default LoginForm;