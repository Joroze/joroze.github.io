import './App.css';
import React, {
    Component
} from 'react';
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import MyNavBar from './components/navbars/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import Home from './components/views/home/Home';
import MyFooter from './components/footer/MyFooter';
import logo from './img/logo.png'

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
                        <MyNavBar logo={logo}></MyNavBar>
                        <div className='App-content'>
                            <MyJumbotron strings={[
                                'Java',
                                'Node.js',
                                'C++',
                                'C',
                                'JavaScript',
                                'Yarn',
                                'NPM',
                                'Android Development',
                                'SQL',
                                'Git',
                                'AJAX',
                                'React.js',
                                'AngularJS',
                                'JIRA',
                                'Port Forwarding',
                                'Web Development',
                                'HTML5',
                                'CSS3',
                                'Data Structures',
                                'Object Oriented Programming',
                                'Functional Programming',
                                'Agile Methodologies',
                                'Linux',
                                'Windows',
                                'macOS',
                                'Shell Scripting',
                                'Firebase'
                            ]}></MyJumbotron>
                            <Switch>
                                <Route component={Home}/>
                            </Switch>
                            <br></br>
                            <MyFooter logo={logo}></MyFooter>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
