import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SampleSkeleton from "../components/resumeskeleton/sampleskeleton";

const Resumebuilderpage = () => {
  // ⬅ default is empty object
  const [receivedObject, setReceivedObject] = useState({});

  const location = useLocation();
  const { bundulledData } = location.state || {};

  useEffect(() => {
    // when page loads → store data into our local state
    if (bundulledData) {
      setReceivedObject(bundulledData);
    }
  }, [bundulledData]);

  const checkbundledData = () => {
    console.log("Bundled Data received:", bundulledData);
    console.log("Local State receivedObject:", receivedObject);
  };

  return (
    <div className="background">
      <button onClick={checkbundledData}>Check Bundled Data</button>

      <SampleSkeleton objectTwo={receivedObject} />
    </div>
  );
};

export default Resumebuilderpage;
