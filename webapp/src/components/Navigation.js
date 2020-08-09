import React, {useState} from 'react';
import {Row, Col, FormGroup, Button, Navbar,
    NavbarBrand, NavbarToggler, Collapse, Nav,
    NavItem, NavLink, UncontrolledDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Input
} from 'reactstrap';

const Navigation = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    const {isLoggedIn, profile, logout} = props;

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
                    {
                        !isLoggedIn && (
                            <Nav className="mr-auto" navbar>
                                <Row form>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Input type="email" name="email" id="email" placeholder="email" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <FormGroup>
                                            <Input type="password" name="password" id="password" placeholder="password" />
                                        </FormGroup>
                                    </Col>
                                    <Col md={4}>
                                        <Button>Sign in</Button>
                                    </Col>
                                </Row>
                            </Nav>
                        )
                    }
                    {
                        isLoggedIn && (
                            <Nav className="mr-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {profile.username}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={logout}>Logout</DropdownItem>
                                </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        )
                    }
                </NavbarText>

            </Collapse>

        </Navbar>
    );
}

export default Navigation;
