import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import React from "react";

const ImageSlider = (props) => {
  // const settings = {
  //   infinite: true,
  //   dots: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   lazyLoad: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   arrows: true,
  // };

  return (
    <>
      <div className="imgslider">
        <Slider {...props.settings}>
          {props.images.map((item, index) => (
            <div className="slider_div" key={index}>
              <img src={item} alt={`oxotel_slider_image_${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
