import React, { Component } from 'react';
import '../styles/header.css';

class Header extends Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <ul className="left-nav">
                        <li>
                            <img src={require('../images/does-logo.png')} alt="nav-logo" className="nav-logo" />
                        </li>
                        <li>
                            <a href="#">ABOUT</a>
                        </li>
                        <li>
                            <a href="#">DEPARTMENT</a>
                        </li>
                        <li>
                            <a href="#">STUDENT</a>
                        </li>
                        <li>
                            <a href="#">PARTNER</a>
                        </li>
                    </ul>
                    <ul className="right-nav">
                        <li>
                            <a href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;