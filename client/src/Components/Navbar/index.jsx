import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logoImg from '../../img/logo.jfif';
import './Navbar.css';

/**
* @author
* @function Navbar
**/

const NavbarComp = (props) => {
  return(
    <>
    <Navbar className="navDiv" expand="lg">
    <Container>
    <NavLink to='/' className="navbar-brand site-brand"><img src={logoImg} alt="Mark Ad Grapfix" /></NavLink>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <NavLink exact to="/" className="navLink" activeClassName="activeNavLink" >Home</NavLink>
        <NavLink to="/service" className="navLink" activeClassName="activeNavLink">Services</NavLink>
        <NavLink to="/about" className="navLink" activeClassName="activeNavLink">About Us</NavLink>
        <NavLink to="/product" className="navLink" activeClassName="activeNavLink">Products</NavLink>
        <NavLink to="/client" className="navLink" activeClassName="activeNavLink">Clients</NavLink>
        <NavLink to="/contact" className="navLink" activeClassName="activeNavLink">Contact Us</NavLink>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
   )
  }


export default NavbarComp