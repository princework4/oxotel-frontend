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
import { useFilterWithAllQuery } from "../../services/Houses";

import "./HouseListing.css";

// Images imports
import { Bed } from "../../assets";

const HouseListing = (props) => {
  const filterAll = useFilterWithAllQuery(props);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/explore-residences/${id}`);
  };

  React.useEffect(() => {
    const getFilteredData = async () => {
      const data = await filterAll;
      setFilteredData(data);
      if (data) {
        setIsLoading(false);
      }
    };
    getFilteredData();

    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, [props, filterAll]);

  return (
    <>
      {!isLoading ? (
        <Box className="house_listing">
          <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            {filteredData?.data?.length > 0 ? (
              filteredData?.data?.map((data) => (
                <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
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
              ))
            ) : filteredData?.data?.length === 0 ? (
              <Typography>No Data Found</Typography>
            ) : (
              <Loader />
            )}
          </Grid>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HouseListing;
