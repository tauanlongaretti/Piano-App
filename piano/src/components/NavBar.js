import React from "react";
import { Link } from "react-router-dom";
 
const NavBar = () => {
    return (
        <div>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/piano">Piano</Link>
        </div>
    )
}

export default NavBar;