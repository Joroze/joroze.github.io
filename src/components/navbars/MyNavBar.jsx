import React, { Component } from 'react';
import { Grid, Navbar, MenuItem, Nav, NavDropdown } from 'react-bootstrap';
import logo from './logo.svg';
import './MyNavBar.css';

class MyNavBar extends Component {
  render() {
    return (
<div className='navbarTop'>
    <Navbar inverse fixedTop collapseOnSelect className='topColorBarStyle'>
        <Grid>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">
                        <img src={logo} className="App-logo" alt="logo" />
                        An overview of Jordan Rosenberg
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <li><a href='https://www.linkedin.com/in/jordan-rosenberg-aa223aba'>LinkedIn</a></li>
                    <li><a href="https://github.com/Joroze">GitHub</a></li>
                    <NavDropdown
                        title={
                            <span><i className="glyphicon glyphicon-info-sign"></i></span>
                        }>
                        <li className="dropdown-header">Contact</li>
                        <MenuItem href='mailto:roseje57@oneonta.edu'>Email</MenuItem>
                        <MenuItem divider/>
                        <li className="dropdown-header">Archived Websites</li>
                        <MenuItem href="http://joroze.com/JResume/">Website 1</MenuItem>
                        <MenuItem disabled>Website 2</MenuItem>
                        <MenuItem divider/>
                        <li className="dropdown-header">AI Projects</li>
                        <MenuItem href="http://joroze.com/AI/">Shortest Path</MenuItem>
                        <MenuItem divider/>
                        <li className="dropdown-header">Other Projects</li>
                        <MenuItem href="http://joroze.com/Roomifer">Roomifer</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Grid>
    </Navbar>
</div>
);
}
}

export default MyNavBar;
