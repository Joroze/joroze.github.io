import './App.css';
import React, {
    Component
} from 'react';
import {
    HashRouter as Router,
} from "react-router-dom";

import MyNavBar from './components/MyNavBar/MyNavBar';
import logo from './img/logo.png'
import AppBody from './AppBody/AppBody';

import {
    Provider
} from 'react-redux';
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store()}>
                <Router basename="/">
                    <div>
                        <MyNavBar logo={logo}/>
                        <AppBody/>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
