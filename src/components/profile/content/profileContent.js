import React from 'react'
import { Tab } from 'semantic-ui-react';
import About from './tabs/about';

const ProfileContent = props => {
    const panes = [
        {menuItem: 'About', render: () => <About profile={props.profile} isCurrentUser={props.isCurrentUser} />},
        {menuItem: 'Photos', render: () => <Tab.Pane>Photos</Tab.Pane>},
        {menuItem: 'Events', render: () => <Tab.Pane>Events</Tab.Pane>},
        {menuItem: 'Followers', render: () => <Tab.Pane>Followers</Tab.Pane>},
        {menuItem: 'Following', render: () => <Tab.Pane>Following</Tab.Pane>}
    ]

    return (
        <Tab menu={{fluid: true, vertical: true}} menuPosition='right' panes={panes} />
    )
}

export default ProfileContent;