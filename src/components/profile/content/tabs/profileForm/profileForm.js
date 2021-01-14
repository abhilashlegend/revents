import { Form, Formik } from 'formik';
import React from 'react';
import { toast } from 'react-toastify';
import { Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import { updateUserProfile } from '../../../../../firestore/fireStoreService';
import MyTextArea from '../../../../ui/form/myTextArea';
import MyTextInput from '../../../../ui/form/myTextInput';

const ProfileForm = ({profile}) => {
    return (
        <Formik initialValues={{displayName: profile.displayName, description: profile.description}} 
        validationSchema={Yup.object({
            displayName: Yup.string().required('Please enter display name'),
            description: Yup.string().required('Please enter description')
        })}
        onSubmit={async (values, {setSubmitting}) => {
            try {
                console.log(values);
                await updateUserProfile(values);
            } catch (error) {
                console.error(error.message);
                toast.error(error.message)
            } finally {
                setSubmitting(false)
            }
        }}
        >
        {({isSubmitting, dirty, isValid}) => (
            <Form className="ui form">
                <MyTextInput name='displayName' placeholder="Display name"  />
                <MyTextArea name='description' placeholder="Description" />
                <Button 
                    type='submit' 
                    positive 
                    content="Update Profile" 
                    size="large"
                    floated="right"
                    loading={isSubmitting} 
                    disabled={isSubmitting || !isValid || !dirty} />
            </Form>
        )}
        </Formik>
    )
}

export default ProfileForm;