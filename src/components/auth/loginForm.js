import { Form, Formik } from 'formik';
import React from 'react';
import ModalDialog from '../ui/modal/ModalDialog';
import * as Yup from 'yup';
import MyTextInput from '../ui/form/myTextInput';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { signInUser } from '../../store/actions/auth';
import { closeModal } from '../../store/actions/modal';

const LoginForm = props => {
    const dispatch = useDispatch();

    return (
        <ModalDialog size="mini" show={props.show} header="Login to Re-vents">
            <Formik initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string().required().email(),
                        password: Yup.string().required()
                    })}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(signInUser(values));   
                        setSubmitting(false);
                        dispatch(closeModal())
                    }}
            >
                {({isSubmitting, isValid, dirty}) => (
                    <Form className='ui form'>
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
                    </Form>
                )}
            </Formik>
        </ModalDialog>
    )
}

export default LoginForm;