import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailChat from './eventDetailChat/eventDetailChat';
import EventDetailHeader from './eventDetailHeader/eventDetailHeader';
import EventDetailInfo from './eventDetailInfo/eventDetailInfo';
import EventDetailSidebar from './eventDetailSidebar/eventDetailSidebar';

const EventDetail = props => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailHeader />
                <EventDetailInfo />
                <EventDetailChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailSidebar />    
            </Grid.Column>
        </Grid>
    )
}

export default EventDetail;