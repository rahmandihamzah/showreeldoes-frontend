import React, { Component } from 'react';
import ProfileIcon from '../images/man.png'
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";

class ProfileHead extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row d-flex justify-content-center mt-5">
                        <img className="" src={ProfileIcon} />
                        <div className="bg-dark">
                            <h4>Lorem Ipsum</h4>
                            <hr />
                            <h4>lorem ipsum</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileHead;