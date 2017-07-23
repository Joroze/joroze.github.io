import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import JobItems from './components/JobItems';
import './JobList.css';

// const oneontaProgressValue = 100;
// const nielsenProgressValue = 100;
// const remedyProgressValue = 1;

export default class JobList extends Component {
    render(){
        return (
            <Segment raised padded color='blue'>
                <JobItems></JobItems>
            </Segment>
                );
            }
    }


/*
<Grid columns={3} divided>
    <Grid.Row className="jobPannel">
        <Grid.Column className="text-center">
            <h2><a href="https://www.remedypartners.com/" target="_blank" rel="noopener noreferrer"><img alt="Remedy Partners" src="https://www.remedypartners.com/wp-content/uploads/2016/08/solo_mark.png"></img>
            </a>
            </h2>
            <p>Jr. Software Engineer on the Front End team working with the MEAN Stack.</p>
            <Progress percent={remedyProgressValue} indicating />
        </Grid.Column>
        <Grid.Column className="text-center">
            <h2><a href="http://suny.oneonta.edu/" target="_blank" rel="noopener noreferrer"><img alt="SUNY Oneonta" src="http://suny.oneonta.edu/themes/de_theme/logo.svg" height="45" width="125"></img>
            </a>
            </h2>
            <p>A senior student studying Computer Science and Mathematics.</p>
            <Progress percent={oneontaProgressValue} label="Complete" />
        </Grid.Column>
        <Grid.Column className="text-center">
            <h2><a href="http://www.nielsen.com/" target="_blank" rel="noopener noreferrer"><img alt="Nielsen" src="http://www.nielsen.com/content/dam/nielsenglobal/us/images/logo.png" height="45" width="125"></img>
            </a>
            </h2>
            <p>Software
            Engineering Intern (Backend - CPS Delivery Team).</p>
            <Progress percent={nielsenProgressValue} label="Complete" />
        </Grid.Column>
    </Grid.Row>

    Copyright (c) 2017 Copyright Holder All Rights Reserved.
</Grid>
*/
