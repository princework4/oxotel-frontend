import * as React from "react";

// MUI imports
import { Box, Typography } from "@mui/material";

// Custom components imports
import ReadMoreLess from "../../components/ReadMoreLess/ReadMoreLess";
import HouseListing from "../../components/HouseListing/HouseListing";

import "./ExploreResidences.css";

const ExploreResidences = () => {
  return (
    <>
      <section className='explore_residences'>
        <Box className='wrapper'>
          <Typography variant='h2'>
            your second home in &nbsp;
            <Typography className='customize_heading'>mumbai</Typography>
          </Typography>
          <ReadMoreLess>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            accusamus incidunt, praesentium nulla repellat nesciunt asperiores
            ipsum consectetur inventore laboriosam ratione labore laborum, rem
            vel sint qui libero, explicabo odit. Nulla, est, iure blanditiis
            tempora et ut ratione molestiae beatae dignissimos dolor temporibus
            libero tempore. Quo porro iusto recusandae a? Totam, hic ducimus.
            Nobis temporibus, molestias doloribus debitis, recusandae
            consectetur qui rerum velit quisquam necessitatibus sint eligendi
            animi ullam ipsa eaque iusto voluptatem, eius nostrum quos quia.
            Voluptatem asperiores repellat accusamus pariatur esse, velit nulla,
            explicabo accusantium alias sint beatae rerum dolorem doloribus
            quisquam deleniti quae doloremque ad corrupti magnam!
          </ReadMoreLess>
          <HouseListing />
        </Box>
      </section>
    </>
  );
};

export default ExploreResidences;
