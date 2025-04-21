import React from 'react'
import '../App.css'
import banner from "../images/Squirrel-banner.jpeg"

function Home () {
    return (
        <div className='main'>
            <div className='img-div'>
                <img src={banner} alt='Squirrel sat on a branch' id="sq-banner"></img>
                <div className='hero-text'>
                    <h1>We're the Heart of Down Red Squirrel Group</h1>
                </div>
            </div>

            <div className='hero-info'>
                <p >
                    Red Squirrels are an important part of our native woodlands and they need your help.
                </p>
                <div className='short-line-div'></div>
                <p className='hero-h2'>
                That’s why we’re here to help
                </p>
            </div>

                <div className='info-container'>
                    <p className='info-text white-text'>At The Heart of Down Red Squirrel Charity, we are dedicated to protecting and conserving one of the UK's most iconic and endangered species – the red squirrel.  </p>
                        
                    <p className='info-text white-text'>With fewer than 120,000 red squirrels left in the wild, their future is uncertain, but together, we can make a difference.   </p>

                    <p className='info-text white-text'>  Our charity focuses on vital conservation efforts such as habitat restoration, the installation of squirrel boxes, and monitoring squirrel populations to ensure their survival.</p>
                </div>

                

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