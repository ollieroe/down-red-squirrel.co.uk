import React from 'react'
import '../App.css'
import logo from '../images/red-squirrel-logo.jpg'
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";

function Footer () {
    return (
        <div className='footer'>
            <div className='footer-nav'>

            <div>
                <h5>Heart of Down Red Squirrel Group</h5>
                <Link to="/" className="navLeft">
            <img src={logo} alt="Red Squirrel Logo" className="navLogo"></img>
        </Link>
            </div>
            <div>
                <h5>Browse</h5>
                        <Link to="/" className="navElement">Home</Link>
                        <Link to="/about" className="navElement">About</Link>
                        <Link to="/getInvolved" className="navElement">Get Involved</Link>
                        <Link to="/sightings" className="navElement">Sightings</Link>
            </div>

            <div>
                <h5>Contact</h5>
                <p>countydownredsquirrel@gmail.com</p>
                <p>077894326</p>
                <p>Castle Ward, Downpatrick, Northern Ireland</p>
            </div>

            <div>
                <h5>Get Involved</h5>
            </div>
            </div>

            <div className='logo-div'>
                <div class="footer-logo" id="footer-1"></div>
                <div class="footer-logo" id="footer-2"></div>
            </div>

            <div className='logo-div' id="bottom-footer">
                <p>Copyright</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer