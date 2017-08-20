import React, {
    Component
} from 'react';
import {
    connect
} from 'react-redux';
import {
    Container,
    Divider,
    Header,
    Icon,
    Embed,
    Transition
} from 'semantic-ui-react';
import Typed from 'typed.js';

import MySplitButton from './buttons/MySplitButton';
import {
    performUserProfileRequest
} from './MyJumbotron.duck.js';
import resumeFile from './Jordan Rosenberg Resume.pdf'

class MyJumbotron extends Component {

    componentDidMount() {
        const {
            strings,
            loadUserProfile
        } = this.props;

        loadUserProfile("joroze")

        const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            showCursor: false,
            shuffle: true,
            loop: true,
            loopCount: Infinity,
            fadeOut: true
        };

        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {
        return (
            <div className='jumbotron'>
                <Container textAlign='center'>
                    <Header className='white' icon>
                        <Icon name='at' />
                        <Header.Content>
                            Jordan Rosenberg
                            <Header.Subheader className='white'>
                                <span className='typedSpan' ref={(el) => { this.el = el; }}/>
                            </Header.Subheader>
                        </Header.Content>
                    </Header>

                    <Divider horizontal inverted>
                        <MySplitButton visible={this.props.resumeIsVisible}></MySplitButton>
                    </Divider>

                    <Transition visible={this.props.resumeIsVisible} animation='slide down' duration={300}>
                        <Embed
                            active
                            aspectRatio='4:3'
                            url={`http://docs.google.com/gview?url=http://joroze.com/${resumeFile}&embedded=true`}
                        />
                    </Transition>
                </Container>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserProfile: (username) => dispatch(performUserProfileRequest(username))
    };
}

function mapStateToProps(state) {
    return {
        resumeIsVisible: state.user.resumeIsVisible
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyJumbotron);
