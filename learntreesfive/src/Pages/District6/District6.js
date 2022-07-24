import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District6Carousel from "./District6Carousel";


const District6 = () => {
return( 
    <>
    <div className="district-body">
      <Navbar />
      <div className="">
                            <div className="about-page-back">
                            <Link to = '/district'> <a className="navbar-brand">Back</a></Link>
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
             <District6Carousel />
            </div>
      </div>
      <h1 className="second-header">Reinickendorf</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 89km2 with approximately 265,800 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Platanus acerifolaia, Tilia cordata,  Acer Platanoides,  Corylus columa, Betula pendula,<br></br>
                    Tilia europaea, Tilia euchlora, Quercus robur, Tilia americ, Aesculus hippocastanum and Carpinus betulus.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification">Ruppiner Chausee, Bernauer straße, Am Nordgraben <br></br>
                    
                    Heiligenseestraße, Hermermdorfer straße, Orianenburger Chausee, Wilhemsruherdamm,
                    <br></br>Berliner staße, Lindauer straße, Schulzendorfer straße. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Reinickendorf: </h2>
            <h2 style={{color:'black'}} className="learn1">Quercus robur</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Reinickendorf: </h2>
            <h2 style={{color: 'black'}} className="learn1">Populs nigra</h2>

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
                    <td>Oldest Tree within Reinickendorf(Quercus robur)</td>
                    <td>Sommer-Eiche</td>
                    <td>222 yrs</td>
                    <td>20m</td>
                    <td>691cm</td>
                    <td>NA</td>
                    <td>Neubrücker straße</td>
                </tr>
                <tr>
                    <td>Highest Tree in Reinickendorf(Populus nigra)</td>
                    <td>Italianische-pyramiden pappel</td>
                    <td>102 yrs</td>
                    <td>40m</td>
                    <td>377cm</td>
                    <td>NA</td>
                    <td>Süderholmer steig</td>
                    

                </tr>
                

            </table>
        </div>

        <div className="tab">
            <div>
                <h2>CO2 absorption</h2>
                <p className="tab1"> Dry weight= circumference conversion taking the closest value on the graph.
                   <br></br>Carbon stored= dry weight/2.
                     <br></br>CO2 =  3.67kg(molar mass)
                    <br></br>CO2 absorption per year = Weight of Carbon stored * 3.67. 
                     <br></br>CO2 absorption in total= CO2 absorption per year* Age
                  
                </p>
            <table>
                <tr>
                    <th>Species</th>
                    <th>Age(yrs)</th>
                    <th>Height(m)</th>
                    <th>Circumference(cm)</th>
                    <th>Dry weight(kg)</th>
                    <th>Carbon stored(kg) </th>
                    <th>CO2 absorption per year(kg)</th>
                    <th>CO2 absorption in total(kg)</th>
                </tr>
                <tr>
                    <td>Quercus robur</td>
                    <td>222 </td>
                    <td>20</td>
                    <td>691</td>
                    <td>27774</td>
                    <td>13,887</td>
                    <td>50,965.29</td>
                    <td>11,314,294.38</td>
                </tr>
                <tr>
                    <td>Populus nigra</td>
                    <td>102 </td>
                    <td>40</td>
                    <td>377</td>
                    <td>18700</td>
                    <td>9,350</td>
                    <td>34,314.5</td>
                    <td>3,500,079</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinReinickendorf'>Explore trees within Reinickendorf</Link></button>
        </div>

   </div>
   </>
);
};
export default District6;