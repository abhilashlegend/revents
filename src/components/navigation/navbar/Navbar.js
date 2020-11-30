import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Container, Menu } from 'semantic-ui-react';
import WhiteLogo from '../../../assets/images/logo-white.png';
import { NavLink } from 'react-router-dom';
import SignedInMenu from './signedInMenu/signedInMenu';
import SignedOutMenu from './signedOutMenu/signedOutMenu';

const Navbar = (props) => {

    const [authenticated, setAuthenticated] = useState(false);
    const history = useHistory();

    const signoutHandler = () => {
        setAuthenticated(false);    
        history.push("/");
    }

    return (
        <Menu inverted fixed='top' style={{minHeight: '3rem'}}>
            <Container>
                <Menu.Item header as={NavLink} exact to="/">
                    <img src={WhiteLogo} alt="revents" />
                </Menu.Item>
                <Menu name="Events"  />
                <Menu.Item as={NavLink} to="/events">
                    Events
                </Menu.Item>
                <Menu.Item as={NavLink} to="/sandbox">
                    Sandbox
                </Menu.Item>
                { authenticated &&
                <Menu.Item as={NavLink} to="/createEvent">
                <Button  positive inverted content='Create Event' />
            </Menu.Item> }
                
                { authenticated ? <SignedInMenu setAuth={signoutHandler} /> :  
                <SignedOutMenu setAuth={setAuthenticated} /> }
            </Container>
        </Menu>
    )
}

export default Navbar;