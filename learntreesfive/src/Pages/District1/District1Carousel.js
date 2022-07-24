import React from "react";
import './District1.css';
import Mitte1 from '../../Assets/Images/Mitte/Mitte1.png';
import Mitte2 from '../../Assets/Images/Mitte/Mitte2.png';
import Mitte3 from '../../Assets/Images/Mitte/Mitte3.png';
import Mitte4 from '../../Assets/Images/Mitte/Mitte4.png';
import Carousel from 'react-bootstrap/Carousel';



const District1Carousel = () => {
return( 
    <>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Mitte1}
                        alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Mitte2}
                        alt="Second slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Mitte3}
                        alt="Third slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Mitte4}
                        alt="Third slide"
                        />
                        
                    </Carousel.Item>
                </Carousel>
           
   </>
);
};


export default District1Carousel;