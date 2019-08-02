import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/showreelDetail.css';
import axios from 'axios';
import Collapse from 'react-bootstrap/Collapse';
import Truncate from 'react-truncate';

class ShowreelDetail extends Component {

    constructor() {
        super();
        this.state = {
            showreelById: [],
            dataStudent: {},
            showText: false
        };
    }

    linkToProfile(e) {
        console.log(e)
        this.props.history.push('/studentProfile/' + e)
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get('http://192.168.2.11:5000/v1/showreel/' + this.props.match.params.id)
            .then((response) => {
                console.log(response.data.results)
                this.setState({
                    showreelById: response.data.results,
                    dataStudent: response.data.results.id_student
                })
                console.log(this.state.showreelById)
                console.log(this.state.dataStudent.full_name)
                console.log(this.state.dataStudent.department)
                console.log(this.state.dataStudent.profile_pic)
            })
    }

    render() {
        return (
            <div>
                <Header />
                <div>
                    <div className="showreel-play-container d-flex justify-content-center align-items-center">
                        <div className="showreel-play-frame d-flex justify-content-center">
                            <img src={this.state.showreelById.fileUpload} alt="" className="show-thumbnail" />
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
                                            <img src={this.state.dataStudent.profile_pic} alt="" />
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
                            <p>{this.state.showreelById.description}</p>
                            {/* <a onClick={() => this.setState({ showText: !this.state.showText })}>See more</a>
                            <Collapse in={this.state.showText}>
                                <div>
                                    <span>
                                        some more texts here...
                                    </span>
                                </div>
                            </Collapse> */}

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