import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinSteglitz = () => {
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
            
            

        </div>
        <div className="column1">
          <Link to = '/WinderLinde'><div className="family">Winder-linder</div></Link>
        </div>
        <div className="column1">
          <Link to = '/spitzAhorn'><div className="family">Spitz-Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SommerLinde'><div className="family">Sommer-Linde</div></Link>
          </div>
        <div className="column1">
          <Link to = '/sommerEicheStielEiche'><div className="family">sommer-Eiche, Stiel-Eiche</div></Link>
        </div>
        <div className="column1">
          <Link to = '/GemeineRosskastanie'><div className="family">Gemeine Rosskastanie</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SandBirke'><div className="family">Sand-Birke</div></Link>
          </div>
       
        <div className="column1">
          <Link to = '/Ahornblättrigeplatane'><div className="family">Ahornblättrige platane</div></Link>
        </div>
                                
        <div className="column1">
          <Link to = '/Robinie'><div className="family">Robinie</div></Link>
        </div>
                
        <div className="column1">
          <Link to = '/SilberLinde'><div className="family">Silber-Linde</div></Link>
        </div>
               
          <div className="column1">
          <Link to = '/AmerikanischeRotEiche'><div className="family">Amerikanische Rot-Eiche</div></Link>
          </div>
      </>
  );
};

export default ExploreTreesWithinSteglitz;