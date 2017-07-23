import React from 'react';
import { Button, Dropdown } from 'semantic-ui-react'

const MySplitButton = () => (
    <Button.Group color='teal'>
        <Button>View Resume</Button>
        <Dropdown button>
            <Dropdown.Menu>
                <Dropdown.Header>View as</Dropdown.Header>
                <Dropdown.Item text='PDF'/>
                <Dropdown.Item text='HTML'/>
                <Dropdown.Divider/>
                <Dropdown.Item text='Download PDF'/>
            </Dropdown.Menu>
        </Dropdown>
    </Button.Group>
)

export default MySplitButton;
