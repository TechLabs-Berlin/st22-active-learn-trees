import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinCharlottenburg = () => {
  return (
      <>
        <div className="page-body">
            <div className="">
                          <div className="about-page-back">
                          <Link to = '/district3'> <a className="navbar-brand">Back</a></Link>
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
          <Link to = '/winterLinde'><div className="family">Winter-Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/spitzAhorn'><div className="family">Spitz-Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/AhornblattrigePlatane'><div className="family">Ahornblattrige Platane</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SommerEicheStielEiche'><div className="family">Sommer-Eiche,Stiel-Eiche</div></Link>
        </div>
        <div className="column1">
          <Link to = '/AmerikanischeLinde'><div className="family">Amerikanische Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/HollandischeLinde'><div className="family">Holländische Linde</div></Link>
          </div>
          <div className="column1">
          <Link to = '/KaiserLinde'><div className="family">kaiser-linde</div></Link>
          </div>
          <div className="column1">
          <Link to = '/AmerikanischeRotEiche'><div className="family">Amerikanische Rot-Eiche</div></Link>
          </div>
          <div className="column1">
          <Link to = '/SilberLinde'><div className="family">Silber-Linde</div></Link>
          </div>
          <div className="column1">
          <Link to = '/SommerLinde'><div className="family">Sommer-Linde</div></Link>
          </div>
        
        
      </>
  );
};

export default ExploreTreesWithinCharlottenburg;