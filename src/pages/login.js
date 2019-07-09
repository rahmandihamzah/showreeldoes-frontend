import React, { Component } from 'react';
import '../styles/login.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Logo from '../images/does-logo.png';

class Login extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-box">
                    <div className="login-logo text-center">
                        <img src={Logo} className="img-fluid" alt="DOES UNIVERSITY" />
                        <h2 className="sign-in mt-4 mb-auto">Sign in</h2>
                    </div>
                    <div className="form-wrapper ">
                        <div className="container d-flex justify-content-center">
                            <div className="row col-6">
                                <Form className="form">
                                    <FormGroup >
                                        <Label className="">Username or Email</Label>
                                        <Input type="text" name="username" placeholder="Enter Username or Email" />
                                        <Label className="mt-2">Password</Label>
                                        <Input type="password" name="password" placeholder="Enter  Password" />
                                        <h6 className="mt-2"><a href="#">Forgot</a></h6>
                                        <Button type="button" className="btn btn-danger float-right">Sign in</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;