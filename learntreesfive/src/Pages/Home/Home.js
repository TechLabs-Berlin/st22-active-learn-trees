import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import App_Logo from '../../Assets/Images/App_Logo.png';



const Home = () => {
  


  return (
      <>
        <div className="page-body">
    

            <div>
                  <img 
                      className="img-fluid-homepic"
                      src={App_Logo}>
                  </img>
              </div>
              <div className="home-page-main-heading">
                <h1  className="home-page-h1">Green</h1>
                <h1 style={{color:'#90BE53'}} className="home-page-h1">Monitor</h1>
              </div>

            <div className="container-fluid">
            <div className="container1">  
                  <div>
                      <p className="para">
                      It is an application that allows you to identify Leaves simply by uploaading pictures with your smartphone or Laptop.
                      It has the ability to filter recognized species by family. 
                      {/* The more visually clear picture you upload about the leave you are observing, 
                      the more accurate the identification will be. There are indeed many plants that look alike from 
                      afar and it is sometimes small details that distinguish two species of the same genus.
                      It allows you to gain more information about Trees with respect to the selected district. */}
                      </p>

                    <button className="home-about-btn"><a className=""><Link to = '/about'> About</Link></a></button>
                </div>

                <div className="Two-Buttons">
                  <div className="para-with-button">
                      <p className="home-page-para1">Explore Trees with in all districts of berlin</p>
                      <button className="home-button"><Link to = '/district'> Districts</Link></button>
                  </div>
                  <div className="para-with-button">
                    <p className="home-page-para2">Curious? Upload a picture for quick identification</p>
                    <button className="home-button1"><Link to = '/uploadImage'>Upload Image</Link></button>
                  </div>
                </div>
               
                
              </div>
              </div>

        </div>
      </>
  );
};

export default Home;