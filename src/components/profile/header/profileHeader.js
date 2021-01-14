import React from 'react';
import { Button, Divider, Grid, Header, Item, Reveal, Segment, Statistic } from 'semantic-ui-react';

const ProfileHeader = props => {
    return (
        <Segment>
            <Grid>
                <Grid.Column width={12}>
                    <Item.Group>
                        <Item>
                            <Item.Image avatar size="small" src="/assets/images/user.png" />
                            <Item.Content verticalAlign='middle'>
                                <Header as="h1" style={{display: 'block', marginBottom: 10}} content={props.profile.displayName.toUpperCase()} />
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
                <Grid.Column width={4}>
                    <Statistic.Group>
                        <Statistic label='Followers' value={10} />
                        <Statistic label='Following' value={5} />
                    </Statistic.Group>
                   
                    {!props.isCurrentUser && 
                        <>
                         <Divider />
                        <Reveal animated='move'>
                            <Reveal.Content visible style={{width: '100%'}}>
                                <Button fluid color="teal" content="Following" />
                            </Reveal.Content>
                            <Reveal.Content hidden style={{width: '100%'}}>
                                <Button fluid color="red" content="Unfollow" />
                            </Reveal.Content>
                         </Reveal>
                         </>
                    }
                    
                </Grid.Column>
            </Grid>
        </Segment>
    )
}

export default ProfileHeader;