import * as React from "react";

// MUI imports
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Grid,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Routing imports
import { useNavigate } from "react-router-dom";

// Custom components imports
import RequestCallback from "../RequestCallback";
import Loader from "../Loader";

// Custom RTK hooks
import {
  useGetListOfHousesQuery,
  useFilterHouseWithGenderMutation,
  useFilterHouseWithPriceMutation,
} from "../../services/Houses";

import "./HouseListing.css";

// Images imports
import { Bed } from "../../assets";

const HouseListing = (props) => {
  const [filterDataByPrice, setFilterDataByPrice] = React.useState([]);
  const [filterDataByGender, setFilterDataByGender] = React.useState([]);
  const { data, error, isLoading } = useGetListOfHousesQuery();
  const [filteredWithPrice] = useFilterHouseWithPriceMutation();
  const [filteredWithGender] = useFilterHouseWithGenderMutation();
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/explore-residences/${id}`);
  };

  React.useEffect(() => {
    const checkProps = async () => {
      if (props.sortByPrice) {
        const data = await filteredWithPrice({ price: props.sortByPrice });
        setFilterDataByPrice(data);
      } else if (props.filterByGender) {
        const data = await filteredWithGender(props.filterByGender);
        setFilterDataByGender(data);
      }
    };
    checkProps();
  }, [props]);

  return (
    <>
      {!isLoading ? (
        !error && (
          <Box className="house_listing">
            <Grid
              container
              spacing={3}
              direction="row"
              justify="flex-start"
              alignItems="flex-start"
            >
              {filterDataByPrice?.length > 0
                ? filterDataByPrice.map((data) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={4}
                      key={data.id}
                    >
                      <Card className="house_card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={data.img}
                            alt={data.name}
                            onClick={() => handleClick(data.id)}
                          />
                          <CardContent
                            className="house_details"
                            onClick={() => handleClick(data.id)}
                          >
                            <Box className="house_heading">
                              <Typography gutterBottom variant="h5">
                                {data.name}
                              </Typography>
                              <Typography gutterBottom variant="h6">
                                {data.gender}
                              </Typography>
                            </Box>
                            <Box className="house_occupancy">
                              <Box component="img" src={Bed} alt="Bed image" />
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
                            <Box className="house_amenity">
                              {data.amenities.map((amenity, index) => {
                                return (
                                  <Typography key={index}>
                                    <CheckCircleIcon color="primary" />{" "}
                                    {amenity}
                                  </Typography>
                                );
                              })}
                            </Box>
                          </CardContent>
                          <Box className="house_price">
                            <Box
                              className="handle_flex_basis"
                              onClick={() => handleClick(data.id)}
                            >
                              <Typography
                                className="house_starts_from"
                                variant="h6"
                              >
                                starts from
                              </Typography>
                              <Typography variant="h5">
                                ₹{data.price}/mo*
                              </Typography>
                            </Box>
                            <CardActions>
                              <RequestCallback />
                            </CardActions>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : filterDataByGender?.length > 0
                ? filterDataByGender.map((data) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={4}
                      key={data.id}
                    >
                      <Card className="house_card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={data.img}
                            alt={data.name}
                            onClick={() => handleClick(data.id)}
                          />
                          <CardContent
                            className="house_details"
                            onClick={() => handleClick(data.id)}
                          >
                            <Box className="house_heading">
                              <Typography gutterBottom variant="h5">
                                {data.name}
                              </Typography>
                              <Typography gutterBottom variant="h6">
                                {data.gender}
                              </Typography>
                            </Box>
                            <Box className="house_occupancy">
                              <Box component="img" src={Bed} alt="Bed image" />
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
                            <Box className="house_amenity">
                              {data.amenities.map((amenity, index) => {
                                return (
                                  <Typography key={index}>
                                    <CheckCircleIcon color="primary" />{" "}
                                    {amenity}
                                  </Typography>
                                );
                              })}
                            </Box>
                          </CardContent>
                          <Box className="house_price">
                            <Box
                              className="handle_flex_basis"
                              onClick={() => handleClick(data.id)}
                            >
                              <Typography
                                className="house_starts_from"
                                variant="h6"
                              >
                                starts from
                              </Typography>
                              <Typography variant="h5">
                                ₹{data.price}/mo*
                              </Typography>
                            </Box>
                            <CardActions>
                              <RequestCallback />
                            </CardActions>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))
                : data.map((data) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      lg={6}
                      xl={4}
                      key={data.id}
                    >
                      <Card className="house_card">
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="200"
                            image={data.img}
                            alt={data.name}
                            onClick={() => handleClick(data.id)}
                          />
                          <CardContent
                            className="house_details"
                            onClick={() => handleClick(data.id)}
                          >
                            <Box className="house_heading">
                              <Typography gutterBottom variant="h5">
                                {data.name}
                              </Typography>
                              <Typography gutterBottom variant="h6">
                                {data.gender}
                              </Typography>
                            </Box>
                            <Box className="house_occupancy">
                              <Box component="img" src={Bed} alt="Bed image" />
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
                            <Box className="house_amenity">
                              {data.amenities.map((amenity, index) => {
                                return (
                                  <Typography key={index}>
                                    <CheckCircleIcon color="primary" />{" "}
                                    {amenity}
                                  </Typography>
                                );
                              })}
                            </Box>
                          </CardContent>
                          <Box className="house_price">
                            <Box
                              className="handle_flex_basis"
                              onClick={() => handleClick(data.id)}
                            >
                              <Typography
                                className="house_starts_from"
                                variant="h6"
                              >
                                starts from
                              </Typography>
                              <Typography variant="h5">
                                ₹{data.price}/mo*
                              </Typography>
                            </Box>
                            <CardActions>
                              <RequestCallback />
                            </CardActions>
                          </Box>
                        </CardActionArea>
                      </Card>
                    </Grid>
                  ))}
              {/* {datas.map((data) => (
                <Grid item xs={12} sm={6} md={6} lg={6} xl={4} key={data.id}>
                  <Card className="house_card">
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="200"
                        image={data.img}
                        alt={data.name}
                        onClick={() => handleClick(data.id)}
                      />
                      <CardContent
                        className="house_details"
                        onClick={() => handleClick(data.id)}
                      >
                        <Box className="house_heading">
                          <Typography gutterBottom variant="h5">
                            {data.name}
                          </Typography>
                          <Typography gutterBottom variant="h6">
                            {data.gender}
                          </Typography>
                        </Box>
                        <Box className="house_occupancy">
                          <Box component="img" src={Bed} alt="Bed image" />
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
                        <Box className="house_amenity">
                          {data.amenities.map((amenity, index) => {
                            return (
                              <Typography key={index}>
                                <CheckCircleIcon color="primary" /> {amenity}
                              </Typography>
                            );
                          })}
                        </Box>
                      </CardContent>
                      <Box className="house_price">
                        <Box
                          className="handle_flex_basis"
                          onClick={() => handleClick(data.id)}
                        >
                          <Typography
                            className="house_starts_from"
                            variant="h6"
                          >
                            starts from
                          </Typography>
                          <Typography variant="h5">
                            ₹{data.price}/mo*
                          </Typography>
                        </Box>
                        <CardActions>
                          <RequestCallback />
                        </CardActions>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))} */}
            </Grid>
          </Box>
        )
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HouseListing;
