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
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    linkPage(e) {
        console.log(e)
    }
    upload() {
        this.refs.upload.click()
    }


    render() {
        return (
            <div>
                {/* Navbar */}
                <div className="navbar">
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

                {/* Upload File */}
                <div className="p-4 wrap">
                    <div className="file-upload d-flex justify-content-center align-items-center col-sm-12 col-md-12 col-xl-8 col-lg-8 mx-auto">
                        <div className="input-form ">
                            <input type="file" className="input-file" ref='upload' />
                            <FontAwesomeIcon icon="cloud-upload-alt" className="fas fa-7x" onClick={() => this.upload()} />
                            <p>Click to browse a file</p>
                            <div id="dynamic" class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{width: '0%'}}>
                                <span id="current-progress"></span>
                            </div>
                        </div>
                    </div>
                    {/* Upload File */}
                </div>
            </div>
        )
    }
}

export default StudentHeader;