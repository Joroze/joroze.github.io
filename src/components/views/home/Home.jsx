import React, { Component } from 'react';
import { Grid, Col, Row, ProgressBar } from 'react-bootstrap';
import './home.css';

let oneontaProgressValue = 100;
let nielsenProgressValue = 100;
let remedyProgressValue = 1;

class Home extends Component {
    render(){
        return (
            <Grid>
                <Row className="jobPannel">
                    <Col sm={4} className="text-center">
                        <h2><a href="https://www.remedypartners.com/" target="_blank" rel="noopener noreferrer"><img alt="Remedy Partners" src="https://www.remedypartners.com/wp-content/uploads/2016/08/solo_mark.png"></img>
                        </a>
                        </h2>
                        <p class="text-center">Currently a Jr. Software Engineer for the Front End</p>
                        <ProgressBar bsStyle="info" now={remedyProgressValue} label="" />
                    </Col>
                    <Col sm={4} className="text-center">
                        <h2><a href="http://suny.oneonta.edu/" target="_blank" rel="noopener noreferrer"><img alt="SUNY Oneonta" src="http://suny.oneonta.edu/themes/de_theme/logo.svg" height="45" width="125"></img>
                        </a>
                        </h2>
                        <p class="text-center">A senior student studying Computer Science and Mathematics.</p>
                        <ProgressBar bsStyle="success" now={oneontaProgressValue} label="Complete" />
                    </Col>
                    <Col sm={4} className="text-center">
                        <h2><a href="http://www.nielsen.com/" target="_blank" rel="noopener noreferrer"><img alt="Nielsen" src="http://www.nielsen.com/content/dam/nielsenglobal/us/images/logo.png" height="45" width="125"></img>
                        </a>
                        </h2>
                        <p class="text-center">Software
                        Engineering Intern (Backend - CPS Delivery Team)</p>
                        <ProgressBar bsStyle="success" now={nielsenProgressValue} label="Complete" />
                    </Col>
                </Row>

                Copyright (c) 2017 Copyright Holder All Rights Reserved.
            </Grid>
                );
                }
                }

                export default Home
