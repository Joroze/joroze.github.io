import {
    applyMiddleware,
    combineReducers,
    createStore
} from 'redux';
import thunk from 'redux-thunk';

import UserProfileReducer from './components/MyJumbotron.duck.js';
import RepositoryReducer from './components/views/home/menu/menu_views/ProjectList.duck.js';

const allReducers = combineReducers({
    user: UserProfileReducer,
    projects: RepositoryReducer
});

const middleWare = applyMiddleware(thunk);
const store = createStore(allReducers, middleWare);

export default function() {
    return store;
}
