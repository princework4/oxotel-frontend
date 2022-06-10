// MUI imports
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

// Custom components imports
import RequestCallback from "../RequestCallback";

import "./HouseListing.css";

// Images imports
import { Bed } from "../../assets";

const HouseListing = () => {
  const datas = [
    {
      img: "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      id: 0,
      name: "Demo 1",
      gender: "male",
      occupancy: ["single"],
      amenities: ["High-Speed WIFI", "Cafeteria", "AC"],
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
    <>
      <Box className='house_listing'>
        <Grid
          container
          spacing={3}
          direction='row'
          justify='flex-start'
          alignItems='flex-start'>
          {datas.map((data) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={2}
              key={datas.indexOf(data)}>
              <Card className='house_card'>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    height='200'
                    image={data.img}
                    alt={data.name}
                  />
                  <CardContent className='house_details'>
                    <Box className='house_heading'>
                      <Typography gutterBottom variant='h5'>
                        {data.name}
                      </Typography>
                      <Typography gutterBottom variant='h6'>
                        {data.gender}
                      </Typography>
                    </Box>
                    <Box className='house_occupancy'>
                      <Box component='img' src={Bed} alt='Bed image' />
                      <Typography>
                        {data.occupancy.map((occupancy, index) => {
                          return data.occupancy.length > 1
                            ? index === data.occupancy.length - 1
                              ? occupancy
                              : occupancy.concat(", ")
                            : occupancy;
                        })}
                      </Typography>
                    </Box>
                    <Box className='house_amenity'>
                      {data.amenities.map((amenity, index) => {
                        return (
                          <Typography key={index}>
                            <CheckCircleOutlineIcon color='primary' /> {amenity}
                          </Typography>
                        );
                      })}
                      {/* <Typography>
                        {data.amenities.map((amenity, index) => {
                          return data.amenities.length > 1
                            ? index === data.amenities.length - 1
                              ? amenity.concat("...")
                              : amenity.concat(", ")
                            : amenity;
                        })}
                      </Typography> */}
                    </Box>
                  </CardContent>
                  <Box className='house_price'>
                    <Box>
                      <Typography className='house_starts_from' variant='h6'>
                        starts from
                      </Typography>
                      <Typography variant='h5'>₹{data.price}/mo*</Typography>
                    </Box>
                    <CardActions>
                      <RequestCallback />
                    </CardActions>
                  </Box>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default HouseListing;
