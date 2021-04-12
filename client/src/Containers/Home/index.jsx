import React from 'react'
import './Home.css'
import introVid from '../../img/intro.mp4'
import Typing from 'react-typing-animation';

/**
* @author
* @function Home
**/

const Home = (props) => {
  return (
    <>
      <section className="home-hero-section">
        <div className="hero-section-wrap">
          <video src={introVid} className="introVideo" loop muted autoPlay />
          <div className="midText">
          <div className="layer">
            <span>WE HAVE PARTNER NETWORK SPREAD ACROSS INDIA</span>
          </div>
          <div className="mouse-effect"></div>
        </div>
          </div>
      </section>
    </>
  )
}


export default Home