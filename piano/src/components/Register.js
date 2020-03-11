import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
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
        <div className="register-component">
            <h3>Music is only a few steps away!</h3>
            <Form onSubmit={handleSubmit} className="register-form">
                <FormGroup>
                    <Input 
                    type="text"
                    name="username" 
                    placeholder="Username"
                    value={newUser.username}
                    onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                    type="password"
                    name="password" 
                    placeholder="Password"
                    value={newUser.username}
                    onChange={handleChange} 
                    />
                </FormGroup>
                    <Button className="btn-lg btn-dark btn-block">Register</Button>
            </Form>
            <p>Already have an account? <Link to="/">Login here</Link></p>
        </div>
    )
}

export default Register;