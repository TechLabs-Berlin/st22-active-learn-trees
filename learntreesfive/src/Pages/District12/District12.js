import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District12Carousel from "./District12Carousel";

const District12 = () => {
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
             <District12Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 103 km2 with approximately 307,100 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Acer Platanoides, Tilia cordata,Tilia platyphyllos,  Quercus robur, <br></br>
                   Betula pendula, Robinia pseudoacacia, Tilia tomemtosa, Quercus rubra,  
                    <br></br>  plantanus acerifolaia, and Aesculus hippocastanum.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification"> Kronprinzessinnenweg, Potsdamer chausee, Königsweg,<br></br>
                  Clayallee, Argentinische allee, Thielallee, Goerzallee,  
                    <br></br> Teltower damm, Ostpreußendamm and unter den linden.</p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Steglitz-Zehlendorf: </h2>
            <h2 style={{color:'black'}} className="learn1">Quercus robur</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Steglitz-Zehlendorf: </h2>
            <h2 style={{color: 'black'}} className="learn1">Malus hybride</h2>

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
                    <td>Oldest Tree within Steglitz-Zehlendorf (Quercus robur)</td>
                    <td>Silber-linde</td>
                    <td>102 yrs</td>
                    <td>NA</td>
                    <td>325cm</td>
                    <td>NA</td>
                    <td>Königsweg</td>
                </tr>
                <tr>
                    <td>Highest Tree within Steglitz-Zehlendorf(Malus hybride)</td>
                    <td>Zierapfel</td>
                    <td>16yrs</td>
                    <td>35m</td>
                    <td>40cm</td>
                    <td>NA</td>
                    <td>Schützenstraße</td>
                    

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
                    <td>102</td>
                    <td>NA</td>
                    <td>325</td>
                    <td>15,350</td>
                    <td>7,675</td>
                    <td>28,167.25</td>
                    <td>2,873,059.5</td>
                </tr>
                <tr>
                    <td>Malus hybride</td>
                    <td>16</td>
                    <td>35</td>
                    <td>40</td>
                    <td>90</td>
                    <td>45</td>
                    <td>165.15</td>
                    <td>2,642.4</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinSteglitZ'>Explore trees within Steglitz</Link></button>
        </div>

   </div>
   </>
);
};
export default District12;