import React, {
    Component
} from 'react';
import {
    Menu,
    Dropdown
} from 'semantic-ui-react'

import './MyNavBar.css';

export default class MyNavBar extends Component {
    render() {
        return (
            <Menu className='myNavBar' fixed='top' inverted>
                <Menu.Item href='/'>
                    <img className='myNavBarLogo' alt='Joroze' src={this.props.logo}></img>
                    Resume
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Dropdown item text='More'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Contact</Dropdown.Header>
                            <Dropdown.Item href='https://www.linkedin.com/in/joroze' target="_blank" rel="noopener noreferrer" icon='linkedin square' text='Message' />
                            <Dropdown.Divider/>
                            <Dropdown.Header>Projects</Dropdown.Header>
                            <Dropdown.Item href='https://github.com/Joroze' target="_blank" rel="noopener noreferrer" icon='github square' text='GitHub' />
                            <Dropdown.Item href="https://chat.joroze.com" target="_blank" rel="noopener noreferrer" icon='chat' text='Chat Room Web App' />
                            <Dropdown.Item href="https://viewshows.joroze.com" target="_blank" rel="noopener noreferrer" icon='video' text='Video Web App' />
                            <Dropdown.Item href="https://ai.joroze.com" target="_blank" rel="noopener noreferrer" icon='grid layout' text='Shortest Path Web App' />
                            <Dropdown.Item href="https://roomifer.joroze.com" target="_blank" rel="noopener noreferrer" icon='android' text='Roomifer App' />
                            <Dropdown.Divider/>
                            <Dropdown.Header>Archived Websites</Dropdown.Header>
                            <Dropdown.Item href="http://joroze.com/JResume/" target="_blank" rel="noopener noreferrer" icon='archive' text='v1' />
                            <Dropdown.Item href="http://joroze.com/JResume2/" target="_blank" rel="noopener noreferrer" icon='archive' text='v2' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
        );
    }
}
