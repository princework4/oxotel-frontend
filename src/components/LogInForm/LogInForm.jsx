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
} from "@mui/material";

// Custom components imports
import ModalForm from "../ModalForm";
import * as Validation from "../../validation/Validation";

import "./LogInForm.css";

const LogInForm = (props) => {
  const [open, setOpen] = React.useState(false);
  const [logInData, setLogInData] = React.useState({
    email: "",
    password: "",
  });
  const [logInDataErr, setLogInDataErr] = React.useState({
    emailErr: "",
    passwordErr: "",
  });

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const handleClose = () => props.setOpen(false);

  const handleCloseForm = () => {
    setLogInData({
      email: "",
      password: "",
    });
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogInData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setLogInDataErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const submitForm = () => {
    alert("logged in");
    setLogInData({
      email: "",
      password: "",
    });
    handleClose();
    // alert("logged in");
  };

  const handleSubmitForm = () => {
    handleFormFieldsErr("emailErr", Validation.validateEmail(logInData.email));
    handleFormFieldsErr(
      "passwordErr",
      Validation.validatePassword(logInData.password)
    );

    if (logInData.email !== "" && logInData.password !== "") {
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
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            value={logInData.email}
            onChange={handleChange}
          />
          {logInDataErr.emailErr ? (
            <FormHelperText error>{logInDataErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="password"
            name="password"
            label="Password *"
            variant="outlined"
            value={logInData.password}
            onChange={handleChange}
          />
          {logInDataErr.passwordErr ? (
            <FormHelperText error>{logInDataErr.passwordErr}</FormHelperText>
          ) : null}
        </FormControl>
        <Button
          className="login_btn"
          variant="contained"
          fullWidth
          onClick={handleSubmitForm}
        >
          LogIn
        </Button>
      </Box>
    </>
  );
};

export default LogInForm;

// export default LogInForm;
