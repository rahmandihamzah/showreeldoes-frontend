import React, { Component } from 'react';
import '../styles/header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <ul className="left-nav">
                        <li>
                            <Link to="/">
                                <img src={require('../images/does-logo.png')} alt="nav-logo" className="nav-logo" />
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                ABOUT
                            </Link>
                        </li>
                        <li>
                            <Link to="/department">
                                DEPARTMENT
                            </Link>
                        </li>
                        <li>
                            <Link to="/students">
                                STUDENT
                            </Link>
                        </li>
                        <li>
                            <Link to="/partner">
                                PARTNER
                            </Link>
                        </li>
                    </ul>
                    {/* <ul className="right-nav">
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Header;