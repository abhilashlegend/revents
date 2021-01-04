import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Confirm, Header, Segment } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { listenToEvents} from '../../../store/actions/event';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from '../../../components/ui/form/myTextInput';
import MyTextArea from '../../../components/ui/form/myTextArea';
import MySelectInput from '../../../components/ui/form/mySelectInput';
import { categoryData } from '../../../categoryOptions';
import MyDatePicker from '../../../components/ui/form/myDatePicker';
import useFirestoreDoc from '../../../hooks/useFirestoreDoc';
import { addEventToFirestore, cancelEventToggle, listenToEventFromFireStore, updateEventToFirestore } from '../../../firestore/fireStoreService';
import Loader from '../../../components/ui/loader/loader';
import { toast } from 'react-toastify';

const EventForm = (props) => {

    const { loading, error } = useSelector((state) =>  state.async);

    const selectedEvent = useSelector(state => 
        state.event.events.find(evt => evt.id === props.match.params.id)
    );

    const dispatch = useDispatch();

    const [loadingCancel, setLoadingCancel] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);

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
    });

    const showConfirmDialog = () => {
        setConfirmOpen(true);
    }

    const handleCancel = () => {
        setConfirmOpen(false);
    }

    const handleConfirm = async (event) => {
        setLoadingCancel(true);
        try {
            await cancelEventToggle(event);
            setLoadingCancel(false);
            setConfirmOpen(false);
        } catch (error) {
            toast.error(error.message);
        }
        
    }

    useFirestoreDoc({
        shouldExecute: !!props.match.params.id,
        query: () => listenToEventFromFireStore(props.match.params.id),
        data: event => dispatch(listenToEvents([event])),
        deps: [props.match.params.id, dispatch]
    });

    if(loading) return <Loader />

    if(error) return <Redirect to="/error" />


    return (
        <Segment clearing>
            <Header content={ selectedEvent ? 'Edit event' : 'Create new event'} />
            <Formik initialValues={initialValues} onSubmit={async (values, {setSubmitting}) => {
                try {
                    selectedEvent ? await updateEventToFirestore(values) : await addEventToFirestore(values);
                    props.history.push("/events");
                } catch (error) {
                    toast.error(error.message);
                    setSubmitting(false);
                }
               
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
                    { selectedEvent && <Button type="button" loading={loadingCancel} floated="left" color={selectedEvent.isCancelled ? 'green' : 'red'} content={selectedEvent.isCancelled ? 'Activate Event' : 'Cancel Event'} onClick={() => showConfirmDialog()} /> }    
                    <Button type="submit" loading={isSubmitting} disabled={!isValid || !dirty || isSubmitting} floated="right" positive content="Submit" />
                    <Button type="submit" as={Link} to="/events" disabled={isSubmitting}  floated="right" content="Cancel" />
                    </Form>
                     
                )}
                        
            </Formik>

            <Confirm
                open={confirmOpen}
                onCancel={handleCancel}
                onConfirm={() => handleConfirm(selectedEvent)}
            />
                
        </Segment>

        
    )
}

export default EventForm;