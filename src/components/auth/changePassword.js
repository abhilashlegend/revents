import { Form, Formik } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Divider, Header, Label, Segment } from 'semantic-ui-react';
import * as Yup from 'yup';
import { updatePassword } from '../../firestore/firebaseService';
import MyTextInput from '../ui/form/myTextInput';

const ChangePassword = props => {
    const auth = useSelector(state => state.auth);

    let content = null;

    if(auth.currentUser.providerId === "password") {
        content = (<>
        <Formik initialValues={{Password1: '', Password2: ''}} 
                validationSchema={Yup.object({
                    password1: Yup.string().required('Please enter password'),
                    password2: Yup.string().oneOf([Yup.ref('password1'), null], "Confirm Password does not match Password")
                })}
                onSubmit={async (values, {setSubmitting, setErrors}) => {
                    try {
                        await updatePassword(values);
                    } catch (error) {
                        setErrors({auth: error.message});
                    } finally {
                        setSubmitting(false);
                    }
                }}        
        >
            {({isSubmitting, isValid, dirty, errors}) => (
                <Form className='ui form'>
                     {errors.auth ? <Label color='red' style={{marginBottom: '15px'}} content={ errors.auth } /> : null}
                     <MyTextInput name='password1' type='password' placeholder='New Password' />
                     <MyTextInput name='password2' type='password' placeholder='Confirm Password' />
                     <Button
                        loading={isSubmitting}
                        disabled={!isValid || !dirty || isSubmitting}
                        type='submit'
                        fluid
                        size='large'
                        color='teal'
                        content='Update password'
                    />
                </Form>
            )}

        </Formik>
       </>)
    } else if(auth.currentUser.providerId === "facebook.com") {
        content = (
            <>
               <Header color="teal" sub content="Facebook account" />
               <p>Please visit Facebook to update your account</p>
               <Button icon="facebook" color="facebook" as={Link} to="https://facebook.com" content="Go to Facebook" />
           </>
        )
    } 
    else if (auth.currentUser.providerId === "google.com") {
        content = (
            <>
               <Header color="teal" sub content="Google account" style={{marginTop: '15px'}} />
               <p>Please visit Google to update your account</p>
               <Button icon="google" color="google plus" as={Link} to="https://google.com" content="Go to Google" />
           </>
        )
    } else {
        content = null;
    }

    return (
       <Segment>
           <Header content='Change Password' size="medium" />
           <Divider />
           {content}
       </Segment> 
    )
} 

export default ChangePassword;