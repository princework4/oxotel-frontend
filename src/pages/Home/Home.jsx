import * as React from "react";
import { Link } from "react-router-dom"
// MUI imports
import { Box, Grid } from "@mui/material";
import ImageSlider from "../../components/Slider";
import { HeroSliderImages } from "../../utils/SliderImages/SliderImages";
import {
  HeroSliderSettings,
  // PropertyImagesSliderSettings,
} from "../../utils/SliderSetting/SliderSetting";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WashIcon from "@mui/icons-material/Wash";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import HotTubIcon from "@mui/icons-material/HotTub";
import "./Home.css";
import BenfitsCard from "../../components/BenfitsCard";
import ReviewCard from "./ReviewCard";
import CountUp from "react-countup";
import AOS from "aos";
import { reviews } from "../../utils/constant/constant";
import "aos/dist/aos.css";

const Home = () => {
  const datas = [
    {
      img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      id: 0,
      name: "Demo 1",
      gender: "male",
      occupancy: ["single"],
      amenities: ["High-Speed WIFI", "Cafeteria", "AC", "TV", "Mini Fridge"],
      price: "1234.0",
    },
    {
      img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      id: 0,
      name: "Demo 1",
      gender: "male",
      occupancy: ["single"],
      amenities: ["High-Speed WIFI", "Cafeteria"],
      price: "1234.0",
    },
    {
      img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      id: 0,
      name: "Demo 1",
      gender: "male",
      occupancy: ["single"],
      amenities: ["High-Speed WIFI", "Cafeteria"],
      price: "1234.0",
    },
    {
      img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      id: 0,
      name: "Demo 1",
      gender: "male",
      occupancy: ["single"],
      amenities: ["High-Speed WIFI", "Cafeteria"],
      price: "1234.0",
    },
  ];

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scroll(0, 0);
  }, []);

  // remove section class name
  // wrapper
  // add one more dive after wraper class should be same as section

  return (
    <div className="Home">
      <ImageSlider settings={HeroSliderSettings} images={HeroSliderImages} />
      <section className="who_sec" data-aos="fade-up" data-aos-duration="3000">
        <Box className="wrapper">
          <Box className="who_we_are">
            <Box className="who_we_are_main_content_text">
              <p className="who_sub_heading">Who we are?</p>
              <h1>Oxotel</h1>
              <h3>
                Our Hostels are located in the center of Mumbai, close to the
                most popular places in the city
              </h3>
              <p className="who_sub_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus eius corrupti in cupiditate odio! Perferendis rem
                magni eveniet velit a. Ipsa, commodi est. Doloribus numquam
                necessitatibus optio a delectus laboriosam!
              </p>
              <Box className="offer_list_sec">
                <h4>we offer our guests</h4>
                <Box className="offer_list">
                  <ul>
                    <li>
                      <CheckCircleIcon className="checked_icon" /> Everyday
                      breakfast
                    </li>
                    <li>
                      <CheckCircleIcon className="checked_icon" />
                      Free wifi
                    </li>
                    <li>
                      <CheckCircleIcon className="checked_icon" />
                      Free parking
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <CheckCircleIcon className="checked_icon" />
                      Room with badroom
                    </li>
                    <li>
                      <CheckCircleIcon className="checked_icon" />
                      Perfect location
                    </li>
                    <li>
                      <CheckCircleIcon className="checked_icon" />
                      Safety
                    </li>
                  </ul>
                </Box>
              </Box>
              <Link className="hero_btn" to="/explore-residences">Explore more</Link>
            </Box>
            <Box className="who_we_are_main_content_img">
              <img
                src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
                alt=""
              />
            </Box>
          </Box>
        </Box>
      </section>
      {/* ------------------------- For future use ---------------------------------------------- */}
      {/* <section className="property_slider">
        <ImageSlider
          settings={PropertyImagesSliderSettings}
          images={HeroSliderImages}
        />
      </section> */}
      <section
        className="benifits_sec"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Box className="wrapper">
          <Box className="benifits_sec_content">
            <div className="benifit_heading">
              <h1>Benefits </h1>
            </div>
            <div className="benifit_cards">
              <Grid
                container
                spacing={3}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
              >
                {datas.map((data) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                    xl={3}
                    key={datas.indexOf(data)}
                  >
                    <div className="card">
                      <BenfitsCard />
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Box>
        </Box>
      </section>
      <section
        className="review-sec"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <Box className="wrapper">
          <div className="review-heading">
            <h1>Our reviews</h1>
          </div>
          <div className="review-cards">
            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {reviews.map((review) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  xl={3}
                  key={reviews.indexOf(review)}
                >
                  <div className="card">
                    <ReviewCard
                      description={review.description}
                      name={review.name}
                    />
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Box>
      </section>

      <section data-aos="fade-up" data-aos-duration="3000">
        <Box className="wrapper">
          <div className="counter_sec">
            <div className="counter_item">
              <CountUp end={100} separator="  " suffix="+" />
              <h2>Happy Customers</h2>
            </div>
            <div className="counter_item">
              <CountUp end={100} separator="  " suffix="+" />
              <h2>Happy Customers</h2>
            </div>
            <div className="counter_item">
              <CountUp end={100} separator="  " suffix="+" />
              <h2>Happy Customers</h2>
            </div>
            <div className="counter_item">
              <CountUp end={100} separator="  " suffix="+ Cr" />
              <h2>Happy Customers</h2>
            </div>
          </div>
        </Box>
      </section>
      <section className="amenities_sec">
        <Box data-aos="fade-up" data-aos-duration="3000" className="wrapper">
          <div className="amenities">
            <div className="amenities_img">
              <img
                src="https://cdn.pixabay.com/photo/2014/08/11/21/39/wall-416060_960_720.jpg"
                alt=""
              />
            </div>
            <div className="amenities_content">
              <h1>All our amenities</h1>
              <div className="amenities_icons">
                <div className="amenities_icons_one">
                  <div className="amenities_icons_sec">
                    <KitchenIcon className="amenities_icons_item" />
                    <p>Fridge</p>
                  </div>
                  <div className="amenities_icons_sec">
                    <WashIcon className="amenities_icons_item" />
                    <p>Washing Machine</p>
                  </div>
                  <div className="amenities_icons_sec">
                    <HotTubIcon className="amenities_icons_item" />
                    <p>Geyser</p>
                  </div>
                </div>
                <div className="amenities_icons_two">
                  <div className="amenities_icons_sec">
                    <LocalDrinkIcon className="amenities_icons_item" />
                    <p>Aquaguard</p>
                  </div>
                  <div className="amenities_icons_sec">
                    <MicrowaveIcon className="amenities_icons_item" />
                    <p>Kitchen Utensils</p>
                  </div>
                  <div className="amenities_icons_sec">
                    <AcUnitIcon className="amenities_icons_item" />
                    <p>AC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </section>
    </div>
  );
};

export default Home;
