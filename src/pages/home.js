import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ShowreelList from '../components/showreelList';
import '../styles/home.css'
// import Container from 'react-bootstrap/Container';
import { Container, Row, Col } from 'reactstrap';
// var fontAwesome = require('react-fontawesome');

class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='artwork-space'>
                </div>
                <ul className="second-nav d-flex justify-content-center">
                    <li className="px-1 px-md-4">
                        <a href="#">3D Modeler</a>
                    </li>
                    <li className="px-1 px-md-4">
                        <a href="#">Animator</a>
                    </li>
                    <li className="px-1 px-md-4">
                        <a href="#">Compositor</a>
                    </li>
                    <li className="px-1 px-md-4">
                        <a href="#">Programmer</a>
                    </li>
                </ul>
                <ShowreelList />
                <Footer />
            </div>
        )
    }
}

export default Home;