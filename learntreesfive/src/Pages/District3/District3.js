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
                    <td>57 yrs</td>
                    <td>25m</td>
                    <td>320cm</td>
                    <td>22cm</td>
                    <td>Heerstraße</td>
                    

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
                    <td>Quercus robur</td>
                    <td>167</td>
                    <td>25</td>
                    <td>370</td>
                    <td>18700</td>
                    <td>9,350</td>
                    <td>34,314.5</td>
                    <td>5,730,521.5</td>
                </tr>
                <tr>
                    <td>Quercus robur </td>
                    <td>57 </td>
                    <td>25</td>
                    <td>320</td>
                    <td>12410</td>
                    <td>6,205</td>
                    <td>22,772.35</td>
                    <td>1,298,023.96</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreeswithinCharlottenburg'>Explore trees within Charlottenburg</Link></button>
        </div>

   </div>
   </>
);
};


export default District3;