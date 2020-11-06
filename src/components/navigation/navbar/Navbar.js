import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';
import WhiteLogo from '../../../assets/images/logo-white.png';

const Navbar = (props) => {
    return (
        <Menu inverted fixed='top' style={{minHeight: '3rem'}}>
            <Container>
                <Menu.Item header>
                    <img src={WhiteLogo} alt="revents" />
                </Menu.Item>
                <Menu name="Events" />
                <Menu.Item>
                    <Button onClick={() => props.setShowForm()} positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position="right">
                    <Button basic inverted content="Login" />
                    <Button basic inverted content="Register" className="ml-1" />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default Navbar;