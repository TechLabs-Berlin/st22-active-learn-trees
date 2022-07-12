import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District2Carousel from "./District2Carousel";


const District2 = () => {
return( 
    <>
    <div className="district-body">
      <Navbar />
      <AppLogo />
 
      <div className="district1-container">
            <div class="picture-column">
             <District2Carousel />
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
            <div className="ui black left aligned inverted segment">
                <h2> No of People:</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                    quas quasi laboriosam voluptatem aliquam commodi est eos omnis odit
                    quidem magni dolor provident corporis. Saepe libero beatae harum
                    architecto reprehenderit.
                </p>
            </div>
        </div>
        <div className="info-section1">
            <div className="ui black left aligned inverted segment">
                <h2> Amount Of C02 absorbed:</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                    quas quasi laboriosam voluptatem aliquam commodi est eos omnis odit
                    quidem magni dolor provident corporis. Saepe libero beatae harum
                    architecto reprehenderit.
                </p>
            </div>
            <div className="ui black left aligned inverted segment">
                <h2> Types Of Trees:</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                    quas quasi laboriosam voluptatem aliquam commodi est eos omnis odit
                    quidem magni dolor provident corporis. Saepe libero beatae harum
                    architecto reprehenderit.
                </p>
            </div>
            
        </div>
        <div className="info-section1">
            <div className="ui black left aligned inverted segment">
                <h2> Amount Of C02 absorbed:</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                    quas quasi laboriosam voluptatem aliquam commodi est eos omnis odit
                    quidem magni dolor provident corporis. Saepe libero beatae harum
                    architecto reprehenderit.
                </p>
            </div>
            <div className="ui black left aligned inverted segment">
                <h2> Types Of Trees:</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                    quas quasi laboriosam voluptatem aliquam commodi est eos omnis odit
                    quidem magni dolor provident corporis. Saepe libero beatae harum
                    architecto reprehenderit.
                </p>
            </div>         
        </div>
        
        <div className="btn-div">
            <button className="viewMore-btn"><Link to = '/uploadImage'> View More</Link></button>
        </div>

   </div>
   </>
);
};


export default District2;