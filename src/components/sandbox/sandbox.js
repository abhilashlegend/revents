import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { increment, decrement } from '../../store/reducers/testReducer';
import { openModal } from '../../store/actions/modal';

const Sandbox = props => {
    const dispatch = useDispatch();
    const data = useSelector(state =>  state.test.data);
    const {loading} = useSelector(state => state.async);
    const [targetEle, setTargetEle] = useState(null);
    return (
        <>
        <h1>Testing Redux</h1>
        <h2> The data is: {data}</h2>
        <Button color="red" name="increment" onClick={(e) => { 
            setTargetEle(e.target.name);
            dispatch(increment(10));
        }} loading={loading && targetEle === 'increment'} content="Increment" />
        <Button color="green" name="decrement" onClick={(e) => { 
            setTargetEle(e.target.name);
            dispatch(decrement(5));
        }} loading={loading && targetEle === 'decrement'} content="Decrement" />
        <Button color="teal"  content='Open Modal' onClick={() => dispatch(openModal('testModal'))} />
        </>
    )
}

export default Sandbox;