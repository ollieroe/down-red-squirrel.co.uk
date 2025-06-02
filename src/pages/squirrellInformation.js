import React from 'react'
import '../App.css'
import banner from "../images//squirrel-pictures/AdobeStock_334005837_Preview.jpeg";


function SquirrellInformation () {
    return (
        <div className='main'>
            <div className='title'>
                <h1>Squirrell Information</h1>
                <div className='line-div'></div>
                <div className="sightings">
                </div>
            </div>

            <article>
            <h3 className="h3-title"><span className='underline'>The Red Squirrel/Grey Squirrel/Pine Marten dynamic</span></h3>

            <p>
            American grey squirrels were introduced to Ireland as a wedding present in the early 1900s.
            </p>
            <p>
            American grey squirrels out compete our native red squirrel in size, number of litters, size of litter and for food exploitation.  Crucially grey squirrels carry a pox which seems to be largely asymptomatic for them but highly infectious and apparently invariably quickly fatal for red squirrels. The arrival of grey squirrels in an area usually heralds a gruesome death for any resident reds. This pox is thought to be largely responsible for the red squirrel population crash in Ireland in the last 100 years. Prior to red squirrels being released in any woodland there must be monitoring to ensure there are no grey squirrels.
            </p>
            <div className="img-div">
          <img src={banner} alt="Squirrel picture" id="sq-banner2"></img>
        </div>
            </article>
            <p className="bottom-spacer">
            Due to a drop in persecution, there has been a resurgence of the pine marten in Ireland. This is thought to have coincided with a reduction of grey squirrels owing to predation. It is thought that this has allowed for the return of reds. Pine martens and red squirrels have co-existed in Ireland since the last ice age and it is thought this long relationship has resulted in red squirrels being justifiably terrified of this ferocious little predator. Grey squirrels have only been here a hundred years which has not given them the same instinctive respect for the pine marten, this, and grey squirrels being twice the size of a red, has made them much easier prey.
            </p >
        </div>
    )
}

export default SquirrellInformation