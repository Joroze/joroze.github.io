import React, {
    Component
} from 'react';
import {
    animateScroll
} from 'react-scroll'
import {
    Icon,
    Container,
    Segment,
    Grid,
    Divider,
    Image,
    List,
    Popup,
    Header,
    Reveal,
    Button,
    Transition
} from 'semantic-ui-react'


export default class MyFooter extends Component {

    state = {
        visible: true
    }

    toggleVisibility = () => this.setState({
        visible: !this.state.visible
    })

    scrollToTop = () => animateScroll.scrollToTop();

    render() {
        const {
            visible
        } = this.state

        return (
            <Segment vertical inverted>
                <Container textAlign='center'>
                    <Grid stackable inverted divided>
                        <Grid.Column width={3} only='computer tablet'>
                            <Button
                                animated
                                className='footerIcon'
                                circular
                                color='linkedin'
                                href='https://www.linkedin.com/in/joroze'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button.Content visible>
                                    <Icon name='linkedin' />
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='external square' />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={3} only='computer tablet'>
                            <Button
                                animated
                                className='footerIcon'
                                circular
                                href='https://github.com/Joroze'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button.Content visible>
                                    <Icon name='github' />
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='external square' />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={3} only='computer tablet'>
                            <Button
                                animated
                                className='footerIcon'
                                circular
                                color='green'
                                href='https://open.spotify.com/user/jordanrracer'
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button.Content visible>
                                    <Icon name='spotify' />
                                </Button.Content>
                                <Button.Content hidden>
                                    <Icon name='external square' />
                                </Button.Content>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>PS:</Header>
                            <p>Be sure to check out my other projects from the top-right dropdown menu.</p>
                        </Grid.Column>
                    </Grid>
                    <Divider inverted section/>
                    <Transition animation={'jiggle'} duration={300} visible={visible}>
                        <Image
                            className='jorozeFooterLogo'
                            src={this.props.logo}
                            size='mini'
                            centered
                            onMouseEnter={this.toggleVisibility}
                            onClick={this.scrollToTop}
                        />
                    </Transition>
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
}
