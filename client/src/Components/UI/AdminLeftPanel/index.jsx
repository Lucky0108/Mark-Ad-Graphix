import React from 'react'
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap'
import { logout } from '../../../user/user';
import './AdminLeftPanel.css'

/**
* @author
* @function AdminLeftPanel
**/

const AdminLeftPanel = (props) => {
    return(
    <>
    <section className="AdminLeftPanel-section">
    <Row>
        <Col md={3} lg={3} sm={12}>
            <div className="admin-left-panel">
                <ul className="admin-left-panel-list">
                    <div className="left-main-links">
                    <li><NavLink to="/admin/profile" className="admin-panel-link nav-link" activeClassName="admin-panel-active"></NavLink> Profile</li>
                    <li><NavLink exact to="/admin/contacts" className="admin-panel-link nav-link" activeClassName="admin-panel-active"></NavLink> Contact Items </li>
                    <li><NavLink exact to="/admin/newsletter" className="admin-panel-link nav-link" activeClassName="admin-panel-active"></NavLink> Newsletter </li>
                    </div>
                    <div className="logout-div">
                    <li onClick={() => { 
                        logout();
                        // eslint-disable-next-line no-restricted-globals
                        location.reload(); 
                        }}> Logout </li>
                    </div>
                </ul>
            </div>
        </Col>
        <Col md={9} lg={9} sm={12}>
            {props.children}
        </Col>
    </Row>
    </section>
    </>
   )
  }


export default AdminLeftPanel