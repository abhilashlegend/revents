import React from 'react';
import { useDispatch } from 'react-redux';
import { Menu, Button } from 'semantic-ui-react';
import { openModal } from '../../../../store/actions/modal';

const SignedOutMenu = props => {
    const dispatch = useDispatch();
    return (
        <Menu.Item position="right">
            <Button basic inverted content="Login" onClick={() => dispatch(openModal('loginModal'))} />
            <Button basic inverted content="Register" className="ml-1" />
        </Menu.Item>
    )
}

export default SignedOutMenu;