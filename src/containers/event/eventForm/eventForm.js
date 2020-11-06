import cuid from 'cuid';
import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';

const EventForm = (props) => {

    const initialValues = props.selectedEvent ?? {
        title: '',
        category: '',
        description: '',
        city: '',
        venue: '',
        date: ''
    }

    const [eventForm, setEventForm] = useState(initialValues);

    const onFieldChangeHandler = (event) => {
        const {name, value} = event.target;
        setEventForm({...eventForm, [name]: value});
    }

    const onFormSubmitHandler = () => {
        props.selectedEvent ? props.updateEvent(eventForm) :
        props.addEvent({
            ...eventForm, 
            id: cuid(), 
            hostedBy: 'Abhilash', 
            hostPhotoURL: '../../../assets/images/user.png', 
            attendees: []
        })
    }

    return (
        <Segment clearing>
            <Header content={ props.selectedEvent ? 'Edit event' : 'Create new event'} />
            <Form onSubmit={onFormSubmitHandler}>
                <Form.Field>
                    <input 
                           type="text" 
                           name="title" 
                           value={eventForm.title} 
                           onChange={(e) => onFieldChangeHandler(e)} 
                           placeholder="Event title"
                     />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="category" 
                        value={eventForm.category}
                        onChange={(e) => onFieldChangeHandler(e)} 
                        placeholder="Category" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="description"
                        value={eventForm.description} 
                        onChange={(e) => onFieldChangeHandler(e)} 
                        placeholder="Description" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="city"
                        value={eventForm.city}
                        onChange={(e) => onFieldChangeHandler(e)} 
                        placeholder="City"
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="text"
                        name="venue" 
                        value={eventForm.venue}
                        onChange={(e) => onFieldChangeHandler(e)} 
                        placeholder="Venue" 
                    />
                </Form.Field>
                <Form.Field>
                    <input 
                        type="date"
                        name="date"
                        value={eventForm.date}
                        onChange={(e) => onFieldChangeHandler(e)} 
                        placeholder="Date" 
                    />
                </Form.Field>
                <Button type="submit" floated="right" positive content="Submit" />
                <Button type="submit" onClick={() => props.setShowForm(false)}  floated="right" content="Cancel" />
            </Form>
        </Segment>
    )
}

export default EventForm;