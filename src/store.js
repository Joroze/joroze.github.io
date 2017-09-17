import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import { combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createEpicMiddleware } from 'redux-observable';

import {
    reducer as UserProfileReducer,
    userEpic
} from './ducks/UserProfile.duck.js';
import {
    reducer as GlobalAlertReducer,
    globalAlertEpic
} from './ducks/GlobalAlert.duck.js';

export const rootEpic = combineEpics(
    globalAlertEpic,
    userEpic
);

const rootReducer = combineReducers({
    globalAlerts: GlobalAlertReducer,
    user: UserProfileReducer
});

const epicMiddleware = createEpicMiddleware(rootEpic)
const middleWare = applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleWare));

export default () => store;
