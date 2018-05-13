import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import { reducer as formReducer } from 'redux-form'
import { combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { createEpicMiddleware } from 'redux-observable';

import {
    reducer as contactFormReducer,
    contactFormEpic
} from './ducks/ContactForm.duck.js';
import {
    reducer as externalLinkModalReducer
} from './ducks/ExternalLinkModal.duck.js';
import {
    reducer as globalAlertReducer,
    globalAlertEpic
} from './ducks/GlobalAlert.duck.js';
import {
    reducer as homeNavigationReducer,
    homeNavigationEpic
} from './ducks/HomeNavigation.duck.js'
import {
    reducer as userProfileReducer,
    userEpic
} from './ducks/UserProfile.duck.js';

export const rootEpic = combineEpics(
    contactFormEpic,
    globalAlertEpic,
    homeNavigationEpic,
    userEpic
);

const rootReducer = combineReducers({
    contactForm: contactFormReducer,
    externalLinkModal: externalLinkModalReducer,
    form: formReducer,
    globalAlerts: globalAlertReducer,
    homeNavigation: homeNavigationReducer,
    user: userProfileReducer
});

const epicMiddleware = createEpicMiddleware(rootEpic)
const middleWare = applyMiddleware(epicMiddleware);
const store = createStore(rootReducer, composeWithDevTools(middleWare));

export default store;
