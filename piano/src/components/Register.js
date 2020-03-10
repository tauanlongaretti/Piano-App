import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Input,
    Row
  } from "reactstrap";

const Register = props => {
    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.history.push("/")
    }

    return(
        <div>
            <h3>Music is only a few steps away!</h3>
            <Form onSubmit={handleSubmit} className="register-form">
                <Row>
                    <Input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    value={newUser.username}
                    onChange={handleChange} 
                    />
                </Row>
                <Row>
                    <Input 
                    type="text"
                    name="password" 
                    placeholder="Password"
                    value={newUser.username}
                    onChange={handleChange} 
                    />
                </Row>
                <Row>
                    <Button color="primary">Register</Button>
                </Row>
            </Form>
            <p>Already have an account?</p>
            <p><Link to="/">Login</Link> here!</p>
        </div>
    )
}

export default Register;