import * as React from "react";
// MUI imports
import { Box, Button, Modal } from "@mui/material";
import "./PartnerWithUs.css";
import PartnerWithUsForm from "./PartnerWithUsForm";
import CloseIcon from "@mui/icons-material/Close";
import AOS from "aos";
import { useNavigate } from "react-router-dom";

const PartnerWithUs = () => {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
    window.scroll(0, 0);
  }, []);

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
    <div className="partner_us_sec" data-aos="fade-up" data-aos-duration="1500">
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
              <Button
                className="hero_btn"
                onClick={() => navigate("/about-us")}
              >
                About us
              </Button>
            </div>
          </div>
          <div className="partner_us_img">
            <img
              src="https://cdn.pixabay.com/photo/2015/02/25/23/13/solidarity-649713_960_720.jpg"
              alt="Partner with us oxtel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerWithUs;
