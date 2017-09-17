import './MySplitButton.css';

import React from 'react';
import {
    connect
} from 'react-redux';
import {
    hideResume,
    showResume
} from 'ducks/UserProfile.duck.js';
import {
    Button,
    Dropdown,
    Icon
} from 'semantic-ui-react'
import resumeFile from 'Jordan Rosenberg Resume.pdf'

function MySplitButton(props) {

    const {
        isResumeVisible,
        resumeHide,
        resumeShow
    } = props;

    const handleOnClick = () => isResumeVisible ? resumeHide() : resumeShow()

    return (
        <Button.Group color='teal'>
            <Button className="viewResumeButton" active={isResumeVisible} onClick={handleOnClick}>View Resume</Button>
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
        resumeHide: () => dispatch(hideResume()),
        resumeShow: () => dispatch(showResume())
    };
}

export default connect(null, mapDispatchToProps)(MySplitButton);
