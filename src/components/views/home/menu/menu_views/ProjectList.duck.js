import axios from 'axios';

// Actions
const AJAX_LOAD = 'ProjectList/AJAX_LOAD';
const AJAX_SUCCESS = 'ProjectList/AJAX_SUCCESS';
const AJAX_FAIL = 'ProjectList/AJAX_FAIL';

// Define the initial state for the reducer
let initialState = {
    repos: []
}

// Repository Reducer
export default function RepositoryReducer(state = initialState, action) {

    switch (action.type) {
        case AJAX_LOAD:
            return action.payload;
        case AJAX_SUCCESS:
            return action.payload;
        case AJAX_FAIL:
            return action.payload;
        default:
            return state;
    }
}

// Action Creators
export function performUserRepositoryRequest(username) {
    return function(dispatch) {
        dispatch({
            type: AJAX_LOAD,
            payload: {
                loading: true,
                loadingColor: 'orange',
                msg: "We are fetching Jordan's projects for you."
            }
        })

        axios.get(`/users/${username}/repos`, {
                baseURL: 'https://api.github.com',
                params: {
                    type: 'owner',
                    sort: 'updated',
                    direction: 'asc'
                }
            })
            .then((repoDataResponse => {
                dispatch({
                    type: AJAX_SUCCESS,
                    payload: {
                        repos: repoDataResponse.data,
                        loading: false,
                        loadingColor: 'blue',
                        loadSuccess: true,
                        msg: `Fetched ${username}'s repository data!`
                    }
                })
            }))
            .catch((repoDataError) => {
                console.log(repoDataError);
                dispatch({
                    type: AJAX_FAIL,
                    payload: {
                        repos: [],
                        loading: false,
                        loadingColor: 'red',
                        loadSuccess: false,
                        msg: "GitHub cannot be reached."
                    }
                })
            });
    }
}
