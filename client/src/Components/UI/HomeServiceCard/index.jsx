import React from 'react';
import { Col } from 'react-bootstrap';
import './HomeServiceCard.css'

/**
* @author
* @function HomeServiceCard
**/

const HomeServiceCard = (props) => {
    return (
        <>
            <Col sm={12} md={12} lg={3}>
                <div className="service-ui">
                    <div className="card">
                        <div className="imgBox">
                            <i className={`fa ${props.imgIcon}`}></i>
                        </div>
                        <div className="contentBox">
                            <h3>{props.heading}</h3>
                            <div className="service-card-para">
                                <p>{props.para}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </>
    )
}


export default HomeServiceCard