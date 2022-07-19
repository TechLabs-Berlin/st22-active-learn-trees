import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District7Carousel from "./District7Carousel";

const District7 = () => {
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
             <District7Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>


      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 52km2 with approximately 299,700 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Acer Platanoides, Tilia cordata, Fraxinus excelsoir, Betula pendula, <br></br>
                    Acer pseudoplatanus,  Platanus acerifolaia, Tilia platyphyllos, Tilia europaea,
                    <br></br> Corylus columa,and Tilia vulgaris.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification">Rhinstraße, Zingstraße, Landsberger Allee, Falkenberger chausee,<br></br>
                    Dorfstraße, Hauptstaße, Konrad-Wolf-straße,
                    <br></br>Köpenicker Allee and Biesenbrower straße. </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Lichtenberg: </h2>
            <h2 style={{color:'black'}} className="learn1">Populus nigra</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Lichtenberg: </h2>
            <h2 style={{color: 'black'}} className="learn1">Bentula pendula</h2>

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
                    <td>Oldest Tree within Lichtenberg(Populus nigra)</td>
                    <td>Pyramiden-pappel</td>
                    <td>59 yrs</td>
                    <td>40 m</td>
                    <td>186cm</td>
                    <td>NA</td>
                    <td>Hauptstaße</td>
                </tr>
                <tr>
                    <td>Highest Tree within Lichtenberg(Bentula pendula)</td>
                    <td>Hänge Birke</td>
                    <td>1yr</td>
                    <td>5m</td>
                    <td>12cm</td>
                    <td>1m</td>
                    <td>Zweiseier straße</td>
                    

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
                    <td>Populus nigra</td>
                    <td>59</td>
                    <td>40</td>
                    <td>186</td>
                    <td>4000</td>
                    <td>2000</td>
                    <td>7,340</td>
                    <td>433,060</td>
                </tr>
                <tr>
                    <td>Betula pendula</td>
                    <td>1 </td>
                    <td>5</td>
                    <td>12</td>
                    <td>50</td>
                    <td>25</td>
                    <td>91.75</td>
                    <td>91.75</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/ExploreTreesWithinLictenberg'> Explore trees within Lichtenberg</Link></button>
        </div>

   </div>
   </>
);
};
export default District7;