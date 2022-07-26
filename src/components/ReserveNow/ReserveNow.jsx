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

// External library imports
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom components imports
import SwitchForm from "../SwitchForm/SwitchForm";
import * as Validation from "../../validation/Validation";

// Custom RTK hooks
import { useAddNewReserveNowMutation } from "../../services/Forms";

import "./ReserveNow.css";

const ReserveNow = () => {
  const [reserveNow, setReserveNow] = React.useState({
    full_name: "",
    mobile_number: "",
    user_type: "student",
    email: "",
    occupancy: "",
    gender: "",
  });
  const [date, setDate] = React.useState(new Date());
  const [reserveNowErr, setReserveNowErr] = React.useState({
    full_nameErr: "",
    mobile_numberErr: "",
    emailErr: "",
    occupancyErr: "",
    genderErr: "",
    moveInDateErr: "",
  });
  const [addReserveNow] = useAddNewReserveNowMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setReserveNow((preVal) => {
      return {
        ...preVal,
        [name]: value,
        move_in_date: date,
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

  const submitForm = async () => {
    const data = await addReserveNow(reserveNow);

    if (data?.data?.success) {
      setReserveNow({
        full_name: "",
        mobile_number: "",
        user_type: "student",
        email: "",
        occupancy: "",
        gender: "",
      });
      setDate(new Date());
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
      toast.error(`${data?.error?.error}`, {
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

    if (Validation.validateFullName(reserveNow.full_name).length > 0) {
      handleFormFieldsErr(
        "full_nameErr",
        Validation.validateFullName(reserveNow.full_name)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("full_nameErr", "");
    }

    if (Validation.validateMobileNumber(reserveNow.mobile_number).length > 0) {
      handleFormFieldsErr(
        "mobile_numberErr",
        Validation.validateMobileNumber(reserveNow.mobile_number)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("mobile_numberErr", "");
    }

    if (Validation.validateEmail(reserveNow.email).length > 0) {
      handleFormFieldsErr(
        "emailErr",
        Validation.validateEmail(reserveNow.email)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("emailErr", "");
    }

    if (Validation.validateDropdown(reserveNow.occupancy).length > 0) {
      handleFormFieldsErr(
        "occupancyErr",
        Validation.validateDropdown(reserveNow.occupancy)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("occupancyErr", "");
    }

    if (Validation.validateDropdown(reserveNow.gender).length > 0) {
      handleFormFieldsErr(
        "genderErr",
        Validation.validateDropdown(reserveNow.gender)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("genderErr", "");
    }

    if (Validation.validateDate(reserveNow.date).length > 0) {
      handleFormFieldsErr(
        "moveInDateErr",
        Validation.validateDate(reserveNow.date)
      );
      formIsValid = false;
    } else {
      handleFormFieldsErr("moveInDateErr", "");
    }

    if (formIsValid) {
      submitForm();
    }
  };

  const objData = {
    handleSubmit: handleSubmitForm,
    btn_text: "RESERVE NOW",
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
      <SwitchForm ObjData={objData}>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="full_name"
            label="Full Name *"
            variant="outlined"
            value={reserveNow.full_name}
            onChange={handleChange}
          />
          {reserveNowErr.full_nameErr ? (
            <FormHelperText error>{reserveNowErr.full_nameErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <TextField
            type="text"
            name="mobile_number"
            label="Mobile Number *"
            variant="outlined"
            value={reserveNow.mobile_number}
            onChange={handleChange}
          />
          {reserveNowErr.mobile_numberErr ? (
            <FormHelperText error>
              {reserveNowErr.mobile_numberErr}
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
            value={reserveNow.user_type}
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
            value={reserveNow.email}
            onChange={handleChange}
          />
          {reserveNowErr.emailErr ? (
            <FormHelperText error>{reserveNowErr.emailErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Occupancy *</InputLabel>
          <Select
            name="occupancy"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={reserveNow.occupancy}
            label="Occupancy"
            onChange={handleChange}
          >
            <MenuItem value={1}>Single</MenuItem>
            <MenuItem value={2}>Double</MenuItem>
            <MenuItem value={3}>Triple</MenuItem>
            <MenuItem value={4}>Quadruple</MenuItem>
          </Select>
          {reserveNowErr.occupancyErr ? (
            <FormHelperText error>{reserveNowErr.occupancyErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
          <InputLabel id="demo-simple-select-label">Gender *</InputLabel>
          <Select
            name="gender"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={reserveNow.gender}
            label="Gender"
            onChange={handleChange}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="unisex">Unisex</MenuItem>
          </Select>
          {reserveNowErr.genderErr ? (
            <FormHelperText error>{reserveNowErr.genderErr}</FormHelperText>
          ) : null}
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 120 }}
          className="move_in_date"
          fullWidth
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disablePast
              label="Move-in Date *"
              openTo="year"
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
