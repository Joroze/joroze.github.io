import './AppBody.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import { Icon, Message, Transition } from 'semantic-ui-react'

import { dismissGlobalAlert } from 'ducks/GlobalAlert.duck.js';
import { getUserProfile } from 'ducks/UserProfile.duck.js';
import MyJumbotron from 'components/MyJumbotron/MyJumbotron';
import Home from 'Home/Home';
import MyFooter from 'components/MyFooter/MyFooter';
import logo from 'img/logo.png'

class AppBody extends Component {

    componentDidMount() {
        const {
            getUser
        } = this.props;

        getUser('joroze');
    }

    componentWillUnmount() {
        // to prevent memory leaks
        this.typed.destroy();
    }


    render() {
        const { alertList, dismissAlert } = this.props

        const handleOnDismissAlert = (e, alert) => {
            dismissAlert(alert.id);
        }

        return (
            <section className='app-content'>
                {
                    alertList.map(function(alertItem){
                        return (
                            <Transition
                                transitionOnMount
                            >
                                <Message
                                    key={alertItem.id}
                                    id={alertItem.id}
                                    color={alertItem.color}
                                    floating
                                    icon
                                    onDismiss={handleOnDismissAlert}
                                >
                                    <Icon name='warning' />
                                    <Message.Content>
                                        <Message.Header>Just one second</Message.Header>
                                        {alertItem.message}
                                    </Message.Content>
                                </Message>
                            </Transition>
                        )
                    })
                }
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
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        alertList: state.globalAlerts.alertList
    };
}


function mapDispatchToProps(dispatch) {
    return {
        dismissAlert: (alertId) => dispatch(dismissGlobalAlert(alertId)),
        getUser: (username) => dispatch(getUserProfile(username))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);
