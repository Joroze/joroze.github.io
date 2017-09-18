import R from 'ramda'
import { combineEpics } from 'redux-observable';

import { Action } from 'utilities.js';

export const GLOBAL_ALERT_CREATE = 'GlobalAlert/GLOBAL_ALERT_CREATE';
export const GLOBAL_ALERT_DISMISSED = 'GlobalAlert/GLOBAL_ALERT_DISMISSED';

// Action Creators
export function createGlobalAlert(message, color = 'green') {
    return Action(GLOBAL_ALERT_CREATE, {
        color: color,
        message: message,
        id: Date.now()
    })
}

export const dismissGlobalAlert = (alertId) => Action(GLOBAL_ALERT_DISMISSED, alertId);

// Define the initial state for the reducer
export const initialState = {
    alertList: []
}

// Global Alert Reducer
export function reducer(state = initialState, action) {
    const mergeToState = R.merge(state)

    switch (action.type) {
        case GLOBAL_ALERT_CREATE:
            return mergeToState({
                alertList: R.append(action.payload, state.alertList)
            });
        case GLOBAL_ALERT_DISMISSED:
            return mergeToState({
                alertList: R.reject(function(alertItem) {
                    return alertItem.id === action.payload
                }, state.alertList)
            });
        default:
            return state;
    }
}

// Epics
function globalAlertLifeTimeEpic(action$, store) {
    return action$.ofType(GLOBAL_ALERT_CREATE)
        .delay(15000) // wait 15 seconds before removing the 'expired' alert
        .map(function(action) {
            const alert = action.payload;

            return Action(GLOBAL_ALERT_DISMISSED, alert.id)
        })
};

export const globalAlertEpic = combineEpics(
    globalAlertLifeTimeEpic
);
