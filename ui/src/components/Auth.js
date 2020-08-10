import React, {useState, useEffect} from 'react';
import {Row, Col, FormGroup, Button, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input} from 'reactstrap';
import AuthService from '../services/AuthService';
import StorageService from '../services/StorageService';

const Auth = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // on load
    useEffect(() => {
        validateSession();
    }, [])

    /**
    validates session
     */
    const validateSession = () => {
        const token = StorageService.get('token');
        if (token) {
            const user = StorageService.get('user');
            setUser(user);
            setLoggedIn(true);
        } else {
            setUser({});
            setLoggedIn(false);
        }
    }

    /**
    handles login request
     */
    const login = () => {
        AuthService.login(email, password)
            .then(response => response.json())
            .then((res) => {
                if (!res.error) {
                    setLoggedIn(true);
                    setUser(res.data.user);
                    StorageService.set('token', res.data.token);
                    StorageService.set('user', res.data.user);
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    /**
    handles logout request
     */
    const logout = () => {
        const token = StorageService.get('token');
        AuthService.logout(token)
            .then(response => response.json())
            .then((res) => {
                if (!res.error) {
                    setLoggedIn(false);
                    setUser({});
                    StorageService.remove('token');
                    StorageService.remove('user');
                }
            }).catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            {
                !isLoggedIn && (
                    <Nav className="mr-auto" navbar>
                        <Row form>
                            <Col md={4}>
                                <FormGroup>
                                    <Input type="email"
                                        name="email"
                                        id="email"
                                        placeholder="email"
                                        onChange = {(event) => setEmail(event.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <FormGroup>
                                    <Input type="password"
                                        name="password"
                                        id="password"
                                        placeholder="password"
                                        onChange = {(event) => setPassword(event.target.value)}/>
                                </FormGroup>
                            </Col>
                            <Col md={4}>
                                <Button onClick={login}>Sign in</Button>
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
                            {user.name}
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem onClick={logout}>Logout</DropdownItem>
                        </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                )
            }
        </div>
    );
}

export default Auth;
