import React from 'react';
import { link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinLichtenberg = () => {
  return (
    <>
    <div className='page-body'>
      <div className=''>
        <div className="about-page-back">
          <link to = '/home'> <a className='navbar-brand'>Back</a></link>

        </div>

      </div>
      <div>
        <img
        className='img-fluid-aboutpic'
        src={App_Logo}></img>
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
    </>
  );
};

export default ExploreTreesWithinLichtenberg;

















/*import { React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';


const ExploreTreesWithinLichtenberg = () => {
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
          <Link to = '/Ahornblättrigeplatane'><div className="family">Ahornblättrige platane</div></Link>
        </div>
        <div className="column1">
          <Link to = '/WinderLinde'><div className="family">Winder-linder</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SommerLinde'><div className="family">Sommer-Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/HolländischeLinde'><div className="family">Holländische Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/BergAhornWeissAhorn'><div className="family">Berg-Ahorn, Weiss-Ahorn</div></Link>
          <div className="column1">
          <Link to = '/GewöhnlicheEsche'><div className="family">Gewöhnliche Esche</div></Link>
          <div className="column1">
          <Link to = '/BaumHasel'><div className="family">Baum-Hasel</div></Link>
        </div>
        <div className="column1">
          <Link to = '/KaiserLinde'><div className="family">Kaiser-Linde</div></Link>
        </div>
        <div className="column1">
          <Link to = '/SandBirke'><div className="family">Sand-Birke</div></Link>
        </div>
        </div>
        </div>
      </>
  );
};

export default ExploreTreesWithinLichtenberg;*/