import React from "react";
import "../App.css";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import 'bootstrap/dist/css/bootstrap.min.css';

// import Yggdrasil from "../assets/images/yggdrasil.png";

function Header() {
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/Home">Title</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/PriorityPage">PriorityPage</Nav.Link>
          {/* <Nav.Link href=":name/:id">KpiDetails</Nav.Link> */}
          <Nav.Link href="/TwoDGraph">TwoDGraph</Nav.Link>
          <Nav.Link href="/OverView">OverView</Nav.Link>
        </Nav>
      </Navbar>
    );
}

export default Header