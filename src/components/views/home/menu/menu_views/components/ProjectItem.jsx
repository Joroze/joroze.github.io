import React, {
    Component
} from 'react'
import {
    Item
} from 'semantic-ui-react'

export default class ProjectItem extends Component {
    render() {
        return (
            <Item.Group divided unstackable>
                {this.props.repos.map(function(repo){
                    let parsedDate = new Date(repo.updated_at).toString();

                        return(
                            <Item key={repo.id}>
                                <Item.Image size='tiny' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' />
                                <Item.Content verticalAlign='middle'>
                                    <Item.Header href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</Item.Header>
                                    <Item.Meta>
                                        <span className='jobrole'>{repo.language}</span>
                                    </Item.Meta>
                                    <Item.Description>{repo.description}</Item.Description>
                                    <Item.Extra>Last updated: {`${parsedDate}`}</Item.Extra>
                                </Item.Content>
                            </Item>
                        )
                    })}

                </Item.Group>
        );
    }
}
