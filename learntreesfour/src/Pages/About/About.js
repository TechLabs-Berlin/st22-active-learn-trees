import React from "react";
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';
import "./About.css"

const About = () => {
    return (
        <>
        
            <div class="container-fluid-get-started-page">
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
                    <p className="about-app-p">
                     The application allows you to identify trees simply by uploading a 
                     picture with your mobile phone.
                     It has the ability to filter recognised species by 
                     family. The more visually clear picture you upload
                     about the leaves you are observing, the more accurate 
                     the identification will be. There are indeed 
                     many plants that look alike and it is sometimes
                     small details that distinguish species 
                     of the same genus.<p >
                       Over 50 different tree species are on the streets of Berlin,
                       with the five most common tree general being Maple, Oak, Linden, Plane and Chestnut, which totally make up 75%
                       of the total street trees in Berlin. The app allows you to information on 
                       trees with respect to selected district within Berlin.
                        <p><a href="https://www.co2meter.com/blogs/news/could-global-co2-levels-be-reduced-by-planting-trees" target="_blank" rel="noreferrer noopener">Co2meter</a>
                       
                       </p>
                       </p>


                    </p>
                    <h5 className="about-us">
                    Our Vision
                    </h5>
                    <p className="about-trees-app">
                      our product aims to facilitate people in Berlin to gain 
                      more knowlege and information about the trees around them
                      while demonstrating their importance
                      as a public ammenity that benefits our environment in respect to Co2
                      absorption.  

                        
                    </p>
                </div>
                
            </div>
        </>
    );
};
export default About;