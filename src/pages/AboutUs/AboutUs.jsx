import { useEffect } from "react";
// MUI imports
import { Box, Grid } from "@mui/material";
import "./AboutUs.css";
// import Aos from "aos";

const AboutUs = () => {
  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  return (
    <div className="about_us_sec">
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
