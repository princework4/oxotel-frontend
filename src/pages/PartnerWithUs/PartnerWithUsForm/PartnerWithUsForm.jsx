import * as React from "react";

// MUI imports
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  TextField,
  Typography,
} from "@mui/material";

import { ToastContainer, toast } from "react-toastify";

// import ModalForm from "../ModalForm";
import * as Validation from "../../../validation/Validation";

// CSS import
import "./PartnerWithUsForm.css";

// Services Import
import { useAddPartnerWithUsMutation } from "../../../services/Forms";

const PartnerWithUsForm = (props) => {
  const [partnerWithUsFormdata, setPartnerWithUsFormData] = React.useState({
    full_name: "",
    email: "",
    mobile_number: "",
    message: "",
  });

  const [addPartnerWithUs] = useAddPartnerWithUsMutation();
  const [partnerWithUsFormdataErr, setPartnerWithUsFormdataErr] =
    React.useState({
      full_nameErr: "",
      emailErr: "",
      mobile_numberErr: "",
    });

  const handleClose = () => props.setOpen(false);

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

  const submitForm = async () => {
    const data = await addPartnerWithUs(partnerWithUsFormdata);
    console.log("data", data);

    if (data?.data?.success) {
      setPartnerWithUsFormData({
        full_name: "",
        email: "",
        mobile_number: "",
        message: "",
      });
      handleClose();
      toast.success(
        `Response has been submitted successfully! We will get back to you shortly.`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    } else {
      toast.error(`${data?.data?.error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleSubmitForm = () => {
    let formIsValid = true;
    if (
      Validation.validateFullName(partnerWithUsFormdata.full_name).length > 0
    ) {
      handleFormFieldsErr(
        "full_nameErr",
        Validation.validateFullName(partnerWithUsFormdata.full_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("full_nameErr", "");
    }

    if (Validation.validateEmail(partnerWithUsFormdata.email).length > 0) {
      handleFormFieldsErr(
        "emailErr",
        Validation.validateEmail(partnerWithUsFormdata.email)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("emailErr", "");
    }

    if (
      Validation.validateEmail(partnerWithUsFormdata.mobile_number).length > 0
    ) {
      handleFormFieldsErr(
        "mobile_numberErr",
        Validation.validateMobileNumber(partnerWithUsFormdata.mobile_number)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("mobile_numberErr", "");
    }
    // handleFormFieldsErr(
    //   "full_nameErr",
    //   Validation.validateFullName(partnerWithUsFormdata.full_name)
    // );
    // handleFormFieldsErr(
    //   "emailErr",
    //   Validation.validateEmail(partnerWithUsFormdata.email)
    // );
    // handleFormFieldsErr(
    //   "mobileNumberErr",
    //   Validation.validateMobileNumber(partnerWithUsFormdata.mobile_number)
    // );

    // if (
    //   partnerWithUsFormdata.full_name !== "" &&
    //   partnerWithUsFormdata.email !== "" &&
    //   partnerWithUsFormdata.mobile_number !== ""
    // ) {
    //   submitForm();
    // }

    if (formIsValid) {
      submitForm();
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
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
            name="full_name"
            label="Full Name *"
            variant="outlined"
            value={partnerWithUsFormdata.full_name}
            onChange={handleChange}
          />
          {partnerWithUsFormdataErr.full_nameErr ? (
            <FormHelperText error>
              {partnerWithUsFormdataErr.full_nameErr}
            </FormHelperText>
          ) : null}
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
          {partnerWithUsFormdataErr.emailErr ? (
            <FormHelperText error>
              {partnerWithUsFormdataErr.emailErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="number"
            name="mobile_number"
            label="Mobile Number *"
            variant="outlined"
            value={partnerWithUsFormdata.mobileNumber}
            onChange={handleChange}
          />
          {partnerWithUsFormdataErr.mobile_numberErr ? (
            <FormHelperText error>
              {partnerWithUsFormdataErr.mobile_numberErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="message"
            multiline
            rows={4}
            label="Any Message"
            variant="outlined"
            value={partnerWithUsFormdata.message}
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
