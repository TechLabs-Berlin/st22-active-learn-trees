import React from "react";
import Pankow1 from '../../Assets/Images/Neukoln/Neukoln1.png';
import Pankow2 from '../../Assets/Images/Neukoln/Neukoln2.png';
import Pankow3 from '../../Assets/Images/Neukoln/neukoln3.png';
import Pankow4 from '../../Assets/Images/Neukoln/Neukoln4.png';
import Carousel from 'react-bootstrap/Carousel';



const District10Carousel = () => {
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


export default District10Carousel;