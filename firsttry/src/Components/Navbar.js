import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return(
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <div className='menu'>
                    <div className="navbar">
                      <div className="ui inverted menu">
                        <li>
                          <Link to = '/home'>
                            <a className="item">Home</a>
                          </Link>
                        </li>
                        <li>
                          <Link to = '/district'>
                            <a className="item">Districts</a>
                          </Link>
                        </li>
                        <li>
                        <Link to = '/uploadImage'>
                          <a className="item"> Upload Image </a>
                        </Link>
                        </li>
                      </div>
                    </div>
                </div> 


              </ul>
             </div>
          </div>
        </nav>
        </>
    )
};

export default Navbar;