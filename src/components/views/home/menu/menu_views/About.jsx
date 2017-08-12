import React from 'react';
import {
    Segment
} from 'semantic-ui-react'
import UserCard from 'components/cards/UserCard'

export default function About(props) {
    return (
        <Segment secondary raised color='blue'>
            <UserCard></UserCard>
        </Segment>
    );
}
