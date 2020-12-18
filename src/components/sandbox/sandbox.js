import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from '../../store/reducers/testReducer';
import { openModal } from '../../store/actions/modal';

const Sandbox = props => {
    const dispatch = useDispatch();
    const data = useSelector(state =>  state.test.data)
    
    return (
        <>
        <h1>Testing Redux</h1>
        <h2> The data is: {data}</h2>
        <Button color="red" onClick={() => dispatch(increment(10))} content="Increment" />
        <Button color="green" onClick={() => dispatch(decrement(5))} content="Decrement" />
        <Button color="teal"  content='Open Modal' onClick={() => dispatch(openModal('testModal'))} />
        </>
    )
}

export default Sandbox;