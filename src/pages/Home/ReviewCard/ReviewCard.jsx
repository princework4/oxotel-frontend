import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Divider from "@mui/material/Divider";
import "./ReviewCard.css";
const ReviewCard = (props) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex" }} className="review_card_main">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h5"
            className="review_card_main_h5"
          >
            {props.description}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
            className="review_card_main_p"
          >
            {props.name}
          </Typography>
        </CardContent>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box className="review_card">
        <Typography component="div" variant="h2" className="review_card_num">
          5
        </Typography>
        <Box className="review_card_stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </Box>
        <Typography component="div" variant="p" className="review_card_p">
          Review
        </Typography>
      </Box>
    </Card>
  );
};

export default ReviewCard;
