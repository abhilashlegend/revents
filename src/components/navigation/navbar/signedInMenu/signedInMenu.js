import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Dropdown, Menu, Image } from 'semantic-ui-react';
import UserImage  from '../../../../assets/images/user.png';
import { signOutFirebase } from '../../../../firestore/firebaseService';

const SignedInMenu = props => {
    const {currentProfile} = useSelector(state => state.profile);
    const history = useHistory();

    const signOutHandler = async () => {
        try {
            history.push("/");
            await signOutFirebase();
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <Menu.Item position="right">
            <Image avatar spaced='right' src={currentProfile.photoURL || UserImage } />
            <Dropdown pointing='top left' text={currentProfile.displayName}>
                <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/createEvent" text="Create Event" icon="plus" />
                    <Dropdown.Item as={Link} to={`/profile/${currentProfile.id}`} text="My profile" icon="user" />
                    <Dropdown.Item as={Link} to="/change-password" text="Change Password" icon="settings" />
                    <Dropdown.Item onClick={() => {
                        signOutHandler();
                    }} text="Sign out" icon="power" />
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    )
}

export default SignedInMenu;