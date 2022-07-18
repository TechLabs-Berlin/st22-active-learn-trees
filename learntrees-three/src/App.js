import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import District from "./Pages/District/District";
import Home from "./Pages/Home/Home";
import District1 from "./Pages/District1/District1";
import District2 from "./Pages/District2/District2";
import District3 from "./Pages/District3/District3";
import District4 from "./Pages/District4/District4";
import District5 from "./Pages/District5/District5";
import District6 from "./Pages/District6/District6";
import District7 from "./Pages/District7/District7";
import District8 from "./Pages/District8/District8";
import District9 from "./Pages/District9/District9";
import District10 from "./Pages/District10/District10";
import District11 from "./Pages/District11/District11";
import District12 from "./Pages/District12/District12";
import UploadImage from "./Pages/UploadImage/UploadImage";


const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element = {<Home/>} />
        <Route exact path="/district" element = {<District/>} />
        <Route exact path="/district1" element = {<District1/>} />
        <Route exact path="/district2" element = {<District2/>} />
        <Route exact path="/district3" element = {<District3/>} />
        <Route exact path="/district4" element = {<District4/>} />
        <Route exact path="/district5" element = {<District5/>} />
        <Route exact path="/district6" element = {<District6/>} />
        <Route exact path="/district7" element = {<District7/>} />
        <Route exact path="/district8" element = {<District8/>} />
        <Route exact path="/district9" element = {<District9/>} />
        <Route exact path="/district10" element = {<District10/>} />
        <Route exact path="/district11" element = {<District11/>} />
        <Route exact path="/district12" element = {<District12/>} />
        <Route exact path="/uploadImage" element = {<UploadImage/>} />
      </Routes>
    </Router>
  );
};

export default App;