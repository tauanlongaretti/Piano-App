import React from "react"
import { Link } from "react-router-dom";
import {
    Button,
    Container,
    Col,
    Form,
    FormGroup,
    FormText,
    Input,
    Label,
    Row
  } from "reactstrap";

const Login = () => {
    return(
        <div>
            <h3>Welcome to the Piano App!</h3>
            <Form className="login-form">
                <Row>
                    <Input 
                    type="text"
                    name="username" 
                    placeholder="Username" 
                    />
                </Row>
                <Row>
                    <Input 
                    type="text"
                    name="password" 
                    placeholder="Password" 
                    />
                </Row>
            </Form>
            <p>Don't have an account?</p>
            <p><Link to="/register">Register</Link> here!</p>
        </div>
    )
}

export default Login;