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
import Navbar from "./components/Reusable components/navbar"; 
import PrivacyPolicy from "./pagesfolder/privacypolicy";
import TermsOfService from "./pagesfolder/termsofservice";
import CookiePolicy from "./pagesfolder/cookiepolicy";
import UserGuide from "./pagesfolder/userguide";  
import LoginPage from "./pagesfolder/login";
import CreateAccount from "./pagesfolder/createaccount";
import HowToUse from "./pagesfolder/howtouse";
import MyProfile from "./pagesfolder/myprofile";
import Footer from "./components/Reusable components/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interviewai" element={<Getstartedwindow />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/options" element={<Optionspage />} />
        <Route path="/manual_resume" element={<Manualresumepage />} />
        <Route path="/recording_resume" element={<Resumerecordingpage />} />
        <Route path="/retouch_resume" element={<Resumeretouchpage />} />
        <Route path="/build_resume" element={<Resumebuilderpage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/user-guide" element={<UserGuide />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/how_to_use" element={<HowToUse />} />
        <Route path="/my_profile" element={<MyProfile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
