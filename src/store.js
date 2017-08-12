
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';

import UserProfileReducer from './reducers/reducer-userprofile';
import ProjectReducer from './reducers/reducer-projects';

const allReducers = combineReducers({
    user: UserProfileReducer,
    projects: ProjectReducer
});

const middleWare = applyMiddleware(thunk, createLogger());
const store = createStore(allReducers, middleWare);

export function performRequest(username) {
    store.dispatch((dispatch) => {
        dispatch({
            type: "userprofile/AJAX_LOADING",
            payload: {
                loading: true,
                loadingColor: 'orange',
                msg: "We are fetching Jordan's profile content for you."
            }
        })
        dispatch({
            type: "projects/AJAX_LOADING",
            payload: {
                loading: true,
                loadingColor: 'orange',
                msg: "We are fetching Jordan's projects for you."
            }
        })

        axios.get(`/users/${username}`, {
            baseURL: 'https://api.github.com',
          })
          .then((userResponse) => {
                  dispatch({
                      type: "userprofile/AJAX_SUCCESS",
                      payload: {
                          data: userResponse.data,
                          loading: false,
                          loadingColor: 'blue',
                          loadSuccess: true,
                          msg: `Fetched ${userResponse.data.login}'s profile data!`
                      }
                  })

                  axios.get(`/users/${userResponse.data.login}/repos`, {
                      baseURL: 'https://api.github.com',
                      params:{
                          sort: 'updated',
                          direction: 'asc'
                      }
                    })
                    .then((repoDataResponse => {
                        dispatch({
                            type: "projects/AJAX_SUCCESS",
                            payload: {
                                repos: repoDataResponse.data,
                                loading: false,
                                loadingColor: 'blue',
                                loadSuccess: true,
                                msg: `Fetched ${userResponse.data.login}'s repository data!`
                            }
                        })
                    }))
                    .catch((repoDataError) => {
                      console.log(repoDataError);
                      dispatch({
                          type: "projects/AJAX_FAIL",
                          payload: {
                              repos: [],
                              loading: false,
                              loadingColor: 'red',
                              loadSuccess: false,
                              msg: "GitHub cannot be reached."
                          }
                      })
                    });
          })
          .catch((userError) => {
            console.log(userError);
            dispatch({
                type: "userprofile/AJAX_FAIL",
                payload: {
                    user: [],
                    loading: false,
                    loadingColor: 'red',
                    loadSuccess: false,
                    msg: "GitHub cannot be reached."
                }
            })
          });
    })
}

export default function(){
    return store;
}
