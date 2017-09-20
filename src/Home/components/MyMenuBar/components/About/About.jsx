import './About.css';

import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'
import UserCard from 'components/UserCard/UserCard'

export default function About(props) {
    return (
        <section className='about-section'>
            <Grid
                columns={2}
                container
                centered
            >
                <Grid.Column>
                    <UserCard/>
                </Grid.Column>
                <Grid.Column>
                    <Segment color='blue' raised>
                        <p>Jordan Rosenberg is a recent university graduate with a B.S. in Computer Science (Technical concentration).</p>
                        <p>Jordan is innovative, simplistic, and ambitious. He believes that any task is attainable with hard work and dedication.</p>
                        <p>During the course of his collegiate career, Jordan has developed a passion for building professional relationships and making a difference in the community.</p>
                        <p>Jordan is building on his personal and professional skills to become a valuable asset in the tech. industry.</p>
                    </Segment>
                </Grid.Column>
            </Grid>
            </section>
    );
}
