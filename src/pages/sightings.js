import React from 'react'
import '../App.css'
import Pictures from '../Components/pictures'
import Videos from '../Components/videos'
import { useState } from "react";

function Sightings () {

    const [selected, setSelected] = useState('pictures');

    const showSelectedOption = () => {
        switch(selected){
            case 'pictures': 
            return <Pictures/>;
            case 'videos': 
            return <Videos />;
            default: return <Pictures />;
        }
    }


    return (
        <div className='main'>
            <div className='title'>
            <h1 >Sightings</h1>
            </div>
                <div className='line-div'></div>
                    <div className="sightings">
                        <div className="picture-video-div">
                            <div className="picture-video-div">
                                <button onClick={() => {
                                    setSelected('pictures')
                                    }} className={`sightings-1 ${selected === 'pictures' ? 'selected' : ''}`} id="pictures">Pictures</button>
                                <button onClick={() => setSelected('videos')} className={`sightings-1 ${selected === 'videos' ? 'selected' : ''}`} id="video">Videos</button>
                            </div>
                            
                            <div className='content-space'>
                                {showSelectedOption()} 
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Sightings