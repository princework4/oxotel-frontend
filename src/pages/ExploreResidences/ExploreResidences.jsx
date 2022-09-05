import * as React from "react";

// MUI imports
import { Box, Typography } from "@mui/material";

// AOS imports
import AOS from "aos";

// Custom components imports
import Filter from "../../components/Filter";
import ReadMoreLess from "../../components/ReadMoreLess/ReadMoreLess";
import HouseListing from "../../components/HouseListing/HouseListing";

import "./ExploreResidences.css";

const ExploreResidences = () => {
  const [sortByPrice, setSortByPrice] = React.useState("");
  const [filterByGender, setFilterByGender] = React.useState("");
  const [filterBySearch, setFilterBySearch] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "sortByPrice") {
      setSortByPrice(value);
    } else if (name === "filterByGender") {
      setFilterByGender(value);
    } else if (name === "search") {
      setFilterBySearch(value);
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <section
        className="explore_residences"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <Box className="wrapper">
          <Box className="explore_residences_wrapper">
            <Filter
              handleChange={handleChange}
              sortByPrice={sortByPrice}
              filterByGender={filterByGender}
              filterBySearch={filterBySearch}
            />
            <Box className="cards_wrapper">
              <Typography variant="h2">
                your second home in &nbsp;
                <Typography className="customize_heading">mumbai</Typography>
              </Typography>
              <ReadMoreLess>
                We at oxotel are the connecting bridge between owners and
                accommodation seekers by providing the best in class facilities
                to the tenants as well as providing timely payments to the
                owners. We are a leading Cloud Kitchen with the brand name of
                ‘OXOTEL LIVING' Have a professional Logistics and Packing and
                moving team. We run a Showroom of Readymade Garments and Other
                accessories. We have a professional Logistics and Packing and
                moving team. We run a Showroom of Readymade Garments and Other
                accessories. We provide best in class hospitality and house
                keeping services.
              </ReadMoreLess>
              <HouseListing
                sortByPrice={sortByPrice}
                filterByGender={filterByGender}
                filterBySearch={filterBySearch}
              />
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default ExploreResidences;
