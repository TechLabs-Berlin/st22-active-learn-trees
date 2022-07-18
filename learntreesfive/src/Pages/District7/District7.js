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
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinLictenberg'> Explore trees within Lichtenberg</Link></button>
        </div>

   </div>
   </>
);
};
export default District7;