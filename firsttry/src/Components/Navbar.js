import React from "react";
import { Link } from "react-router-dom";
import mediaQuery from "../mediaQuery";

const Navbar = () => {
    return(
        <div>
            <nav>
        <div className='menu flex'>
          <div className="ui inverted menu">
            <a className="item">
              <Link to = '/'>
                Home
              </Link>
            </a>
            <a className="item">
              <Link to = '/district'>
                Districts
              </Link>
            </a>
            <a className="item">
              <Link to = '/uploadImage'>
                Upload Image
              </Link>
            </a>
          </div>
        </div> 
      </nav>
        </div>
    )}


export default Navbar;