import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinReinickendorf= () => {
  return (
      <>
        <div className="page-body">
            <div className="">
                          <div className="about-page-back">
                          <Link to = '/district6'> <a className="navbar-brand">Back</a></Link>
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
            
            

        </div>
        <div className="column1">
          <Link to = '/WinterLinde'><div className="family">Winder-linder</div></Link>
        </div>
        <div className="column1">
          <Link to = '/spitzAhorn'><div className="family">Spitz-Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/krimLinde'><div className="family">Krim-Linde</div></Link>
          </div>
          <div className="column1">
          <Link to = '/sommerEicheStielEiche'><div className="family">sommer-Eiche, Stiel-Eiche</div></Link>
        </div>
        <div className="column1">
          <Link to = '/Ahornblattrigeplatane'><div className="family">Ahornblättrige platane</div></Link>
        </div>
        <div className="column1">
          <Link to = '/AmerikanischeRotEiche'><div className="family">Amerikanische Rot-Eiche</div></Link>
        </div>
        <div className="column1">
          <Link to = '/GemeineRosskastanie'><div className="family">Gemeine Rosskastanie</div></Link>
        </div>
        <div className="column1">
          <Link to = '/BaumHasel'><div className="family">Baum-Hasel</div></Link>
          </div>
        <div className="column1">
          <Link to = '/HollandischeLinde'><div className="family">Holländische Linde</div></Link>
        </div>
               
          <div className="column1">
          <Link to = '/Hainbuche'><div className="family">Hainbuche</div></Link>
          </div>
          
        
      </>
  );
};

export default ExploreTreesWithinReinickendorf;