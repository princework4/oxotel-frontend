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

// Custom components imports
import ModalForm from "../ModalForm";
import * as Validation from "../../validation/Validation";

import "./SignUpForm.css";

const SignUpForm = (props) => {
  // const [open, setOpen] = React.useState(false);
  const [signUpdata, setSignUpData] = React.useState({
    userName: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [signUpdataErr, setSignUpdataErr] = React.useState({
    userNameErr: "",
    emailErr: "",
    mobileNumberErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });

  // const handleOpen = () => setOpen(true);
  const handleClose = () => props.setOpen(false);

  const handleCloseForm = () => {
    setSignUpData({
      userName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUpData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setSignUpdataErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const submitForm = () => {
    setSignUpData({
      userName: "",
      email: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    });
    handleClose();
  };

  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "userNameErr",
      Validation.validateUsername(signUpdata.userName)
    );
    handleFormFieldsErr("emailErr", Validation.validateEmail(signUpdata.email));
    handleFormFieldsErr(
      "mobileNumberErr",
      Validation.validateMobileNumber(signUpdata.mobileNumber)
    );
    handleFormFieldsErr(
      "passwordErr",
      Validation.validateDropdown(signUpdata.password)
    );
    handleFormFieldsErr(
      "confirmPasswordErr",
      Validation.validateDropdown(signUpdata.confirmPassword)
    );

    if (
      signUpdata.fullName !== "" &&
      signUpdata.email !== "" &&
      signUpdata.city !== "" &&
      signUpdata.locality !== "" &&
      signUpdata.duration !== ""
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
      <Box className="login">
        <Typography className="new_account">Create new account</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="userName"
            label="User Name *"
            variant="outlined"
            value={signUpdata.userName}
            onChange={handleChange}
          />
          {signUpdataErr.userNameErr ? (
            <FormHelperText error>{signUpdataErr.userNameErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            value={signUpdata.email}
            onChange={handleChange}
          />
          {signUpdataErr.emailErr ? (
            <FormHelperText error>{signUpdataErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="number"
            name="mobile"
            label="Mobile Number *"
            variant="outlined"
            value={signUpdata.mobileNumber}
            onChange={handleChange}
          />
          {signUpdataErr.mobileNumberErr ? (
            <FormHelperText error>
              {signUpdataErr.mobileNumberErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="password"
            label="Password *"
            variant="outlined"
            value={signUpdata.password}
            onChange={handleChange}
          />
          {signUpdataErr.passwordErr ? (
            <FormHelperText error>{signUpdataErr.passwordErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="confirmPassword"
            label="Confirm Password *"
            variant="outlined"
            value={signUpdata.confirmPassword}
            onChange={handleChange}
          />
          {signUpdataErr.confirmPasswordErr ? (
            <FormHelperText error>
              {signUpdataErr.confirmPasswordErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <Button
          className="login_btn"
          variant="contained"
          fullWidth
          onClick={handleSubmitForm}
        >
          SignUp
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;

// export default LogInForm;
