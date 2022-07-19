import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://www.pflanzmich.de/produkt/21340/amerikanische-roteiche.html" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const AmerikanischeRotEiche= () => {
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
                 <div classname="scientific-name">quercus rubra</div>
                 <div>
                  <img src="https://cdn.pflanzmich.de/produkt/21340/00-roteiche-quercus-rubra-in-hagenbeks-tierpark-im-september-fs_c_medium.jpg" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default AmerikanischeRotEiche;