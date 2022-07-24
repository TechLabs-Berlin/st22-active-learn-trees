import React from "react";
import { Link } from "react-router-dom";
import './District1.css';
import Navbar from "../../Components/Navbar";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District1Carousel from "./District1Carousel";


const District1 = () => {
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
      {/* <h1 className="district-header">Active_Learn_Trees</h1> */}
 
      <div className="district1-container">
            <div class="picture-column">
                 {/* <h1 className="district-main-header">Mitte</h1>  */}
                 <District1Carousel />
            </div>
      </div>
      <h1 className="second-header">Mitte</h1>


       <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 103 sq/km and approximately 413,335 inhabitants. 
                    the top 10 tree species within the district are: <p className="classification">
                    Tilia cordata, Fraxinus excelsoir, Acer pseudoplatanus,
                    Plantunus acerifolia, Tilia europaea, Tilia vulgaris, Aesculus hippocastanum, Tilia euchlora,
                    Tilia platyphyllos.</p>
                </p>
                <p className="description1">
                    The top 10 streets with the most trees are: <p className="classification">Seestraße, Osler straße, Brunnenstraße, straße des 17. juni, <br></br> Nordufer, Reinickendorfer staße, Müllerstaße, Alt-Moabit,<br></br> Unter den Linen and Bethaniendamm </p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Mitte: </h2>
            <h2 style={{color:'black'}} className="learn1">Tilia cordata</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Mitte: </h2>
            <h2 style={{color: 'black'}} className="learn1">Betula pendula</h2>

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
                    <td>Oldest Tree in Mitte(Tilia cordata)</td>
                    <td>Winter Linde</td>
                    <td>246 yrs</td>
                    <td>13m</td>
                    <td>115cm</td>
                    <td>6m</td>
                    <td>Tortstraße</td>
                </tr>
                <tr>
                    <td>Highest Tree in Mitte (Betula pendula)</td>
                <td>Sand birke</td>
                    <td>41 yrs</td>
                    <td>108m</td>
                    <td>108cm</td>
                    <td>10m</td>
                    <td>Liverpooler straße</td>
                    

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
                    <td>Tilia cordata</td>
                    <td>246 </td>
                    <td>13</td>
                    <td>115</td>
                    <td>800</td>
                    <td>400</td>
                    <td>1068</td>
                    <td>262,728</td>
                </tr>
                <tr>
                    <td>Betula pendula</td>
                    <td>41 </td>
                    <td>108</td>
                    <td>108</td>
                    <td>740</td>
                    <td>370</td>
                    <td>1357.9</td>
                    <td>55,673.9</td>
                    

                </tr>
                

            </table>
        </div>
        </div>
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinMitte'>Explore trees within Mitte</Link></button>
        </div>

   </div>
   </>
);
};


export default District1;