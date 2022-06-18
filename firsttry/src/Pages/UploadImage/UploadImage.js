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
    <div className="">
    <div className="district-body">
      <Navbar />
      <h1 className="district-header">Active_Learn_Trees</h1>
 
      <div className="district1-container">
            <div className="container-sm">
                <h2 className="">
                    Upload Image
                </h2>
                <img className="ui centered medium image img-fluid" 
                src='https://images.unsplash.com/photo-1462143338528-eca9936a4d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'>
                </img>
            </div>
            <div className="input-group mb-3">
                <input 
                    type="file"
                    className="form-control"
                    id="inputGroupFile02"
                    onChange={this.fileSelectHandler}
                />
                <button class="input-group-text" for="inputGroupFile02" onClick={this.fileUploadHandler}>
                    Upload
                </button>
            </div>
      </div>
      <h1 className="second-header">Information</h1>
      <div className="info-section">
        <div className="ui black left aligned inverted segment">
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
   </div>
   </div>
   //--------------------------------------------------------------------------------------------------------
      
   //--------------------------------------------------------------------------------------------------------
 </>
   );
   };
   
}
export default UploadImage;