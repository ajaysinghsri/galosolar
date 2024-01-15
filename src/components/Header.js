import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav"
import "./header.css"
import { Link} from 'react-router-dom';
const Header = () => {
  return (
   <>
   
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary  ">
    <Container className='navbg'>
      <Navbar.Brand href="">
      <div className='d-flex'>
          <img
            alt="logo"
            src="../images/solar.jpg"
            width="90"
            height="100"
            className="d-inline-block align-top mt-3"
          />{' '}
          
          <p className='logo-title mt-3 ms-4'><b><i>Galo</i></b></p>
          </div>
     </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link ><Link to="/latestpost" className='navlink'><b>Latest Post</b></Link></Nav.Link>
          <Nav.Link  ><Link to="/famouspost" className='navlink'><b>Famous Post</b></Link></Nav.Link>
          <Nav.Link ><Link to="/trandingpost" className='navlink'><b>Trending Post</b></Link></Nav.Link>
          <Nav.Link ><Link to="/videopost" className='navlink'><b>Video post</b></Link></Nav.Link>
          
          
        </Nav>
        <Nav>
        
          <Nav.Link ><Link to="/aboutus" className='navlink'><b>About us</b></Link></Nav.Link>
          
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
      </>
  )
}

export default Header