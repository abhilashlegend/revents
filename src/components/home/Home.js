import React from 'react';
import { Button, Container, Header, Icon, Segment } from 'semantic-ui-react';

const Home = props => {
    return (
        <Segment inverted textAlign="center" vertical className="masthead">
            <Container>
                <Header as="h1" inverted>
                    Re-vents    
                </Header>   
                <Button onClick={() => props.history.push("/events")} size="huge" inverted>
                    Get started
                    <Icon name="right arrow" inverted />    
                </Button> 
            </Container>            
        </Segment>
    )
}

export default Home;