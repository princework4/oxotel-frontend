import * as React from "react";

// React router dom imports
import { useParams } from "react-router-dom";

//  MUI imports
import { Box, Button, Paper, Typography } from "@mui/material";

// Custom components imports
import ReserveNow from "../../components/ReserveNow";
import ScheduleMeet from "../../components/ScheduleMeet";
import Loader from "../../components/Loader";
import ImageSlider from "../../components/Slider";
import { HeroSliderSettings } from "../../utils/SliderSetting/SliderSetting";

// Custom RTK hooks
import { useGetDetailOfHouseQuery } from "../../services/Houses";

import "./DetailedExploreResidences.css";

// Images imports
import { Male, Female, Bed } from "../../assets";

const DetailedExploreResidences = () => {
  const params = useParams();
  const { data, error, isLoading } = useGetDetailOfHouseQuery(params.id);
  const [leftBtn, setLeftBtn] = React.useState(true);
  const [rightBtn, setRightBtn] = React.useState(false);

  const handleLeftBtn = () => {
    setLeftBtn(true);
    setRightBtn(false);
  };

  const handleRightBtn = () => {
    setRightBtn(true);
    setLeftBtn(false);
  };

  return (
    <>
      {!isLoading ? (
        !error && (
          <section className="detailed_explore_residences">
            <Box className="wrapper">
              <Box className="banner_desktop_view">
                <Box className="left_gallery">
                  <Box className="figure">
                    <Box component="img" src={data.img[0]} />
                  </Box>
                </Box>
                <Box className="right_gallery">
                  {data.img.map((img, index) => {
                    return (
                      index !== 0 && (
                        <Box className="figure" key={index}>
                          <Box component="img" src={img} />
                        </Box>
                      )
                    );
                  })}
                </Box>
              </Box>
              <Box className="banner_mobile_view">
                {data?.img && (
                  <ImageSlider
                    settings={HeroSliderSettings}
                    images={data.img}
                  />
                )}
              </Box>
              <Box className="explore_residences_details">
                <Box className="explore_residences_details_left_section">
                  <Box className="explore_residences_basic_details">
                    <Typography gutterBottom variant="h5">
                      {data.name}
                    </Typography>
                    <Box className="gender_wrapper">
                      {data.gender?.toLowerCase() === "male" ? (
                        <>
                          <Box component="img" src={Male} />
                          <Typography gutterBottom variant="h6">
                            {data.gender}
                          </Typography>
                        </>
                      ) : data.gender === "female" ? (
                        <>
                          <Box component="img" src={Female} />
                          <Typography gutterBottom variant="h6">
                            {data.gender}
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Box component="img" src={Male} />
                          <Box component="img" src={Female} />
                          <Typography gutterBottom variant="h6">
                            {data.gender}
                          </Typography>
                        </>
                      )}
                    </Box>
                  </Box>
                  <Box className="explore_residences_room_facilities">
                    <Typography gutterBottom variant="h5">
                      room facilities
                    </Typography>
                    <Box className="facility_wrapper">
                      {data.room_facilities.map((facility) => {
                        return (
                          <Box>
                            <Box
                              component="img"
                              src={facility.img}
                              className="facility_img"
                            />
                            <Typography
                              gutterBottom
                              variant="h7"
                              className="facility_name"
                            >
                              {facility.name}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box className="explore_residences_amenities_and_service">
                    <Typography gutterBottom variant="h5">
                      amenities and services
                    </Typography>
                    <Box className="amenity_wrapper">
                      {data.amenities_and_services.map((amenity) => {
                        return (
                          <Box>
                            <Box
                              component="img"
                              src={amenity.img}
                              className="amenity_img"
                            />
                            <Typography
                              gutterBottom
                              variant="h7"
                              className="amenity_name"
                            >
                              {amenity.name}
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box className="explore_residences_maps">
                    <Typography gutterBottom variant="h5">
                      location
                    </Typography>
                    <Box className="maps_wrapper">
                      <iframe
                        src={data.map}
                        title={data.name}
                        width="90%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </Box>
                  </Box>
                </Box>
                <Box className="explore_residences_details_right_section">
                  <Typography gutterBottom variant="h7">
                    starting from
                  </Typography>
                  <Typography gutterBottom variant="h5" className="price">
                    ₹{data.price} /mo*
                  </Typography>
                  <Box className="available_occupancy">
                    <Typography gutterBottom variant="h5">
                      available occupancies
                    </Typography>
                    <Box className="available_occupancy_wrapper">
                      {data.occupancy.map((available_occupancy) => {
                        return (
                          <Box>
                            <Box component="img" src={Bed} />
                            <Typography>{available_occupancy.name}</Typography>
                            <Typography>occupancy</Typography>
                            <Typography>
                              ₹{available_occupancy.price} /mo*
                            </Typography>
                          </Box>
                        );
                      })}
                    </Box>
                  </Box>
                  <Box className="button_wrapper">
                    <Button
                      className={leftBtn ? "active_btn" : "default_button"}
                      onClick={handleLeftBtn}
                    >
                      reserve now
                    </Button>
                    <Button
                      className={rightBtn ? "active_btn" : "default_button"}
                      onClick={handleRightBtn}
                    >
                      schedule a meet
                    </Button>
                  </Box>
                  <Paper elevation={4} className="switch_form_wrapper">
                    {leftBtn ? <ReserveNow /> : <ScheduleMeet />}
                  </Paper>
                </Box>
              </Box>
            </Box>
          </section>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DetailedExploreResidences;
