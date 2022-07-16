import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District6Carousel from "./District6Carousel";


const District6 = () => {
return( 
    <>
    <div className="district-body">
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
 
      <div className="district1-container">
            <div class="picture-column">
             <District6Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


       <div className="info-section">
            <div class="ui black left aligned inverted segment">
                <h2> No of Trees:</h2>
                <p>
                    2000
                </p>
            </div>
                   
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinReinickendorf'>Explore trees within Reinickendorf</Link></button>
        </div>

   </div>
   </>
);
};
export default District6;