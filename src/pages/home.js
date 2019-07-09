import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
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
                <div className='showreel-highlight'>
                    {/* <div className='container'> */}
                    {/* <Container> */}
                    <ul className='showreel-container row m-0 justify-content-center'>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                        <li className='showreel-space'>
                            <div className='showreel-frame'>
                                <div className='showreel-thumbnail'>
                                    <img src={require('../images/does-logo.png')} alt="" className="img-thumbnail" />
                                </div>
                                <div className='showreel-resp'>
                                    {/* <ul>
                                            <li></li>
                                        </ul>
                                        <ul>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}
                                </div>
                            </div>
                            <div className='creator'>
                                creator
                                </div>
                        </li>
                    </ul>
                    {/* </div> */}
                    {/* </Container> */}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;