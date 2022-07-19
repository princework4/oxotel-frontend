import * as React from "react";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./AuthForms.css";
import LogInForm from "../LogInForm";
import ModalForm from "../ModalForm";
import SignUpForm from "../SignUpForm";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function AuthForms() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleClose = () => setOpen(false);

  const handleCloseForm = () => {
    handleClose();
  };

  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setRequestCallback((preVal) => {
  //     return {
  //       ...preVal,
  //       [name]: value,
  //     };
  //   });
  // };

  // const handleFormFieldsErr = (errField, message) => {
  //   setRequestCallbackErr((prevState) => {
  //     return {
  //       ...prevState,
  //       [errField]: message,
  //     };
  //   });
  // };

  const handleSubmitForm = () => {
    alert("I am  submit");
  };

  // const objData = {
  //   h5: "",
  //   handleClose: handleCloseForm,
  //   handleSubmit: handleSubmitForm,
  //   btn_text: "SUBMIT",
  // };

  return (
    // <ModalForm ObjData={objData}>
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="secondary"
        textColor="inherit"
        variant="fullWidth"
        aria-label="full width tabs example"
        centered
      >
        <Tab label="Log In" {...a11yProps(0)} />
        <Tab label="Sign Up" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <LogInForm />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <SignUpForm />
      </TabPanel>
      {/* <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel> */}
    </Box>
    // </ModalForm>
  );
}
