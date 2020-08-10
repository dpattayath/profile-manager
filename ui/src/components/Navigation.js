import React, {useState} from 'react';
import {Navbar, NavbarBrand, NavbarToggler, Collapse, Nav,NavItem, NavLink, NavbarText} from 'reactstrap';
import Auth from './Auth';
import AuthContext from '../contexts/AuthContext';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md">

            <NavbarBrand href="/">Profile Manager</NavbarBrand>

            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>

                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="https://github.com/dpattayath/profiles" target="_blank">Code</NavLink>
                    </NavItem>
                </Nav>

                <NavbarText>
                    <AuthContext.Consumer>
                        {({authenticated, onAuthChange}) => {
                            return (
                                <Auth onAuthChange={onAuthChange}/>
                            );
                        }}

                    </AuthContext.Consumer>
                </NavbarText>

            </Collapse>

        </Navbar>
    );
}

export default Navigation;
