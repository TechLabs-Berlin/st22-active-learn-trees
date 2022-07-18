import React, { Component } from "react";
import Navbar from "../../Components/Navbar";
import InfoSection from "../../Components/InfoSection";
import { Link } from "react-router-dom";
//import axios from 'axios';


class UploadImage extends Component  {
    state = {
        selectedFile: null
       }
    fileSelectHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
       
    }

    fileUploadHandler = () => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
   //   axios.post('URL for where we want the uploaded picture to be saved' , fd)
   //   .then(res => {
    //  console.log(res);
    //   });
   
    console.log();
  
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
                       Upload Image
                   </h2>
               </div>
               <input 
                   type="file"
                   onChange={this.fileSelectHandler}
               />
               <button onClick={this.fileUploadHandler}>Upload</button>
         </div>
         <h1 className="second-header">Information</h1>
      </div>
      </>
   );
   };
   
}
export default UploadImage;