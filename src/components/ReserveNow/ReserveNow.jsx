import * as React from "react";

// MUI imports
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Custom components imports
import SwitchForm from "../SwitchForm/SwitchForm";
import * as Validation from "../../validation/Validation";

import "./ReserveNow.css";

const ReserveNow = () => {
  const [reserveNow, setReserveNow] = React.useState({
    fullName: "",
    mobileNumber: "",
    userType: "student",
    email: "",
    occupancy: "",
    gender: "",
  });
  const [date, setDate] = React.useState(new Date());
  const [reserveNowErr, setReserveNowErr] = React.useState({
    fullNameErr: "",
    mobileNumberErr: "",
    emailErr: "",
    occupancyErr: "",
    genderErr: "",
    moveInDateErr: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setReserveNow((preVal) => {
      return {
        ...preVal,
        [name]: value,
        moveInDate: date,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setReserveNowErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const submitForm = () => {
    setReserveNow({
      fullName: "",
      mobileNumber: "",
      userType: "student",
      email: "",
      occupancy: "",
      gender: "",
    });
    setDate(new Date());
  };

  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "fullNameErr",
      Validation.validateFullName(reserveNow.fullName),
    );
    handleFormFieldsErr(
      "mobileNumberErr",
      Validation.validateMobileNumber(reserveNow.mobileNumber),
    );
    handleFormFieldsErr("emailErr", Validation.validateEmail(reserveNow.email));
    handleFormFieldsErr(
      "occupancyErr",
      Validation.validateDropdown(reserveNow.occupancy),
    );
    handleFormFieldsErr(
      "genderErr",
      Validation.validateDropdown(reserveNow.gender),
    );
    handleFormFieldsErr("moveInDateErr", Validation.validateDate(date));

    if (
      reserveNow.fullName !== "" &&
      reserveNow.mobileNumber !== "" &&
      reserveNow.email !== "" &&
      reserveNow.occupancy !== "" &&
      reserveNow.gender !== "" &&
      reserveNow.moveInDate !== ""
    ) {
      submitForm();
    }
  };

  const objData = {
    handleSubmit: handleSubmitForm,
    btn_text: "RESERVE NOW",
  };

  return (
    <>
      <SwitchForm ObjData={objData}>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type='text'
            name='fullName'
            label='Full Name *'
            variant='outlined'
            value={reserveNow.fullName}
            onChange={handleChange}
          />
          {reserveNowErr.fullNameErr ? (
            <FormHelperText error>{reserveNowErr.fullNameErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type='text'
            name='mobileNumber'
            label='Mobile Number *'
            variant='outlined'
            value={reserveNow.mobileNumber}
            onChange={handleChange}
          />
          {reserveNowErr.mobileNumberErr ? (
            <FormHelperText error>
              {reserveNowErr.mobileNumberErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <FormLabel id='demo-row-radio-buttons-group-label'>I'm a</FormLabel>
          <RadioGroup
            row
            aria-labelledby='demo-row-radio-buttons-group-label'
            className='residence_type'
            name='userType'
            value={reserveNow.userType}
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
          <TextField
            type='email'
            name='email'
            label='Email *'
            variant='outlined'
            value={reserveNow.email}
            onChange={handleChange}
          />
          {reserveNowErr.emailErr ? (
            <FormHelperText error>{reserveNowErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id='demo-simple-select-label'>Occupancy *</InputLabel>
          <Select
            name='occupancy'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={reserveNow.occupancy}
            label='Occupancy'
            onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {reserveNowErr.occupancyErr ? (
            <FormHelperText error>{reserveNowErr.occupancyErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id='demo-simple-select-label'>Gender *</InputLabel>
          <Select
            name='gender'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={reserveNow.gender}
            label='Gender'
            onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          {reserveNowErr.genderErr ? (
            <FormHelperText error>{reserveNowErr.genderErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className='move_in_date'
          fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disablePast
              label='Move-in Date *'
              openTo='year'
              views={["year", "month", "day"]}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {reserveNowErr.moveInDateErr ? (
            <FormHelperText error>{reserveNowErr.moveInDateErr}</FormHelperText>
          ) : null}
        </FormControl>
      </SwitchForm>
    </>
  );
};

export default ReserveNow;
