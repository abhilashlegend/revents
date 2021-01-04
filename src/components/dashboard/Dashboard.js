import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import { listenToEventsFromFireStore } from '../../firestore/fireStoreService';
import EventFilter from '../events/eventFilter/eventFilter';
import EventList from '../events/eventList/eventList';
import EventListPlaceholder from '../events/eventList/eventListPlaceholder';
import { listenToEvents } from '../../store/actions/event';
import useFirestoreCollection from '../../hooks/useFirestoreCollection';


const Dashboard = (props) => {

    const dispatch = useDispatch();

    useFirestoreCollection({
        query: () => listenToEventsFromFireStore(),
        data: events => dispatch(listenToEvents(events)),
        deps: [dispatch]
    })
    
    const {events} = useSelector(state => state.event);
    const {loading} = useSelector(state => state.async);

   /* if (loading) 
        return <Loader /> */

    return (
        <Grid>
             <Grid.Column width={10}>
             { loading && 
            <>
                <EventListPlaceholder /> 
                <EventListPlaceholder />
            </>
            }
                 <EventList 
                    events={events} 
                 />
             </Grid.Column>
             <Grid.Column width={6}>
                <EventFilter />
            </Grid.Column>
        </Grid>
    )
}

export default Dashboard;