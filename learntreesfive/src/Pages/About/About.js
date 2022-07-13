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
                <div>
                 <hr style={{
                    background: 'grey',
                    color: 'black',
                    borderColor: 'black',
                    height: '3px',
                 }}></hr>
                 </div>
              <div className="container-fluid">
              <div className="container-about">  
                    <div>
                        <p className="para">
                        The application allows you to identify trees simply by uploaading a picture with your mobile phone or Laptop.
                        It has the ability to filter recognized species by family. 
                        The more visually clear picture you upload about the leaves you are observing, 
                        the more accurate the identification will be. There are indeed many plants that look alike 
                        and it is sometimes small details that distinguish species of the same genus.
                        
                        <br />
                        Over 50 different tree species are on the streets of Berlin, with the five most common tree general 
                        being Maple, Oak, Linden, Plane and Chestnut,
                        which totally make up for 75% of the total street trees in Berlin.
                        The app allows you to information on trees with respect to selected district within Berlin.
                        </p>
                   
                  
                  <h2 className="para-vision-h2">Our Vision</h2>   
                
                <p className="para-vision">
                    Our product aims to facilitate people in Berlin to gain more knowledge and information about the trees 
                    around them while demonstrating their importance as a public ammenity that benefits our environment in respect to Co2 absorption
                </p>
                </div>
                </div>
                </div>

          </div>
        </>
    );
};

export default About;