import React, {useState} from 'react';
import EventListItem from './eventListItem/eventListItem';

const EventList = (props) => {

    return (
        <>
        {props.events.map(event => {
            return <EventListItem 
            key={event.id} 
            selectEvent={props.selectEvent} 
            event={event} 
            deleteEvent={props.deleteEvent}
            />
        })}
        </>
    )
}

export default EventList;