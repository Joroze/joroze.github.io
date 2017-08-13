import React from 'react'
import {
    connect
} from 'react-redux';
import {
    Card,
    Icon,
    Image
} from 'semantic-ui-react'

const UserCard = (props) => {
    const {
        user
    } = props;

    return user.loadSuccess ? (
        <Card color={user.loadingColor} centered raised>
            <Image src={user.data.avatar_url} />
            <Card.Content>
                <Card.Header>
                    {user.data.name}
                </Card.Header>
                <Card.Meta>
                    <span>
                        <Icon name='suitcase' /> {user.data.company}
                    </span>
                </Card.Meta>
                <Card.Description>
                    {user.data.bio}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {user.data.hireable ? "Available for hire" : "Currently unavailable for hire"}
            </Card.Content>
        </Card>
    ) : (
        <Card color={user.loadingColor} centered raised>

            <Card.Content>
                <Card.Header className='text-center'>
                    Status
                </Card.Header>

            </Card.Content>
            {
                user.loading
                    ?  (
                        <Card.Content className='text-ajax-loading' >
                            <Icon loading name='refresh' />
                            {user.msg}
                        </Card.Content>
                    )
                    :   (
                        <Card.Content className='text-ajax-failure' >
                            <Icon name='warning circle' />
                            {user.msg}
                        </Card.Content>
                    )
            }
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(UserCard);
