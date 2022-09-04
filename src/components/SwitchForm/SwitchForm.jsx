import * as React from "react";

// MUI imports
import { Box, Button, Modal} from "@mui/material";
import AuthForms from "../AuthForms";
import CloseIconCircle from "../CloseIconCircle";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SwitchForm.css";

const SwitchForm = (props) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const reduxToken = useSelector((state) => state.auth.token);
  const formRef = React.useRef(null);
  const handleSubmit = props.ObjData.handleSubmit;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // maxWidth: 400,
    // minWidth: 300,
    borderRadius: "50px",
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    p: 4,
  };

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
      handleOpen()
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
      <Box>
      {!reduxToken ? (
                    <>
                      <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className="login_signup"
                      >
                        <Box sx={style}>
                          <Box className="close_icon_wrapper">
                            <CloseIconCircle handleClose={handleClose} />
                          </Box>
                          <AuthForms handleClose={handleClose} />
                        </Box>
                      </Modal>
                    </>
                  ) : (
                    null
                  )}
      </Box>
    </>
  );
};

export default SwitchForm;
