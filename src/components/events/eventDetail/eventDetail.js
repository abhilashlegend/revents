import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Grid } from 'semantic-ui-react';
import { listenToEventFromFireStore } from '../../../firestore/fireStoreService';
import useFirestoreDoc from '../../../hooks/useFirestoreDoc';
import { listenToEvents } from '../../../store/actions/event';
import Loader from '../../ui/loader/loader';
import EventDetailChat from './eventDetailChat/eventDetailChat';
import EventDetailHeader from './eventDetailHeader/eventDetailHeader';
import EventDetailInfo from './eventDetailInfo/eventDetailInfo';
import EventDetailSidebar from './eventDetailSidebar/eventDetailSidebar';

const EventDetail = props => {
    const event = useSelector(state => state.event.events.find(e => e.id === props.match.params.id));
    const { loading, error } = useSelector((state) =>  state.async);
    const dispatch = useDispatch();
    useFirestoreDoc({
        query: () => listenToEventFromFireStore(props.match.params.id),
        data: event => dispatch(listenToEvents([event])),
        deps: [props.match.params.id, dispatch]
    });

    if(loading || (!event && !error)) return <Loader />

    if(error) return <Redirect to="/error" />

    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailHeader event={event} />
                <EventDetailInfo event={event} />
                <EventDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailSidebar attendees={event.attendees} />    
            </Grid.Column>
        </Grid>
    )
}

export default EventDetail;