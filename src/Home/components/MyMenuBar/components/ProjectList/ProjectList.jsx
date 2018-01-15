import './ProjectList.css';

import React, { Component } from 'react';
import {
    Segment,
    Table,
    Button,
    Dimmer,
    Loader
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import moment from 'moment'

import { getUserRepositories } from 'ducks/UserProfile.duck.js';
import { openExternalLinkModal } from 'ducks/ExternalLinkModal.duck.js';

class ProjectList extends Component {
    handleSort = clickedColumn => () => {
        const { getUserRepos, user } = this.props
        const direction = user.queryParams.direction === 'asc' ? 'desc' : 'asc';
        getUserRepos(null, clickedColumn, direction)
    }

    handleRefreshRepoListOnClick = clickedButton => () => {
        const { getUserRepos } = this.props
        getUserRepos();
    }

    render() {
        const { openLinkModal, user } = this.props
        const direction = user.queryParams.direction + 'ending';

        return (
            <section className='project-list'>
                <Segment
                    raised
                    color={user.isUserReposLoading ? 'orange' : 'blue'}
                >
                    <Table sortable striped singleLine fixed columns={5}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell
                                    onClick={this.handleSort('full_name')}
                                    sorted={direction}
                                >
                                    Repository
                                </Table.HeaderCell>
                                <Table.HeaderCell>Language</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell
                                    onClick={this.handleSort('pushed')}
                                    sorted={direction}
                                >
                                    Last Activity
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            { user.isUserReposLoading
                                ? (
                                    <Table.Row>
                                        <Table.Cell colSpan='4'>
                                            <Dimmer
                                                active
                                                inverted
                                            >
                                                <Loader size='large' inverted />
                                            </Dimmer>
                                        </Table.Cell>
                                    </Table.Row>
                                )
                                : (
                                    user.repositories.map(function(repo){
                                        const parsedDate = moment(repo.pushed_at).fromNow();
                                        const handleOnClick = () => openLinkModal(repo.html_url);
                                        return(
                                            <Table.Row key={repo.id}>
                                                <Table.Cell>
                                                    <a onClick={handleOnClick}>
                                                        {repo.name}
                                                    </a>
                                                </Table.Cell>
                                                <Table.Cell>{repo.language}</Table.Cell>
                                                <Table.Cell title={repo.description}>{repo.description}</Table.Cell>
                                                <Table.Cell>{parsedDate}</Table.Cell>
                                            </Table.Row>
                                        )
                                    })
                                )
                            }
                        </Table.Body>
                        <Table.Footer>
                            <Table.Row>
                                <Table.HeaderCell>{user.repositories.length || 'Loading'} Projects</Table.HeaderCell>
                                <Table.HeaderCell colSpan='3'>
                                    <Button
                                        color={user.isUserReposLoading ? 'orange' : 'blue'}
                                        disabled={user.isUserReposLoading}
                                        floated='right'
                                        loading={user.isUserReposLoading}
                                        onClick={this.handleRefreshRepoListOnClick()}
                                        icon='refresh'
                                    />
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Segment>
            </section>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserRepos: (username, sort, direction) => dispatch(getUserRepositories(username, sort, direction)),
        openLinkModal: (url) => dispatch(openExternalLinkModal(url))
    };
}

function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);