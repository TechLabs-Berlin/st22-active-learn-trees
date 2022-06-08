import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import InfoSection from "../../Components/InfoSection";
import { Link } from "react-router-dom";


class UploadImage extends Component  {
    fileSelectHandler = event => {
        console.log(event)
    }








    render () {
    return( 
        <>
        <div className="district-body">
          <Navbar />
          <h1 className="district-header">Active_Learn_Trees</h1>
     
          <div className="district1-container">
                <div class="picture-column">
                    <h2 className="main-header">
                       <input type="file"
                       onChange={this.fileSelectHandler}
                       />
                        Upload Image
                    </h2>
                </div>
          </div>
          <h1 className="second-header">Information</h1>
       </div>
       </>
    );
    };
    
}
export default UploadImage;