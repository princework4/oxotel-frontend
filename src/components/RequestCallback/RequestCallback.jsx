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

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom components imports
import ModalForm from "../ModalForm";
import * as Validation from "../../validation/Validation";

// Custom RTK hooks
import { useAddNewRequestCallbackMutation } from "../../services/Forms";
import {
  useGetListOfCityQuery,
  useGetListOfLocalityQuery,
  useGetListOfDurationQuery,
} from "../../services/DropDown";

import "./RequestCallback.css";

const RequestCallback = () => {
  const [open, setOpen] = React.useState(false);
  const [requestCallback, setRequestCallback] = React.useState({
    full_name: "",
    email: "",
    user_type: "student",
    city: "",
    locality: "",
    duration: "",
  });
  const [requestCallbackErr, setRequestCallbackErr] = React.useState({
    full_nameErr: "",
    emailErr: "",
    cityErr: "",
    localityErr: "",
    durationErr: "",
  });
  const [addRequestCallback, { isSuccess }] =
    useAddNewRequestCallbackMutation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseForm = () => {
    setRequestCallback({
      full_name: "",
      email: "",
      user_type: "student",
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
    addRequestCallback(requestCallback);

    if (isSuccess) {
      setRequestCallback({
        full_name: "",
        email: "",
        user_type: "student",
        city: "",
        locality: "",
        duration: "",
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
      "full_nameErr",
      Validation.validateFullName(requestCallback.full_name),
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
      requestCallback.full_name !== "" &&
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
                name='full_name'
                label='Full Name *'
                variant='outlined'
                value={requestCallback.full_name}
                onChange={handleChange}
              />
              {requestCallbackErr.full_nameErr ? (
                <FormHelperText error>
                  {requestCallbackErr.full_nameErr}
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
                name='user_type'
                value={requestCallback.user_type}
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
