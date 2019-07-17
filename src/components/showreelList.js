import React, { Component } from 'react';
import '../styles/header.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ShowreelList extends Component {
    render() {
        return (
            <div className='showreel-highlight'>
                {/* <div className='container'> */}
                {/* <Container> */}
                <ul className='showreel-container row mx-3 justify-content-start'>
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
        )
    }
}

export default ShowreelList;