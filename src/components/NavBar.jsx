import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import '../App.css'
import './Navbar.css'

const NavBar = () => {
  return (
    <div>
        <Navbar className='Cnavbar' expand="lg" bg='' variant='' sticky='top'>
          <Container>
            <Navbar.Brand className='navbar-logo'>
              Foodie
            </Navbar.Brand>

            <Navbar.Toggle aria-controls='-navbar-nav'></Navbar.Toggle>
            <Navbar.Collapse id='navbar-nav'>
              <Nav className='ms-auto'>
                <Nav.Link  className='nav-item'>Home</Nav.Link>
                <Nav.Link  className='nav-item'href='#Foodproducts'>Trending</Nav.Link>
                <Nav.Link  className='nav-item'>About us</Nav.Link>
                <Nav.Link  className='nav-item'>Contact</Nav.Link>
                <button className='nav-button'>Login/Signup</button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>

  )
}

export default NavBar