import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District11Carousel from "./District11Carousel";


const District11 = () => {
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
             <District11Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 45km2 with approximately 329,917 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Acer Platanoides, Tilia cordata, Tilia vulgaris, Tilia platyphyllos, Quercus robur, <br></br>
                   Betula pendula, Quercus rubra, Acer pseudoplatanus, plantanus acerifolaia,  
                    <br></br> and Aesculus hippocastanum.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification"> Lichterade damm, Hundsteinweg, Hauptstaße, Tempelhof damm<br></br>
                   Lessingstraße, Rixdorfer straße, Marthin-Luther-straße  
                    <br></br> Alboinplatz, Kirchhainer damm and Alt-Lictenrade.</p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Tempelhof: </h2>
            <h2 style={{color:'black'}} className="learn1">Acer pseudoplatanus</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Tempelhof: </h2>
            <h2 style={{color: 'black'}} className="learn1">Populus nigra</h2>

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
                    <td>Oldest Tree within Tempelhof(Acer pseudoplatanus)</td>
                    <td>Berg-Ahorn</td>
                    <td>362 yrs</td>
                    <td>14m</td>
                    <td>189cm</td>
                    <td>NA</td>
                    <td>Saydlitzstraße</td>
                </tr>
                <tr>
                    <td>Highest Tree within Tempelhof(Populus nigra)</td>
                    <td>Schwarz-pappel</td>
                    <td>110yrs</td>
                    <td>35m</td>
                    <td>330cm</td>
                    <td>NA</td>
                    <td>Monopolstarße</td>
                    

                </tr>
                

            </table>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinTempelhof'>Explore trees within Tempelhof</Link></button>
        </div>

   </div>
   </>
);
};
export default District11;