import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroview">
      <div className="herocontainer">
        <p className="intro">Voice Resume AI</p>
        <p className="hook">
          Let's Build Your
        </p>
        <p className="hook">
          <span className="span1"> PROFESSIONAL RESUME </span>
        </p>
        <p className="hook">
          In 10 Minutes
        </p>
        <p className="hook1">
          No <span className="span2"> Typing </span> or {"  "}
          <span className="span2">Designing </span> needed from You.
        </p>

        <p className="hook2">
          Just <span className="span2">pick a Design</span> then{" "}
          <span className="span2">Speak our Resume Ai about Your Professonal Details</span> , then have your
          Resume ready in minutes.
        </p>

        <Link to="/interviewai">
          <div className="getstartedbtn">
            <p className="btntxt">Get Started</p>
          </div>
        </Link>

        <Link to="/options">
          <div className="getstartedbtn">
            <p className="btntxt">Get Started 2.000</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
