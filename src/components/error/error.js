import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Header, Segment } from 'semantic-ui-react';

const Error = () => {
    const { error } = useSelector(state => state.async);

    return (
        <Segment>
            <Header textAlign="center" content={error?.message || 'Oops - something went wrong!'} />
            <Button as={Link} to="/events" primary style={{marginTop: 20}} content="Return to events page" />
        </Segment>
    )
}

export default Error;