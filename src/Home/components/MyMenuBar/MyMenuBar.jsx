import './MyMenuBar.css';

import { connect } from 'react-redux';
import React, {
    Component
} from 'react';
import {
    Menu,
    Container
} from 'semantic-ui-react'

import About from './components/About/About';
import JobList from './components/JobList/JobList';
import ProjectList from './components/ProjectList/ProjectList';
import { sectionChange } from 'ducks/HomeNavigation.duck.js'

class MyMenuBar extends Component {
    handleSectionClick = (event, { name }) => this.props.changeSection(name);

    render() {
        const { activeSection } = this.props

        return (
            <div>
                <Menu pointing inverted fluid widths={3}>
                    <Menu.Item
                        name='resume'
                        active={activeSection === 'resume'}
                        onClick={this.handleSectionClick}
                    />
                    <Menu.Item
                        name='projects'
                        active={activeSection === 'projects'}
                        onClick={this.handleSectionClick}
                    />
                    <Menu.Item
                        name='about'
                        active={activeSection === 'about'}
                        onClick={this.handleSectionClick}
                    />
                </Menu>
                <Container className="home-content">
                    { activeSection === 'resume' ?
                        <JobList />
                    : null
                    }
                    { activeSection === 'projects' ?
                        <ProjectList />
                    : null
                    }
                    { activeSection === 'about' ?
                        <About />
                    : null
                    }
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        activeSection: state.homeNavigation.activeSection
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSection: (section) => dispatch(sectionChange(section))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyMenuBar);
