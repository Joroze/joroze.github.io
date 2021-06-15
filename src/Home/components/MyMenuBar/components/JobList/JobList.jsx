import { connect } from 'react-redux';
import React from 'react';
import moment from 'moment'
import {
    Divider,
    Item,
    Popup,
    Segment
} from 'semantic-ui-react'

import { openExternalLinkModal } from 'ducks/ExternalLinkModal.duck.js';

import signifyLogo from 'img/signifyLogo.png';
import oneontaLogo from 'img/oneontaLogo.png';
import nielsenLogo from 'img/nielsenLogo.png';

function JobList(props) {
    const { openLinkModal } = props;

    function handleOnItemHeaderClick(event) {
        event.preventDefault();
        openLinkModal(event.target.href)
    }

    return (
        <Segment raised>
            <Item.Group divided >
                <Item>
                    <Item.Image size='tiny' src={signifyLogo} />
                    <Item.Content>
                        <Item.Header
                            as='a'
                            content='Software Engineer'
                            href='https://www.remedypartners.com/'
                            onClick={handleOnItemHeaderClick}
                        />
                        <Item.Meta>
                            <span>Signify Health</span>
                        </Item.Meta>
                        <Item.Meta>
                            <span>May 2017 - Present • {moment([2017, 5 - 1, 18]).fromNow(true)} </span>
                        </Item.Meta>
                        <Item.Description>
                            • Architected the transition of multiple Front End web apps from AngularJS to React. (Redux, Express, Webpack, ES6, RxJS)
                            <br/>
                            <br/>
                            • Lead efforts in significantly improving our ETL processing time from days to minutes, through the use of (serverless) Spark.
                            <br/>
                            <br/>
                            • Improved initial load time of Front End web apps by up to 90%
                            <br/>
                            <br/>
                            • Utilize routing, promises, environment configuration, and custom React components in the application to make it lightweight with reusability, readability, and maintainability
                            <br/>
                            <br/>
                            • Build and maintain backend infrastructure & microservices with powerful API workflows, and flexible GraphQL schemas
                            <br/>
                            <br/>
                            • Implemented dynamic web app configuration to cut down deployment costs
                            <Divider/>
                            <strong>Languages</strong>: Node.js (ES6/React/AngularJS), Python, Golang)
                            <Divider/>
                            <strong>Technologies</strong>: VSCode, IntelliJ, Git, Express, Webpack, mySQL, JWT, Maven, Bamboo, JIRA
                        </Item.Description>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image size='tiny' src={nielsenLogo} />
                    <Item.Content>
                        <Item.Header
                            as='a'
                            content='BUY - Software Engineering Intern'
                            href='http://www.nielsen.com/'
                            onClick={handleOnItemHeaderClick}
                        />
                        <Item.Meta>
                            <span>Nielsen</span>
                        </Item.Meta>
                        <Item.Meta>
                            <span>Jun 2016 - Aug 2016 • 3 Months </span>
                        </Item.Meta>
                        <Item.Description>
                            Software Engineer internship for the
                            <Popup
                                trigger={<a> CPS </a>}
                                content='Consumer Panel Service'
                                size='tiny'
                            />
                            Delivery team at Nielsen.

                            Full stack development of
                            <Popup
                                trigger={<a> CASE </a>}
                                content='Consumer and Shopper Explorer'
                                size='tiny'
                            />
                            application through Agile methodologies.
                            <Divider/>
                            <strong>Responsible for</strong>:
                            <br/>
                            <br/>
                            • Designing/implementing new features in the back-end of the CASE application
                            <br/>
                            <br/>
                            • Automating the flow of data processed by CASE to various data pools in an efficient manner
                            <br/>
                            <br/>
                            • Unit testing various programs for Windows and Linux compatibility, refactoring legacy code and obsolete dependencies
                            <br/>
                            <br/>
                            • Documenting legacy software and code
                            <Divider/>
                            <strong>Languages</strong>: C/C++, Java, shell scripting, SQL
                            <Divider/>
                            <strong>Tools utilized</strong>: Git, IntelliJ, Hadoop, Red Hat Linux, Gradle
                        </Item.Description>
                    </Item.Content>
                </Item>

                <Item>
                    <Item.Image size='tiny' src={oneontaLogo} />
                    <Item.Content>
                        <Item.Header
                            as='a'
                            content='Computer Science'
                            href='http://suny.oneonta.edu/'
                            onClick={handleOnItemHeaderClick}
                        />
                        <Item.Meta>
                            <span>SUNY Oneonta</span>
                        </Item.Meta>
                        <Item.Meta>
                            <span>2013 - 2017 • 4 Years </span>
                        </Item.Meta>
                        <Item.Description>
                            <strong>Bachelors of Science</strong>
                            <br/>
                            • Major -
                            <Popup
                                trigger={<a> Computer Science</a>}
                                content='w/ a Technical Concentration'
                                size='tiny'
                            />
                            <br/>
                            • Minor - Mathematics
                            <Divider/>
                            <strong>Honors/Awards</strong>:
                            <br/>
                            <br/>
                            •
                            <Popup
                                trigger={<a> Outstanding Academic Performance</a>}
                                content='Honors Award from Math, Computer Science, & Statistics Dept.'
                                size='tiny'
                            />
                            <br/>
                            <br/>
                            • <a onClick={() => openLinkModal('http://oneonta.meritpages.com/achievements/12-SUNY-Oneonta-Freshmen-Receive-Scholarships-Through-New-Program/14408')}>
                                Critical MaSS: Math and Science Scholars
                            </a>
                            <br/>
                            <br/>
                            • Dean's List - Fall <a onClick={() => openLinkModal('http://oneonta.meritpages.com/achievements/More-than-1-500-Students-Named-to-Fall-2015-Dean-s-List/51227')}>2015</a> & <a onClick={() => openLinkModal('http://oneonta.meritpages.com/achievements/More-than-1-500-Students-Named-to-Fall-2016-Dean-s-List/67236')}>2016</a>
                            <Divider/>
                            <strong>Clubs/Activities</strong>:
                            <br/>
                            <br/>
                            • Teacher's Assistant for Fundamental of Programming II
                            <br/>
                            <br/>
                            • Computer Programmers United
                            <br/>
                            <br/>
                            • Into The Streets
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        </Segment>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        openLinkModal: (url) => dispatch(openExternalLinkModal(url))
    };
}

export default connect(null, mapDispatchToProps)(JobList);