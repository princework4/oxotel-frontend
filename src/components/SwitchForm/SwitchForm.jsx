import * as React from "react";

// MUI imports
import { Box, Button } from "@mui/material";

import "./SwitchForm.css";

const SwitchForm = (props) => {
  const formRef = React.useRef(null);
  const handleSubmit = props.ObjData.handleSubmit;

  return (
    <form className='switch_form' onSubmit={handleSubmit} ref={formRef}>
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

export default SwitchForm;
