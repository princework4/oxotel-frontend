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
          {props.images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
