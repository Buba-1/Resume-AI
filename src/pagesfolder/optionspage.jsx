import React from "react";
import { Link } from "react-router-dom";

const Optionspage = () => {
  return (
    <div className="background">
      Ooptionspage page
      <Link to="/recording_resume">
        <div className="getstartedbtn">
          <p className="btntxt">Record Resume</p>
        </div>
      </Link>
      <Link to="/retouch_resume">
        <div className="getstartedbtn">
          <p className="btntxt"> Retouch Resume</p>
        </div>
      </Link>
      <Link to="/manual_resume">
        <div className="getstartedbtn">
          <p className="btntxt">Manual Resume</p>
        </div>
      </Link>
      <Link to="/build_resume">
        <div className="getstartedbtn">
          <p className="btntxt">To builder</p>
        </div>
      </Link>
    </div>
  );
};

export default Optionspage;
