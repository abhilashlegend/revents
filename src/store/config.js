import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import testReducer from './reducers/testReducer';
import eventReducer from './reducers/eventReducer';
import { combineReducers } from 'redux';
import modalReducer from './reducers/modalReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer,
    modal: modalReducer,
    auth: authReducer
});

export const configureStore = () => {
    return createStore(rootReducer, devToolsEnhancer());
}

