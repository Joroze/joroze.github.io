import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Navbar, NavItem, Nav } from 'react-bootstrap';
import './MyNavBar.css';

class MyNavBarMiddle extends Component {
  render() {
    return (
<div className='navbarMiddle'>
    <Navbar className='topColorBarStyle'>
        <Grid>
            <Nav>
                <LinkContainer exact to="/">
                    <NavItem>Home</NavItem>
                </LinkContainer>
                <LinkContainer to="/about">
                    <NavItem>About</NavItem>
                </LinkContainer>
            </Nav>
        </Grid>
    </Navbar>
</div>
);
}
}

export default MyNavBarMiddle;
