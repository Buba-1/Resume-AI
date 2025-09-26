import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
 

  return (
    <div className="heroview">
      <p className="intro">Resume AI</p>
      <p className="hook">Let's Build Your Resume in less Than 5 Minutes</p>
     
      <Link to="/interviewai">
        <div className="getstartedbtn">
          <p className="btntxt">Get Started</p>
        </div>
      </Link>
    </div>
  );
};

export default Hero;
