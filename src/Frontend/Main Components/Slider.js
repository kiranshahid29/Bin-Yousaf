import React from "react";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className=" "
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/c/_/c_c-1_1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" "
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/w/o/women_3.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className=" "
            src="https://www.junaidjamshed.com/media/weltpixel/owlcarouselslider/images/f/e/festive_men.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
