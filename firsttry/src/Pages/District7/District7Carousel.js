import React from "react";
import Pankow1 from '../../Assets/Images/Lichtenberg/Lichtenberg1.jpg';
import Pankow2 from '../../Assets/Images/Lichtenberg/Lichtenberg2.jpg';
import Pankow3 from '../../Assets/Images/Lichtenberg/Lichtenberg3.JPG';
import Pankow4 from '../../Assets/Images/Lichtenberg/Lichtenberg4.jpg';
import Carousel from 'react-bootstrap/Carousel';



const District7Carousel = () => {
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
                        <h1 className="district-main-header">Lichtenberg</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow2}
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Lichtenberg</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block "
                        src= {Pankow3}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Lichtenberg</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block"
                        src= {Pankow4}
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h1 className="district-main-header">Lichtenberg</h1>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
           
   </>
);
};


export default District7Carousel;