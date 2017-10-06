import './MyJumbotron.css';

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

import MySplitButton from 'components/MySplitButton/MySplitButton';
import resumeFile from 'Jordan Rosenberg Resume.pdf'

class MyJumbotron extends Component {

    componentDidMount() {
        const {
            strings
        } = this.props;

        const typedConfig = {
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
        this.typed = new Typed(this.el, typedConfig);
    }

    componentWillUnmount() {
        // to prevent memory leaks
        this.typed.destroy();
    }

    render() {

        const { isResumeVisible } = this.props

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
                        <MySplitButton isResumeVisible={isResumeVisible}></MySplitButton>
                    </Divider>
                    <Transition visible={isResumeVisible} animation='slide down' duration={300}>
                        <Embed
                            active
                            aspectRatio='4:3'
                            url={`https://docs.google.com/viewer?url=http://joroze.com/${resumeFile}&embedded=true`}
                        />
                    </Transition>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isResumeVisible: state.user.isResumeVisible
    };
}

export default connect(mapStateToProps)(MyJumbotron);
