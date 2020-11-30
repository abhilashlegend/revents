import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import EventDetailChat from './eventDetailChat/eventDetailChat';
import EventDetailHeader from './eventDetailHeader/eventDetailHeader';
import EventDetailInfo from './eventDetailInfo/eventDetailInfo';
import EventDetailSidebar from './eventDetailSidebar/eventDetailSidebar';

const EventDetail = props => {
    const event = useSelector(state => state.event.events.find(e => e.id === props.match.params.id))
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