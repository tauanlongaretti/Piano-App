import React from "react";
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link as={Link} href="/" to="/">Login</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} eventKey="link-1" to="/register">Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} eventKey="link-2" to="/piano">Piano</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavBar;