import React from "react";
import { Carousel } from "react-responsive-carousel";

const Images = ({ images, name }) => {
  const productData = images.map((image, index) => (
    <a data-image={image} data-zoom-image={image} key={index}>
      <img src={image} alt={name} />
    </a>
  ));
  return (
    <div className="col-lg-6 col-md-6">
      <div className="product-details-img">
        <div id="gallery" className="mt-20 product-dec-slider">
          <Carousel autoPlay={true} infiniteLoop={true}>
            {productData}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Images;
