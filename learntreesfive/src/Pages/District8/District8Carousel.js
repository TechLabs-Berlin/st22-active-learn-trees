import React from "react";
import Pankow1 from '../../Assets/Images/Marzahn/Marzahn1.png';
import Pankow2 from '../../Assets/Images/Marzahn/Marzahn2.jpg';
import Pankow3 from '../../Assets/Images/Marzahn/Marzahn3.jpg';
import Pankow4 from '../../Assets/Images/Marzahn/Marzahn4.jpg';
import Carousel from 'react-bootstrap/Carousel';



const District8Carousel = () => {
return( 
    <>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow1}
                        alt="First slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow2}
                        alt="Second slide"
                        />
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow3}
                        alt="Third slide"
                        />
                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Pankow4}
                        alt="Third slide"
                        />
                        
                    </Carousel.Item>
                </Carousel>
           
   </>
);
};


export default District8Carousel;