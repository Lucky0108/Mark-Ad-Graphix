import React from 'react'
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';

// Media Imports
import introVid from '../../img/intro.mp4'
import aboutVid from '../../img/about.mp4'
import pro1 from '../../img/download.jfif'

// Components Import
import HomeServiceCard from '../../Components/UI/HomeServiceCard';
import HomeSectionsHeading from '../../Components/UI/HomeSectionsHeading';

// Css Imports
import './Home.css'
import 'swiper/swiper-bundle.css'

// Import Swiper core and required modules
import SwiperCore, { Pagination,  Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Install Swiper modules
SwiperCore.use([Pagination, Autoplay, EffectFade]);

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <>

      {/* Hero Section */}
      <section className="home-hero-section">
        <div className="hero-section-wrap">
          <video src={introVid} className="introVideo" loop muted autoPlay />
          <div className="contentDiv">
            <div className="layer">
              <span>WE HAVE PARTNER NETWORK SPREAD ACROSS INDIA</span>
            </div>
            <div className="mouse-effect"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home-services-section py-5 section-padding animation-1">
        <Container>
          <Row>
            <HomeSectionsHeading heading="More than a National Sign & Maintenance Company" para="We bring brands to life through turnkey signage solutions, innovative brand elements and program management support services." />
          </Row>
          <Row>
            <HomeServiceCard imgIcon="fa-star" heading="Brand Implementation" para="We ensure your brand values are represented from design to installation." />
            <HomeServiceCard imgIcon="fa-home" heading="Signs & Brand Elements" para="We install and maintain brand elements using the latest technology and materials." />
            <HomeServiceCard imgIcon="fa-file" heading="Program Management" para="We take care of everything from site surveys to vendor management." />
            <HomeServiceCard imgIcon="fa-wrench" heading="Repair & Maintenance" para="We provide ongoing maintenance and repair services." />
          </Row>
          <div className="home-common-btn-div">
            <Link to="/service" className="home-common-btn">Know More</Link>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="home-about-section animation-2">
        <div className="home-about-wrap">
          <video src={aboutVid} className="aboutVideo" loop muted autoPlay />
          <div className="contentDiv">
            <div className="layer">
              <Container>
                <Row>
                  <HomeSectionsHeading heading="The Signage Difference" para="Signage boasts over 58 years of experience implementing brands across a host of industries. The difference is our people and our processes. From healthcare to security, retail to automotive, our team consists of experts experienced within each of these fields, who understand our customers’ expectations and desires. Watch our video to learn more about The Signage Difference." />
                </Row>
                <div className="video-btn">
                  <i className="fa fa-play fa-2x" aria-hidden="true"></i>
                </div>
                <div className="home-common-btn-div">
                  <Link to="/about" className="home-common-btn">Know More</Link>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="home-product-section animation-1">
        <div className="home-product-wrap">
          <div className="layer">
            <Container>
              <Row>
                <HomeSectionsHeading heading="Our Products" para="We offer a wide gamut of virtual advertising products including signboards, indoor reception signs, name plates, metal signs, ACP signs, directional/wayfinding, information directory, frosted films, LED display boards, LED signs, Corian and other miscellaneous jobs." />
                <div className="product-carousel col-md-12">
                <Swiper 
                  className="product-swiper"
                  effect="fade"
                  direction="horizontal"
                  slidesPerView={1}
                  onSwiper={(swiper) => console.log(swiper)}
                  pagination={{ clickable: true }}
                  autoplay = {{ delay: 2500, disableOnInteraction: false}}
                >
                  <SwiperSlide>
                    <div className="product-slider-img">
                      <img src={pro1} alt=" " />
                    </div>
                    <div className="product-slider-content">
                      <div className="product-slider-title">
                          <Link to="/portfolio">Wayfinding Signs & Totems</Link>
                      </div>
                      <div className="product-slider-text">

                      Way finding systems are unique to each place and visitors. The function of a sign is to identify, inform, direct, honor, restrict or permit. A good sign system recedes into the background while providing clear information when needed. Successfully designed signage helps visitors find their way, makes information accessible, provides an enhanced experience. In addition, an inclusive assessment of the environment and issues that affect orientation for first time visitors…									
                      </div>
                      <Link to="/client" className="home-common-btn">View All</Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider-img">
                      <img src={pro1} alt=" " />
                    </div>
                    <div className="product-slider-content">
                      <div className="product-slider-title">
                          <Link to="/portfolio">Acp Signs</Link>
                      </div>
                      <div className="product-slider-text">
           						ACP signs is a premium option over basic sign boards wherein one can have a premium looking signage for his business along with comuterised cut letters &amp; logos LED lit. It offers an extensive range of basic colors to wooden shades to marble shades to even earthy shades. ACP signs is a premium option over basic sign boards wherein one can have a premium looking signage for his business along…									
                      </div>
                      <Link to="/client" className="home-common-btn">View All</Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-slider-img">
                      <img src={pro1} alt=" " />
                    </div>
                    <div className="product-slider-content">
                      <div className="product-slider-title">
                          <Link to="/portfolio">LED Signs</Link>
                      </div>
                      <div className="product-slider-text">
                      A LED letter sign is a three-dimensional sign element. It is fabricated from stainless steel and acrylic, thus it will not rust. LED letters are eye-catching and the most preferred choice when it comes to exterior signs. These signs are usually used as fixtures on parts of a building. LED letter signs enhance the overall look of the sign itself and add a lighting effect on the surrounding building façade...
                      </div>
                      <Link to="/client" className="home-common-btn">View All</Link>
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
      <section className="home-client-section animation-2">
        <div className="home-client-wrap">
          <div className="layer">
            <Container>
              <Row>
                <HomeSectionsHeading heading="Our Clients" para="We have proudly served wide spectrum industries such as real estate,education and training, finance companies, manufacturing, schools and colleges, healthcare, news channels, restaurant & hospitality sector, banks, MNCs as well as government organisations including MTNL, Bank of Baroda, ONGC, NDMC, etc.." />
                <div className="client-carousel col-md-12">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={5}
                  slidesPerColumn={2}
                  slidesPerGroup={5}
                  slidesPerColumnFill="row"
                  grabCursor={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  pagination={{ clickable: true }}
                  autoplay = {{ delay: 2500, disableOnInteraction: false}}
                  breakpoints = {{ 320: { slidesPerView: 2}, 500: { slidesPerView: 3}, 1001: { slidesPerView: 5} }}
                >
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/aditya.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/Untitled-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/omaxe.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/ashok.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/ansal.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/birlasoft-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/alpha-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/amway-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/conver.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/dlf-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/apollo.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/apollo-school.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/efunds-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/signage-clients.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/lcacoste.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/tata.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/educomp-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/gulshan-1.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/central.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/toshiba.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/shroff.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/modern.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/malasiye.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/ndmc.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/shimz.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/aditya.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/aditya.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/aditya.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/aditya.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
                  <SwiperSlide>
                  <div className="client-logo">
                  <img src="https://signageindia.in/wp-content/uploads/2020/03/aditya.png" alt=" "/>
                  </div> 
                  </SwiperSlide>
              </Swiper>
                </div>
              </Row>
              <div className="home-common-btn-div">
                <Link to="/client" className="home-common-btn">View All</Link>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </>
  )
}


export default Home