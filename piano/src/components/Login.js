import React, { useState } from "react"
import { Link } from "react-router-dom";
import {
    Button,
    Form,
    FormGroup,
    Input
} from "reactstrap";

const Login = props => {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.history.push("/piano")
    }

    return (
        <div className="login-component">
            <h3>Welcome to the <span>Piano App!</span></h3>
            <Form onSubmit={handleSubmit} className="login-form">
                    <FormGroup>
                        <Input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <FormGroup className="text-center">
                        <Input
                            type="password"
                            name="password"
                            placeholder="Password"
                            valeu={user.password}
                            onChange={handleChange}
                        />
                    </FormGroup>
                    <Button className="btn-lg btn-dark btn-block">Login</Button>
            </Form>
            <p>Don't have an account? <Link to="/register"> Register here</Link></p>
        </div>
    )
}

export default Login;