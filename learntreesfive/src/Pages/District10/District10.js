import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District10Carousel from "./District10Carousel";

const District10 = () => {
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
             <District10Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 45km2 with approximately 329,917 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Acer Platanoides, Tilia cordata, Quercus robur, Acer campestre, Tilia americana,  <br></br>
                   Fraxinus excelsoir,  Acer pseudoplatanus, plantanus acerifolaia,  
                    <br></br> Aesculus hippocastanum, Styphnolobium japonicum.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification"> Markische Alle, Blumberger Damm, Landsberger Allee<br></br>
                   Allee der kosmnauten, Cecilienstraße, Mehrower Allee, Marzahner promenade,  
                    <br></br> Raul-wallenberg-staße and Alt-Biesdorf.</p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Neukölln: </h2>
            <h2 style={{color:'black'}} className="learn1">Acer saccharinum</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Neukölln: </h2>
            <h2 style={{color: 'black'}} className="learn1">Quercus robur</h2>

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
                    <td>Oldest Tree within Neukölln(Acer saccharinum)</td>
                    <td>Silber-Ahorn</td>
                    <td>322 yrs</td>
                    <td>NA</td>
                    <td>417cm</td>
                    <td>NA</td>
                    <td>Buckower Damm</td>
                </tr>
                <tr>
                    <td>Highest Tree within Neukölln(Quercus robur)</td>
                    <td>Sommer Eiche</td>
                    <td>322yrs</td>
                    <td>22m</td>
                    <td>452cm</td>
                    <td>NA</td>
                    <td>Damm weg</td>
                    

                </tr>
                

            </table>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinNeukolln'> Explore trees within Neukölln</Link></button>
        </div>

   </div>
   </>
);
};
export default District10;