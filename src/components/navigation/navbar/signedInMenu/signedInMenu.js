import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import UserImage  from '../../../../assets/images/user.png';
import { signOutUser } from '../../../../store/actions/auth';

const SignedInMenu = props => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector(state => state.auth);
    const history = useHistory();
    return (
        <Menu.Item position="right">
            <Image avatar spaced='right' src={currentUser.photoURL || UserImage } />
            <Dropdown pointing='top left' text={currentUser.email}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
                    <Dropdown.Item text="My profile" icon="user" />
                    <Dropdown.Item onClick={() => {
                        dispatch(signOutUser());
                        history.push("/");
                    }} text="Sign out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}

export default SignedInMenu;