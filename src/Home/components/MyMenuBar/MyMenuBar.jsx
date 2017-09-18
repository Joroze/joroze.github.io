import './MyMenuBar.css';
import React, {
    Component
} from 'react';
import {
    Menu,
    Container
} from 'semantic-ui-react'

import JobList from './components/JobList/JobList';
import ProjectList from './components/ProjectList/ProjectList';
import About from './components/About/About';

export default class MyMenuBar extends Component {
    state = { activeItem: 'resume' }

    handleItemClick = (event, { name }) => this.setState({
        activeItem: name
    })

    render() {
        const { activeItem } = this.state

        return (
            <div>
                <Menu pointing inverted fluid widths={3}>
                    <Menu.Item
                        name='resume'
                        active={activeItem === 'resume'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
                <Container className="home-content">
                    { activeItem === 'resume' ?
                        <JobList />
                    : null
                    }
                    { activeItem === 'projects' ?
                        <ProjectList />
                    : null
                    }
                    { activeItem === 'about' ?
                        <About />
                    : null
                    }
                </Container>
            </div>
        )
    }
}
