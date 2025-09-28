import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Getstartedwindow from "../src/components/getstartedscreen/getstartedscreen";
import Resume from "./components/buildercomponent/builderwindow";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewai" element={ <Getstartedwindow />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
