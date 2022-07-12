import React from "react";
import Pankow1 from '../../Assets/Images/Spandau/Spandau1.png';
import Pankow2 from '../../Assets/Images/Spandau/Spandau2.png';
import Pankow3 from '../../Assets/Images/Spandau/Spandau3.png';
import Pankow4 from '../../Assets/Images/Spandau/Spandau4.png';
import Carousel from 'react-bootstrap/Carousel';



const District5Carousel = () => {
return( 
    <>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow1}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Spandau</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Spandau</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Spandau</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Pankow4}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Spandau</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           
   </>
);
};


export default District5Carousel;