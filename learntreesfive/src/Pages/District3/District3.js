import React from "react";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import { Link } from "react-router-dom";
import District3Carousel from "./District3Carousel";

const District3 = () => {
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
                    <District3Carousel />
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
            <button className="exploreTrees-btn"><Link to = '/exploreTreeswithinCharlottenburg'>Explore trees within Charlottenburg</Link></button>
        </div>

   </div>
   </>
);
};


export default District3;