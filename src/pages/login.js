import React, { Component } from 'react';
import '../styles/login.css';
import {
        Form,
        FormGroup,
        Label,
        Input,
        Button }
    from 'reactstrap';
import axios from 'axios'
import {config} from '../config'
import Logo from '../images/does-logo.png';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data        : null, 
            username    : '',
            password    : '',
        };
    }

    // Get data
    componentDidMount() {
        fetch(config.baseurl + 'users')
            .then(data => data.json())
            .then(data => {
                return data;
            })
            .catch(e => {
                // console.log(e);
                return e;
            });
            // console.log()
    }
    // Form Value
    username(u) {
        this.setState({ username: u.target.value })
        console.log(u.target.value)
    }
    password(p) {
        this.setState({ password: p.target.value })
        console.log(p.target.value)
    }
    // Data Send
    
    send() {
        let data = {
            password: this.state.password,
            username: this.state.username
        }
        axios.post( config.baseurl + 'login/' , data).then(res => {
            console.log(res.data)
            localStorage.setItem('tokenlogin', res.data.lastesUpdate.token)
            localStorage.setItem('idStudent', res.data.lastesUpdate.id_student._id)
            this.props.history.push('/student/upload/' + res.data.lastesUpdate.id_student._id)
        }).catch(error => {
            // console.log("Bangsat error")
        })
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
                                        <Button type="button" className="btn btn-danger mt-3" onClick={() => this.send()}>Sign in</Button>
                                        {/* <div class="alert alert-danger mt-3" role="alert">
                                            check your username or password
                                        </div> */}
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