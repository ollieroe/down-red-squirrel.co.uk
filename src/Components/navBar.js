import React from "react";
import logo from '../images/red-squirrel-logo.jpg'
import '../App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";
// import { Routes, Route, Link } from "react-router-dom";


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
        </div>
        </>
    )
}

export default Navbar