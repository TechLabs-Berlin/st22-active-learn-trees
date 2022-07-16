import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';
import './ExploreTreesWithinMitte.css';

const ExploreTreesWithinMitte = () => {
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
          <Link to = '/WinterLinde'><div className="family">Winter Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SpitzAhorn'><div className="family">Spitz Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/AhornblattrigePlatane'><div className="family">Ahornblättrige Platane</div></Link>
        </div>
        <div className="column1">
          <Link to = '/HollandischeLinde'><div className="family">Holländische Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/GemeineRosskastanie'><div className="family">Gemeine Rosskastanie</div></Link>
        </div>
        <div className="column1">
          <Link to = '/BaumHasel'><div className="family">Baum Hasel</div></Link>
          <div className="column1">
          <Link to = '/SilberLinde'><div className="family">Silber Linde</div></Link>
          <div className="column1">
          <Link to = '/BergAhornWeissAhorn'><div className="family">Berg Ahorn, Weiss-Ahorn</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SommerLinde'><div className="family">Sommer Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/kaiserLinde'><div className="family">Kaiser Linde</div></Link>
        </div>
        </div>
        </div>
      </>
  );
};

export default ExploreTreesWithinMitte;