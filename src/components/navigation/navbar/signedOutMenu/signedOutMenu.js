import React from 'react';
import { Menu, Button } from 'semantic-ui-react';

const SignedOutMenu = props => {

    return (
        <Menu.Item position="right">
            <Button onClick={() => props.setAuth(true)} basic inverted content="Login" />
            <Button basic inverted content="Register" className="ml-1" />
        </Menu.Item>
    )
}

export default SignedOutMenu;