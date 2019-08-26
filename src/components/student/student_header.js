import React, { Component } from 'react';
import '../../styles/student/student_header.css';
import Logo from '../../images/does-logo.png';
import ProfileIcon from '../../images/man.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import {config} from '../../config'

class StudentHeader extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false,
            student : {}
        }
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    };
    componentDidMount() {
        // console.log( 'ID Student', this.props.match.params.id)
        axios.get( config.baseurl + 'student/' + this.props.match.params.id).then(res => {
            // console.log('Geting data', res.data.student)
            this.setState({ student: res.data.student })
        })
    }
    linkPage() {
        this.props.history.push('/student/profile/' + localStorage.getItem('idStudent'))
    }

    // signout() {
    //     axios.get( config.baseurl + 'logout').then(res => {
    //         console.log(res)
    //         if (res.data.login === false) {
    //             localStorage.removeItem('tokenlogin')
    //             this.props.history.push('/')
    //         }
    //     })
    // }
    
   

    render() {
        return (
            <div>
                {/* Navbar */}
                <div className="navbar fixed-top navbar-stud p-0 m-0">
                    <ul className="left-nav d-inline">
                        <li className="ml-lg-3">
                            <Link to="/">
                                <img className="logo" src={Logo} />
                            </Link>
                        </li>
                    </ul>
                    <ul className="right-nav d-flex p-0 mr-lg-4">
                        <p className="align-self-center my-lg-0 mr-lg-3 m-0 text-capitalize" >{this.state.student.full_name}</p>
                        <li className="mr-2">
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="shadow">
                                <DropdownToggle className="togle-button">
                                    <img className="profile-icon" src={ProfileIcon} />
                                </DropdownToggle>
                                <DropdownMenu right className="m-0">
                                    <DropdownItem onClick={() => this.linkPage()}>Profile</DropdownItem>
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