import './MyMenuBar.css';
import React, {
    Component
} from 'react';
import {
    Menu,
    Container
} from 'semantic-ui-react'

import JobList from './menu_views/JobList';
import ProjectList from './menu_views/ProjectList';
import About from './menu_views/About';

export default class MyMenuBar extends Component {
    state = {
        activeItem: 'resume'
    }

    handleItemClick = (e, {
        name
    }) => this.setState({
        activeItem: name
    })

    render() {
        const {
            activeItem
        } = this.state

        return (
            <div>
          <Menu pointing inverted fluid widths={3}>
              <Menu.Item name='resume' active={activeItem === 'resume'} onClick={this.handleItemClick} />
              <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
              <Menu.Item name='about' active={activeItem === 'about'} onClick={this.handleItemClick} />
          </Menu>
          <Container>
              {activeItem === 'resume' ?
                  <JobList /> :
                  null
              }
              {activeItem === 'projects' ?
                  <ProjectList /> :
                  null
              }
              {activeItem === 'about' ?
                  <About /> :
                  null
              }
          </Container>
      </div>
        )
    }
}
