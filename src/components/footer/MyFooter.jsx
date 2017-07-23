import React from 'react';
import { Icon, Container, Segment, Grid, Divider, Image, List, Popup, Header, Reveal} from 'semantic-ui-react'

export default function MyFooter(props){
    return(
        <Segment vertical inverted>
            <Container textAlign='center'>
                <Grid stackable inverted divided>
                    <Grid.Column width={3} only='computer tablet'>
                        <Header as='h4' inverted>Group 1</Header>
                        <List inverted link size='small'>
                            <List.Item>
                                <List.Content>Copyright © 2017</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>All Rights Reserved</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content href='www.joroze.com'>www.Joroze.com</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3} only='computer tablet'>
                        <Header as='h4' inverted>Group 2</Header>
                        <List inverted link size='small'>
                            <List.Item>
                                <List.Content>Copyright © 2017</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>All Rights Reserved</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content href='www.joroze.com'>www.Joroze.com</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header as='h4' inverted>Group 3</Header>
                        <List inverted link size='small'>
                            <List.Item>
                                <List.Content>Copyright © 2017</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content>All Rights Reserved</List.Content>
                            </List.Item>
                            <List.Item>
                                <List.Content href='www.joroze.com'>www.Joroze.com</List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as='h4' inverted>Footer Content</Header>
                        <p>Thank you for visiting my website, blah blah blah blah blah blah blah blah blah. blaaaah. :).</p>
                    </Grid.Column>
                </Grid>
                <Divider inverted section/>
                <Image src={props.logo} size='mini' href='/' centered/>
                <br></br>
                <List divided inverted link horizontal size='small'>
                    <List.Item>
                        <List.Content>Copyright © 2017</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>All Rights Reserved</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content>
                            <Reveal animated='rotate'>
                                <Reveal.Content visible>
                                    <Icon circular color='grey' name='heart'/>
                                </Reveal.Content>
                                <Reveal.Content hidden>
                                    <Popup
                                        trigger={<Icon circular color='pink' link name='heart' />}
                                        content='Designed and built with passion, by Jordan Rosenberg'
                                        size='tiny'
                                    />
                                </Reveal.Content>
                            </Reveal>

                        </List.Content>
                    </List.Item>
                </List>
            </Container>

        </Segment>


    );
}
