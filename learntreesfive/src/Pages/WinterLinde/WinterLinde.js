import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://www.baumkunde.de/Tilia_cordata/" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const WinterLinde= () => {
return( 
    <>
    <div className="page-body">
      <Navbar />
      <div className="">
                            <div className="about-page-back">
                            <Link to = '/home'> <a className="navbar-brand">Back</a></Link>
                            </div>
              </div>
      <AppLogo />
      <div>
                 <hr style={{
                    background: 'grey',
                    color: 'black',
                    borderColor: 'black',
                    height: '3px',
                 }}></hr>
                 </div>
                 <div className="group">Scientific name:</div>
                 <div classname="scientific-name">Tilia cordata</div>
                 <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/52/Tilia-cordata2.JPG" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default WinterLinde;