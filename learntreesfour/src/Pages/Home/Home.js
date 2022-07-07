import React from "react";
import './Home.css';
//import background from '../../Assets/Images/pic1.avif';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';
//import Background from "../../Assets/Images/pic1.avif";
//import delayedImageChange from "../../Components/BackgroundImages";
//import BackgroundImages from "../../Components/BackgroundImages";
import Navbar from "../../Components/Navbar";




  const Home = () => {
    return (
        <>
            <div class="container-fluid-home-page">
                <div>
                    <img 
                        className="img-fluid-logo"
                        src={App_Logo}>
                    </img>
                    <div>
                      <h1 className="green-monitor">GreenMonitor</h1>
                    </div>
                </div>
               
                <div>
                    <p className="home-p">
                    Green monitor allows you to Identify trees 
                    simply by uploading a picture with your
                     mobile device or laptop. 
                    it has the ability to filter recognised
                    species by family.
                    </p>
                </div>
                <div>
                <button className="home-button"><Link to = '/about'> About </Link></button>
                </div>
                <div className="Two-Buttons">
                    <div className="para-with-button">
                        <p className="home-page-para1">Explore Trees with in all districts of berlin</p>
                        <button className="home-button"><Link to = '/district'> Districts</Link></button>
                    </div>
                    <div className="para-with-button">
                      <p className="home-page-para2">Curious? Upload a picture for quick identification</p>
                      <button className="home-button1"><Link to = '/uploadImage'> UploadImage</Link></button>
                    </div>
                  </div>
            </div>
        </>
    );
};

  


    /*return (
        <>
        <div className="container1">

          <div className="page-body">
      <Navbar />
       
            
              <h1 className="main-header">GreenMonitor</h1>
            
                
                
                <h2 className="home-second-header">About</h2>
                  <div>
                    <p className="para">
                     It is an application that allows you to identify Leaves simply by uploaading pictures with your smartphone or Laptop.
                     It has the ability to filter recognized species by family. 
                     The more visually clear picture you upload about the leave you are observing, 
                     the more accurate the identification will be. There are indeed many plants that look alike from 
                     afar and it is sometimes small details that distinguish two species of the same genus.
                     It allows you to gain more information about Trees with respect to the selected district.
                    </p>
                  </div>
                  
                  <div className="Two-Buttons">
                    <div className="para-with-button">
                        <p className="home-page-para1">Explore Trees with in all districts of berlin</p>
                        <button className="home-button"><Link to = '/district'> Districts</Link></button>
                    </div>
                    <div className="para-with-button">
                      <p className="home-page-para2">Curious? Upload a picture for quick identification</p>
                      <button className="home-button1"><Link to = '/uploadImage'> UploadImage</Link></button>
                    </div>
                  </div>
                 
                  
                </div>

          </div>
        </>
    );*/


export default Home;