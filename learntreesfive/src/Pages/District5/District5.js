import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District5Carousel from "./District5Carousel";

const District5 = () => {
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
             <District5Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 92km2 with approximately 247,400 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Platanus acerifolaia, Tilia cordata, Acer Platanoides, Betula pendula, Robinia pseaudoplantanus<br></br>
                    Acer capestre. Corylus columa, Quercus robur, Aesculus hippocastanum and Fraxinus excelsior.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification">Heerstraße, Brunsbüteller damm, Schöwalder alle, Ritterfelddam, <br></br>
                    
                    Nonnendammalle, Falkenseer Chausee, Wihemstraße<br></br>Niederneuendorfer allee and Radelendstraße. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Spandau: </h2>
            <h2 style={{color:'black'}} className="learn1">Aesculus hippocastanum</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Spandau: </h2>
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
                    <td>Oldest Tree within Spandau(Aesculus hippocastanum)</td>
                    <td>Gemeine rosskastanie</td>
                    <td>2000 yrs</td>
                    <td>4m</td>
                    <td>50cm</td>
                    <td>2m</td>
                    <td>Havelschanze</td>
                </tr>
                <tr>
                    <td>Highest Tree in Spandau (Quercus robur)</td>
                <td>sommer-Eiche, Steil-Eiche</td>
                    <td>231 yrs</td>
                    <td>30m</td>
                    <td>467cm</td>
                    <td>20m</td>
                    <td>Werderstraße</td>
                    

                </tr>
                

            </table>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinSpandau'> Explore trees within Spandau</Link></button>
        </div>

   </div>
   </>
);
};
export default District5;