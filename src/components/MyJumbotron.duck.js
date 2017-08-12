import axios from 'axios';

// Actions
const AJAX_LOAD = 'MyJumbotron/AJAX_LOAD';
const AJAX_SUCCESS = 'MyJumbotron/AJAX_SUCCESS';
const AJAX_FAIL = 'MyJumbotron/AJAX_FAIL';

// Define the initial state for the reducer
let initialState = {
    data: []
}

// User Reducer
export default function UserProfileReducer(state = initialState, action) {

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
export const showMsg = (repos) => {
    return {
        type: "SHOW_MSG",
        payload: {
            repos: {},
            loading: true,
            loadingColor: 'orange'
        }
    }
}

export const hideMsg = (repos) => {
    return {
        type: "HIDE_MSG",
        payload: {
            repos: {},
            loading: true,
            loadingColor: 'orange'
        }
    }
}

// Action Creators
export function performUserProfileRequest(username) {
    return dispatch => {
        dispatch({
            type: AJAX_LOAD,
            payload: {
                loading: true,
                loadingColor: 'orange',
                msg: `Fetching ${username}'s profile content...`
            }
        })
        axios.get(`/users/${username}`, {
                baseURL: 'https://api.github.com',
            })
            .then((userResponse) => {
                dispatch({
                    type: AJAX_SUCCESS,
                    payload: {
                        data: userResponse.data,
                        loading: false,
                        loadingColor: 'blue',
                        loadSuccess: true,
                        msg: `Fetched ${userResponse.data.login}'s profile data!`
                    }
                })
            })
            .catch((userError) => {
                console.log(userError);
                dispatch({
                    type: AJAX_FAIL,
                    payload: {
                        data: [],
                        loading: false,
                        loadingColor: 'red',
                        loadSuccess: false,
                        msg: "GitHub cannot be reached at this time."
                    }
                })
            });
    }
}
