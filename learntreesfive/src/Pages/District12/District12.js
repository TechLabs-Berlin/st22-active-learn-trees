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
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinSteglitZ'>Explore trees within Steglitz</Link></button>
        </div>

   </div>
   </>
);
};
export default District12;