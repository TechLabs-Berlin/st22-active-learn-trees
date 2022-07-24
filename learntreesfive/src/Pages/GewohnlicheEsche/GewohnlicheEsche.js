import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://www.pflanzen-deutschland.de/Fraxinus_excelsior.html" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const GewohnlicheEsche= () => {
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
                 <div classname="scientific-name">Fraxinus excelsior</div>
                 <div>
                  <img src="https://www.pflanzen-deutschland.de/bilder/1313x1313/1261_foto_W_wikipedia_user_ormanbotanigi_fraxinus_excelsior.jpg" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default GewohnlicheEsche;