import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

import MyNavBar from './components/navbars/MyNavBar';
import MyNavBarMiddle from './components/navbars/MyNavBarMiddle';
import MyJumbotron from './components/views/MyJumbotron';
import Home from './components/views/home/Home';
import Projects from './components/views/projects/Projects';
import About from './components/views/about/About';

class App extends Component {
  render() {
    return (
            <Router>
                <div>
                    <MyNavBar></MyNavBar>
                    <MyJumbotron></MyJumbotron>
                    <MyNavBarMiddle></MyNavBarMiddle>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                    </Switch>
                </div>
            </Router>
    );
  }
}



export default App;
