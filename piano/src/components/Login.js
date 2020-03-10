import React, { useState } from "react"
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Input,
    Row
  } from "reactstrap";

const Login = () => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value})
    }

    return(
        <div>
            <h3>Welcome to the Piano App!</h3>
            <Form className="login-form">
                <Row>
                    <Input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    value={user.username}
                    onChange={handleChange} 
                    />
                </Row>
                <Row>
                    <Input 
                    type="text"
                    name="password" 
                    placeholder="Password"
                    valeu={user.password}
                    onChange={handleChange} 
                    />
                </Row>
                <Row>
                    <Button>Login</Button>
                </Row>
            </Form>
            <p>Don't have an account?</p>
            <p><Link to="/register">Register</Link> here!</p>
        </div>
    )
}

export default Login;