import React, { Component } from 'react';
import '../styles/student_header.css';
import Logo from '../images/does-logo.png';
import ProfileIcon from '../images/man.png'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class StudentHeader extends Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: false,
            user: 'Rangga'
        }
    };
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    };
    render() {
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
                        <p className="align-self-center m-0"> Hai, {this.state.user}</p>
                        <li>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle className="togle-button">
                                    <img className="profile-icon" src={ProfileIcon} />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem onClick={() => this.linkPage('profile')}>Profile</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem onClick={() => this.linkPage('signout')}>
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

export default StudentHeader;