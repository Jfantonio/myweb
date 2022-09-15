import React from 'react';
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsFilePersonFill } from "react-icons/bs";

const Navegacion = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>jfav<BsFilePersonFill /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/inicio'>Inicio</Nav.Link>
            <Nav.Link as={Link} to='/about'>Sobre mi.</Nav.Link>
         </Nav>
       </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegacion;

