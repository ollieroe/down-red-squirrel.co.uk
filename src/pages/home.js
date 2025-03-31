import React from 'react'
import '../App.css'
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route, Link
// } from "react-router-dom";
import banner from "../images/Squirrel-banner.jpeg"

function Home () {
    return (
        <div>
            <div className='img-div'>
                <img src={banner} alt='Image of a squirrel sat on a branch' id="sq-banner"></img>
            </div>
                <p className='info-text'>Red Squirrels are an important part of our native woodlands and they need your help
                </p>
                <p className='info-text'>That’s why we’re here to help</p>

            <div className='box-container'>
                <div className='box-item'>
                    <div className='box-item-1' id="box-1"></div>
                    <div className='box-item-2'>
                        <p>Sightings</p>
                    </div>
                </div>
                <div className='box-item'>
                    <div className='box-item-1'id="box-2">
                    </div>
                    <div className='box-item-2'>
                    <p>Meet Ups</p>

                    </div>
                </div>
                <div className='box-item'>
                    <div className='box-item-1' id="box-3"></div>
                    <div className='box-item-2'>
                    <p>How to help</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home