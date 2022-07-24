import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinPankow = () => {
  return (
      <>
        <div className="page-body">
            <div className="">
                          <div className="about-page-back">
                          <Link to = '/district2'> <a className="navbar-brand">Back</a></Link>
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
          <Link to = '/WinterLinde'><div className="family">Winter linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/spitzAhorn'><div className="family">Spitz-Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/HollandischeLinde'><div className="family">Holläandische Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/Linde'><div className="family">Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/Ahornblattrigeplatane'><div className="family">Ahornblättrige platane</div></Link>
        </div>
        <div className="column1">
          <Link to = '/GemeineRosskastanie'><div className="family">Gemeine Rosskastanie</div></Link>
        </div>
        <div className="column1">
          <Link to = '/BergAhornWeissAhorn'><div className="family">Berg-Ahorn, Weiss-Ahorn</div></Link>
          </div>
          <div className="column1">
          <Link to = '/krimLinde'><div className="family">Krim-Linde</div></Link>
          </div>
          <div className="column1">
          <Link to = '/GewohnlicheEsche'><div className="family">Gewohnliche Esche</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SommerEicheStielEiche'><div className="family">sommer-Eiche, Stiel-Eiche</div></Link>
        </div>
        
                                                        
                            
       
      </>
  );
};

export default ExploreTreesWithinPankow;