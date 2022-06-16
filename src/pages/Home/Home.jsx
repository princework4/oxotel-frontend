// MUI imports
import { Box, Grid } from "@mui/material";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ImageSlider from "../../components/Slider";
import { HeroSliderImages } from "../../utils/SliderImages/SliderImages";
import {
  HeroSliderSettings,
  PropertyImagesSliderSettings,
} from "../../utils/SliderSetting/SliderSetting";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TvIcon from "@mui/icons-material/Tv";
import "./Home.css";
import BenfitsCard from "../../components/BenfitsCard";
import ReviewCard from "./ReviewCard";
import CountUp from "react-countup";

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
  return (
    <div className="Home">
      <Header />
      <ImageSlider settings={HeroSliderSettings} images={HeroSliderImages} />
      <section className="who_sec">
        <Box className="wrapper who_we_are">
          <Box className="who_we_are_main_content_text">
            <p className="who_sub_heading">Who we are?</p>
            <h1>Hostels</h1>
            <h3>
              Our Hostels are located in the center of Mumbai, close to the most
              popular places in the city
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
                    Gaming room
                  </li>
                </ul>
              </Box>
            </Box>
            <button className="hero_btn">Read more</button>
          </Box>
          <Box className="who_we_are_main_content_img">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
              alt=""
            />
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
      <section className="wrapper benifits-sec">
        <div className="benifit-heading">
          <h1>Benfits</h1>
        </div>
        <div className="benifit-cards">
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
      </section>
      <section className="wrapper review-sec">
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
                  <ReviewCard />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
      <section className="wrapper">
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
            <CountUp end={100} />
            <h2>Happy Customers</h2>
          </div>
          <div className="counter_item">
            <CountUp end={100} separator="  " suffix="+ Cr" />
            <h2>Happy Customers</h2>
          </div>
        </div>
      </section>
      <section className="wrapper amenities_sec">
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
                  <TvIcon className="amenities_icons_item" />
                  <p>Title</p>
                </div>
                <div className="amenities_icons_sec">
                  <TvIcon className="amenities_icons_item" />
                  <p>Title</p>
                </div>
                <div className="amenities_icons_sec">
                  <TvIcon className="amenities_icons_item" />
                  <p>Title</p>
                </div>
              </div>
              <div className="amenities_icons_two">
                <div className="amenities_icons_sec">
                  <TvIcon className="amenities_icons_item" />
                  <p>Title</p>
                </div>
                <div className="amenities_icons_sec">
                  <TvIcon className="amenities_icons_item" />
                  <p>Title</p>
                </div>
                <div className="amenities_icons_sec">
                  <TvIcon className="amenities_icons_item" />
                  <p>Title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
