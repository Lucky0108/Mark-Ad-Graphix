import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FooterCol from '../FooterCol';
import './Footer.css'

/**
* @author
* @function Footer
**/

const Footer = (props) => {

    // 2-D Array for Footer Links List having links and Respective Name
    const FooterLinkList = [
      ["/", "Home"], ["/about", "About us"], ["/client", "Clients"], ["/service", "Services"], ["/product", "Products"], ["/contact", "Contact us"]
    ]  

    // 2-D Array for Footer Icons List having links and Respective Name
    const SocialIconList = [
      ["/", "fa-facebook"], ["/", "fa-linkedin"], ["/", "fa-twitter"]
    ]     

    // variable to render Links List
    const renderFooterList = FooterLinkList.map((val, index) => { return <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li>})

     // variable to render Icons List
     const renderIconList = SocialIconList.map((val, index) => { return  <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className={`fa ${val[1]}`}></i> </a> </li>})

  return(
    <>
    <footer>
      <section className="site-footer clearfix">
        <div className="footer-container">
          <div className="text-center">
            <h2 className="footer-heading">
              Contact Us
            </h2>
          </div>
          <div className="footer-wrapper">
            <div className="footer-contact-info mb-4">
            <Container>
            <Row>
              <FooterCol  mainDiv="address-div" icon="fa-map-marker" contentDivName="address-div-content" heading="Find us:" 
                span={ <span className="contact-address">Site 4, Plot No. 4/8, Sahibabad, Ghaziabad, Uttar Pradesh 201010 <a className="address-btn" target="_blank" href="https://goo.gl/maps/oGYKip3cooD4Kp588" rel="noopener noreferrer" > Get Directions &nbsp; <i className="fa fa-location-arrow" aria-hidden="true"></i> </a> </span>} 
              />
              <FooterCol mainDiv="contact-div" icon="fa-phone" contentDivName="contact-div-content" heading="Call us:" 
                span={  <span className="contact-phone"> <a href="/" target="_blank">+91 11 99999999</a> <span>, </span> <a href="/" className="ml-5px" target="_blank">99999999</a> <div className="contact-whatsapp"> <a href="/" target="_blank"> <i className="fa fa-whatsapp"></i> &nbsp; +91 9899999999</a> </div> </span>} 
              />   
              <FooterCol mainDiv="mail-div" icon="fa-envelope-o" contentDivName="mail-div-content" heading="Mail us:" 
                span={  <span className="contact-mail"> <a href="/" target="_blank">info@markadgraphix.in</a> </span> } 
              />                   

            </Row>
            </Container>
            </div>
            <div className="social-links-div clearfix">
            <Container className="mb-5">
              <Row>
                <Col md={4} lg={4} sm={12}>
                  <h2 className="social-widget-title">Follow Us</h2>
                  <h5>Be Social! Join Us On Below Links!</h5>
                  <ul className="clearfix social-widget-icons mb-5">
                    {renderIconList}
                  </ul>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <h2 className="links-widget-title">Quick Links</h2>
                  <ul className="clearfix links-widget-list mb-5">
                    {renderFooterList}
                  </ul>
                </Col>
                <Col md={4} lg={4} sm={12}>
                  <h2 className="subscribe-widget-title">Subscribe</h2>
                  <h5>Fill the form below to subscribe to our news feed now!</h5>
                  <div className="subscribe-input-div">
                    <input type="email" className="form-control subscribe-input" placeholder="Email address" required/>
                    <button type="submit" className="subscribe-submit-btn"></button>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
        </div>
        <div className="footer-copyright-wrap clearfix">
            Copyright © 2021 | Mark Ad Grapfix. All Rights Reserved. Designed By <a href="https://lakshayyadav.me" target="_blank" rel="noopener noreferrer">LAKSHAY</a>
        </div>
      </section>      
    </footer>
    </>
   )
  }


export default Footer