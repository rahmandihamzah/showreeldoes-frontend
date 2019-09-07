import React, { Component } from 'react';
import './admin_login.css';
import { Link, withRouter } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Logo from '../../../images/does-logo.png';


class Admin_login extends Component {

    username(u) {
        this.setState({ username: u.target.value })
        // console.log(u.target.value)
    }
    password(p) {
        this.setState({ password: p.target.value })
        // console.log(p.target.value)
    }
    signin() {
        this.props.history.push('/admin/dashboard')
    }


    render() {
        return (
            <div className="login-page" >
                <div className="col-12 col-lg-4 mx-auto">
                    <div className="text-center">
                        <img src={Logo} className="img-fluid w-25" alt="DOES UNIVERSITY" />
                        <h2 className="sign-in mt-4 mb-auto">Log in Admin</h2>
                        <div class="alert alert-danger mt-3" role="alert">
                            check your username or password !
                        </div>
                    </div>
                    <Form className="form">
                        <FormGroup >
                            <Label className="">Username</Label>
                            <Input type="text" name="username" placeholder="Enter Username" onChange={this.username.bind(this)} />
                            <div className="d-flex align-items-start">
                                <Label className="mt-1">Password</Label>
                                <h6 className="mt-2 ml-2"><a href="#">Forgot?</a></h6>
                            </div>
                            <Input type="password" name="password" placeholder="Enter  Password" onChange={this.password.bind(this)} />
                            <Button type="button" className="btn btn-danger mt-3" onClick={() => this.signin()} >Sign in</Button>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
}

export default Admin_login;