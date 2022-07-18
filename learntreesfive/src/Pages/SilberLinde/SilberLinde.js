import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";



const ExternalLink = () => {
   return <div>
      <a href="https://de.wikipedia.org/wiki/Silber-Linde" target="_blank"><div className="externalLink">More info Here</div></a>
   </div>
}

const SilberLinde= () => {
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
                 <div classname="scientific-name">Tilia tomentosa</div>
                 <div>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Tilia-tomentosa.JPG/450px-Tilia-tomentosa.JPG" alt="image" />
                 </div>
              
                 <div>
                  <ExternalLink />
                 </div>

   </div>
   </>
);
};



export default SilberLinde;

