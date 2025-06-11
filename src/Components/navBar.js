import React from "react";
import logo from '../images/red-squirrel-logo.jpg'
import '../App.css'
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar () {
    return (
        <>
        <div className='navBar'>
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

        </div>
        </>
    )
}

export default Navbar