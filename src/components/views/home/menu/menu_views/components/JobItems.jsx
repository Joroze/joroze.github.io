import React from 'react'
import moment from 'moment'
import {
    Item,
    Popup,
    Divider
} from 'semantic-ui-react'
import remedyLogo from '../../../../../../img/remedyLogo.png';
import oneontaLogo from '../../../../../../img/oneontaLogo.png';
import nielsenLogo from '../../../../../../img/nielsenLogo.png';

const JobItems = () => (
    <Item.Group divided >
        <Item>
            <Item.Image size='tiny' src={remedyLogo} />
            <Item.Content>
                <Item.Header href="https://www.remedypartners.com/" target="_blank" rel="noopener noreferrer">Jr. Software Engineer</Item.Header>
                <Item.Meta>
                    <span>Remedy Partners</span>
                </Item.Meta>
                <Item.Meta>
                    <span>May 2017 - Present • {moment([2017, 5 - 1, 18]).fromNow(true)} </span>
                </Item.Meta>
                <Item.Description>
                    TBD
                </Item.Description>
            </Item.Content>
        </Item>

        <Item>
            <Item.Image size='tiny' src={oneontaLogo} />
            <Item.Content>
                <Item.Header href="http://suny.oneonta.edu/" target="_blank" rel="noopener noreferrer">Computer Science</Item.Header>
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
                    • <a href='http://oneonta.meritpages.com/achievements/12-SUNY-Oneonta-Freshmen-Receive-Scholarships-Through-New-Program/14408' target="_blank" rel="noopener noreferrer">
                        Critical MaSS: Math and Science Scholars
                    </a>
                    <br/>
                    <br/>
                    • Dean's List - Fall <a href='http://oneonta.meritpages.com/achievements/More-than-1-500-Students-Named-to-Fall-2015-Dean-s-List/51227' target="_blank" rel="noopener noreferrer">2015</a> & <a href='http://oneonta.meritpages.com/achievements/More-than-1-500-Students-Named-to-Fall-2016-Dean-s-List/67236' target="_blank" rel="noopener noreferrer">2016</a>
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

        <Item>
            <Item.Image size='tiny' src={nielsenLogo} />
            <Item.Content>
                <Item.Header href="http://www.nielsen.com/" target="_blank" rel="noopener noreferrer">BUY - CTO - Software Engineering Intern</Item.Header>
                <Item.Meta>
                    <span>Nielsen</span>
                </Item.Meta>
                <Item.Meta>
                    <span>Jun 2016 - Aug 2016 • 3 Months </span>
                </Item.Meta>
                <Item.Description>
                    BUY
                    <Popup
                        trigger={<a> CTO </a>}
                        content='Chief Technology Office'
                        size='tiny'
                    />
                    software engineering intern for the
                    <Popup
                        trigger={<a> CPS </a>}
                        content='Consumer Panel Service'
                        size='tiny'
                    />
                    Delivery team at Nielsen.
                    <Divider/>
                    Jordan's <strong>role</strong> was to assist the CPS development team with new releases of an application called
                    <Popup
                        trigger={<a> CASE </a>}
                        content='Consumer and Shopper Explorer'
                        size='tiny'
                    />
                    using Agile methodologies
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
                    • Unit testing various programs for Windows and Linux compatibility, refactoring legacy code and obsolete libraries
                    <br/>
                    <br/>
                    • Documenting legacy software and code
                    <Divider/>
                    <strong>Languages</strong>: C/C++, Java, shell scripting, SQL
                    <Divider/>
                    <strong>Tools utilized</strong>: Git, JIRA, Hadoop, Linux, Gradle, Confluence, Hadoop
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

export default JobItems;
