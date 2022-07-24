import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://www.mein-schoener-garten.de/pflanzen/linde/kaiserlinde" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const KaiserLinde= () => {
return( 
    <>
    <div className="page-body">
      <Navbar />
      <div className="">
                            <div className="about-page-back">
                            <Link to = '/exploreTreesWithinMitte'> <a className="navbar-brand">Back</a></Link>
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
                 <div classname="scientific-name">Tilia europaea</div>
                 <div>
                  <img src="https://www.mein-schoener-garten.de/sites/default/files/styles/achor_navigation_m/public/kaiserlinde-tilia-x-intermedia-pallida-01364630-florapress.jpg?h=c029297a&itok=bEuSVGB6" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default KaiserLinde;