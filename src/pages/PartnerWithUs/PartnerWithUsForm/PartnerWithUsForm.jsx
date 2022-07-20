import * as React from "react";

// MUI imports
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";

// import ModalForm from "../ModalForm";
import * as Validation from "../../../validation/Validation";

// CSS import
import "./PartnerWithUsForm.css";

// Services Import
import { usePartnerWithUsMutation } from "../../../services/Forms";

const PartnerWithUsForm = (props) => {
  // const [open, setOpen] = React.useState(false);
  const [partnerWithUsFormdata, setPartnerWithUsFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    partnershipType: "",
    messageText: "",
  });

  const [addPartnerWithUs, { isSuccess }] =
    usePartnerWithUsMutation();
  const [partnerWithUsFormdataErr, setPartnerWithUsFormdataErr] =
    React.useState({
      firstNameErr: "",
      emailErr: "",
      mobileNumberErr: "",
    });

  // const handleOpen = () => setOpen(true);
  const handleClose = () => props.setOpen(false);

  const handleCloseForm = () => {
    setPartnerWithUsFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobileNumber: "",
      partnershipType: "",
      messageText: "",
    });
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPartnerWithUsFormData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setPartnerWithUsFormdataErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  // const submitForm = () => {
  //   setPartnerWithUsFormData({
  //     firstName: "",
  //     lastName: "",
  //     email: "",
  //     mobileNumber: "",
  //     partnershipType: "",
  //     messageText: "",
  //   });
  //   handleClose();
  // };

  const submitForm = () => {
    addPartnerWithUs(partnerWithUsFormdata);

    if (isSuccess) {
      setPartnerWithUsFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        partnershipType: "",
        messageText: "",
      });
      handleClose();
      toast.success(
        `Response has been submitted successfully! We will get back to you shortly.`,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    } else {
      toast.error(`Failed to submit the response. Please try again later.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "fristNameErr",
      Validation.validateUsername(partnerWithUsFormdata.firstName)
    );
    handleFormFieldsErr(
      "emailErr",
      Validation.validateEmail(partnerWithUsFormdata.email)
    );
    handleFormFieldsErr(
      "mobileNumberErr",
      Validation.validateMobileNumber(partnerWithUsFormdata.mobileNumber)
    );

    if (
      partnerWithUsFormdata.firstName !== "" &&
      partnerWithUsFormdata.email !== "" &&
      partnerWithUsFormdata.mobileNumber !== ""
    ) {
      submitForm();
    }
  };

  const objData = {
    h5: "Request Callback",
    handleClose: handleCloseForm,
    handleSubmit: handleSubmitForm,
    btn_text: "SUBMIT",
  };

  return (
    <>
    <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box className="login">
        <Typography className="new_account">Partner with us</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="firstName"
            label="First Name *"
            variant="outlined"
            value={partnerWithUsFormdata.firstName}
            onChange={handleChange}
          />
          {setPartnerWithUsFormdataErr.userNameErr ? (
            <FormHelperText error>
              {setPartnerWithUsFormdataErr.firstNameErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="lastName"
            label="Last Name *"
            variant="outlined"
            value={partnerWithUsFormdata.lastName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            value={partnerWithUsFormdata.email}
            onChange={handleChange}
          />
          {setPartnerWithUsFormdataErr.emailErr ? (
            <FormHelperText error>
              {setPartnerWithUsFormdataErr.emailErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="number"
            name="mobile"
            label="Mobile Number *"
            variant="outlined"
            value={partnerWithUsFormdata.mobileNumber}
            onChange={handleChange}
          />
          {setPartnerWithUsFormdataErr.mobileNumberErr ? (
            <FormHelperText error>
              {setPartnerWithUsFormdataErr.mobileNumberErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="messageText"
            multiline
            rows={4}
            label="Any Message"
            variant="outlined"
            value={partnerWithUsFormdata.messageText}
            onChange={handleChange}
          />
        </FormControl>

        <Button
          className="login_btn"
          variant="contained"
          fullWidth
          onClick={handleSubmitForm}
        >
          Let's Grow
        </Button>
      </Box>
    </>
  );
};

export default PartnerWithUsForm;

// export default LogInForm;
