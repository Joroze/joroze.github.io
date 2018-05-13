import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from "react-router-dom";

import MyNavBar from './components/MyNavBar/MyNavBar';
import logo from './img/logo.png'
import AppBody from './AppBody/AppBody';
import store from './store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <MyNavBar logo={logo}/>
                        <Route path="/" exact component={AppBody}/>
                    </React.Fragment>
                </Router>
            </Provider>
        );
    }
}

export default App;