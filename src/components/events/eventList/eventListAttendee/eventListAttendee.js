import React from 'react'
import { List, Image } from 'semantic-ui-react';
//import UserIcon from '../../../../assets/images/user.png';

const eventListAttendee = (props) => {
    const {attendee} = props;
    return (
          <List.Item>
              <Image size='mini' circular src={attendee.photoURL} />
          </List.Item>
    )
}

export default eventListAttendee;