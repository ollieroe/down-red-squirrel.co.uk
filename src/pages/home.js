import React from "react";
import "../App.css";
import banner from "../images/AdobeStock_57670976_Preview.jpeg";
import Carousel from "react-bootstrap/Carousel";
import squirrelImg from "../images/squirrel-pictures/AdobeStock_334005837_Preview.jpeg";
import squirrelImg2 from "../images/squirrel-pictures/dusan-veverkolog-AuapWMoAv5w-unsplash.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div>
        <h1 className="hero-text">
          We're the Heart of Down Red Squirrel Group
        </h1>
      </div>

      <Carousel fade className="carousel bottom-spacer">
        <Carousel.Item className="carousel-item">
          <img src={banner} alt="Squirrel picture" className="sq-banner"></img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={squirrelImg}
            alt="Squirrel picture"
            className="sq-banner"
          ></img>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            src={squirrelImg2}
            alt="Squirrel picture"
            className="sq-banner"
          ></img>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* 
            <div className='img-div'>
                <img src={banner} alt='Squirrel sat on a branch' className="sq-banner"></img>
                <div className='hero-text'>
                    <h1>We're the Heart of Down Red Squirrel Group</h1>
                </div>
            </div> */}

      <div className="hero-info">
        <p>
          Red Squirrels are an important part of our native woodlands and they
          need your help.
        </p>
        <div className="short-line-div"></div>
        <p className="hero-h2">That’s why we’re here to help</p>
      </div>

      <div className="info-container">
        <p className="info-text white-text">
          At The Heart of Down Red Squirrel Charity, we are dedicated to
          protecting and conserving one of the UK's most iconic and endangered
          species – the red squirrel.{" "}
        </p>

        <p className="info-text white-text">
          With fewer than 120,000 red squirrels left in the wild, their future
          is uncertain, but together, we can make a difference.{" "}
        </p>

        <p className="info-text white-text">
          {" "}
          Our charity focuses on vital conservation efforts such as habitat
          restoration, the installation of squirrel boxes, and monitoring
          squirrel populations to ensure their survival.
        </p>
      </div>

      <div className="box-container">
        <Link to="/sightings" className="footer-link">
          <div className="box-item">
            <div className="box-item-1" id="box-1"></div>
            <div className="box-item-2">
              <p>Sightings</p>
            </div>
          </div>
        </Link>

        <Link to="/getInvolved" className="footer-link">
          <div className="box-item">
            <div className="box-item-1" id="box-2"></div>
            <div className="box-item-2">
              <p>Get Involved</p>
            </div>
          </div>
        </Link>

        <Link to="/newsLetter" className="foot-link">
          <div className="box-item">
            <div className="box-item-1" id="box-3"></div>
            <div className="box-item-2">
              <p>Newsletter</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Home;
