import React from "react";
import { useLocation } from "react-router-dom";
import Resumeskeleton from "../components/resumeskeleton/resumeskeleton";
import SampleSkeleton from "../components/resumeskeleton/sampleskeleton";

const Resumebuilderpage = () => {
  const location = useLocation();
  const { bundulledData } = location.state || {};

  const checkbundledData = () => {
    console.log("Bundled Data received in Resume Builder Page:", bundulledData);
  };

  /* 

   {/* SAFE VERSION 
      {bundulledData ? (
        <Resumeskeleton
          headdetails={bundulledData?.personalObject}
          bodydetails={bundulledData?.bodyArrayData}
          refdetails={bundulledData?.referenceArrayData}
        />
      ) : (
        <Resumeskeleton />
      )}
      
*/

  return (
    <div className="background">
     

      <button onClick={checkbundledData}>Check Bundled Data</button>

      < SampleSkeleton />
    </div>
  );
};

export default Resumebuilderpage;
