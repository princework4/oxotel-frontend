import { Typography } from "@mui/material";
import * as React from "react";
import "./ReadMoreLess.css";

const ReadMoreLess = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = React.useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <Typography component='p' className='text'>
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className='read-or-hide'>
          {isReadMore ? " Read more...." : " Read less"}
        </span>
      </Typography>
    </>
  );
};

export default ReadMoreLess;
