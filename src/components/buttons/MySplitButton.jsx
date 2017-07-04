import React, { Component } from 'react';
import { ButtonToolbar, SplitButton, MenuItem } from 'react-bootstrap';

class MySplitButton extends Component {
  render() {
    return (
        <ButtonToolbar>
            <SplitButton bsSize='lg' bsStyle="danger" title="View Resume">
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3">Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey="4">Separated link</MenuItem>
            </SplitButton>
        </ButtonToolbar>
    );
    }
    }

//const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger'];

// function MySplitButton(title, i) {
//   return (
//     <SplitButton bsStyle={title.toLowerCase()} title={title} key={i} id={`split-button-basic-${i}`}>
//         <MenuItem eventKey="1">Action</MenuItem>
//         <MenuItem eventKey="2">Another action</MenuItem>
//         <MenuItem eventKey="3">Something else here</MenuItem>
//         <MenuItem divider />
//         <MenuItem eventKey="4">Separated link</MenuItem>
//     </SplitButton>
//   );
// }
//
// const buttonsInstance = (
//   <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>
// );

export default MySplitButton;
