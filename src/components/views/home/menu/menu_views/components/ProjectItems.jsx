import React from 'react'
import moment from 'moment'
import {
    Table,
    Icon
} from 'semantic-ui-react'

const ProjectItem = (props) => (
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
            {props.repos.map(function(repo){
                const parsedDate = moment(repo.updated_at, "YYYYMMDD").fromNow();

                return(
                    <Table.Row key={repo.id}>
                        <Table.Cell>
                            {repo.private
                                ? <Icon link size='large' name='lock' />
                                : <Icon link size='large' name='unlock' />
                            }
                        </Table.Cell>
                        <Table.Cell selectable>
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
                    <Table.HeaderCell>{props.repos.length} Projects</Table.HeaderCell>
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                    <Table.HeaderCell />
                </Table.Row>
            </Table.Footer>
        </Table>
);

export default ProjectItem;
