import React from 'react'
import '../App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from "react-router-dom";
import Navbar from '../Components/navBar';

function Home () {
    return (
        <div>
            <div className='img-div'>
                <img>
                </img>
            </div>
                <p className='info-text'>Red Squirrels are an important part of our native woodlands and they need your help
                </p>
                <p className='info-text'>That’s why we’re here to help</p>
        </div>
    )
}

export default Home