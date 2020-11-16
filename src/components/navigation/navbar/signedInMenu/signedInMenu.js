import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import UserImage  from '../../../../assets/images/user.png';

const SignedInMenu = props => {
    return (
        <Menu.Item position="right">
            <Image avatar spaced='right' src={UserImage} />
            <Dropdown pointing='top left' text="Abhilash">
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
                    <Dropdown.Item text="My profile" icon="user" />
                    <Dropdown.Item onClick={() => props.setAuth()} text="Sign out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}

export default SignedInMenu;