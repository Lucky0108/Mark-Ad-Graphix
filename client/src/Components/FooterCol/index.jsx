import React from 'react'
import { Col } from 'react-bootstrap';
import './FooterCol.css'

/**
* @author
* @function FooterCol
**/

const FooterCol = (props) => {
    return (
        <>
            <Col sm={12} md={4} lg={4}>
                <div className={`${props.mainDiv} contact-elem mb-5`}>
                    <div className="address-div-icon">
                        <i className={`fa ${props.icon} fa-2x`} aria-hidden="true"></i>
                    </div>
                    <div className={props.contentDivName}>
                        <h4 className="text-white">{props.heading} </h4>
                        {props.span}
                    </div>
                </div>
            </Col>
        </>
    )
}


export default FooterCol