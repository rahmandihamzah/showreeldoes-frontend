import React, { Component } from 'react';
import '../styles/header.css';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { PrismCode } from 'react-prism';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light transparent-nav">
                <div className="d-flex">
                    <a href="/" className="navbar-brand">
                        <img src={require('../images/does-logo.png')} alt="nav-logo" className="nav-logo" />
                    </a>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">ABOUT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/department" className="nav-link">DEPARTMENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/students" className="nav-link">STUDENT</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/partner" className="nav-link">PARTNER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;