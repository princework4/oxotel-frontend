import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import "./BenfitsCard.css";

const BenfitsCard = ({ data }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="benifit_card">
      <CardMedia
        component="img"
        height="140"
        image="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
        alt="green iguana"
        className="benefit_card_iamge"
      />
      <CardContent className="benifit_card-content">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="benifits_card_h5"
        >
          {data.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="benifits_card_p"
        >
          {data.description}
        </Typography>
        {/* <Button size="small" className="benifits_card_btn">
          Share
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default BenfitsCard;
