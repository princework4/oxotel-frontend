import * as React from "react";

//  MUI imports
import { Box } from "@mui/material";

import "./DetailedExploreResidences.css";

const DetailedExploreResidences = () => {
  const datas = {
    imgs: [
      "https://dummyimage.com/600x400/4e2aeb/4e2aeb",
      "https://dummyimage.com/600x400/2aeb47/2aeb47",
      "https://dummyimage.com/600x400/000/000",
      "https://dummyimage.com/600x400/1fd98b/1fd98b",
      "https://dummyimage.com/600x400/c7e833/c7e833",
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
            {datas.imgs.map((img) => {
              return <Box component='img' src={img} />;
            })}
          </Box>
        </Box>
      </section>
    </>
  );
};

export default DetailedExploreResidences;
