import React, {Component} from 'react';
import './admin_sidebar.css';
import { Link, withRouter } from "react-router-dom";
import { Nav,NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import menu from '../../images/menu.png'





class AdminSidebar extends Component {
    openSidebar () {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'block'
        close.style.width = '20%'
        close.style.left = '0'
        open.style.width = '100%'
	}

	closeSidebar () {
		let open = this.refs.sidebarBg
		let close = this.refs.close
		open.style.display = 'none'
        close.style.width = '0px'
        close.style.left = '-100px'
        open.style.width = '0px'
    }
    
    linkPage (value) {
        if(value === 'dashboard') {
            this.props.history.push('/admin/dashboard')
        }else if(value === 'department') {
            this.props.history.push('/admin/department')
        }else if(value === 'studentanimator') {
            this.props.history.push('/admin/studentanimator')
        }else if(value === 'studentcompositor') {
            this.props.history.push('/admin/studentcompositor')
        }else if(value === 'studentprogrammer') {
            this.props.history.push('/admin/studentprogrammer')
        }else if(value === 'student3dmodeler') {
            this.props.history.push('/admin/student3dmodeler')
        }else if(value === 'admin') {
            this.props.history.push('/admin/listadmin')
        }else if(value === 'partner') {
            this.props.history.push('/admin/adminpartner')
        }else if(value === 'discuss') {
            this.props.history.push('/admin/discuss')
        }
    }

    signout() {
        this.props.history.push('/admin')
    }

    render () {
        return (
            <div>
                <div className="menu_logo p-3">
                    <img src={menu} onClick={() => this.openSidebar()}/>
                </div>
                    <div className="sidebar" ref="close">
                        <div className="p-3 text-right">
                            <FontAwesomeIcon icon="times-circle" className="text-light fas fa-2x" onClick={() => this.closeSidebar()} />
                        </div>
                        <hr className="bg-secondary m-0 w-100" />
                        <div className="">
                            <div className="link-page p-3" onClick={() => this.linkPage('dashboard')}>
                                <Link to="/admin/dashboard" className="text-light" ref="tes">Dashboard</Link>
                            </div>
                            <div className="link-page p-3"  onClick={() => this.linkPage('department')} >
                                <Link to="/admin/department" className="text-light">Department</Link>
                            </div>
                            <div className="link-page p-3 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#student" aria-expanded="false" aria-controls="student">
                                <p className="text-light m-0">
                                    Student
                                </p>
                                <FontAwesomeIcon icon="sort-down" className="text-light align-self-center" />
                            </div>
                            <div className="collapse" id="student">
                                <div className="card card-body p-0 pl-5">
                                    <div onClick={() => this.linkPage('studentanimator')}> <Link to="/admin/studentanimator" className="dr-title">Animator</Link></div>
                                    <div onClick={() => this.linkPage('studentcompositor')}> <Link to="/admin/studentcompositor" className="dr-title">Compositor</Link></div>
                                    <div  onClick={() => this.linkPage('studentprogrammer')}><Link to="/admin/studentprogrammer" className="dr-title">Programmer</Link></div>
                                    <div  onClick={() => this.linkPage('student3dmodeler')}><Link to="/admin/student3dmodeler" className="dr-title">3D Modeler</Link>  </div>
                                                        
                                </div>
                            </div>
                            <div  onClick={() => this.linkPage('admin')} className="link-page p-3">
                                <Link to="/admin/admin" className="text-light">Admin</Link>
                            </div>
                            {/* <div className="link-page p-3 d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#showrel" aria-expanded="false" aria-controls="showrel">
                                <p className="text-light m-0">
                                    Showrel
                                </p>
                                <FontAwesomeIcon icon="sort-down" className="text-light align-self-center" />
                            </div>
                            <div className="collapse" id="showrel">
                                <div className="card card-body p-0 pl-5">
                                    <div onClick={() => this.linkPage('showreelanimator')}><Link to="/admin/showreelanimator" className="dr-title">Animator</Link></div>
                                    <div onClick={() => this.linkPage('showreelcompositor')}><Link to="/admin/showreelcompositor" className="dr-title">Compositor</Link></div>
                                    <div onClick={() => this.linkPage('showreelprogrammer')}><Link to="/admin/showreelprogrammer" className="dr-title">Programmer</Link></div>
                                    <div onClick={() => this.linkPage('showreel3dmodeler')}><Link to="/admin/showreel3dmodeler" className="dr-title">3D Modeler</Link> </div>                        
                                </div>
                            </div> */}
                            <div onClick={() => this.linkPage('partner')} className="link-page p-3">
                                <Link to="/admin/adminpartner" className="text-light">Partner</Link>
                            </div>
                            <div className="link-page  p-3 discuss" onClick={() => this.linkPage('discuss')}>
                                <Link to="/admin/discuss" className="text-light">Discuss</Link>
                            </div>
                            
                            <hr className="bg-secondary m-0 w-100" />
                            <div className="link-page p-3 text-light d-flex align-items-center" onClick={() => this.signout()} >
                                <FontAwesomeIcon icon ="sign-out-alt" className="sign-out-alt text-light mr-2" />
                                <p className="m-0">Sign Out</p>
                            </div>
                    
                        </div>
                </div>
                <div className="sidebar_bg" ref="sidebarBg" onClick={() => this.closeSidebar()}>
					
				</div>
            </div>
        
        )
    }

}
export default withRouter(AdminSidebar);