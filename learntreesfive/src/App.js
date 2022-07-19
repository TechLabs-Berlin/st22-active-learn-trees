
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Pages/Home/Home";
import GetStartedPage from "./Pages/GetStartedPage/GetStartedPage";
import About from "./Pages/About/About";
import District from "./Pages/District/District";
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
import ExploreTreesWithinMitte from "./Pages/ExploreTreesWithinMitte/ExploreTreesWithinMitte";
import ExploreTreesWithinPankow from "./Pages/ExploreTreesWithinPankow/ExploreTreesWithinPankow";
import ExploreTreesWithinCharlottenburg from "./Pages/ExploreTreesWithinCharlottenburg/ExploreTreesWithinCharlottenburg";
import ExploreTreesWithinFriedrichshain from "./Pages/ExploreTreesWithinFriedrichshain/ExploreTreesWithinFriedrichshain";
import ExploreTreesWithinReinickendorf from "./Pages/ExploreTreesWithinReinickendorf/ExploreTreesWithinReinickendorf";
import ExploreTreesWithinLichtenberg from "./Pages/ExploreTreesWithinLichtenberg/ExploreTreesWithinLichtenberg";
import ExploreTreesWithinMarzahn from "./Pages/ExploreTreesWithinMarzahn/ExploreTreesWithinMarzahn";
import ExploreTreesWithinNeukolln from "./Pages/ExploreTreesWithinNeukolln/ExploreTreesWithinNeukolln";
import ExploreTreesWithinSpandau from "./Pages/ExploreTreesWithinSpandau/ExploreTreesWithinSpandau";
import ExploreTreesWithinSteglitz from "./Pages/ExploreTreesWithinSteglitz/ExploreTreesWithinSteglitz";
import ExploreTreesWithinTempelhof from "./Pages/ExploreTreesWithinTempelhof/ExploreTreeWithinTempelhof";
import ExploreTreesWithinTreptow from "./Pages/ExploreTreesWithinTreptow/ExploreTreesWithinTreptow";
import WinterLinde from "./Pages/WinterLinde/WinterLinde";
import SpitzAhorn from "./Pages/SpitzAhorn/SpitzAhorn";
import AhornblattrigePlatane from "./Pages/AhornblattrigePlatane/AhornblattrigePlatane";
import HollandischeLinde from "./Pages/HollandischeLinde/HollandischeLinde";
import GemeineRosskastanie from "./Pages/GemeineRosskastanie/GemeineRosskastanie";
import BaumHasel from "./Pages/BaumHasel/BaumHasel";
import BergAhornWeissAhorn from "./Pages/BergAhornWeissAhorn/BergAhornWeissAhorn";
import SilberLinde from "./Pages/SilberLinde/SilberLinde";
import SommerLinde from "./Pages/SommerLinde/SommerLinde";
import KaiserLinde from "./Pages/KaiserLinde/KaiserLinde";
import Linde from "./Pages/Linde/Linde";
import KrimLinde from "./Pages/KrimLine/KrimLinde";
import GewohnlicheEsche from "./Pages/GewohnlicheEsche/GewohnlicheEsche";
import SommerEicheStielEiche from "./Pages/SomerEicheStielEiche/SommerEicheStielEiche";
import AmerikanischeLinde from "./Pages/AmerikanishcheLinde/AmerikanischeLinde";
import AmerikanischeRotEiche from "./Pages/AmerikanischeRotEiche/AmerikanischeRotEiche";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element = {<GetStartedPage/>} />
        <Route exact path="/home" element = {<Home/>} />
        <Route exact path="/about" element = {<About/>} />
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
        <Route exact path="/exploreTreesWithinMitte" element = {<ExploreTreesWithinMitte/>} />
        <Route exact path="/exploreTreesWithinPankow" element = {<ExploreTreesWithinPankow/>} />
        <Route exact path="/exploreTreesWithinCharlottenburg" element = {<ExploreTreesWithinCharlottenburg/>} />
        <Route exact path="/exploreTreesWithinFriedrichshain" element = {<ExploreTreesWithinFriedrichshain/>} />
        <Route exact path="/exploreTreesWithinLichtenberg" element = {<ExploreTreesWithinLichtenberg/>} />
        <Route exact path="/exploreTreesWithinMarzahn" element = {<ExploreTreesWithinMarzahn/>} />
        <Route exact path="/exploreTreesWithinNeukolln" element = {<ExploreTreesWithinNeukolln/>} />
        <Route exact path="/exploreTreesWithinReinickendorf" element = {<ExploreTreesWithinReinickendorf/>} />
        <Route exact path="/exploreTreesWithinSpandau" element = {<ExploreTreesWithinSpandau/>} />
        <Route exact path="/exploreTreesWithinSteglitz" element = {<ExploreTreesWithinSteglitz/>} />
        <Route exact path="/exploreTreesWithinTempelhof" element = {<ExploreTreesWithinTempelhof/>} />
        <Route exact path="/exploreTreesWithinTreptow" element = {<ExploreTreesWithinTreptow/>} />
        <Route exact path="/winterLinde" element = {<WinterLinde/>} />
        <Route exact path="/spitzAhorn" element = {<SpitzAhorn/>} />
        <Route exact path="/ahornblattrigePlatane" element = {<AhornblattrigePlatane/>} />
        <Route exact path="/hollandischeLinde" element = {<HollandischeLinde/>} />
        <Route exact path="/GemeineRosskastanie" element = {<GemeineRosskastanie/>} />
        <Route exact path="/baumHasel" element = {<BaumHasel/>} />
        <Route exact path="/silberLinde" element = {<SilberLinde/>} />
        <Route exact path="/bergAhornWeissAhorn" element = {<BergAhornWeissAhorn/>} />
        <Route exact path="/SommerLinde" element = {<SommerLinde/>} />
        <Route exact path="/KaiserLinde" element = {<KaiserLinde/>} />
        <Route exact path="/Linde" element = {<Linde/>} />
        <Route exact path="/krimLinde" element = {<KrimLinde/>} />
        <Route exact path="/gewohnlicheEsche" element = {<GewohnlicheEsche/>} />
        <Route exact path="/sommerEicheStielEiche" element = {<SommerEicheStielEiche/>} />
        <Route exact path="/amerikanischeLinde" element = {<AmerikanischeLinde/>} />
        <Route exact path="/amerikanischeRotEiche" element = {<AmerikanischeRotEiche/>} />
      </Routes>
    </Router>
  );
};

export default App;