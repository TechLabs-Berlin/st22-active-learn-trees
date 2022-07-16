import React from "react";
import { Link } from "react-router-dom";
import './District1.css';
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District1Carousel from "./District1Carousel";


const District1 = () => {
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
      {/* <h1 className="district-header">Active_Learn_Trees</h1> */}
 
      <div className="district1-container">
            <div class="picture-column">
                 {/* <h1 className="district-main-header">Mitte</h1>  */}
                 <District1Carousel />
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
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinMitte'>Explore trees within Mitte</Link></button>
        </div>

   </div>
   </>
);
};


export default District1;