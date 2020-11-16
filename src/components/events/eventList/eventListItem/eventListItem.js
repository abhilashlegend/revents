import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, List, Segment } from 'semantic-ui-react';
import UserImage from '../../../../assets/images/user.png'
import EventListAttendee from '../eventListAttendee/eventListAttendee';

const EventListItem = (props) => {
    const {event} = props;
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' circular src={UserImage} />
                        <Item.Content>
                            <Item.Header content={event.title} />
                            <Item.Description>
                                Hosted by {event.hostedBy}
                            </Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {event.date}
                    <Icon name='marker' /> {event.venue}
                </span>
            </Segment>
            <Segment secondary>
                <List horizontal>
                    {event.attendees.map(attendee => {
                        return <EventListAttendee attendee={attendee} key={attendee.id} />
                    })}
                </List>
            </Segment>
            <Segment clearing>
                <div>{event.description}</div>
                <Button onClick={() => props.deleteEvent(event.id)} color='red' floated='right' content='Delete' className="ml-1" />
                <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='View' />               
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem;