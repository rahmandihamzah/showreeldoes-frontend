import React, { Component } from 'react';
import '../styles/student_header.css';
import Logo from '../images/does-logo.png';
import ProfileIcon from '../images/man.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';

class StudentHeader extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false,
        }
    };
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    };

    signout() {
        axios.get('http://192.168.2.11:5000/v1/logout').then(res => {
            console.log(res)
            if (res.data.login === false){
                localStorage.removeItem('tokenlogin')
                this.props.history.push('/')
            }
        })
    }


    render() {
        const nama = JSON.parse(localStorage.getItem("student"));
        return (
            <div>
                {/* Navbar */}
                <div className="navbar navbar-stud ">
                    <ul className="left-nav">
                        <li>
                            <Link to="/">
                                <img className="logo" src={Logo} />
                            </Link>
                        </li>
                    </ul>
                    <ul className="right-nav d-flex">
                        <p className="align-self-center m-0"> Hai, {nama.full_name}</p>
                        <li>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle className="togle-button">
                                    <img className="profile-icon" src={ProfileIcon} />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={() => this.linkPage('profile')}>Profile</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => this.signout()}>
                                        <FontAwesomeIcon icon="sign-out-alt" className="text-danger mr-2" />Sign Out
                                        </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
                {/* NAVBAR */}
            </div>
        )
    }
}

export default withRouter(StudentHeader);