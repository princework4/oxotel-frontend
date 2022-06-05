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
    let isFormValid = true;
    const alphaCharRegex = /^[a-zA-Z ]*$/;
    const emailRegexPattern = new RegExp(
      /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
    );
    const phoneNo = /^\d{10}$/;

    if (!scheduleMeet.fullName.trim()) {
      isFormValid = false;
      handleFormFieldsErr("fullNameErr", "*This field is required");
    } else if (!scheduleMeet.fullName.match(alphaCharRegex)) {
      isFormValid = false;
      handleFormFieldsErr(
        "fullNameErr",
        "*Please enter alphabet characters only",
      );
    } else if (scheduleMeet.fullName.length <= 3) {
      isFormValid = false;
      handleFormFieldsErr("fullNameErr", "*Full name is too short");
    } else {
      handleFormFieldsErr("fullNameErr", "");
    }

    if (!scheduleMeet.mobileNumber.trim()) {
      isFormValid = false;
      handleFormFieldsErr("mobileNumberErr", "*This field is required");
    } else if (!scheduleMeet.mobileNumber.match(phoneNo)) {
      isFormValid = false;
      handleFormFieldsErr(
        "mobileNumberErr",
        "*Please enter valid mobile number",
      );
    } else {
      handleFormFieldsErr("mobileNumberErr", "");
    }

    if (!scheduleMeet.email.trim()) {
      isFormValid = false;
      handleFormFieldsErr("emailErr", "*This field is required");
    } else if (!emailRegexPattern.test(scheduleMeet.email)) {
      isFormValid = false;
      handleFormFieldsErr("emailErr", "*Please enter valid email-Id");
    } else {
      handleFormFieldsErr("emailErr", "");
    }

    if (scheduleMeet.duration === "") {
      isFormValid = false;
      handleFormFieldsErr("durationErr", "*This field is required");
    } else {
      handleFormFieldsErr("durationErr", "");
    }

    if (date === "") {
      isFormValid = false;
      handleFormFieldsErr("preferredDateErr", "*This field is required");
    } else {
      handleFormFieldsErr("preferredDateErr", "");
    }

    if (time === "" || time === null) {
      isFormValid = false;
      handleFormFieldsErr("preferredTimeErr", "*This field is required");
    } else {
      handleFormFieldsErr("preferredTimeErr", "");
    }

    if (isFormValid) {
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
