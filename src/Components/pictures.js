import React from 'react'
import '../App.css'
import img1 from "../images/squirrel-pictures/bob-brewer-TibuM7sy21o-unsplash.jpg"
import img2 from "../images/squirrel-pictures/dusan-veverkolog-AuapWMoAv5w-unsplash.jpg"
import img3 from "../images/squirrel-pictures/phil-robson-vRFSvmgd7-k-unsplash.jpg"
import img4 from "../images/squirrel-pictures/thomas-bormans-fUc4moFdwN4-unsplash.jpg"

function Pictures () {

        const images = [img1, img2, img3, img4, img1, img4, img3,img2, img1]

    return (
        <>
            {images.map((src, index) => (
                <img key={index} src={src} alt={`squirrel-img-${index}`} className='gallery-picture' />
            ))}
        </>
    )
}

export default Pictures