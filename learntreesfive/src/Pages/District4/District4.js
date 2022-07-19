import React from "react";
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import { Link } from "react-router-dom";
import District4Carousel from "./District4Carousel";

const District4 = () => {
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
             <District4Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 20km2 with approximately 290,386 inhabitants. <br>
                    </br>the top 10 trees species within the district are: <p className="classification">
                    Tilia vulgaris, Platanus acerifolaia, Tilia cordata,  Acer Platanoides, Corylus colurna,<br></br>
                    Tilia tomentosa, Tilia erupaea, Pyrus calleryana, Gleditsia triacanthos.
                    </p>
                </p>
                <p className="description1">
                    The top 10 streets with the most trees are:
                     <p className="classification">Urbanstrasse, karl-Marx-Allee, Greisenaustaße, <br></br>
                    
                    Weiner Straße, Alexandrinenstraße, Reichenberger straße,<br></br>Skalitzer straße, Mehringdamm and Stresemanstrße. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Friedrichshain: </h2>
            <h2 style={{color:'black'}} className="learn1">Robinia pseudoacacia</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Friedrichshain: </h2>
            <h2 style={{color: 'black'}} className="learn1">Populus canadensis</h2>

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
                    <td>Oldest Tree within Friedrichshain(Robinia pseudoacacia)</td>
                    <td>Robinie</td>
                    <td>262 yrs</td>
                    <td>15m</td>
                    <td>276cm</td>
                    <td>7m</td>
                    <td>Waterloo uffer straße</td>
                </tr>
                <tr>
                    <td>Highest Tree in Friedrichshain (Populus canadensis)</td>
                <td>hybrid-pappel</td>
                    <td>169 yrs</td>
                    <td>28m</td>
                    <td>525cm</td>
                    <td>15m</td>
                    <td>Reichenbergerstraße</td>
                    

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
                    <td>Robinia pseudoacacia</td>
                    <td>262 </td>
                    <td>15</td>
                    <td>276</td>
                    <td>9842</td>
                    <td>4,842</td>
                    <td>18,060.07</td>
                    <td>4,731,738.34</td>
                </tr>
                <tr>
                    <td>Populus canadensis</td>
                    <td>169 </td>
                    <td>28</td>
                    <td>525</td>
                    <td>26674</td>
                    <td>13,337</td>
                    <td>48,946.79</td>
                    <td>8,272,007.51</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinFriedrichshain'> Explore trees within Friedrichshain</Link></button>
        </div>

   </div>
   </>
);
};
export default District4;