import React from "react";
import Navbar from "../../Components/Navbar";
import { Link } from "react-router-dom";
import AppLogo from "../../Components/AppLogo/AppLogo";
import District9Carousel from "./District9Carousel";

const District9 = () => {
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
             <District9Carousel />
            </div>
      </div>
      <h1 className="second-header">Information</h1>
      <div className="info-section">
            <div class="ui black left aligned">
                
                <p className="description">
                    The district has a total area of 168km2 with approximately 380,400 inhabitants. <br>
                    </br>The top 10 trees species within the district are: <p className="classification">
                     Acer Platanoides, Tilia cordata, Quercus robur, Tilia platyphyllos, Tilia cordata "greenspire", <br></br>
                    Tilia europaea, Tilia euchlora, Pinus sylvestris, Robinia pseudoacacia 
                    <br></br> Acer pseudoplatanus, and plantanus acerifolia.
                    </p>
                </p>
                <p className="description1">
                    The streets with the most trees are:
                     <p className="classification"> Fürstenwalder Damm, Adlergestell, kiefholzstraße, Wernsdorfer straße<br></br>
                   Puschkinalle, Wendenschloßstraße, Groß-Berliner Damm, Sudostallee, Fürstenwalder Alle 
                    <br></br> and köpenicker landstraße.</p>
                </p>
            </div>
                    
        </div>
        <div className="learn">
            <h2 className="learn">Oldest Tree within Treptow: </h2>
            <h2 style={{color:'black'}} className="learn1">Ulmus laevis</h2>
        </div>
        <div className="learn">
            <h2 className="learn">Highest Tree within Treptow: </h2>
            <h2 style={{color: 'black'}} className="learn1">Quercus petrea</h2>

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
                    <td>Oldest Tree within Treptow(Ulmus laevis)</td>
                    <td>Flatter-ulme</td>
                    <td>524 yrs</td>
                    <td>11m</td>
                    <td>486cm</td>
                    <td>7.5m</td>
                    <td>Dorfstraße</td>
                </tr>
                <tr>
                    <td>Highest Tree within Treptow(Quercus petrea)</td>
                    <td>Trauben-Eiche</td>
                    <td>11yrs</td>
                    <td>37m</td>
                    <td>37cm</td>
                    <td>2m</td>
                    <td>Alfonnstraße</td>
                    

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
                    <td>Ulmus laevis</td>
                    <td>524</td>
                    <td>11</td>
                    <td>486</td>
                    <td>28674</td>
                    <td>14,337</td>
                    <td>52,616.79</td>
                    <td>27,571,197.96</td>
                </tr>
                <tr>
                    <td>Quercus petrea</td>
                    <td>11 </td>
                    <td>37</td>
                    <td>37</td>
                    <td>70</td>
                    <td>35</td>
                    <td>128.45</td>
                    <td>1,412.95</td>
                    

                </tr>
                

            </table>
        </div>
        </div>


       
        
        <div className="btn-div">
            <button className="exploreTrees-btn"><Link to = '/exploreTreesWithinTreptow'>Explore trees within Treptow</Link></button>
        </div>

   </div>
   </>
);
};
export default District9;