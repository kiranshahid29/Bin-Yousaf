import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function ReactCarousel() {
  return (
    <div>
      <Carousel className="ml-20">
        <div>
           <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b1.jpg" />
        </div>
        <div>
          <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b2.jpg" />
        </div>
        <div>
          <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b3.jpg" />
        </div>
        <div>
          <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b4.jpg" />
        </div>
        <div>
          <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b5.jpg" />
        </div>
        <div>
          <img src="https://binyousaf.pk/wp-content/uploads/2022/11/b5.jpg" />
        </div>
      </Carousel>
    </div>
  );
}

export default ReactCarousel;
