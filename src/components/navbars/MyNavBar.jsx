import React, { Component } from 'react';
import { Menu, Dropdown} from 'semantic-ui-react'

import './MyNavBar.css';

export default class MyNavBar extends Component {

    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {

    const { activeItem } = this.state;

    return (
            <Menu fixed='top' inverted>
                {/* <Menu.Item>
                    <Button size='small' color='linkedin' animated href='https://www.linkedin.com/in/joroze' target="_blank" rel="noopener noreferrer">
                        <Button.Content visible>
                    <Icon name='linkedin' /> LinkedIn
                        </Button.Content>
                        <Button.Content hidden>
                    <Icon name='external' />
                        </Button.Content>
                    </Button>
                    </Menu.Item>
                    <Menu.Item>
                    <Button size='small' color='grey' animated href='https://github.com/Joroze' target="_blank" rel="noopener noreferrer">
                        <Button.Content visible>
                    <Icon name='github' /> GitHub
                        </Button.Content>
                        <Button.Content hidden>
                    <Icon name='external' />
                        </Button.Content>
                    </Button>
                    </Menu.Item>
                */}

                <Menu.Item href='/'>
                    <img className='logo'alt='Joroze' src={this.props.logo}></img>
                    Resume
                </Menu.Item>

                {/*
                    }<Menu.Item
                    name='home'
                    active={activeItem === 'home'}
                    onClick={this.handleItemClick}
                    >
                    Home
                    </Menu.Item>
                */}
                <Menu.Menu position='right'>
                    <Dropdown simple item text='More'>
                        <Dropdown.Menu>
                            <Dropdown.Header>Contact</Dropdown.Header>
                            <Dropdown.Item href='https://www.linkedin.com/in/joroze' target="_blank" rel="noopener noreferrer" icon='linkedin square' text='Message' />
                            <Dropdown.Divider/>
                            <Dropdown.Header>Projects</Dropdown.Header>
                            <Dropdown.Item href='https://github.com/Joroze' target="_blank" rel="noopener noreferrer" icon='github square' text='GitHub' />
                            <Dropdown.Item href="http://joroze.com/AI/" target="_blank" rel="noopener noreferrer" icon='grid layout' text='Shortest Path AI' />
                            <Dropdown.Item href="http://joroze.com/Roomifer" target="_blank" rel="noopener noreferrer" icon='android' text='Roomifer App' />
                            <Dropdown.Divider/>
                            <Dropdown.Header>Archived Websites</Dropdown.Header>
                            <Dropdown.Item href="http://joroze.com/JResume/" target="_blank" rel="noopener noreferrer" icon='archive' text='Website 1' />
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
);
}
}
