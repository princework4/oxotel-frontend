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
              Keeping the challenges faced by both the owners and accomodation
              seekers in mind, <strong>OXOTEL</strong> was created.
              <br />
              Our focus as an organization is to act as a bridge between owners
              and accomodation seekers and therefore our focus is on becoming a
              <strong> ONE STOP SEARCH FOR ALL ACCOMMODATION NEEDS</strong>.
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
