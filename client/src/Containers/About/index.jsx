import React from 'react';
import './About.css';
import PageTitle from '../../Components/UI/PageTitle';
import about1 from '../../img/about-1.jpg';
import about2 from '../../img/about-2.jpg';
import about3 from '../../img/about-3.jpg';
import { Container, Row, Col } from 'react-bootstrap';

/**
* @author
* @function About
**/

const About = (props) => {
  return(
    <>
    <PageTitle heading="About Us" />
    <section className="about-section section-padding">
      <Container>
      <div className="about-intro">
        <h6>A complete one-stop service for outdoor and instore Advertising.</h6>
        <p className="mb-5 mt-4"><strong>To maintain and be the acknowledged leader in print Advertising through consistent improvement in quality - Our Vision</strong></p>
      </div>
      <div className="about-section-div">
      <Row>
      <Col lg={6} sm={12} md={6}>
      <img src={about1} alt=" " />
      </Col>
      <Col lg={6} sm={12} md={6}>
      <p><strong>Mark Ad Grafix</strong>, since 1990, a high quality outdoor media printing house with the reputation of producing some of the best printed material like Banner Stand, Canopies, Acrylic slim light Display and Fabrication for Exhibitions &   Glow- sign Boards, ACP Glow-sign boards, Uni-pole Hoarding, Wooden Cabinets etc. in India.</p>
      <p><strong>Mark Ad Grafix</strong> is modernized at every level, sourcing equipment from the best of international manufacturers. Their passion for good quality printing and design, deep knowledge and understanding of technology involved,  saw the dream become a successful reality.</p>
      </Col>
      </Row>
      </div>
      <div className="about-section-div">
      <Row>
      <Col lg={6} sm={12} md={6}>
      <h6>Our Mission: </h6>
        <ul>
          <li> - To encourage individual growth to fullest potential. </li>
          <li> - To achieve high degree of efficiency and attain international standards. </li>
          <li> - Quality through people and technology. </li>
          <li> - To recognize the customer's right to Quality, Services, Timely Delivery and Cost. </li>
          <li> - To ensure maximum satisfaction to the clients. </li>
          <li> - To Produce the highest quality product in the least amount of time at the most economical price. </li>
        </ul>
      </Col>
      <Col lg={6} sm={12} md={6}>
      <img src={about2} alt=" " />
      </Col>
      </Row>
      </div>
      <div className="about-section-div">
      <Row>
      <Col lg={6} sm={12} md={6}>
      <img src={about3} alt=" " />
      </Col>
      <Col lg={6} sm={12} md={6}>
      <h6>Why Us: </h6>
        <ul>
          <li> - In the fiercely competitive times you need to be able to minimize your cost to improve upon your margins. </li>
          <li> - Arm with hundreds of man years of experience in a broad spectrum of printing technology Mark Ad Grafix enables you to achieve this without compromising on quality and with maximum efficiency. </li>
          <li> - Mark Ad Grafix’s strength stems from its broad range of high quality services. </li>
          <li> - Mark Ad Grafix is recognized universally for cost effective prices, good output and reliable services. </li>
          <li> - Our reputation stands out from our qualified strengths. </li>
          <li> - We have strong work force of pro active and dedicated people. </li>
        </ul>
      </Col>
      </Row>
      </div>
      </Container>
    </section>
    <div className="quote-div">
        <h3><i class="fa fa-quote-left" aria-hidden="true"></i> Business that makes nothing but money is a poor business.  <i class="fa fa-quote-right" aria-hidden="true"></i></h3>
      </div>
    </>
   )
  }


export default About