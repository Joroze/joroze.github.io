import './MySplitButton.css';

import React from 'react';
import {
    connect
} from 'react-redux';
import {
    toggleResumeVisibility
} from '../MyJumbotron.duck.js';
import {
    Button,
    Dropdown,
    Icon
} from 'semantic-ui-react'
import resumeFile from '../Jordan Rosenberg Resume.pdf'

function MySplitButton(props) {

    const {
        visible,
        toggleResume
    } = props;

    function handleOnClick() {
        toggleResume(!visible);
    };

    return (
        <Button.Group color='teal'>
            <Button className="viewResumeButton" active={visible} onClick={handleOnClick}>View Resume</Button>
            <Dropdown button>
                <Dropdown.Menu>
                    <Dropdown.Header>View as</Dropdown.Header>
                    <Dropdown.Divider/>
                    <Dropdown.Item
                        href={resumeFile}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name='external'/>
                        PDF
                    </Dropdown.Item>
                    <Dropdown.Item
                        href="http://joroze.com/resume/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Icon name='external'/>
                        HTML
                    </Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item
                        href={resumeFile}
                        download
                    >
                        <Icon name='download'/>
                        Download PDF
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
    </Button.Group>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        toggleResume: (value) => dispatch(toggleResumeVisibility(value))
    };
}

export default connect(null, mapDispatchToProps)(MySplitButton);
