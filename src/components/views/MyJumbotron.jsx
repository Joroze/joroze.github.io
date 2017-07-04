import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import MySplitButton from '../buttons/MySplitButton';

class MyJumbotron extends Component {
    render(){
        return (
            <Jumbotron>
                <Grid>
                    <br></br>
                    <h2>Jordan is a programmer</h2>
                    <MySplitButton></MySplitButton>
                </Grid>
            </Jumbotron>
        );
    }
}

export default MyJumbotron
