import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Getstartedwindow from "../src/components/getstartedscreen/getstartedscreen";
import Resume from "./components/buildercomponent/builderwindow";
import Optionspage from "../src/pagesfolder/optionspage";
import Manualresumepage from "../src/pagesfolder/manualresumepage";
import Resumerecordingpage from "../src/pagesfolder/resumerecordingpage";
import Resumebuilderpage from "../src/pagesfolder/resumebuilderpage";
import Resumeretouchpage from "../src/pagesfolder/resumeretouchpage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewai" element={<Getstartedwindow />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/options" element={<Optionspage />} />
        <Route path="/manual_resume" element={<Manualresumepage />} />
        <Route path="/recording_resume" element={<Resumerecordingpage />} />
        <Route path="/retouch_resume" element={<Resumeretouchpage />} />
        <Route path="/build_resume" element={<Resumebuilderpage />} />
      </Routes>
    </div>
  );
}

export default App;
