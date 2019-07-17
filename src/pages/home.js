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
                <div className='second-nav'>
                    <ul>
                        <li>
                            <a href="#">3D Modeler</a>
                        </li>
                        <li>
                            <a href="#">Animator</a>
                        </li>
                        <li>
                            <a href="#">Compositor</a>
                        </li>
                        <li>
                            <a href="#">Programmer</a>
                        </li>
                    </ul>
                </div>
                <ShowreelList />
                <Footer />
            </div>
        )
    }
}

export default Home;