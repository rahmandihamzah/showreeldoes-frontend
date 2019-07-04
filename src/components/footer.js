import React, { Component } from 'react';
import '../styles/footer.css';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='footer-container'>
                    <Col>
                        <div className='footer-content'>
                            <div className='m-3'>
                                <img className='footer-logo' src={require('../images/does-logo.png')} alt="logo-does" />
                            </div>
                            <div className='m-3 verticalLine'></div>
                            <div className='contact-us mt-3'>
                                <div className='contact-us-title'>
                                    Contact Us
                            </div>
                                <ul className='p-0'>
                                    <li>
                                        Soekamtiland, Godean, Sleman Regency, Special Region of Yogyakarta 55264
                                </li>
                                    <li>
                                        studio@doesuniversity.com
                                </li>
                                    <li>
                                        +62 811 999 4971
                                </li>
                                </ul>
                            </div>
                            <div className='ml-4 mt-3 verticalLine'></div>
                            <div className='discuss-form p-3'>
                                <div className='discuss-title'>
                                    Discuss
                            </div>
                                <form action="#" className='form-discuss mt-2 pl-2 pr-2 pb-2 '>
                                    <ul className='p-0'>
                                        <li>
                                            <h7 className='m-0'>Name</h7><br />
                                            <input type="text" />
                                        </li>
                                        <li>
                                            <h7 className='m-0'>Email</h7><br />
                                            <input type="text" />
                                        </li>
                                        <li>
                                            <h7 className='m-0'>Subject</h7><br />
                                            <input type="text" />
                                        </li>
                                        <li>
                                            <h7 className='m-0'>Message</h7><br />
                                            <input type="text" />
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div className='ml-2 mt-3 verticalLine'></div>
                            <div className='follow-us p-3'>
                                <div className='follow-us-title'>
                                    Follow Us
                            </div>
                                <div className='social-logo'>
                                </div>
                            </div>
                        </div>
                        <div className='container copyright'>
                            Copyright
                    </div>
                    </Col>
                </div>
            </div>
        )
    }
}

export default Footer;