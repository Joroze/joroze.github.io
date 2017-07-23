import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import MyNavBar from './components/navbars/MyNavBar';
import MyJumbotron from './components/MyJumbotron';
import Home from './components/views/home/Home';
import MyFooter from './components/footer/MyFooter';
import logo from 'img/logo.png'



class App extends Component {
  render() {
    return (
            <Router>
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
                            'Android',
                            'Atlassian Suite',
                            'Git',
                            'REST API',
                            'Web Development',
                            'Front End',
                            'Back End'

                        ]}></MyJumbotron>
                        <Switch>
                            <Route component={Home}/>
                        </Switch>
                        <br></br>
                        <MyFooter logo={logo}></MyFooter>

                    </div>
                </div>
            </Router>
    );
  }
}



export default App;
