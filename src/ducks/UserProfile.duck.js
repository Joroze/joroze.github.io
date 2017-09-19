import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import R from 'ramda';
import { stringify } from 'query-string';

import { GLOBAL_ALERT_CREATE } from './GlobalAlert.duck.js';
import { ajaxErrorMessage, Action, ErrorAction } from 'utilities.js';

// Actions
export const GET_USER_AJAX = 'UserProfile/GET_USER_AJAX'
export const GET_USER_AJAX_STARTED = 'UserProfile/GET_USER_AJAX_STARTED'
export const GET_USER_AJAX_COMPLETED = 'UserProfile/GET_USER_AJAX_COMPLETED';
export const GET_USER_AJAX_ERROR = 'UserProfile/GET_USER_AJAX_ERROR';

export const GET_USER_REPOS_AJAX = 'UserProfile/GET_USER_REPOS_AJAX'
export const GET_USER_REPOS_AJAX_STARTED = 'UserProfile/GET_USER_REPOS_AJAX_STARTED'
export const GET_USER_REPOS_AJAX_COMPLETED = 'UserProfile/GET_USER_REPOS_AJAX_COMPLETED';
export const GET_USER_REPOS_AJAX_ERROR = 'UserProfile/GET_USER_REPOS_AJAX_ERROR';

export const RESUME_HIDDEN = 'UserProfile/RESUME_HIDDEN';
export const RESUME_VISIBLE = 'UserProfile/RESUME_VISIBLE';

// Action Creators
export const getUserProfile = (username) => Action(GET_USER_AJAX, username);
export function getUserRepositories(sort, direction) {
    return Action(GET_USER_REPOS_AJAX, {
        sort: sort,
        direction: direction
    })
}
export const hideResume = () => Action(RESUME_HIDDEN);
export const showResume = () => Action(RESUME_VISIBLE);

// Define the initial state for the reducer
export const initialState = {
    isUserLoading: false,
    isUserReposLoading: false,
    isResumeVisible: false,
    loadingMessage: '',
    repositories: [],
    userData: {},
    queryParams: {
        sort: 'pushed',
        direction: 'desc'
    }
}

// User Reducer
export function reducer(state = initialState, action) {
    const mergeToState = R.merge(state)

    switch (action.type) {
        case GET_USER_AJAX_STARTED:
            return mergeToState({
                isUserLoading: true,
                loadingMessage: 'Fetching User Data...'
            });
        case GET_USER_AJAX_COMPLETED:
            return mergeToState({
                isUserLoading: false,
                loadingMessage: 'Fetched User Data!',
                userData: action.payload
            });
        case GET_USER_AJAX_ERROR:
            return mergeToState({
                isUserLoading: false,
                loadingMessage: action.payload
            });
        case GET_USER_REPOS_AJAX_STARTED:
            return mergeToState({
                isUserReposLoading: true,
                loadingMessage: 'Fetching User Data...'
            });
        case GET_USER_REPOS_AJAX_COMPLETED:
            return mergeToState({
                isUserReposLoading: false,
                loadingMessage: 'Fetched User Data!',
                queryParams: action.payload.params,
                repositories: action.payload.response
            });
        case GET_USER_REPOS_AJAX_ERROR:
            return mergeToState({
                isUserReposLoading: false,
                loadingMessage: action.payload
            });
        case RESUME_HIDDEN:
            return mergeToState({
                isResumeVisible: false
            });
        case RESUME_VISIBLE:
            return mergeToState({
                isResumeVisible: true
            });
        default:
            return state;
    }
}

// Epics
function getUserProfileEpic(action$) {
    return action$.ofType(GET_USER_AJAX)
        .flatMap(function(action) {
            const username = action.payload;

            return ajax.getJSON(`https://api.github.com/users/${username}`)
                .map((response) => Action(GET_USER_AJAX_COMPLETED, response))
                .catch(function(error) {

                    const globalAlertConfig = {
                        color: 'red',
                        message: 'Github cannot be reached at this time.',
                        icon: 'warning circle',
                        id: Date.now()
                    }

                    return Observable.of(
                        ErrorAction(GET_USER_AJAX_ERROR, ajaxErrorMessage(error)),
                        Action(GLOBAL_ALERT_CREATE, globalAlertConfig)
                    )
                })
                .startWith(Action(GET_USER_AJAX_STARTED))
        })
};

function getUserReposEpic(action$, store) {
    return action$.ofType(GET_USER_REPOS_AJAX)
        .flatMap(function(action) {
            const username = store.getState()
                .user.userData.login;

            const sort = action.payload.sort || store.getState()
                .user.queryParams.sort;

            const direction = action.payload.direction || store.getState()
                .user.queryParams.direction;

            const params = {
                type: 'owner',
                sort: sort,
                direction: direction
            };

            const encodedParams = stringify(params)

            return ajax.getJSON(`https://api.github.com/users/${username}/repos?${encodedParams}`)
                .map((response) => Action(GET_USER_REPOS_AJAX_COMPLETED, {
                    response: response,
                    params: params
                }))
                .catch(function(error) {

                    const globalAlertConfig = {
                        color: 'red',
                        message: 'Github cannot be reached at this time.',
                        icon: 'warning circle',
                        id: Date.now()
                    }

                    return Observable.of(
                        ErrorAction(GET_USER_REPOS_AJAX_ERROR, ajaxErrorMessage(error)),
                        Action(GLOBAL_ALERT_CREATE, globalAlertConfig)
                    )
                })
                .startWith(Action(GET_USER_REPOS_AJAX_STARTED))
        })
};

export const userEpic = combineEpics(
    getUserProfileEpic,
    getUserReposEpic
);
