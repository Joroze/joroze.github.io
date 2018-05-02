import './ProjectList.css';

import React from 'react';
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

function HeaderCell({onClick, sortBy, children, ...rest}){
    const handleOnClick = () => onClick && onClick(sortBy);

    return (
        <Table.HeaderCell onClick={handleOnClick} {...rest}>
            {children}
        </Table.HeaderCell>
    );
}

function ProjectList(props) {
    const {
        getUserRepos,
        user,
        openLinkModal
    } = props

    function handleOnRepoNameClick(event) {
        event.preventDefault();
        openLinkModal(event.target.href);
    }

    function handleSort(sortBy) {
        const sortDirection = user.queryParams.direction === 'asc' ? 'desc' : 'asc';
        getUserRepos(null, sortBy, sortDirection);
    }

    function handleRefreshRepoListOnClick() {
        getUserRepos();
    }

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
                                <HeaderCell
                                    sortBy='full_name'
                                    onClick={handleSort}
                                    sorted={direction}
                                >
                                    Repository
                                </HeaderCell>
                                <HeaderCell>Language</HeaderCell>
                                <HeaderCell>Description</HeaderCell>
                                <HeaderCell
                                    onClick={handleSort}
                                    sortBy='pushed'
                                    sorted={direction}
                                >
                                    Last Activity
                                </HeaderCell>
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
                                        return (
                                            <Table.Row key={repo.id}>
                                                <Table.Cell>
                                                    <a href={repo.html_url} onClick={handleOnRepoNameClick}>
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
                                <HeaderCell>{user.repositories.length || 'Loading'} Projects</HeaderCell>
                                <HeaderCell colSpan='3'>
                                    <Button
                                        color={user.isUserReposLoading ? 'orange' : 'blue'}
                                        disabled={user.isUserReposLoading}
                                        floated='right'
                                        loading={user.isUserReposLoading}
                                        onClick={handleRefreshRepoListOnClick}
                                        icon='refresh'
                                    />
                                </HeaderCell>
                            </Table.Row>
                        </Table.Footer>
                    </Table>
                </Segment>
        </section>
    );
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
