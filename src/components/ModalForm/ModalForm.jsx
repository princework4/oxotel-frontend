import * as React from "react";

// MUI imports
import { Box, Button, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import "./ModalForm.css";

const ModalForm = (props) => {
  const formRef = React.useRef(null);
  const handleSubmit = props.ObjData.handleSubmit;
  const handleClose = props.ObjData.handleClose;

  return (
    <form className='model_form' onSubmit={handleSubmit} ref={formRef}>
      <Box className='close_icon_wrapper'>
        <Button onClick={handleClose} className='close_icon'>
          <CloseIcon />
        </Button>
      </Box>
      <Box>
        <Box className='form_heading'>
          <Box>
            <Typography variant='h4' gutterBottom>
              {props.ObjData.h5}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className='form_content'>
        {props.children}
        <Button
          onClick={() => {
            formRef.current.reportValidity();
            handleSubmit();
          }}
          variant='contained'
          color='primary'
          fullWidth>
          {props.ObjData.btn_text}
        </Button>
      </Box>
    </form>
  );
};

export default ModalForm;
