import {React, useStates } from 'react';
import { Link } from "react-router-dom";
import App_Logo from '../../Assets/Images/App_Logo.png';
import './ExploreTrees.css';

const ExploreTrees = () => {
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
          <Link to = '/acer'><div className="family">Acer</div></Link>
        </div>
        <div className="column1">
          <Link to = '/Aesculus'><div className="family">Aesculus</div></Link>
        </div>
        <div className="column1">
          <Link to = '/amelanchier'><div className="family">Amelanchier</div></Link>
        </div>
        <div className="column1">
          <Link to = '/alnus'><div className="family">Alnus</div></Link>
        </div>
        <div className="column1">
          <Link to = '/betula'><div className="family">Betula</div></Link>
        </div>
        <div className="column1">
          <Link to = '/carpinus'><div className="family">Carpinus</div></Link>
          <div className="column1">
          <Link to = '/corylus'><div className="family">Corylus</div></Link>
          <div className="column1">
          <Link to = '/crataegus'><div className="family">Crataegus</div></Link>
        </div>
        </div>
        </div>
      </>
  );
};

export default ExploreTrees;