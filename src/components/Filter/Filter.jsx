import * as React from "react";

// MUI imports
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";

import "./Filter.css";

const Filter = () => {
  const [checkState, setCheckState] = React.useState({
    single: false,
    double: false,
    triple: false,
    Quadruple: false,
  });
  const [sliderVal, setSliderVal] = React.useState([0, 1000]);

  const handleCheckChange = (event) => {
    setCheckState({
      ...checkState,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSliderChange = (event, newValue) => {
    setSliderVal(newValue);
  };

  function sliderValText(value) {
    return `${value}`;
  }

  return (
    <Box className='filter_container'>
      <Typography variant='h5'>filters</Typography>
      <FormControl className='form_control'>
        <FormLabel id='demo-radio-buttons-group-label' className='main_label'>
          property type
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'>
          <FormControlLabel
            value='pg_hostel'
            control={<Radio />}
            label='PG & Hostels'
          />
          <FormControlLabel
            value='apartment'
            control={<Radio />}
            label='Managed Apartments'
          />
        </RadioGroup>
      </FormControl>
      <FormControl className='form_control'>
        <FormLabel id='demo-radio-buttons-group-label' className='main_label'>
          sort by
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'>
          <FormControlLabel
            value='low_price'
            control={<Radio />}
            label='Lowest Price First'
          />
          <FormControlLabel
            value='high_price'
            control={<Radio />}
            label='Highest Price First'
          />
        </RadioGroup>
      </FormControl>
      <Box>
        <FormControl className='slider_form_control form_control'>
          <FormLabel className='main_label'>price</FormLabel>
          <Box className='slider_price_container'>
            <Typography variant='h6'>₹{sliderVal[0]}</Typography>
            <Typography variant='h6'>₹{sliderVal[1]}</Typography>
          </Box>
          <Slider
            min={0}
            max={10000}
            step={1}
            value={sliderVal}
            onChange={handleSliderChange}
            valueLabelDisplay='auto'
            getAriaValueText={sliderValText}
          />
        </FormControl>
      </Box>
      <FormControl className='form_control'>
        <FormLabel id='demo-radio-buttons-group-label' className='main_label'>
          gender
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          name='radio-buttons-group'>
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='unisex' control={<Radio />} label='Unisex' />
        </RadioGroup>
      </FormControl>
      <FormControl className='form_control'>
        <FormLabel id='demo-radio-buttons-group-label' className='main_label'>
          residence type
        </FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'>
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
      <Box sx={{ display: "flex" }}>
        <FormControl
          sx={{ m: 3 }}
          component='fieldset'
          variant='standard'
          className='last_form_control form_control'>
          <FormLabel component='legend' className='main_label'>
            occupancy
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.single}
                  onChange={handleCheckChange}
                  name='single'
                />
              }
              label='Single'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.double}
                  onChange={handleCheckChange}
                  name='double'
                />
              }
              label='Double'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.triple}
                  onChange={handleCheckChange}
                  name='triple'
                />
              }
              label='Triple'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkState.quadruple}
                  onChange={handleCheckChange}
                  name='quadruple'
                />
              }
              label='Quadruple'
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};

export default Filter;
