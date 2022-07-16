import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinTreptow = () => {
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
          <Link to = '/spitzAhorn'><div className="family">Spitz-Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/WinderLinde'><div className="family">Winder-linder</div></Link>
        </div>
        <div className="column1">
          <Link to = '/sommerEicheStielEiche'><div className="family">sommer-Eiche, Stiel-Eiche</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SommerLinde'><div className="family">Sommer-Linde</div></Link>
          </div>
        
        <div className="column1">
          <Link to = '/WinterLindeGreenspire'><div className="family">Winter-Linde Greenspire</div></Link>
        </div>
        
          <div className="column1">
          <Link to = '/HolländischeLinde'><div className="family">Holläandische Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/KrimLinde'><div className="family">Krim-linde</div></Link>
        </div>
        
        
        <div className="column1">
          <Link to = '/GemeinekeiterWaldKieter'><div className="family">Gemeine keiter,Wald-Kieter</div></Link>
          </div>
                                     
                      
        <div className="column1">
          <Link to = '/Robinie'><div className="family">Robinie</div></Link>
        </div>
               
          <div className="column1">
          <Link to = '/BergAhornWeissAhorn'><div className="family">Berg-Ahorn, weiss-Ahorn</div></Link>
          </div>
      </>
  );
};

export default ExploreTreesWithinTreptow;