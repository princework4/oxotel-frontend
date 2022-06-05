import * as React from "react";

//  MUI imports
import { Box, Button, Paper, Typography } from "@mui/material";

// Custom components imports
import ReserveNow from "../../components/ReserveNow";
import ScheduleMeet from "../../components/ScheduleMeet";

import "./DetailedExploreResidences.css";

// Images imports
import { Male, Female, Bed } from "../../assets";

const DetailedExploreResidences = () => {
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

  const datas = {
    imgs: [
      "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      "https://dummyimage.com/600x400/2aeb47/2aeb47",
      "https://dummyimage.com/600x400/000/000",
      "https://dummyimage.com/600x400/1fd98b/1fd98b",
      "https://dummyimage.com/600x400/c7e833/c7e833",
    ],
    name: "Demo 1",
    gender: "unisex",
    address:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    room_facilities: [
      {
        img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
        name: "attached washroom",
      },
      {
        img: "https://dummyimage.com/600x400/000/000",
        name: "bed with mattress",
      },
      {
        img: "https://dummyimage.com/600x400/1fd98b/1fd98b",
        name: "ceiling fans",
      },
      {
        img: "https://dummyimage.com/600x400/c7e833/c7e833",
        name: "hot water supply",
      },
    ],
    amenities_and_services: [
      {
        img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
        name: "attached washroom",
      },
      {
        img: "https://dummyimage.com/600x400/000/000",
        name: "bed with mattress",
      },
      {
        img: "https://dummyimage.com/600x400/1fd98b/1fd98b",
        name: "ceiling fans",
      },
      {
        img: "https://dummyimage.com/600x400/c7e833/c7e833",
        name: "hot water supply",
      },
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241173.16418552102!2d72.84159861375612!3d19.180753508292945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0cf2ad35e11%3A0xbb082ff1c2455f8e!2sShelter%20Homes%20PG!5e0!3m2!1sen!2sin!4v1653937381039!5m2!1sen!2sin",
    price: 1234,
    available_occupancies: [
      { name: "double", price: 2000 },
      { name: "triple", price: 3000 },
    ],
  };

  return (
    <>
      <section className='detailed_explore_residences'>
        <Box className='wrapper'>
          <Box className='banner_desktop_view'>
            <Box className='left_gallery'>
              <Box className='figure'>
                <Box component='img' src={datas.imgs[0]} />
              </Box>
            </Box>
            <Box className='right_gallery'>
              {datas.imgs.map((img, index) => {
                return (
                  index !== 0 && (
                    <Box className='figure' key={index}>
                      <Box component='img' src={img} />
                    </Box>
                  )
                );
              })}
            </Box>
          </Box>
          <Box className='banner_mobile_view'>
            {datas.imgs.map((img, index) => {
              return <Box component='img' src={img} key={index} />;
            })}
          </Box>
          <Box className='explore_residences_details'>
            <Box className='explore_residences_details_left_section'>
              <Box className='explore_residences_basic_details'>
                <Typography gutterBottom variant='h5'>
                  {datas.name}
                </Typography>
                <Box className='gender_wrapper'>
                  {datas.gender === "male" ? (
                    <>
                      <Box component='img' src={Male} />
                      <Typography gutterBottom variant='h6'>
                        {datas.gender}
                      </Typography>
                    </>
                  ) : datas.gender === "female" ? (
                    <>
                      <Box component='img' src={Female} />
                      <Typography gutterBottom variant='h6'>
                        {datas.gender}
                      </Typography>
                    </>
                  ) : (
                    <>
                      <Box component='img' src={Male} />
                      <Box component='img' src={Female} />
                      <Typography gutterBottom variant='h6'>
                        {datas.gender}
                      </Typography>
                    </>
                  )}
                </Box>
              </Box>
              <Box className='explore_residences_room_facilities'>
                <Typography gutterBottom variant='h5'>
                  room facilities
                </Typography>
                <Box className='facility_wrapper'>
                  {datas.room_facilities.map((facility) => {
                    return (
                      <Box>
                        <Box
                          component='img'
                          src={facility.img}
                          className='facility_img'
                        />
                        <Typography
                          gutterBottom
                          variant='h7'
                          className='facility_name'>
                          {facility.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box className='explore_residences_amenities_and_service'>
                <Typography gutterBottom variant='h5'>
                  amenities and services
                </Typography>
                <Box className='amenity_wrapper'>
                  {datas.amenities_and_services.map((amenity) => {
                    return (
                      <Box>
                        <Box
                          component='img'
                          src={amenity.img}
                          className='amenity_img'
                        />
                        <Typography
                          gutterBottom
                          variant='h7'
                          className='amenity_name'>
                          {amenity.name}
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
              <Box className='explore_residences_maps'>
                <Typography gutterBottom variant='h5'>
                  location
                </Typography>
                <Box className='maps_wrapper'>
                  <iframe
                    src={datas.map}
                    title={datas.name}
                    width='90%'
                    height='300'
                    style={{ border: 0 }}
                    allowFullScreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'></iframe>
                </Box>
              </Box>
            </Box>
            <Box className='explore_residences_details_right_section'>
              <Typography gutterBottom variant='h7'>
                starting from
              </Typography>
              <Typography gutterBottom variant='h5' className='price'>
                ₹{datas.price} /mo*
              </Typography>
              <Box className='available_occupancy'>
                <Typography gutterBottom variant='h5'>
                  available occupancies
                </Typography>
                <Box className='available_occupancy_wrapper'>
                  {datas.available_occupancies.map((available_occupancy) => {
                    return (
                      <Box>
                        <Box component='img' src={Bed} />
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
              <Box className='button_wrapper'>
                <Button
                  className={leftBtn ? "active_btn" : "default_button"}
                  onClick={handleLeftBtn}>
                  reserve now
                </Button>
                <Button
                  className={rightBtn ? "active_btn" : "default_button"}
                  onClick={handleRightBtn}>
                  schedule a meet
                </Button>
              </Box>
              <Paper elevation={4} className='switch_form_wrapper'>
                {leftBtn ? <ReserveNow /> : <ScheduleMeet />}
              </Paper>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default DetailedExploreResidences;
