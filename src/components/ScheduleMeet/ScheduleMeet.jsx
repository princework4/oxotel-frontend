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
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom components imports
import SwitchForm from "../SwitchForm/SwitchForm";
import * as Validation from "../../validation/Validation";

// Custom RTK hooks
import { useAddNewScheduleMeetMutation } from "../../services/Forms";

import "./ScheduleMeet.css";

const ScheduleMeet = () => {
  const [scheduleMeet, setScheduleMeet] = React.useState({
    full_name: "",
    mobile_number: "",
    user_type: "student",
    email: "",
    duration: "",
  });
  const [dateTimeValue, setDateTimeValue] = React.useState(new Date());

  const [scheduleMeetErr, setScheduleMeetErr] = React.useState({
    full_nameErr: "",
    mobile_numberErr: "",
    emailErr: "",
    durationErr: "",
    preferredDateTimeErr: "",
  });
  const [addScheduleMeet] = useAddNewScheduleMeetMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setScheduleMeet((preVal) => {
      return {
        ...preVal,
        [name]: value,
        preferred_date: dateTimeValue?.toLocaleDateString(),
        preferred_time: dateTimeValue?.toLocaleTimeString(),
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

  const submitForm = async () => {
    const data = await addScheduleMeet(scheduleMeet);
    console.log("scheduleMeet", scheduleMeet);

    if (data?.data?.success) {
      setScheduleMeet({
        full_name: "",
        mobile_number: "",
        user_type: "student",
        email: "",
        duration: "",
      });
      setDateTimeValue(new Date());
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
        }
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
      Validation.validateFullName(scheduleMeet.full_name)
    );
    handleFormFieldsErr(
      "mobile_numberErr",
      Validation.validateMobileNumber(scheduleMeet.mobile_number)
    );
    handleFormFieldsErr(
      "emailErr",
      Validation.validateEmail(scheduleMeet.email)
    );
    handleFormFieldsErr(
      "durationErr",
      Validation.validateDropdown(scheduleMeet.duration)
    );
    handleFormFieldsErr(
      "preferredDateTimeErr",
      Validation.validateDateTime(scheduleMeet.dateTimeValue)
    );

    if (
      scheduleMeet.full_name !== "" &&
      scheduleMeet.mobile_number !== "" &&
      scheduleMeet.email !== "" &&
      scheduleMeet.duration !== "" &&
      dateTimeValue !== ""
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
      <SwitchForm ObjData={objData}>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="full_name"
            label="Full Name *"
            variant="outlined"
            value={scheduleMeet.full_name}
            onChange={handleChange}
          />
          {scheduleMeetErr.full_nameErr ? (
            <FormHelperText error>
              {scheduleMeetErr.full_nameErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="tel"
            name="mobile_number"
            label="Mobile Number *"
            variant="outlined"
            value={scheduleMeet.mobile_number}
            onChange={handleChange}
          />
          {scheduleMeetErr.mobile_numberErr ? (
            <FormHelperText error>
              {scheduleMeetErr.mobile_numberErr}
            </FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <FormLabel id="demo-row-radio-buttons-group-label">I'm a</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            className="residence_type"
            name="user_type"
            value={scheduleMeet.user_type}
            onChange={handleChange}
          >
            <FormControlLabel
              value="student"
              control={<Radio />}
              label="Student"
            />
            <FormControlLabel
              value="working_professional"
              control={<Radio />}
              label="Working Professional"
            />
          </RadioGroup>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="email"
            name="email"
            label="Email *"
            variant="outlined"
            value={scheduleMeet.email}
            onChange={handleChange}
          />
          {scheduleMeetErr.emailErr ? (
            <FormHelperText error>{scheduleMeetErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Duration *</InputLabel>
          <Select
            name="duration"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={scheduleMeet.duration}
            label="Duration"
            onChange={handleChange}
          >
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
          className="preferred_date_time"
          fullWidth
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateTimePicker
              label="Preferred Date and Time"
              value={dateTimeValue}
              onChange={(newValue) => setDateTimeValue(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {scheduleMeetErr.preferredDateTimeErr ? (
            <FormHelperText error>
              {scheduleMeetErr.preferredDateTimeErr}
            </FormHelperText>
          ) : null}
        </FormControl>
      </SwitchForm>
    </>
  );
};

export default ScheduleMeet;
