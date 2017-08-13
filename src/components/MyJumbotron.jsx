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
    Icon
} from 'semantic-ui-react';
import Typed from 'typed.js';

import MySplitButton from './buttons/MySplitButton';
import {
    performUserProfileRequest
} from './MyJumbotron.duck.js';

class MyJumbotron extends Component {

    componentDidMount() {
        const {
            strings
        } = this.props;

        this.props.loadUserProfile("joroze")

        const options = {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000,
            showCursor: false,
            shuffle: true,
            loop: true,
            loopCount: Infinity
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
                                <span ref={(el) => { this.el = el; }}/>
                            </Header.Subheader>
                        </Header.Content>
                    </Header>

                    <Divider horizontal inverted>
                        <MySplitButton></MySplitButton>
                    </Divider>
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
        user: state.user
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyJumbotron);
