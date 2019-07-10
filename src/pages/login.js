import React, { Component } from 'react';
import '../styles/login.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                            <div className="row col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                <Form className="form">
                                    <FormGroup >
                                        <Label className="">Username or Email</Label>
                                        <Input type="text" name="username" placeholder="Enter Username or Email" />
                                        <div className="d-flex align-items-start">
                                        <Label className="mt-1">Password</Label>
                                        <h6 className="mt-2 ml-2"><a href="#">Forgot?</a></h6>
                                        </div>
                                        <Input type="password" name="password" placeholder="Enter  Password" />
                                        <Button type="button" className="btn btn-danger mt-2">Sign in</Button>
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