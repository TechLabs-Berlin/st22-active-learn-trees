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
                <button className="get-started-btn"><a className=""><Link to = '/home'> Get started!!</Link></a></button>
            </div>
        </>
    );
};

export default GetStartedPage;