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
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

// Custom components imports
import SwitchForm from "../SwitchForm/SwitchForm";
import * as Validation from "../../validation/Validation";

import "./ScheduleMeet.css";

const ScheduleMeet = () => {
  const [scheduleMeet, setScheduleMeet] = React.useState({
    fullName: "",
    mobileNumber: "",
    userType: "student",
    email: "",
    duration: "",
  });
  const [date, setDate] = React.useState(new Date());
  const [time, setTime] = React.useState(null);

  const [scheduleMeetErr, setScheduleMeetErr] = React.useState({
    fullNameErr: "",
    mobileNumberErr: "",
    emailErr: "",
    durationErr: "",
    preferredDateErr: "",
    preferredTimeErr: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setScheduleMeet((preVal) => {
      return {
        ...preVal,
        [name]: value,
        preferredDate: date,
        preferredTime: time,
      };
    });
  };

  const handleFormFieldsErr = (errField, message) => {
    setScheduleMeetErr((prevState) => {
      return {
        ...prevState,
        [errField]: message,
      };
    });
  };

  const submitForm = () => {
    console.log("schedule meet", scheduleMeet);
    setScheduleMeet({
      fullName: "",
      mobileNumber: "",
      userType: "student",
      email: "",
      duration: "",
    });
    setDate(new Date());
    setTime(null);
  };

  const handleSubmitForm = () => {
    handleFormFieldsErr(
      "fullNameErr",
      Validation.validateFullName(scheduleMeet.fullName),
    );
    handleFormFieldsErr(
      "mobileNumberErr",
      Validation.validateMobileNumber(scheduleMeet.mobileNumber),
    );
    handleFormFieldsErr(
      "emailErr",
      Validation.validateEmail(scheduleMeet.email),
    );
    handleFormFieldsErr(
      "durationErr",
      Validation.validateDropdown(scheduleMeet.duration),
    );
    handleFormFieldsErr(
      "preferredDateErr",
      Validation.validateDate(scheduleMeet.date),
    );
    handleFormFieldsErr("preferredTimeErr", Validation.validateTime(time));

    if (
      scheduleMeet.fullName !== "" &&
      scheduleMeet.mobileNumber !== "" &&
      scheduleMeet.email !== "" &&
      scheduleMeet.duration !== "" &&
      date !== "" &&
      time !== ""
    ) {
      submitForm();
    }
  };

  const objData = {
    handleSubmit: handleSubmitForm,
    btn_text: "SCHEDULE A MEET",
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
            value={scheduleMeet.fullName}
            onChange={handleChange}
          />
          {scheduleMeetErr.fullNameErr ? (
            <FormHelperText error>{scheduleMeetErr.fullNameErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type='tel'
            name='mobileNumber'
            label='Mobile Number *'
            variant='outlined'
            value={scheduleMeet.mobileNumber}
            onChange={handleChange}
          />
          {scheduleMeetErr.mobileNumberErr ? (
            <FormHelperText error>
              {scheduleMeetErr.mobileNumberErr}
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
            value={scheduleMeet.userType}
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
            value={scheduleMeet.email}
            onChange={handleChange}
          />
          {scheduleMeetErr.emailErr ? (
            <FormHelperText error>{scheduleMeetErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id='demo-simple-select-label'>Duration *</InputLabel>
          <Select
            name='duration'
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={scheduleMeet.duration}
            label='Duration'
            onChange={handleChange}>
            <MenuItem value={"less_than_3_months"}>Less than 3 months</MenuItem>
            <MenuItem value={"3-6_months"}>3 - 6 months</MenuItem>
            <MenuItem value={"more_than_6_months"}>More than 6 months</MenuItem>
          </Select>
          {scheduleMeetErr.durationErr ? (
            <FormHelperText error>{scheduleMeetErr.durationErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className='preferred_date'
          fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disablePast
              label='Preferred Date *'
              openTo='year'
              views={["year", "month", "day"]}
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {scheduleMeetErr.preferredDateErr ? (
            <FormHelperText error>
              {scheduleMeetErr.preferredDateErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className='preferred_time'
          fullWidth>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <TimePicker
              label='Prefered Time *'
              value={time}
              onChange={(newValue) => setTime(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {scheduleMeetErr.preferredTimeErr ? (
            <FormHelperText error>
              {scheduleMeetErr.preferredTimeErr}
            </FormHelperText>
          ) : null}
        </FormControl>
      </SwitchForm>
    </>
  );
};

export default ScheduleMeet;
