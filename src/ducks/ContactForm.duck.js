import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import R from 'ramda';

import { GLOBAL_ALERT_CREATE } from './GlobalAlert.duck.js';
import { ajaxErrorMessage, Action, ErrorAction } from 'utilities.js';

// Actions
export const POST_FORM_AJAX = 'ContactForm/POST_FORM_AJAX'
export const POST_FORM_AJAX_STARTED = 'ContactForm/POST_FORM_AJAX_STARTED'
export const POST_FORM_AJAX_COMPLETED = 'ContactForm/POST_FORM_AJAX_COMPLETED';
export const POST_FORM_AJAX_ERROR = 'ContactForm/POST_FORM_AJAX_ERROR';

// Action Creators
export const submitForm = (formData) => Action(POST_FORM_AJAX, formData);

// Define the initial state for the reducer
export const initialState = {
    isLoading: false,
    wasSentSuccessfully: false,
    loadingMessage: ''
}

// Contact Form Reducer
export function reducer(state = initialState, action) {
    const mergeToState = R.merge(state)

    switch (action.type) {
        case POST_FORM_AJAX:
            return mergeToState({
                isLoading: true,
                loadingMessage: 'Sending...'
            });
        case POST_FORM_AJAX_COMPLETED:
            return mergeToState({
                isLoading: false,
                wasSentSuccessfully: true,
                loadingMessage: 'Sent!',
            });
        case POST_FORM_AJAX_ERROR:
            return mergeToState({
                isLoading: false,
                loadingMessage: action.payload
            });
        default:
            return state;
    }
}

// Epics
function postContactFormEpic(action$) {
    return action$.ofType(POST_FORM_AJAX)
        .switchMap(function(action) {
            const formData = action.payload;

            return ajax.post('https://q0x61t1u80.execute-api.us-east-1.amazonaws.com/prod/sendEmail', formData, { 'Content-Type': 'application/json' })
                .map((response) => Action(POST_FORM_AJAX_COMPLETED, response))
                .catch(function(error) {
                    const globalAlertConfig = {
                        color: 'yellow',
                        message: 'Contact services cannot be reached at this time.',
                        icon: 'warning circle',
                        id: Date.now()
                    }

                    return Observable.of(
                        ErrorAction(POST_FORM_AJAX_ERROR, ajaxErrorMessage(error)),
                        Action(GLOBAL_ALERT_CREATE, globalAlertConfig)
                    )
                })
                .startWith(Action(POST_FORM_AJAX_STARTED))
        })
};

export const contactFormEpic = combineEpics(postContactFormEpic)