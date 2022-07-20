import * as React from "react";
import "./AboutUs.css";
import AOS from "aos";

const AboutUs = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="about_us_sec" data-aos="fade-up" data-aos-duration="1500">
      <div className="wrapper">
        <div className="about_us">
          <div className="about_us_text">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum et
              sunt nostrum possimus enim dicta sit culpa eligendi minima,
              expedita aut architecto officia repudiandae accusantium
              perspiciatis ex cumque adipisci perferendis.
            </p>
          </div>
          <div className="about_us_img">
            <img
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="about oxtel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
