import React from "react"
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
    )
}

export default Login;