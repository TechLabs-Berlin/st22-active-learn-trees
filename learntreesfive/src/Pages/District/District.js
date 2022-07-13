import React from "react";
import Navbar from "../../Components/Navbar";
import './District.css';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const District = () => {
  return (
      <>
      
      <section>
        
        <Navbar />
        <div className="">
                            <div className="about-page-back">
                            <Link to = '/home'> <a className="navbar-brand">Back</a></Link>
                            </div>
              </div>
              <div>
                  <img 
                      className="img-fluid-homepic"
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
        <h1 className="h1">Explore Beautiful Berlin!</h1>
        <br />
        <h2 className="select-district-h2">Select District</h2>
        
      <div className="ui two column stackable grid container">
        <div className="column">           
          <Link to = '/district1'><div className="first">Mitte</div></Link>
        </div>
        <div className="column">
          <Link to = '/district2'><div className="second">Pankow</div></Link>
        </div>
        <div className="column">
          <Link to = '/district3'><div className="third">Charlottenburg</div></Link>
        </div>
        <div className="column">
          <Link to = '/district4'><div className="fourth">Friedrichshain-Kreuzberg</div></Link>
        </div>
        <div className="column">
          <Link to = '/district5'><div className="fifth">Spandau</div></Link>
        </div>
        <div className="column">
          <Link to = '/district6'><div className="sixth">Reinickendorf</div></Link>
        </div>
        <div className="column">
          <Link to = '/district7'><div className="seventh">Lichtenberg</div></Link>
        </div>
        <div className="column">
          <Link to = '/district8'><div className="eighth">Marzahn-Hellersdorf</div></Link>
        </div>
        <div className="column">
          <Link to = '/district9'><div className="ninth">Treptow-Köpenick</div></Link>
        </div>
        <div className="column">
          <Link to = '/district10'><div className="tenth">Neukölln</div></Link>
        </div>
        <div className="column">
          <Link to = '/district11'><div className="eleventh">Tempelhof-Schöneberg</div></Link>
        </div>
        <div className="column">
          <Link to = '/district12'><div className="twelvth">Steglitz-Zehlendorf</div></Link>
        </div>
      </div>
  </section>
      </>
  );
};

export default District;