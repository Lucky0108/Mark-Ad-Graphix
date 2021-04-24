import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import Typewriter from "typewriter-effect";

// Media Imports
import introVid from '../../img/intro.mp4'
import aboutVid from '../../img/about.mp4'
import testimonialBg from '../../img/testimonial-bg.jpg'
import pro1 from '../../img/download.jfif'
import pro2 from '../../img/pro2.jfif'
import pro3 from '../../img/pro3.jfif'
import client1 from '../../img/allen-solly.png'
import client2 from '../../img/trends.png'
import client3 from '../../img/Louis.png'
import client4 from '../../img/van-heusen.png'
import client5 from '../../img/planet.jpg'
import client6 from '../../img/stanmax.png'
import test1 from '../../img/lakshay.webp'


// Components Import
import HomeServiceCard from '../../Components/UI/HomeServiceCard';
import HomeSectionsHeading from '../../Components/UI/HomeSectionsHeading';

// Css Imports
import './Home.css'
import 'swiper/swiper-bundle.css'

// Import Swiper core and required modules
import SwiperCore, { Pagination,  Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialDiv from '../../Components/UI/TestimonialDiv';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade]);

/**
* @author
* @function Home
**/

const Home = (props) => {

  const [serviceHeading, setServiceHeading] = useState(false);
  const [aboutHeading, setAboutHeading] = useState(false);
  const [productHeading, setProductHeading] = useState(false);
  const [clientHeading, setClientHeading] = useState(false);

  const scrollCoord = () => {
    // console.log(window.scrollY)
    if(window.scrollY >= 200 && window.scrollY <= 1150) {
      setServiceHeading(true)
    } else {
      setServiceHeading(false)
    }

    if(window.scrollY >= 1151 && window.scrollY <= 1860) {
      setAboutHeading(true)
    } else {
      setAboutHeading(false)
    }

    if(window.scrollY >= 1861 && window.scrollY <= 2600) {
      setProductHeading(true)
    } else {
      setProductHeading(false)
    }

    if(window.scrollY >= 2700 && window.scrollY <= 3700) {
      setClientHeading(true)
    } else {
      setClientHeading(false)
    }
  }

  window.addEventListener("scroll", scrollCoord);

  return (
    <>

      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-section-wrap">
          <video src={introVid} className="introVideo" loop muted autoPlay />
          <div className="contentDiv">
            <div className="layer">
            <Typewriter
              options={{
                autoStart: true,
                loop: true
              }}
              onInit={(typewriter)=> {
              typewriter
              .typeString("We are mark ad grafix")
              .pauseFor(1000)
              .deleteAll()
              .typeString("We provide consistent superior quality")
              .pauseFor(1000)
              .deleteAll()
              .typeString("We have hi-tech equipment from Japan and China")
              .start();
              }}
              />
            </div>
            <div className="mouse-effect"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section py-5 section-padding sliding-animation">
        <Container>
          <Row>
            <HomeSectionsHeading headingClass={serviceHeading ? "active" : ""} heading="Not Your Regular Signage Company" para="The high-speed, hi-tech equipment from Japan and China provides us with a fast turnaround and consistently superior quality." />
          </Row>
          <Row>
            <HomeServiceCard imgIcon="fa-file" heading="Solvent Printing Services" para="We make sure you get the best printing services." />
            <HomeServiceCard imgIcon="fa-leaf" heading="Eco Solvent Printing" para="We ensure to take care of your health and that of the environment." />
            <HomeServiceCard imgIcon="fa-print" heading="Digital Printing" para="We are well up to date with modern digital printings." />
            <HomeServiceCard imgIcon="fa-star" heading="Signage Services" para="We provide the most time and cost-efficient services." />
          </Row>
          <div className="btn-theme-div">
            <Link to="/service" className="btn-theme">Know More</Link>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="home-about-section sliding-animation">
        <div className="home-about-wrap">
          <video src={aboutVid} className="aboutVideo" loop muted autoPlay />
          <div className="contentDiv">
            <div className="layer">
              <Container>
                <Row>
                  <HomeSectionsHeading headingClass={aboutHeading ? "active" : ""} heading="Your Signage Solution" para="Mark Ad Grafix, since 1990, a high quality outdoor media printing house is modernized at every level, sourcing equipment from the best of international manufacturers. Their passion for good quality printing and design, deep knowledge and understanding of technology involved,  saw the dream become a successful reality." />
                </Row>
                <div className="video-btn">
                  <i className="fa fa-play fa-2x" aria-hidden="true"></i>
                </div>
                <div className="btn-theme-div">
                  <Link to="/about" className="btn-theme">Know More</Link>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="home-product-section sliding-animation">
        <div className="home-product-wrap">
          <div className="layer">
            <Container>
              <Row>
                <HomeSectionsHeading headingClass={productHeading ? "active" : ""} heading="Our Products" para="Mark Ad Grafix offers a wide range of printing products that meet international standards and varied requirements of our esteemed customers. Our product range include like Banner Stand, Canopies, Acrylic slim light Display and Fabrication for Exhibitions & Glow-sign Boards, ACP Glow-sign boards, Uni-pole Hoarding, Wooden Cabinets etc." />
                <div className="product-carousel col-md-12">
                <Swiper 
                  className="product-swiper"
                  effect="fade"
                  direction="horizontal"
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay = {{ delay: 2500, disableOnInteraction: false}}
                >
                  <SwiperSlide>
                    <div className="product-slider-img">
                      <img src={pro1} alt="Acp Signs" />
                    </div>
                    <div className="product-slider-content">
                      <div className="product-slider-title">
                          <Link to="/portfolio">ACP Signs</Link>
                      </div>
                      <div className="product-slider-text">
                      Acp signs are here to replace your old basic sign boards which gives a premium, elegant and classy looking signage for your brand which along with computerise cut letters &amp; LED lit logos. They provide great visibility even from great distances. They are easy to maintain and durable.								
                      </div>
                      <Link to="/product" className="btn-theme">View All</Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider-img">
                      <img src={pro2} alt="Neon Sign" />
                    </div>
                    <div className="product-slider-content">
                      <div className="product-slider-title">
                          <Link to="/portfolio">Neon Signs</Link>
                      </div>
                      <div className="product-slider-text">
                        Neon signs are special electrical signs that are lighted by long gas tubes that contain neon or other gases. Their most common use is of neon lightning. They are a important part of signage industry and they have a very long lifetime. Neon tube signs are made by bending glass tubes into shapes.	
                      </div>
                      <Link to="/product" className="btn-theme">View All</Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider-img">
                      <img src={pro3} alt="Banner Stands" />
                    </div>
                    <div className="product-slider-content">
                      <div className="product-slider-title">
                          <Link to="/portfolio">Banner Stands</Link>
                      </div>
                      <div className="product-slider-text">
                      A Banner Stand is an excellent choice for portable display. They come in different variety of styles such as fixed stands, Expandable stands, X-style stands and Retractable stands. Retail stores uses Banner stand for marketing and to display their new products. You may see them in store windows and throught malls.
                      </div>
                      <Link to="/product" className="btn-theme">View All</Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
                </div>
              </Row>
            </Container>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="home-client-section sliding-animation">
        <div className="home-client-wrap">
          <div className="layer">
            <Container>
              <Row>
                <HomeSectionsHeading headingClass={clientHeading ? "active" : ""} heading="Our Clients" para="Within a short span of time, we at Mark Ad Grafix had the opportunity to work with many renowned organizations in the country. Our commitment, dedication to produce the best of the best results and aspiration to give the very best to the our clients at economical prices has eabled us to reach our vision. " />
                <div className="client-carousel col-md-12">
                <Swiper
                  spaceBetween={30}
                  centeredSlides
                  // slidesPerView={5}
                  // slidesPerColumn={2}
                  // slidesPerGroup={5}
                  // slidesPerColumnFill="row"
                  // grabCursor={true}
                  pagination={{ clickable: true }}
                  autoplay = {{ delay: 2500, disableOnInteraction: false}}
                  breakpoints = {{ 320: { slidesPerView: 2}, 500: { slidesPerView: 3}, 1001: { slidesPerView: 5} }}
                >
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src={client1} alt="Allen Solly"/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src={client2} alt="Reliance Trends" />
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src={client3} alt="Louis Philippe" />
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src={client4} alt="Van Huesen" />
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src={client5} alt="Planet Fashion" />
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src={client6} alt="Stanmax" />
                  </div> 
                  </SwiperSlide>
              </Swiper>
                </div>
              </Row>
              <div className="btn-theme-div">
                <Link to="/client" className="btn-theme">View All</Link>
              </div>
            </Container>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-wrap">
          <img className="testimonial-bg" src={testimonialBg} alt=" " />
          <div className="contentDiv">
              <div className="layer">
                <Container>
                  <Row>
                    <HomeSectionsHeading headingClass="active" heading="Testimonials" para="This is what our clients say about us!" />
                    <Swiper
                      onSwiper={(swiper) => console.log(swiper)}
                      autoplay = {{ delay: 2500, disableOnInteraction: false}}
                    >
                      <SwiperSlide>
                        <TestimonialDiv img={test1} name="Lakshay Yadav" company="Allen Solly" quote='"Had an amazing work done by you guys! Really Appreciate all the fantastic job! Would definitely recommend everyone to you guys!"' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TestimonialDiv img={test1} name="Lucky" company="Reliance Trends" quote='"Had an amazing work done by you guys! Really Appreciate all the fantastic job! Would definitely recommend everyone to you guys!"' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TestimonialDiv img={test1} name="Sandeep yadav" company="Louis Philippe" quote='"Had an amazing work done by you guys! Really Appreciate all the fantastic job! Would definitely recommend everyone to you guys!"' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TestimonialDiv img={test1} name="Rishabh" company="Van Huesen" quote='"Had an amazing work done by you guys! Really Appreciate all the fantastic job! Would definitely recommend everyone to you guys!"' />
                      </SwiperSlide>
                      <SwiperSlide>
                        <TestimonialDiv img={test1} name="Rahul" company="Allen Solly" quote='"Had an amazing work done by you guys! Really Appreciate all the fantastic job! Would definitely recommend everyone to you guys!"' />
                      </SwiperSlide>
                    </Swiper>
                  </Row>
                </Container>
              </div>
          </div>  
        </div>
      </section>
    </>
  )
}


export default Home