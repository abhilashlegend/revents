import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventForm from '../../containers/event/eventForm/eventForm';
import EventList from '../events/eventList/eventList';

const Dashboard = (props) => {
    
    const {events} = useSelector(state => state.event);

    return (
        <Grid>
             <Grid.Column width={10}>
                 <EventList 
                    events={events} 
                 />
             </Grid.Column>
             <Grid.Column width={6}>
                { props.showForm && <EventForm 
                    setShowForm={props.setShowForm}
                    key={props.selectedEvent ? props.selectedEvent.id : null}  
                /> } 
            </Grid.Column>
        </Grid>
    )
}

export default Dashboard;