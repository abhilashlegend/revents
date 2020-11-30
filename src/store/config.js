import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import testReducer from './reducers/testReducer';
import eventReducer from './reducers/eventReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    test: testReducer,
    event: eventReducer
});

export const configureStore = () => {
    return createStore(rootReducer, devToolsEnhancer());
}

