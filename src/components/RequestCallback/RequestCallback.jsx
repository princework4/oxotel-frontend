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

import "./RequestCallback.css";

const RequestCallback = () => {
  const [open, setOpen] = React.useState(false);
  const [requestCallback, setRequestCallback] = React.useState({
    fullName: "",
    email: "",
    userType: "student",
    city: "",
    locality: "",
    duration: "",
  });
  const [requestCallbackErr, setRequestCallbackErr] = React.useState({
    fullNameErr: "",
    emailErr: "",
    cityErr: "",
    localityErr: "",
    durationErr: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseForm = () => {
    setRequestCallback({
      fullName: "",
      email: "",
      userType: "student",
      city: "",
      locality: "",
      duration: "",
    });
    handleClose();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setRequestCallback((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setRequestCallbackErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const submitForm = () => {
    setRequestCallback({
      fullName: "",
      email: "",
      userType: "student",
      city: "",
      locality: "",
      duration: "",
    });
    handleClose();
  };

  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "fullNameErr",
      Validation.validateFullName(requestCallback.fullName),
    );
    handleFormFieldsErr(
      "emailErr",
      Validation.validateEmail(requestCallback.email),
    );
    handleFormFieldsErr(
      "cityErr",
      Validation.validateDropdown(requestCallback.city),
    );
    handleFormFieldsErr(
      "localityErr",
      Validation.validateDropdown(requestCallback.locality),
    );
    handleFormFieldsErr(
      "durationErr",
      Validation.validateDropdown(requestCallback.duration),
    );

    if (
      requestCallback.fullName !== "" &&
      requestCallback.email !== "" &&
      requestCallback.city !== "" &&
      requestCallback.locality !== "" &&
      requestCallback.duration !== ""
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
      <Button
        variant='contained'
        size='small'
        color='primary'
        onClick={handleOpen}>
        request callback
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box className='mode_pop_up'>
          <ModalForm ObjData={objData}>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type='text'
                name='fullName'
                label='Full Name *'
                variant='outlined'
                value={requestCallback.fullName}
                onChange={handleChange}
              />
              {requestCallbackErr.fullNameErr ? (
                <FormHelperText error>
                  {requestCallbackErr.fullNameErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <TextField
                type='email'
                name='email'
                label='Email *'
                variant='outlined'
                value={requestCallback.email}
                onChange={handleChange}
              />
              {requestCallbackErr.emailErr ? (
                <FormHelperText error>
                  {requestCallbackErr.emailErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <FormLabel id='demo-row-radio-buttons-group-label'>
                I'm a
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                className='residence_type'
                name='userType'
                value={requestCallback.userType}
                onChange={handleChange}>
                <FormControlLabel
                  value='student'
                  control={<Radio />}
                  label='Student'
                />
                <FormControlLabel
                  value='working_professional'
                  control={<Radio />}
                  label='Working Professional'
                />
              </RadioGroup>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <InputLabel id='demo-simple-select-label'>City</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='city'
                value={requestCallback.city}
                label='City'
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {requestCallbackErr.cityErr ? (
                <FormHelperText error>
                  {requestCallbackErr.cityErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <InputLabel id='demo-simple-select-label'>Locality</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='locality'
                value={requestCallback.locality}
                label='Locality'
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {requestCallbackErr.localityErr ? (
                <FormHelperText error>
                  {requestCallbackErr.localityErr}
                </FormHelperText>
              ) : null}
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
              <InputLabel id='demo-simple-select-label'>Duration</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                name='duration'
                value={requestCallback.duration}
                label='Duration'
                onChange={handleChange}>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              {requestCallbackErr.durationErr ? (
                <FormHelperText error>
                  {requestCallbackErr.durationErr}
                </FormHelperText>
              ) : null}
            </FormControl>
          </ModalForm>
        </Box>
      </Modal>
    </>
  );
};

export default RequestCallback;
