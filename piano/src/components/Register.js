import React from "react";
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
    )
}

export default Register;