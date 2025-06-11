import React from 'react'
import '../App.css'
import logo from '../images/red-squirrel-logo.jpg'
import {Link} from "react-router-dom";

function Footer () {
    return (
        <div className='footer'>
            <div className='footer-nav'>

            <div className='footer-nav-column'>
                <Link to="/" >
                    <img src={logo} alt="Red Squirrel Logo" className='squirrel-footer' ></img>
                </Link>
                <h5 className='line-div'>Heart of Down Red Squirrel Group</h5>
            </div>
            <div className='footer-nav-column'>
                <h5 className='line-div'>Browse</h5>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/about" className="footer-link">About</Link>
                    <Link to="/getInvolved" className="footer-link">Get Involved</Link>
                    <Link to="/sightings" className="footer-link">Sightings</Link>
                    <Link to="/getInvolved" className="footer-link">Get Involved</Link>
                    <Link to="/newsLetter" className="footer-link">Newsletter</Link>
                    <Link to="/squirrellInformation" className="footer-link">Squirrell Information</Link>
                </div>

            <div className='footer-nav-column'>
                <h5 className='line-div'>Contact</h5>
                <a href="mailto:heartofdownreds@gmail.com" className="footer-link" alt="Email the heart of down red squirrell group">heartofdownreds@gmail.com</a>
                <a href="tel: 07568066953" className="footer-link" alt="Call the heart of down red squirrell group">07568066953</a>
                <p>Castle Ward, Downpatrick, Northern Ireland</p>
            </div>
            </div>

            <div className='logo-div'>
                <div className="footer-logo" id="footer-1"></div>
                <div className="footer-logo" id="footer-2"></div>
            </div>

            <div className='logo-div' id="bottom-footer">
                <p>Copyright</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    )
}

export default Footer