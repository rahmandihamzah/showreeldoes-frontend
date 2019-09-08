import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/showreelDetail.css';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import Truncate from 'react-truncate';
import { Player } from 'video-react';
import '../../node_modules/video-react/dist/video-react.css'

class ShowreelDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showreelById: [],
            dataStudent: {},
            showText: false,
            showreelType: Boolean
        };
    }

    linkToProfile(e) {
        console.log(e)
        this.props.history.push('/studentProfile/' + e)
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get('https://showreeldoes-backend.herokuapp.com/v1/showreel/' + this.props.match.params.id)
            .then((response) => {
                console.log(response.data.results.fileUpload.includes("video"))

                this.setState({
                    showreelById: response.data.results,
                    dataStudent: response.data.results.id_student,
                    showreelType: response.data.results.fileUpload.includes("image")
                })

                console.log(this.state.showreelById)
                console.log(this.state.showreelType)
                console.log(this.state.dataStudent)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="showreel-play-container d-flex justify-content-center align-items-center">
                        <div className="showreel-play-frame d-flex justify-content-center col-12 col-md-7">
                            {this.state.showreelType == true ?
                                <img src={this.state.showreelById.fileUpload} alt="" className="show-thumbnail" />
                                :
                                <Player className="video-player">
                                    <source src="http://res.cloudinary.com/damaxkeot/video/upload/v1565057231/kekxrmbmdysbhm7bz34u.mp4" />
                                </Player>
                            }
                        </div>
                    </div>
                    <div className="col">
                        <div className="showreel-title">
                            <h3>{this.state.showreelById.title}</h3>
                        </div>
                        <ul className="student-list-container row p-0">
                            <li className="student-list-frame m-2 mb-4" onClick={() => this.linkToProfile(this.state.showreelById.id_student._id)}>
                                <div className="student-detail-space d-flex align-items-center">
                                    <div className="profile-pic-atshowreeldetail position-relative">
                                        {this.state.dataStudent.profile_pic != null ?
                                            <img className="thepic" src={this.state.dataStudent.profile_pic} alt="" />
                                            :
                                            <i className="fas fa-poo fa-3x icon-user"></i>
                                        }
                                    </div>
                                    <div className="name-dept d-flex flex-column justify-content-center">
                                        <p className="m-0 pl-2 font-weight-bold">{this.state.dataStudent.full_name}</p>
                                        <hr className="m-0 seperate-name-dept" />
                                        <p className="m-0 pl-2">{this.state.dataStudent.department}</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="showreel-description">
                            <a onClick={() => this.setState({ showText: !this.state.showText })}>See more</a>
                            <Collapse in={this.state.showText}>
                                <div>
                                    <span>
                                        {/* some more texts here... */}
                                        <p>{this.state.showreelById.description}</p>
                                    </span>
                                </div>
                            </Collapse>

                            <Truncate lines={3} ellipsis={
                                <span>
                                    ... <a href='/link/to/article'>Read more</a>
                                </span>
                            }>

                            </Truncate>

                            <p className="see-more">see more</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShowreelDetail;