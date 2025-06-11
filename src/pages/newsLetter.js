import React from 'react'
import '../App.css'
import squirrell3 from "../images/squirrel-pictures/dusan-veverkolog-AuapWMoAv5w-unsplash.jpg";


function NewsLetter () {
    return (
        <div className='main'>
            <div className='title'>
                <h1>Newsletter</h1>
                <div className='line-div'></div>
                <div className="sightings">
                </div>
            </div>

            <div className='title title-medium'>
                28th March 2025
            </div>
            <section class="green-background bottom-spacer">
            
        <div class="about-container">
            <div class="container-left">
              <img src={squirrell3} class="sq-img"></img>
            </div>
            <div class="container-right about-text">
              <p>
              The Heart of Down Red Squirrel Group was formed in 2017, initially working in Montalto Estate, Ballynahinch, County Down. Following some grey squirrel control, red squirrels were introduced from Belfast Zoo’s breeding program. These squirrels produced at least two litters of kits, before the group moved its attention to the monitoring and encouragement of red squirrels in pockets of woodland in the Ballynahinch area.
              </p>
            </div>
          </div>
          </section>
        </div>
    )
}

export default NewsLetter