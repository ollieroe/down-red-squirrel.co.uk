import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import banner from "../images/AdobeStock_134985579_Preview.jpeg";
import squirrell1 from "../images/squirrel-pictures/bob-brewer-TibuM7sy21o-unsplash.jpg";
import squirrell2 from "../images/squirrel-pictures/AdobeStock_334005837_Preview.jpeg";
import squirrell3 from "../images/squirrel-pictures/dusan-veverkolog-AuapWMoAv5w-unsplash.jpg";

function About() {
  return (
    <div className="main">
      <div className="title">
        <h1>About</h1>
        <div className="line-div"></div>
      </div>

      <div className="img-div">
        <img src={banner} alt="Squirrel picture" id="sq-banner2"></img>
        <p class="img-text">
          We’re here to help increase the population and look after the red
          squirrels primarily in the Castle Ward area. We help to feed, monitor
          and excitingly introduce new red squirrels when we can.
        </p>
      </div>

      <section class="green-background">
        <div class="about-container">
          <div class="container-left">
            <img src={squirrell3} class="sq-img"></img>
          </div>
          <div class="container-right about-text">
            <p className="sq-text">
              The Heart of Down Red Squirrel Group was formed in 2017, initially
              working in Montalto Estate, Ballynahinch, County Down. Following
              some grey squirrel control, red squirrels were introduced from
              Belfast Zoo’s breeding program. These squirrels produced at least
              two litters of kits, before the group moved its attention to the
              monitoring and encouragement of red squirrels in pockets of
              woodland in the Ballynahinch area.
            </p>
          </div>
        </div>

        <div class="about-container reverse-column">
          <div class="container-left about-text">
            <p className="sq-text">
              In 2022, in partnership with Ulster Wildlife, the National Trust,
              DAERA and Belfast Zoo, the group was involved in the introduction
              of four red squirrels to the Castle Ward estate where they
              continue with their monitoring and supplementary feeding.
            </p>
          </div>
          <div class="container-right">
            <img src={squirrell1} class="sq-img"></img>
          </div>
        </div>

        <div class="about-container">
          <div class="container-left">
            <img src={squirrell2} class="sq-img"></img>
          </div>
          <div class="container-right about-text">
            <p className="sq-text">
              The group now has an enthusiastic membership of over 40, involved
              in community engagement, fundraising and nestbox and feeder
              building and sale.
            </p>
          </div>
        </div>
      </section>

      <div className="sightings">
        <div className="hero-info">
          <p>
            Any help is greatly appreciated by ourselves, and especially the
            squirrels
          </p>
          <div className="short-line-div"></div>
          <p className="hero-h2">
            Whether it's your support from donations or enquiring how you can
            help too
          </p>
        </div>
      </div>

      <p class="about-text center-text bottom-spacer">
        The Heart of Down Red Squirrel Group have featured in local media, BBC’s
        One Show and Spring Watch. If you are interested in finding out more
        about our group, or have information on red squirrels, please contact us
        on{" "}
        <a
          href="mailto:heartofdownreds@gmail.com"
          className="footer-link line-div"
          alt="Email the heart of down red squirrell group"
        >
          heartofdownreds@gmail.com
        </a>{" "}
        or mobile{" "}
        <a
          href="tel: 07568066953"
          className="footer-link line-div"
          alt="Call the heart of down red squirrell group"
        >
          07568066953
        </a>
      </p>
    </div>
  );
}

export default About;
