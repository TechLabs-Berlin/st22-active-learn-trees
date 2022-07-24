import React from "react";
import Pankow1 from '../../Assets/Images/Charlottenburg/Charlottenburg1.png';
import Pankow2 from '../../Assets/Images/Charlottenburg/Charlottenburg2.png';
import Pankow3 from '../../Assets/Images/Charlottenburg/Charlottenburg3.png';
import Pankow4 from '../../Assets/Images/Charlottenburg/Charlottenburg4.png';
import Carousel from 'react-bootstrap/Carousel';



const District3Carousel = () => {
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


export default District3Carousel;