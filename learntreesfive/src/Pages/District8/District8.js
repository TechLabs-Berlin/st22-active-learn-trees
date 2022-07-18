import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District8Carousel from "./District8Carousel";

const District8 = () => {
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
             <District8Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 62km2 with approximately 277,600 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Acer Platanoides, Tilia cordata, Fraxinus excelsoir, Acer Platanoides, Betula pendula, <br></br>
                    Acer pseudoplatanus,  Robinia pseudoacacia, Platanus acerifolaia, 
                    <br></br> Aesculus hippocastanum and Tilia vulgaris
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification">Markische Allee, Blumberger Damm, Landsberger Aller, Allee der kosmonauten,<br></br>
                   Celilienstraße, Mehrower Allee, Märzahner promenade,
                    <br></br>Raul-wallenberg-straße and Alt-Biesdorf. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Marzahn: </h2>
            <h2 style={{color:'black'}} className="learn1">Tilia cordata</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Marzahn: </h2>
            <h2 style={{color: 'black'}} className="learn1">Robinia pseudoacacia</h2>

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
                    <td>Oldest Tree within Marzahn(Tilia cordata)</td>
                    <td>Winter-Linde</td>
                    <td>829 yrs</td>
                    <td>9m</td>
                    <td>73cm</td>
                    <td>5m</td>
                    <td>Huitschiner Damm</td>
                </tr>
                <tr>
                    <td>Highest Tree within Marzahn(Robinia pseudoacacia)</td>
                    <td>Robinie</td>
                    <td>129yrs</td>
                    <td>40m</td>
                    <td>48cm</td>
                    <td>6m</td>
                    <td>Altentreptower straße</td>
                    

                </tr>
                

            </table>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinMarzahn'>Explore trees within Marzahn</Link></button>
        </div>

   </div>
   </>
);
};
export default District8;