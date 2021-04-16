import React from 'react';
import { Col } from 'react-bootstrap';
import './HomeSectionsHeading.css';

/**
* @author
* @function HomeSectionsHeading
**/

const HomeSectionsHeading = (props) => {
    return (
        <Col md={12}>
            <h2 className="heading">{props.heading} </h2>
            <p className="post-heading-para">{props.para}</p>
        </Col>
    )
}


export default HomeSectionsHeading