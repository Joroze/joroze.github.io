import './ProjectList.css';

import React, { Component } from 'react';
import {
    Segment,
    Table,
    Icon
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment'

import { getUserRepositories } from 'ducks/UserProfile.duck.js';

class ProjectList extends Component {
    componentDidMount() {
        const {
            user,
            getUserRepos
        } = this.props

        if (!user.isUserLoading) {
            getUserRepos();
        }
    }

    render() {
        const { user } = this.props

        return (
            <section className='project-list'>
                <Segment
                    raised
                    loading={user.isUserReposLoading}
                    color={user.isUserReposLoading ? 'orange' : 'blue'}
                >
                    {!user.isUserReposLoading ?
                        (
                            <Table striped singleLine fixed columns={5}>
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell>
                                            <Icon size='large' name='key'/>
                                        </Table.HeaderCell>
                                        <Table.HeaderCell>Repository</Table.HeaderCell>
                                        <Table.HeaderCell>Language</Table.HeaderCell>
                                        <Table.HeaderCell>Description</Table.HeaderCell>
                                        <Table.HeaderCell>Updated</Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    {user.repositories.map(function(repo){
                                        const parsedDate = moment(repo.updated_at, "YYYYMMDD").fromNow();

                                        return(
                                            <Table.Row key={repo.id}>
                                                <Table.Cell>
                                                    {repo.private
                                                        ? <Icon link size='large' name='lock' />
                                                        : <Icon link size='large' name='unlock' />
                                                    }
                                                </Table.Cell>
                                                <Table.Cell>
                                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                                        {repo.name}
                                                    </a>
                                                </Table.Cell>
                                                <Table.Cell>{repo.language}</Table.Cell>
                                                <Table.Cell title={repo.description}>{repo.description}</Table.Cell>
                                                <Table.Cell>{parsedDate}</Table.Cell>
                                            </Table.Row>
                                        )
                                    })}
                                </Table.Body>
                                <Table.Footer>
                                    <Table.Row>
                                        <Table.HeaderCell></Table.HeaderCell>
                                        <Table.HeaderCell>{user.repositories.length} Projects</Table.HeaderCell>
                                        <Table.HeaderCell />
                                        <Table.HeaderCell />
                                        <Table.HeaderCell />
                                    </Table.Row>
                                </Table.Footer>
                            </Table>
                        )
                    : null
                    }
                </Segment>
            </section>

        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserRepos: () => dispatch(getUserRepositories())
    };
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
