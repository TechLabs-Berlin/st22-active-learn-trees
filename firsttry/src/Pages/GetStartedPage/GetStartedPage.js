import React from "react";
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';
import './GetStartedPage.css';




const GetStartedPage = () => {
    return (
        <>
            <div class="container-fluid-get-started-page">
                <div>
                    <img 
                        className="img-fluid-logo"
                        src={App_Logo}>
                    </img>
                </div>
                <div className="getstarted-page-main-heading">
                  <h1  className="getstarted-page-h1">Green</h1>
                  <h1 style={{color:'#90BE53'}} className="getstarted-page-h1">Monitor</h1>
                </div>
                <div className="getstarted-page-main">
                    <div>
                        <h1 className="get-started-h1">Welcome!</h1>
                    </div>
                    <div>
                        <p className="get-started-p">
                            We bring you the resources you need to explore 
                            information on trees within berlin with a tree
                            identification model for cuious minds.
                        </p>
                    </div>
                    <button className="get-started-btn"><a className="get-started-a"><Link to = '/home'> Get started!!</Link></a></button>
                </div>    
            </div>
        </>
    );
};

export default GetStartedPage;