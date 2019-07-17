import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import NavBarLogo from './NavBarLogo';

class NavBar extends Component {

    render() {
        return (
            <header>
                <Navbar className="mb-5" color="light" light expand="md">
                    <NavbarBrand href="/">
                    <NavBarLogo companyName={this.props.companyName}></NavBarLogo>
                    </NavbarBrand>
                </Navbar>
            </header>
        );
    }
}

export default NavBar;