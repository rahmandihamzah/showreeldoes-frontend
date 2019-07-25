import React, { Component } from 'react';
import '../styles/footer.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GoogleMapReact from 'google-map-react';

class Footer extends Component {

    render() {
        return (
            <div className='footer-container'>
                <div className='footer-content d-block d-md-flex justify-content-around py-5'>
                    <div className=' form-logo d-flex align-items-center justify-content-center p-0 col px-md-5 mb-3 mb-md-0'>
                        <div className="col-6">
                            <img className='footer-logo' src={require('../images/does-logo.png')} alt="logo-does" />
                        </div>
                    </div>
                    {/* <div className='verticalLine'></div> */}
                    <div className='contact-us col px-0 px-md-5 p-0 mb-3 mb-md-0'>
                        <div className='contact-us-title'>
                            <p className='m-0 text-center'>Contact Us</p>
                        </div>
                        <ul className='p-0 d-flex flex-column justify-content-center text-center'>
                            <li>
                                <p className="m-0">
                                    Soekamtiland, Godean, Sleman Regency, Special Region of Yogyakarta 55264
                                            </p>
                            </li>
                            <li>
                                <p className="m-0">
                                    studio@doesuniversity.com
                                            </p>
                            </li>
                            <li>
                                <p className="m-0">
                                    +62 811 999 4971
                                            </p>
                            </li>
                        </ul>
                        <div className="text-center">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.080685678864!2d110.31005241520683!3d-7.781269779363455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af7ea2fcf897f%3A0x1db5b3cf0b802342!2sDOES+University!5e0!3m2!1sid!2sid!4v1562638290416!5m2!1sid!2sid" className="footer-maps" allowFullScreen></iframe>
                        </div>
                    </div>
                    {/* <div className='verticalLine'></div> */}
                    <div className='discuss-form col m-0 px-md-5 mb-3 mb-md-0'>
                        <div className='discuss-title text-center'>
                            Discuss
                                </div>
                        <form action="#" className='form-discuss p-3'>
                            <ul className='p-0'>
                                <li className="mb-3">
                                    <h6 className='m-0'>Name</h6>
                                    <input type="text" className="form-control" />
                                </li>
                                <li className="mb-3">
                                    <h6 className='m-0'>Email</h6>
                                    <input type="text" className="form-control" />
                                </li>
                                <li className="mb-3">
                                    <h6 className='m-0'>Subject</h6>
                                    <input type="text" className="form-control" />
                                </li>
                                <li className="mb-3">
                                    <h6 className='m-0'>Message</h6>
                                    <input type="text" className="form-control" />
                                </li>
                            </ul>
                        </form>
                    </div>
                    {/* <div className='verticalLine'></div> */}
                    <div className='follow-us col text-center px-5 p-0'>
                        <div className='follow-us-title text-center'>
                            Follow Us
                            </div>
                        <div className='social-logo'>
                            <a target="blank" href="https://www.instagram.com/doesofficial/?hl=id">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a target="blank" href="https://www.youtube.com/channel/UCLAlGn0fvx92nQkF_v4Yq1w">
                                <i className="fab fa-youtube fa-2x ml-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='copyright text-center'>
                    <p className='m-0'>Copyright &#169; 2019 DOES University</p>
                </div>
            </div>
        )
    }
}

export default Footer;