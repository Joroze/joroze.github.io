import './AppBody.css';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon, Message, Transition } from 'semantic-ui-react'

import { dismissGlobalAlert } from 'ducks/GlobalAlert.duck.js';
import {
    getUserProfile,
    getUserRepositories
} from 'ducks/UserProfile.duck.js';
import ExternalLinkModal from 'components/ExternalLinkModal/ExternalLinkModal';
import MyJumbotron from 'components/MyJumbotron/MyJumbotron';
import Home from 'Home/Home';
import MyFooter from 'components/MyFooter/MyFooter';
import logo from 'img/logo.png'

class AppBody extends Component {
    componentDidMount() {
        const {
            getUser,
            getUserRepos
        } = this.props;

        const USERNAME = 'joroze'
        getUser(USERNAME);
        getUserRepos(USERNAME);
    }

    componentWillUnmount() {
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        const { alertList, dismissAlert } = this.props

        return (
            <section className='app-content'>
                <Transition.Group>
                    {
                        alertList.map(function(alertItem){
                            function handleOnDismissAlert(){
                                dismissAlert(alertItem.id);
                            }

                            return (
                                <Message
                                    key={alertItem.id}
                                    color={alertItem.color}
                                    floating
                                    icon
                                    onDismiss={handleOnDismissAlert}
                                >
                                    <Icon name='warning' />
                                    <Message.Content>
                                        <Message.Header>
                                            {alertItem.message}
                                        </Message.Header>
                                    </Message.Content>
                                </Message>
                            )
                        })
                    }
                </Transition.Group>
                <ExternalLinkModal/>
                <MyJumbotron strings={[
                    'Java',
                    'Node.js',
                    'C, C++',
                    'JavaScript',
                    'Yarn, NPM',
                    'Android',
                    'MongoDB, MySQL',
                    'Git',
                    'AJAX',
                    'React, Redux',
                    'AngularJS',
                    'HTML5, CSS3',
                    'Object Oriented Programming',
                    'Agile',
                    'Linux, MacOS, Windows',
                    'Shell Scripting',
                    'Google Firebase'
                ]}/>
                <Home/>
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
        getUser: (username) => dispatch(getUserProfile(username)),
        getUserRepos: (username, sort, direction) => dispatch(getUserRepositories(username, sort, direction))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);