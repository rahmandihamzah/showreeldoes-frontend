import React, { Component } from 'react';
import '../styles/login.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'

import Logo from '../images/does-logo.png';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        fetch('http://192.168.2.12:5000/v1/users')
            .then(blob => blob.json())
            .then(data => {
                // console.table(data);
                return data;
            })
            .catch(e => {
                console.log(e);
                return e;
            });
    }


    username(u) {
        this.setState({username:u.target.value})
        // console.log(u.target.value)
    }
    password(p) {
        this.setState({password:p.target.value})
        // console.log(p.target.value)
    }

    send() {
        let data = {
            password: this.state.password,
            username: this.state.username
        }
        axios.post('http://192.168.2.11:5000/v1/login', data).then(res =>{
            console.log(res)
            localStorage.setItem('tokenlogin', res.data.token)
            this.props.history.push('/student/upload/' + res.data.data.user.id_student)
        }).catch(error => {
            alert('error')
        })
        console.log(this.state.username)
        console.log(this.state.password)
    }



    render() {
        return (
            <div className="login-page" >
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
                                        <Input type="text" name="username" placeholder="Enter Username or Email" onChange={this.username.bind(this)} />
                                        <div className="d-flex align-items-start">
                                            <Label className="mt-1">Password</Label>
                                            <h6 className="mt-2 ml-2"><a href="#">Forgot?</a></h6>
                                        </div>
                                        <Input type="password" name="password" placeholder="Enter  Password" onChange={this.password.bind(this)} />
                                        <Button type="button" className="btn btn-danger mt-2" onClick={() => this.send()}>Sign in</Button>
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