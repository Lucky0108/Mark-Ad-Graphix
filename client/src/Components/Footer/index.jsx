import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import './Footer.css'

// Component Import
import FooterCol from '../FooterCol';
import { NewsletterApi } from '../../user/user';

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
      ["https://wa.me/+919810191865", "fa-whatsapp"], ["https://www.linkedin.com/company/mark-ad-grafix/", "fa-linkedin"] 
    ]     

    // variable to render Links List
    const renderFooterList = FooterLinkList.map((val, index) => { return <li key={index}> <Link to={val[0]}> {val[1]} </Link> </li>})

     // variable to render Icons List
     const renderIconList = SocialIconList.map((val, index) => { return  <li key={index}> <a href={val[0]} target="_blank" rel="noopener noreferrer"> <i className={`fa ${val[1]}`}></i> </a> </li>})

     const toastId = React.useRef(null);
     const [email, setEmail] = useState('');
     const [error, setError] = useState(false);
     const [message, setMessage] = useState(false);
     const [loading, setLoading] = useState(false);
     const submitMail = (e) => {
       e.preventDefault();
       setLoading(true)
       setEmail('');
       NewsletterApi({ email })
        .then((res) => {
          setLoading(false) 
          setMessage(res.data.message)
        })
        .catch((err) => { 
          setLoading(false)
          setError(err.response.data.message)
        })
     }

     useEffect(() => {
       if(loading) {
        toastId.current = toast.info("Loading...", {autoClose: false})
       }
       if(message) {
        toast.dismiss(toastId.current);
        toast.success(message);
        setMessage(false)
       } else if(error) {
        toast.dismiss(toastId.current);
        toast.error(error);
        setError(false)
       }
     }, [loading, message, error])

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
                span={  <span className="contact-phone"> <a href="tel:+919810191865" target="_blank" rel="noopener noreferrer">+91 9810191865</a> <span>, </span> <a href="tel:0120-4241246" className="ml-5px" target="_blank" rel="noopener noreferrer">0120-4241246</a> <div className="contact-whatsapp"> <a href="https://wa.me/+919810191865" target="_blank" rel="noopener noreferrer"> <i className="fa fa-whatsapp"></i> &nbsp; +91 9810191865</a> </div> </span>} 
              />   
              <FooterCol mainDiv="mail-div" icon="fa-envelope-o" contentDivName="mail-div-content" heading="Mail us:" 
                span={  <span className="contact-mail"> <a href="mailto:markadgrafix@gmail.com" target="_blank" rel="noopener noreferrer">markadgrafix@gmail.com</a> </span> } 
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
                    <form style={{ display: "contents" }} onSubmit={submitMail}>
                    <input type="email" className="form-control subscribe-input" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                    <button className="subscribe-submit-btn" aria-label="Newsletter Submit"></button>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
            </div>
          </div>
        </div>
        <div className="footer-copyright-wrap clearfix">
            Copyright © 2021 | Mark Ad Grapfix. All Rights Reserved. 
            Designed By <a href="https://lakshayyadav.me" target="_blank" rel="noopener noreferrer">LAKSHAY</a>
        </div>
      </section>      
    </footer>
    </>
   )
  }


export default Footer