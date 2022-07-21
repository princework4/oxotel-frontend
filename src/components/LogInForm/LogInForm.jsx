import * as React from "react";

// MUI imports
import { Box, Button, FormControl, TextField } from "@mui/material";

// External library imports
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom RTK hooks
import { useLoginMutation } from "../../services/Auth";

// Redux Imports
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";

import "./LogInForm.css";

const LogInForm = (props) => {
  const [logInData, setLogInData] = React.useState({
    email: "",
    password: "",
  });
  const [loginUser] = useLoginMutation();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setLogInData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const handleSubmitForm = async () => {
    const data = await loginUser(logInData);
    const token = data?.data?.token;

    if (token === "@vunkevncch#hqfmbtcccy!ywcig%ess") {
      dispatch(setCredentials({ token: token }));
      localStorage.setItem("token", token);
      setLogInData({
        email: "",
        password: "",
      });
      props.handleClose();
      toast.success(`Logged In successfully.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.error(`${data?.data?.error}`, {
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
