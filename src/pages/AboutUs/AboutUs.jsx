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
            KEEPING THE CHALLENGES FACED BY BOTH THE OWNERS AND ACCOMMODATION SEEKERS IN MIND, OXOTEL WAS CREATED.<br/>
            OUR FOCUS AS AN ORGANIZATION IS TO ACT AS A BRIDGE BETWEEN OWNERS AND ACCOMMODATION SEEKERS AND THEREFORE OUR FOCUS IS ON BECOMING A 'ONE STOP SEARCH FOR ALL ACCOMMODATION NEEDS'.
            </p>
          </div>
          <div className="about_us_img">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg"
              alt="about oxtel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
