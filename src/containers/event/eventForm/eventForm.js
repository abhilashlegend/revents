import cuid from 'cuid';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent, updateEvent } from '../../../store/actions/event';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../components/ui/form/myTextInput';
import MyTextArea from '../../../components/ui/form/myTextArea';
import MySelectInput from '../../../components/ui/form/mySelectInput';
import { categoryData } from '../../../categoryOptions';
import MyDatePicker from '../../../components/ui/form/myDatePicker';

const EventForm = (props) => {

    const selectedEvent = useSelector(state => 
        state.event.events.find(evt => evt.id === props.match.params.id)
    );

    const dispatch = useDispatch();

    const initialValues = selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const validationSchema = Yup.object({
        title: Yup.string().required('Please enter title'),
        category: Yup.string().required('Please enter category'),
        description: Yup.string().required('Please enter description'),
        city: Yup.string().required('Please enter city'),
        venue: Yup.string().required('Please enter venue'),
        date: Yup.string().required('Please enter date')
    })


    return (
        <Segment clearing>
            <Header content={ selectedEvent ? 'Edit event' : 'Create new event'} />
            <Formik initialValues={initialValues} onSubmit={values => {
                selectedEvent ? dispatch(updateEvent(...selectedEvent, ...values)) :
                dispatch(createEvent({
                    ...values, 
                    id: cuid(), 
                    hostedBy: 'Abhilash', 
                    hostPhotoURL: '../../../assets/images/user.png', 
                    attendees: []
                }));
                props.history.push("/events");
            }} validationSchema={validationSchema} >             
                {({isSubmitting, dirty, isValid}) => (
                     <Form className="ui form">
                        <Header sub color='teal' content='Event Details' />
                        <MyTextInput name='title' placeholder='Event title' />
                        <MySelectInput name='category' placeholder='Category' options={categoryData}  />
                        <MyTextArea name='description' rows={3} placeholder='Description' />
                        <Header sub color='teal' content='Event Location Details' />
                        <MyTextInput name='city' placeholder='City' />   
                    
                        <MyTextInput name='venue' placeholder='Venue' /> 
                    
                        
                        <MyDatePicker name='date' placeholderText='Event Date' 
                            timeformat='HH:mm'
                            showTimeSelect
                            timeCaption='time'
                            dateFormat='MMMM d, yyyy h:mm a'
                        />
                    <Button type="submit" loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} floated="right" positive content="Submit" />
                    <Button type="submit" as={Link} to="/events" disabled={isSubmitting}  floated="right" content="Cancel" />
                    </Form>
                     
                )}
                        
            </Formik>
           
        </Segment>
    )
}

export default EventForm;