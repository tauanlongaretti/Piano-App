import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    Input,
    Row
  } from "reactstrap";

const Register = () => {
    const [newUser, setNewUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    return(
        <div>
            <h3>Music is only a few steps away!</h3>
            <Form className="register-form">
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
                    <Button>Register</Button>
                </Row>
            </Form>
            <p>Already have an account?</p>
            <p><Link to="/">Login</Link> here!</p>
        </div>
    )
}

export default Register;