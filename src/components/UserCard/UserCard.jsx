import React from 'react'
import {
    connect
} from 'react-redux';
import {
    Card,
    Icon,
    Image,
    Dimmer,
    Loader
} from 'semantic-ui-react'

import { openExternalLinkModal } from 'ducks/ExternalLinkModal.duck.js';

const UserCard = (props) => {
    const {
        user,
        openLinkModal
    } = props;

    return !user.isUserLoading ? (
            <Card centered raised>
                <Image src={user.userData.avatar_url} />
                <Card.Content>
                    <Card.Header>
                        {user.userData.name}
                    </Card.Header>
                    <Card.Meta>
                        <span>
                            <Icon name='suitcase' /> {user.userData.company}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        <strong>{user.userData.login}</strong>
                        {' - '}
                        <a onClick={() => openLinkModal(user.userData.html_url)}>
                            GitHub Profile
                        </a>
                        <p>{user.userData.location}</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name={user.userData.hireable ? 'announcement' : 'minus square outline'} />
                    {user.userData.hireable ? "Available for hire" : "Currently unavailable for hire"}
                </Card.Content>
            </Card>
        ) :
        (
            <Card color='orange' raised>
                <Card.Content>
                    <Card.Meta>
                        <span>
                            <Icon name='suitcase' />
                        </span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                </Card.Content>
                <Dimmer active inverted>
                    <Loader inverted content={user.loadingMessage}/>
                </Dimmer>
            </Card>
        )
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openLinkModal: (url) => dispatch(openExternalLinkModal(url))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCard);
