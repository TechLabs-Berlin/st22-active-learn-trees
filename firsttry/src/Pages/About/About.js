import React from "react";
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';
import './About.css';




const About = () => {
    return (
        <>
          <div className="page-body">
              <div className="">
                            <div className="about-page-back">
                            <Link to = '/home'> <a className="navbar-brand">Back</a></Link>
                            </div>
              </div>
              <div>
                    <img 
                        className="img-fluid-aboutpic"
                        src={App_Logo}>
                    </img>
                </div>
                 <hr style={{ boxShadow:'0 0.5em 0.5em -0.4em'}} />
              <div className="container-fluid">
              <div className="container-about">  
                    <div>
                        <p className="para">
                        It is an application that allows you to identify Leaves simply by uploaading pictures with your smartphone or Laptop.
                        It has the ability to filter recognized species by family. 
                        The more visually clear picture you upload about the leave you are observing, 
                        the more accurate the identification will be. There are indeed many plants that look alike from 
                        afar and it is sometimes small details that distinguish two species of the same genus.
                        It allows you to gain more information about Trees with respect to the selected district.
                        <br />
                        It is an application that allows you to identify Leaves simply by uploaading pictures with your smartphone or Laptop.
                        It has the ability to filter recognized species by family. 
                        The more visually clear picture you upload about the leave you are observing, 
                        the more accurate the identification will be. There are indeed many plants that look alike from 
                        afar and it is sometimes small details that distinguish two species of the same genus.
                        It allows you to gain more information about Trees with respect to the selected district.
                        </p>
                  </div> 
                  <br />
                  <h2>Our Vision</h2>   
                </div>
                </div>

          </div>
        </>
    );
};

export default About;