import React from 'react';
import { Dimmer, Loader as Loading } from 'semantic-ui-react';


const Loader = props => {

    const {inverted = true, content = 'Loading...'} = props;

    return (
        <Dimmer inverted={inverted} active>
            <Loading content={content} />
        </Dimmer>
    )
}

export default Loader;