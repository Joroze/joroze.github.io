import { ajax } from 'rxjs/observable/dom/ajax';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs';
import R from 'ramda'
import { stringify } from 'query-string';

import { GLOBAL_ALERT_CREATE } from './GlobalAlert.duck.js'

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
export const getUserProfile = (username) => ({
    type: GET_USER_AJAX,
    payload: username
});

export const getUserRepositories = () => ({
    type: GET_USER_REPOS_AJAX
});

export function hideResume() {
    return {
        type: RESUME_HIDDEN
    }
}

export function showResume() {
    return {
        type: RESUME_VISIBLE
    }
}

// Define the initial state for the reducer
export const initialState = {
    isUserLoading: false,
    isUserReposLoading: false,
    isResumeVisible: false,
    loadingMessage: '',
    repositories: [],
    userData: {}
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
                repositories: action.payload
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
                .map(function(response) {
                    return {
                        type: GET_USER_AJAX_COMPLETED,
                        payload: response
                    }
                })
                .catch(function(error) {
                    return Observable.of({
                        type: GET_USER_AJAX_ERROR,
                        payload: R.path(['xhr', 'response', 'message'])(error) || 'Github cannot be reached at this time.',
                        error: true
                    }, {
                        type: GLOBAL_ALERT_CREATE,
                        payload: {
                            color: 'red',
                            message: 'Github cannot be reached at this time.',
                            icon: 'warning circle',
                            id: Date.now()
                        }
                    })
                })
                .startWith({
                    type: GET_USER_AJAX_STARTED
                })
        })
};

function getUserReposEpic(action$, store) {
    return action$.ofType(GET_USER_REPOS_AJAX)
        .flatMap(function() {
            const username = store.getState()
                .user.userData.login

            const params = stringify({
                type: 'owner',
                sort: 'updated',
                direction: 'desc'
            });

            return ajax.getJSON(`https://api.github.com/users/${username}/repos?${params}`)
                .map(function(response) {
                    return {
                        type: GET_USER_REPOS_AJAX_COMPLETED,
                        payload: response
                    }
                })
                .catch(function(error) {
                    return Observable.of({
                        type: GET_USER_REPOS_AJAX_ERROR,
                        payload: R.path(['xhr', 'response', 'message'])(error) || 'Github cannot be reached at this time.',
                        error: true
                    }, {
                        type: GLOBAL_ALERT_CREATE,
                        payload: {
                            color: 'red',
                            message: 'Github cannot be reached at this time.',
                            icon: 'warning circle',
                            id: Date.now()
                        }
                    })
                })
                .startWith({
                    type: GET_USER_REPOS_AJAX_STARTED
                })
        })
};

export const userEpic = combineEpics(
    getUserProfileEpic,
    getUserReposEpic
);
