import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/partner.css';
import Slider from 'react-slick';

class Partner extends Component {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            // slide: 'li',
            slidesToShow: 3,
            slideToScroll: 3
        }

        return (
            <div>
                <Header />
                <div className="page-title text-center">
                    OUR PARTNER
                </div>
                <div className="partner-list">
                    <ul className="partner-container col-8 mx-auto row justify-content-center">
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                        <li className="partner-space mx-3 my-3">
                            <div className="partner-frame">
                                <div className="partner-thumbnail text-center">
                                    <i className="fas fa-image fa-4x"></i>
                                </div>
                                <div className="partner-detail">
                                    <p className="m-0">Partner Name</p>
                                    <p className="m-0 partnersite">www.partnersite.com</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className="testimoni-title text-center my-2">
                    PARTNER TESTIMONI
                </div>
                <div className="partner-testimoni d-flex justify-content-center my-5">
                    <div className="container" align="center">
                        <Slider {...settings}>
                            <div className="testimoni-frame text-center d-flex flex-column align-items-center">
                                <div className="testimoni-word">
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                        Tempore, libero nesciunt,
                                        et ea odit sequi voluptate beatae ut ...
                                    </p>
                                </div>
                                <div className="testimoni-pic"></div>
                                <div className="partner-profile">
                                    <ul className="p-0">
                                        <li className="partner-name">Lorem Ipsum</li>
                                        <li className="partner-inst">PT. Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="testimoni-frame text-center d-flex flex-column align-items-center">
                                <div className="testimoni-word">
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                        Tempore, libero nesciunt,
                                        et ea odit sequi voluptate beatae ut ...
                                    </p>
                                </div>
                                <div className="testimoni-pic"></div>
                                <div className="partner-profile">
                                    <ul className="p-0">
                                        <li className="partner-name">Lorem Ipsum</li>
                                        <li className="partner-inst">PT. Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="testimoni-frame text-center d-flex flex-column align-items-center">
                                <div className="testimoni-word">
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                        Tempore, libero nesciunt,
                                        et ea odit sequi voluptate beatae ut ...
                                    </p>
                                </div>
                                <div className="testimoni-pic"></div>
                                <div className="partner-profile">
                                    <ul className="p-0">
                                        <li className="partner-name">Lorem Ipsum</li>
                                        <li className="partner-inst">PT. Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="testimoni-frame text-center d-flex flex-column align-items-center">
                                <div className="testimoni-word">
                                    <p>
                                        Lorem ipsum dolor sit amet,
                                        consectetur adipisicing elit.
                                        Tempore, libero nesciunt,
                                        et ea odit sequi voluptate beatae ut ...
                                    </p>
                                </div>
                                <div className="testimoni-pic"></div>
                                <div className="partner-profile">
                                    <ul className="p-0">
                                        <li className="partner-name">Lorem Ipsum</li>
                                        <li className="partner-inst">PT. Lorem Ipsum</li>
                                    </ul>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Partner;