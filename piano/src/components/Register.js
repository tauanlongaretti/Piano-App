import React from "react";
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

const Register = () => {
    return(
        <div>
            <h3>Music is only a few steps away!</h3>
            <Form className="register-form">
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
            <p>Already have an account?</p>
            <p><Link to="/">Login</Link> here!</p>
        </div>
    )
}

export default Register;