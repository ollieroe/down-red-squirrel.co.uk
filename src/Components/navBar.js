import React from "react";
import logo from "../images/red-squirrel-logo.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Container, NavDropdown } from "react-bootstrap";
import { useRef, useEffect } from "react";
// import Dropdown from "react-bootstrap/Dropdown";

function NavBar() {
  return (
    <>
      {/* <div className='navBar'>
        <Link to="/" className="navLeft">
            <img src={logo} alt="Red Squirrel Logo" className="navLogo"></img>
        </Link>
        <Link to="/" className="navElement">Home</Link>
        <Link to="/about" className="navElement">About</Link>
        <Link to="/getInvolved" className="navElement">Get Involved</Link>
        <Link to="/sightings" className="navElement">Sightings</Link>

        <Dropdown  >
            <Dropdown.Toggle variant="success" id="nav-button" className="navElement" >
               Information
            </Dropdown.Toggle>

            <Dropdown.Menu id="nav-hover">
                <Dropdown.Item href="/NewsLetter" className="navElement">News Letter</Dropdown.Item>
                <Dropdown.Item href="/SquirrellInformation">Squirrell Information</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        </div> */}

      {/* <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top ">
        <div class="container-fluid">
          <Link to="/" className="navLeft">
            <img src={logo} alt="Red Squirrel Logo" className="navLogo"></img>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 p-2 bg-white">
              <li class="nav-item text-center ">
                <Link
                  to="/"
                  className="nav-link active nav-button "
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item text-center">
                <Link to="/about" className="nav-link ">
                  About
                </Link>
              </li>
              <li class="nav-item text-center">
                <Link to="/getInvolved" className="nav-link">
                  Get Involved
                </Link>
              </li>

              <li class="nav-item text-center">
                <Link to="/sightings" className="nav-link ">
                  Sightings
                </Link>
              </li>

              <li class="nav-item text-center">
                <Link to="/NewsLetter" className="nav-link ">
                  News Letter
                </Link>
              </li>

              <li class="nav-item text-center">
                <Link to="/SquirrellInformation" className="nav-link ">
                  Squirrell Information
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      <Navbar expand="lg" className="bg-white navbar-light  fixed-top">
        <Container className="navbar-light ">
          <Navbar.Brand href="/">
            <img src={logo} alt="Red Squirrel Logo" className="navLogo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className="text-center">
                Home
              </Nav.Link>
              <Nav.Link href="/about" className="text-center">
                About
              </Nav.Link>
              <Nav.Link href="/getInvolved" className="text-center">
                Get Involved
              </Nav.Link>
              <Nav.Link href="/sightings" className="text-center">
                Gallery
              </Nav.Link>
              <Nav.Link href="/NewsLetter" className="text-center">
                NewsLetter
              </Nav.Link>
              <Nav.Link href="/SquirrellInformation" className="text-center">
                Squirrel Information
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
