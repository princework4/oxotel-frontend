import * as React from "react";

// MUI imports
import { Box, Button } from "@mui/material";

// Redux Imports
import { useSelector } from "react-redux";

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SwitchForm.css";

const SwitchForm = (props) => {
  const reduxToken = useSelector((state) => state.auth.token);
  const formRef = React.useRef(null);
  const handleSubmit = props.ObjData.handleSubmit;

  const checkLoggedIn = () => {
    if (reduxToken) {
      handleSubmit();
    } else {
      toast.error(
        `You must login first to reserve or schedule a meet with us.`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form className="switch_form" ref={formRef}>
        <Box className="form_content">
          {props.children}
          <Button
            onClick={() => {
              formRef.current.reportValidity();
              checkLoggedIn();
            }}
            variant="contained"
            color="primary"
            fullWidth
          >
            {props.ObjData.btn_text}
          </Button>
        </Box>
      </form>
    </>
  );
};

export default SwitchForm;
