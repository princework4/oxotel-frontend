import CloseIcon from "@mui/icons-material/Close";
import { Box, Button } from "@mui/material";
import "./CloseIconCircle.css";

const CloseIconCircle = (props) => {
  return (
    <Box className="close_icon_wrapper">
      <Button onClick={props.handleClose} className="close_icon">
        <CloseIcon />
      </Button>
    </Box>
  );
};
export default CloseIconCircle;
