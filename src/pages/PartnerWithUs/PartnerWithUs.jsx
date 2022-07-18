import * as React from "react";
// MUI imports
import { Box, Grid, Button, Modal } from "@mui/material";
import "./PartnerWithUs.css";
import PartnerWithUsForm from "./PartnerWithUsForm";
import CloseIcon from "@mui/icons-material/Close";
// import Aos from "aos";

const PartnerWithUs = () => {
  const [open, setOpen] = React.useState(false);

  // useEffect(() => {
  //   AOS.init();
  //   AOS.refresh();
  // }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    minWidth: 300,
    borderRadius: "50px",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="partner_us_sec">
      <div className="wrapper">
        <div className="partner_us">
          <div className="partner_us_text">
            <h1>
              A Better way to <br />
              <span className="grow">Grow</span>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum et
              sunt nostrum possimus enim dicta sit culpa eligendi minima,
              expedita aut architecto officia repudiandae accusantium
              perspiciatis ex cumque adipisci perferendis.
            </p>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box className="close_icon_wrapper">
                    <Button onClick={handleClose} className="close_icon">
                      <CloseIcon />
                    </Button>
                  </Box>
                  <PartnerWithUsForm handleClose={handleClose} />
                </Box>
              </Modal>
              <Button className="hero_btn partner_btn" onClick={handleOpen}>
                Partner with us
              </Button>
              <Button className="hero_btn">About us</Button>
            </div>
          </div>
          <div className="partner_us_img">
            <img
              src="https://images.pexels.com/photos/6998462/pexels-photo-6998462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Partner with us oxtel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
