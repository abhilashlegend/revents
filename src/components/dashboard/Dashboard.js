import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../../containers/event/eventForm/eventForm';
import EventList from '../events/eventList/eventList';
import { sampleData } from '../../sampleData';

const Dashboard = (props) => {
    
    const [events, setEvents] = useState(sampleData);

    const addEvent = (event) => {
        console.log(event);
        setEvents([
            ...events,
            event
        ]);
    }    

    const updateEvent = (updatedEvent) => {
        setEvents(events.map(event => {
            return event.id === updatedEvent.id ?  updatedEvent : event;
        }));
        props.selectEvent(null);
    }

    const deleteEvent = (eventId) => {
        setEvents(events.filter(event => {
            return event.id !== eventId
        }));
    }

    return (
        <Grid>
             <Grid.Column width={10}>
                 <EventList 
                    events={events} 
                    selectEvent={props.selectEvent}
                    deleteEvent={deleteEvent}
                 />
             </Grid.Column>
             <Grid.Column width={6}>
                { props.showForm && <EventForm 
                    setShowForm={props.setShowForm}
                    addEvent={addEvent}
                    selectedEvent={props.selectedEvent} 
                    updateEvent={updateEvent}
                    key={props.selectedEvent ? props.selectedEvent.id : null}  
                /> } 
            </Grid.Column>
        </Grid>
    )
}

export default Dashboard;