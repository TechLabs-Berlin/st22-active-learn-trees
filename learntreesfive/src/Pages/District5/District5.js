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
        <div className="tab">
            <div>
                <h2>CO2 absorption</h2>
                <p className="tab1"> Dry weight= circumference conversion taking the closest value on the graph.
                   <br></br> Carbon stored= half of the dry weight of the tree(dry weight/2).
           
                    <br></br>CO2 = thanks to molar mass ratios, we can break CO2 down and find it take 3.67kg
                     <br></br>of CO2 to create 1kg of Carbon in the tree. That's because carbon has a molar mass of 12 
                     <br></br>and oxygen 16. Combined as CO2 that's 44. And 44/12 = 3.67.          <br></br>Water(humidity)=50% of the total tree<br></br>
                     
                     CO2 absorption per year = Weight of Carbon stored * 3.67. 
                    


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
                    <td>Aesculus hippocastanum</td>
                    <td>2000 </td>
                    <td>4</td>
                    <td>50</td>
                    <td>106</td>
                    <td>53</td>
                    <td>194.51</td>
                    <td>389,020</td>
                </tr>
                <tr>
                    <td>Quercus robur</td>
                    <td>231 </td>
                    <td>30</td>
                    <td>467</td>
                    <td>26,674</td>
                    <td>13,337</td>
                    <td>48,946.79</td>
                    <td>11,306,708.49</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinSpandau'> Explore trees within Spandau</Link></button>
        </div>

   </div>
   </>
);
};
export default District5;