import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://www.gartendialog.de/bergahorn-pflege/" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const BergAhornWeissAhorn= () => {
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
                 <div classname="scientific-name">Acer pseudoplatanus</div>
                 <div>
                  <img src="https://www.gartendialog.de/wp-content/uploads/2015/02/berg-ahorn-beitragsbild-fl-73883212.jpg" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default BergAhornWeissAhorn;