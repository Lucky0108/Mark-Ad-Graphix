import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../img/logo.webp';

/**
* @author
* @function Navbar
**/

const NavbarComp = (props) => {

  const [nav, setNav] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const changeScrollColor = () => {
    if(window.scrollY >= 100) {
      setNav(true)
    } else {
      setNav(false)
    }
  }

  window.addEventListener("scroll", changeScrollColor);

  return(
    <>
    <Navbar expanded={expanded} className={nav ? 'navDiv navbar-scroll-color' : 'navDiv'} variant="dark" fixed="top" expand="lg">
    <Container>
    <NavLink to='/' className="navbar-brand site-brand"><img src={logoImg} alt="Mark Ad Grapfix" /></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setTimeout(() => {setExpanded(expanded ? false : true )},200 )} />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <NavLink exact to="/" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)} >Home</NavLink>
        <NavLink to="/service" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Services</NavLink>
        <NavLink to="/about" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>About Us</NavLink>
        <NavLink to="/product" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Products</NavLink>
        <NavLink to="/client" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Clients</NavLink>
        <NavLink to="/contact" className="navLink" activeClassName="activeNavLink" onClick={() => setTimeout(() => {setExpanded(false)}, 200)}>Contact Us</NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
   )
  }


export default NavbarComp