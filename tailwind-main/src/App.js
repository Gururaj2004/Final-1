// import Edititemform from './components/Edititemform';
// import Allbuttons from './components/Allbuttons';
import React from "react";
// import Maintable from './components/Maintable';
import { Routes, Route } from "react-router-dom";
// import Additemform from './components/Additemform';
// import Viewdata from './components/Viewdata';
import Loginpage from "./components/Loginpage";
import Signuppage from "./components/Signuppage";
import Signuppage1 from "./components/Signuppage1";
import Home1 from "./components/Home1";
import Doctorloginpage from "./components/Doctorloginpage";
import Doctorgaurdianwebpage from "./components/Doctorgaurdianwebpage";
import Map from "./components/Map";
import Dashboard from "./components/Dashboard";
import Slider from "./components/Slider";
import Upload from "./components/Upload";
import Visualise from "./components/Visualise";
import { FileUploadProvider } from "./components/Fileuploadcontext";

function App() {
  return (
    // <Routes>
    //   {/* <Route path="/Additemform" element={<Additemform/>} />
    //     <Route path="/Edititemform" element={<Edititemform/>} />
    //     <Route path="/Allbuttons" element={<Allbuttons/>} /> */}
    //   {/* <Route path="/" element={<Maintable/>} /> */}
    /* <Route path="/Viewdata/:id" element={<Viewdata/>} />
        <Route path="/Edititemform/:id" element={<Edititemform/>} /> */
    <Routes>
      <Route path="/Loginpage/" element={<Loginpage />} />
      <Route path="/Signuppage" element={<Signuppage />} />
      <Route path="/Signuppage1/" element={<Signuppage1 />} />
      <Route path="/Doctorloginpage/" element={<Doctorloginpage />} />
      <Route
        path="/Doctorgaurdianwebpage/"
        element={<Doctorgaurdianwebpage />}
      />
      <Route path="/Home1/" element={<Home1 />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Slider" element={<Slider />} />
      <Route path="/Upload" element={<Upload />} />
      <Route path="/Visualise" element={<Visualise />} />
    </Routes>
  );
}

export default App;
