import { format } from 'date-fns';
import React, { useState } from 'react'
import { Button, Grid, Header, Tab } from 'semantic-ui-react';
import ProfileForm from './profileForm/profileForm';

const About = ({profile, isCurrentUser}) => {
const [editProfile, setEditProfile] = useState(false);

return (
    <Tab.Pane>
        <Grid.Row>
            <Grid.Column width={16}>
                <Header floated="left" icon="user" content={`About ${profile.displayName}`} />
                {isCurrentUser && 
                    <Button onClick={()  =>  setEditProfile(!editProfile)} floated="right" basic content={editProfile ? 'Cancel' : 'Edit'} />  
                }
                
                <div style={{clear: 'both'}}></div>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={16}>
                { editProfile ? (
                    <ProfileForm profile={profile} />
                ) : (
                    <>
                        <div style={{marginBottom: 10}}>
                            <strong>
                                Member since: {format(profile.createdAt, 'dd MMM yyyy')}
                            </strong>
                            <div>{profile.description || null}</div>
                        </div>
                    </>
                )}
            </Grid.Column>
        </Grid.Row>
    </Tab.Pane>
)
}

export default About;