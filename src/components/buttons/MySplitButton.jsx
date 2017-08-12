import React from 'react';
import {
    Button,
    Dropdown,
    Modal,
    Embed,
    Icon
} from 'semantic-ui-react'
import resumeFile from 'resources/Jordan Rosenberg Resume.pdf'

const MySplitButton = () => (
    <Button.Group color='teal'>
        <Modal basic trigger={<Button>View Resume</Button>}>
            <Modal.Content>
                <Embed
                    active
                    aspectRatio='4:3'
                    url='http://docs.google.com/gview?url=http://joroze.com/Jordan%20Rosenberg%20Resume.pdf&embedded=true'
                />
            </Modal.Content>
        </Modal>
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

export default MySplitButton;
