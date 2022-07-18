import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
        <div className='menu'>
          <div className="ui inverted menu">
            <a className="item">
              <Link to = '/'>
                Home
              </Link>
            </a>
            <a className="item">
              <Link to = '/district'>
                Back
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
    )
};

export default Navbar;