import React from "react";
import "../App.css";

function GetInvolved() {
  return (
    <div className="main">
      <div className="title">
        <h1>Get Involved</h1>
        <div className="line-div"></div>
      </div>

      <div className="bottom-spacer2"></div>

      <section className="events">
        <div className="events-title">
          <h3 className="bottom-spacer2">Previous Events</h3>

          <div>
            <h5 className="bottom-spacer2">New Red Squirrel Release</h5>
            <p>
              The last event took place on the 5th May where one female and one
              male red squirrel was released into the castle ward area.
            </p>
          </div>
        </div>
        <div className="upcoming-events">
          <h4 className="bottom-spacer2">
            <span className="underline">Upcoming Events</span>
          </h4>
          <p className="underline">28th June, Castle Ward, 9:00 Am</p>
          <p>
            The next upcoming event is the charity collection for red squirrels
            at Castleward on the 28th June at 9:00. Come and talk to us, enjoy
            some cake and a cuppa from the cafe and let's talk squirrels!
          </p>
        </div>
      </section>
    </div>
  );
}

export default GetInvolved;
