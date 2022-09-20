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
  Pagination,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Routing imports
import { useNavigate } from "react-router-dom";

// Custom components imports
import RequestCallback from "../RequestCallback";
import Loader from "../Loader";

// Custom RTK hooks
import {
  useFilterWithAllQuery,
  useGetListOfHousesQuery,
} from "../../services/Houses";

import "./HouseListing.css";

// Images imports
import { Bed } from "../../assets";
import { PageviewSharp } from "@mui/icons-material";

const HouseListing = (props) => {
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState([]);
  const filterAll = useFilterWithAllQuery(props);
  const getHousesList = useGetListOfHousesQuery(page);
  const [filteredData, setFilteredData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  let navigate = useNavigate();

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleClick = (id) => {
    navigate(`/explore-residences/${id}`);
  };

  React.useEffect(() => {
    const getFilteredData = async () => {
      const data = await filterAll;
      setFilteredData(data);
      // if (data) {
      //   setIsLoading(false);
      // }
    };
    getFilteredData();

    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 5000);
  }, [props]);

  React.useEffect(() => {
    setData(getHousesList.data);
  }, [page]);

  const renderCard = (data) => {
    return (<Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
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
              <Typography className="house_starts_from" variant="h6">
                starts from
              </Typography>
              <Typography variant="h5">₹{data.price}/mo*</Typography>
            </Box>
            <CardActions>
              <RequestCallback />
            </CardActions>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>)
 }
  return (
    <>
      {data?.length > 0 ? (
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
                renderCard(data)
              ))
            ) : !filteredData?.data?.length > 0 && data?.length > 0 ? (
              data?.map(item => renderCard(item))
            ) : (
              <Typography>No Data Found!!!!</Typography>
            )}
          </Grid>
          <Stack spacing={1} mt={4}>
            <Pagination count={10} page={page} onChange={handleChange} />
          </Stack>
        </Box>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HouseListing;
