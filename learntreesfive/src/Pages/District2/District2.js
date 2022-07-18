import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District2Carousel from "./District2Carousel";


const District2 = () => {
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
             <District2Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 103 sq/km and approximately 413,335 inhabitants. <br>
                    </br>the top 10 tree species within the district are: <p className="classification">
                    Tilia cordata, Fraxinus excelsoir, Acer pseudoplatanus,<br></br>
                    Plantunus acerifolia, Tilia europaea, Tilia vulgaris, <br></br>Aesculus hippocastanum, Tilia euchlora,
                    Tilia platyphyllos.</p>
                </p>
                <p className="description1">
                    The top 10 streets with the most trees are: <p className="classification">Seestraße,
                     Schönerlinder straße, Schönhauser Allee,Hauptstaße, Blankenfelder,<br></br>
                     Chausee, Hansastraße, Achillesstraße, prenzlauer Alle, Bahnhofstaße. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Pankow: </h2>
            <h2 style={{color:'black'}} className="learn1">Robinia pseudoacacia</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Pankow: </h2>
            <h2 style={{color: 'black'}} className="learn1">Populus canedensis</h2>

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
                    <td>Oldest Tree within Pankow(Robinia pseudoacacia)</td>
                    <td>Robinie</td>
                    <td>55 yrs</td>
                    <td>20m</td>
                    <td>130cm</td>
                    <td>NA</td>
                    <td>Hauptstaße</td>
                </tr>
                <tr>
                    <td>Highest Tree within Pankow (Betula pendula)</td>
                <td>Hybrid pappel</td>
                    <td>52 yrs</td>
                    <td>35m</td>
                    <td>314cm</td>
                    <td>16cm</td>
                    <td>Heerstraße</td>
                    

                </tr>
                

            </table>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinPankow'>Explore trees within Pankow</Link></button>
        </div>

   </div>
   </>
);
};


export default District2;