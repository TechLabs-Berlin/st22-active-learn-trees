import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1065) {
      setMobile(true);
    }
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1065) {
        setMobile(true);
      }else {
        setMobile(false);
        setSidebar(false);
      }
    };

    window.addEventListener("resize, handleResize");
    return () => {
      window.removeEventListener("resize", handleResize);

    };
  }, []);

  return (
    <>
    <nav className="navbar">#
    <link to="/" className="navbar-logo" onClick={() => setSidebar(false)}>
      <Icons.FaPiedPiper />
      PIPER 
    </link>
    {!mobile && (

    )}
    </nav>
    </>
  )
}*/

const Navbar = () => {
    return(
        <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-black bg-white">
        <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
        
      </span>
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