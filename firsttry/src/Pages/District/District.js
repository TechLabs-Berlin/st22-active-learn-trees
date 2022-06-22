import React from "react";
import Navbar from "../../Components/Navbar";
import './District.css';
import { Link } from "react-router-dom";
import Background from "../../Assets/Images/pic2.jpg"
import mediaQuery from "../../mediaQuery";


const District = () => {
    return (
        <>
        {/* <div style ={{backgroundImage:`url("${Background}")`}}>
            <h1>District</h1>
        <div class="button">
           <button>
             <Link to = '/'> Home</Link>
            </button>
          <button><Link to = '/district'> District</Link></button>
        </div>
        
    </div> */}
        <section>
          <Navbar />
          <h1 className="h1">Active-Learn-Trees</h1>
          <br />
          <h2>Select District</h2>
          
        <div className="ui two column stackable grid container m-4 col-lg-6 col-md-8 col-xs-12">
          <div className="column ">           
            <Link to = '/district1'><div className="first">District 1</div></Link>
          </div>
          <div className="column">
            <Link to = '/district2'><div className="second">District 2</div></Link>
          </div>
          <div className="column">
            <Link to = '/district3'><div className="third">District 3</div></Link>
          </div>
          <div className="column">
            <Link to = '/district4'><div className="fourth">District 4</div></Link>
          </div>
          <div className="column">
            <Link to = '/district5'><div className="fifth">District 5</div></Link>
          </div>
          <div className="column">
            <Link to = '/district6'><div className="sixth">District 6</div></Link>
          </div>
          <div className="column">
            <Link to = '/district7'><div className="seventh">District 7</div></Link>
          </div>
          <div className="column">
            <Link to = '/district8'><div className="eighth">District 8</div></Link>
          </div>
          <div className="column">
            <Link to = '/district9'><div className="ninth">District 9</div></Link>
          </div>
          <div className="column">
            <Link to = '/district10'><div className="tenth">District 10</div></Link>
          </div>
          <div className="column">
            <Link to = '/district11'><div className="eleventh">District 11</div></Link>
          </div>
          <div className="column">
            <Link to = '/district12'><div className="twelvth">District 12</div></Link>
          </div>
        </div>
    </section>
        </>
    );
};

export default District;