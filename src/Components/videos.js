import React from 'react'
import '../App.css'

function Videos () {

    let videoArr = ["IhvPjLS3EoM", "eyb5S_L772k", "VitF4kydgbg", "FEi2567vgQw", "X7e10MLpRxo", "jHma8l6pM28", "7NPB7t4ViOo", "GSl-88mTd_s", "EWEAR93tp2U", "Ibm0wf9zSNw", "rq5dnyKpCAo", "Bnz8Tx3Mwp0", "zH8_qwWTpwQ", "A8728GA9fmM", "wptDRbpXXC0"]

    const videos = videoArr.map((video)=><iframe width="1424" height="679" src={"https://www.youtube.com/embed/" + video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen; " referrerpolicy="strict-origin-when-cross-origin" 
    allowfullscreen className="video-thumbnail"></iframe>)

    return (
        <>
                
                <div className='video-library'>
                {videos}
            
                </div>

        </>
    )
}

export default Videos