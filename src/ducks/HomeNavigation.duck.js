import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import R from 'ramda';

import { Action } from 'utilities.js';

// Action
export const ON_SECTION_SELECT = 'HomeNavigation/ON_SECTION_SELECT';
export const SECTION_SELECTED = 'HomeNavigation/SECTION_SELECTED';
export const SECTION_UPDATED = 'HomeNavigation/SECTION_UPDATED';
// Action Creators
export const sectionChange = (section) => Action(ON_SECTION_SELECT, section);

// Define the initial state for the reducer
export const initialState = { activeSection: 'resume' };

// Home Navigation Reducer
export function reducer(state = initialState, action) {
    const mergeToState = R.merge(state)

    switch (action.type) {
        case SECTION_UPDATED:
            return mergeToState({
                activeSection: action.payload,
            });
        default:
            return state;
    }
}

// Epics
function sectionChangeEpic(action$, store) {
    return action$.ofType(ON_SECTION_SELECT)
        .flatMap(function(action) {
            const { homeNavigation } = store.getState();
            const sectionUpdated = homeNavigation.activeSection !== action.payload;

            if (sectionUpdated) {
                return Observable.of(
                    Action(SECTION_SELECTED),
                    Action(SECTION_UPDATED, action.payload)
                );
            } else {
                return Observable.of(Action(SECTION_SELECTED));
            }
        })
};

export const homeNavigationEpic = combineEpics(sectionChangeEpic);
