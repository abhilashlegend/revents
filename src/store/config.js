import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import testReducer from './reducers/testReducer';
import eventReducer from './reducers/eventReducer';
import { combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';
import authReducer from './reducers/authReducer';
import thunk from 'redux-thunk';
import asyncReducer from './reducers/asyncReducer';
import { verifyAuth } from './actions/auth';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    modal: modalReducer,
    auth: authReducer,
    async: asyncReducer
});

export const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    store.dispatch(verifyAuth());
    return store;
}

