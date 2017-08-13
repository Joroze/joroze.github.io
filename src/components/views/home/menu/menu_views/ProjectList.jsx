import React, {
    Component
} from 'react';
import {
    Segment
} from 'semantic-ui-react';
import ProjectItem from './components/ProjectItem';
import {
    connect
} from 'react-redux';
import {
    performUserRepositoryRequest
} from './ProjectList.duck.js';

class ProjectList extends Component {

    componentDidMount() {
        const {
            user,
            loadUserRepositories
        } = this.props

        if (this.props.user.loadSuccess)
            loadUserRepositories(user.data.login);
    }

    render() {
        return (
            <div>
                <Segment
                    raised
                    padded='very'
                    loading={this.props.projects.loading}
                    color={this.props.projects.loadingColor}
                >
                    {this.props.projects.loadSuccess ?
                        (
                            <ProjectItem repos={this.props.projects.repos}/>
                        )
                    : (null)
                    }
                </Segment>
            </div>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserRepositories: (username) => dispatch(performUserRepositoryRequest(username))
    };
}

function mapStateToProps(state) {
    return {
        projects: state.projects,
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
