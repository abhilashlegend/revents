import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Item, Label, List, Segment } from 'semantic-ui-react';
import UserImage from '../../../../assets/images/user.png'
import EventListAttendee from '../eventListAttendee/eventListAttendee';
import { format } from 'date-fns'
import { deleteEventFromFirestore } from '../../../../firestore/fireStoreService';

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
                            {event.isCancelled && (
                                <Label
                                    style={{top: '-40px'}}
                                    ribbon='right'
                                    color='red'
                                    content='This event has been cancelled'
                                />
                            )}
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='clock' /> {format(event.date, 'MMMM d, yyyy h:mm a')}
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
                <Button onClick={() => deleteEventFromFirestore(event.id)} color='red' floated='right' content='Delete' className="ml-1" />
                <Button as={Link} to={`/events/${event.id}`} color='teal' floated='right' content='View' />               
            </Segment>
        </Segment.Group>
    )
}

export default EventListItem;