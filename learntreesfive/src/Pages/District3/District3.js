import React from "react";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import { Link } from "react-router-dom";
import District3Carousel from "./District3Carousel";

const District3 = () => {
return( 
    <>
    <div className="district-body">
      <Navbar />
      <div className="">
                            <div className="about-page-back">
                            <Link to = '/home'> <a className="navbar-brand">Back</a></Link>
                            </div>
              </div>
      <AppLogo />
      
      <div>
                 <hr style={{
                    background: 'grey',
                    color: 'black',
                    borderColor: 'black',
                    height: '3px',
                 }}></hr>
                 </div>

                <div className="district1-container">
                    <div class="picture-column">
                    <District3Carousel />
                </div>
        </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 103 sq/km and approximately 413,335 inhabitants. <br>
                    </br>the top 10 tree species within the district are: <p className="classification">
                    Acer Platanoides, Tilia cordata, Platanus acerifolaia, Quercus Robur, Quercus Robru,<br></br>
                    Tilia Americana, Tilia europaea, Tilia vulgaris, <br></br> Tilia tomentosa and Tilia platyphyllos.
                    Tilia platyphyllos.</p>
                </p>
                <p className="description1">
                    The top 10 streets with the most trees are:
                     <p className="classification">Hohenzollendamm, Havelchausee, Heerstaße, <br></br>
                    
                    Kurfürstundamm, Saatwinkler Damm, Reichstraße <br></br>Spandauer Damm, Ampostfenn, Clayallee and koenigsalle. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Charlottenburg: </h2>
            <h2 style={{color:'black'}} className="learn1">Quercus Robur</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Charlottenburg: </h2>
            <h2 style={{color: 'black'}} className="learn1">Quercus Robur</h2>

        </div>
        <div className="tab">
            <table>
                <tr>
                    <th></th>
                    <th>German Name</th>
                    <th>Age</th>
                    <th>Height</th>
                    <th>Root circumference</th>
                    <th>crown diameter</th>
                    <th>Location</th>
                </tr>
                <tr>
                    <td>Oldest Tree within Charlottenburg(Quercus Robur)</td>
                    <td>Sommer-Eiche</td>
                    <td>167 yrs</td>
                    <td>25m</td>
                    <td>370cm</td>
                    <td>Not Kown</td>
                    <td>Havelchausee</td>
                </tr>
                <tr>
                    <td>Highest Tree in Charlottenburg (Quercus Robur)</td>
                <td>Sommer-Eiche</td>
                    <td>167 yrs</td>
                    <td>25m</td>
                    <td>320cm</td>
                    <td>22cm</td>
                    <td>Heerstraße</td>
                    

                </tr>
                

            </table>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreeswithinCharlottenburg'>Explore trees within Charlottenburg</Link></button>
        </div>

   </div>
   </>
);
};


export default District3;