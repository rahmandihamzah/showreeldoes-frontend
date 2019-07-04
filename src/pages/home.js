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
                <script src="https://kit.fontawesome.com/0007e3663d.js"></script>
                <Header />
                <div className='artwork-space'>
                </div>
                <div className='second-nav'>
                    <ul>
                        <li>
                            <a href="#">3D Modeller</a>
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
                    <Col className=''>
                        <ul className='showreel-container'>
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
                        <div className='button-linked pb-4'>
                            <button className='btn-dark border-0 pt-2 pb-2 pr-3 pl-3 btn-see'>SEE MORE</button>
                        </div>
                        {/* </div> */}
                    </Col>
                    {/* </Container> */}
                </div>
                {/* <div className='partner-testimoni'>
                    <div className='container'>
                        <div class="partner-testimoni col-sm col-md col-lg col-xl">
                            <div class="testi-title">
                                <p>Partner Testimoni</p>
                            </div>
                            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="item-container">
                                            <div class="testimoni-slider-item1">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="testimoni-slider-item1 second-item">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="testimoni-slider-item1 third-item">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="item-container">
                                            <div class="testimoni-slider-item1">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="testimoni-slider-item1 second-item">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="testimoni-slider-item1 third-item">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="item-container">
                                            <div class="testimoni-slider-item1">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="testimoni-slider-item1 second-item">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="testimoni-slider-item1 third-item">
                                                <div class="testimoni-words">
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
                                                        libero
                                                        nesciunt,
                                                        et
                                                        ea
                                                        odit
                                                        sequi voluptate beatae ut ...
                                                    </p>
                                                </div>
                                                <div class="testimoni-pict"></div>
                                                <div class="testimoni-partner">
                                                    <ul>
                                                        <li>Lorem Ipsum</li>
                                                        <li class="partner-company">
                                                            PT. Lorem Ipsum
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Home;