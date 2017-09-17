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

const UserCard = (props) => {
    const {
        user
    } = props;

    return !user.isUserLoading ? (
            <Card color='blue' centered raised>
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
                        {user.userData.bio}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user' />
                    {user.userData.hireable ? "Available for hire" : "Currently unavailable for hire"}
                </Card.Content>
            </Card>
        ) :
        (
            <Card color='orange' centered raised>
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

export default connect(mapStateToProps)(UserCard);
