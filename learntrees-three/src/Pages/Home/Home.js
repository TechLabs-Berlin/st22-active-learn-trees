import React from "react";
import './Home.css';
//import background from '../../Assets/Images/pic1.avif';
import { Link } from "react-router-dom";
//import Background from "../../Assets/Images/pic1.avif";
//import delayedImageChange from "../../Components/BackgroundImages";
//import BackgroundImages from "../../Components/BackgroundImages";
import Navbar from "../../Components/Navbar";



const Home = () => {
  


    return (
        <>

          <div className="page-body">
      <Navbar />
       
            
              <h1 className="main-header">Active_Learn_Trees</h1>
            
                <div className="container1">
                  <h2 className="second-header">About</h2>
                  <div>
                    <p className="para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
                      quas quasi laboriosam voluptatem aliquam commodi est eos omnis odit
                      quidem magni dolor provident corporis. Saepe libero beatae harum
                      architecto reprehenderit.
                    </p>
                  </div>
                  
                      <button className="home-button"><Link to = '/district'> Get Started</Link></button>
                 
                  
                </div>

          </div>
        </>
    );
};

export default Home;