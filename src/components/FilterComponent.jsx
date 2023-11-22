/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { reasons, regions } from "../constants";

import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

const FilterComponent = ({ applyFilters }) => {
  const [filter, setFilter] = useState({
    reason: [],
    region: [],
    date: null,
    checkInDate: null,
    checkOutDate: null,
    subcity: [],
    city: [],
    startPrice: null,
    endPrice: null,
    gender: null,
    marriage_status: null,
    business_type: [],
  });

  const handleFilterChange = (event, dateStrings) => {
    if (event !== null)
      if (dateStrings !== null && dateStrings === "date") {
        console.log("Event : ", event);
        setFilter((prevFilter) => ({
          ...prevFilter,
          checkInDate: event[0],
          checkOutDate: event[1],
        }));
      } else {
        const { name, value, type, checked } = event.target;

        // Special handling for checkboxes
        if (type === "checkbox") {
          setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: checked ? value : null, // Use an empty string for unchecked checkboxes
          }));
        } else {
          setFilter((prevFilter) => ({
            ...prevFilter,
            [name]: value,
          }));
        }
      }
  };

  const handleApplyFilters = () => {
    applyFilters(filter);
  };

  return (
    <Grid container sx={{ justifyContent: "center"}} spacing={2}>
      <Grid item xs={10} sm={6} md={3}>
        <FormControl fullWidth >
          <InputLabel size="small" id="reason-label">
            Reason
          </InputLabel>
          <Select
            labelId="reason-label"
            id="reason"
            name="reason"
            multiple
            size="small"
            value={filter.reason}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {reasons.map((reason) => (
              <MenuItem key={reason} value={reason.value}>
                {reason.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <FormControl fullWidth>
          <InputLabel size="small" id="region-label">Region</InputLabel>
          <Select
            labelId="region-label"
            id="region"
            name="region"
            multiple
            size="small"
            value={filter.region}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(", ")}
          >
            {regions.map((reason) => (
              <MenuItem key={reason} value={reason.value}>
                {reason.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <FormControl size="small" fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel size="small" id="city-label">
            City
          </InputLabel>
          <Select
            labelId="city-label"
            id="city"
            name="city"
            multiple
            size="small"
            value={filter.city}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="Addis Ababa">Addis Ababa</MenuItem>
            <MenuItem value="Hawassa">Hawassa</MenuItem>
            {}
            {/* Add more region options */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        {" "}
        <Space direction="vertical" size={12}>
          <RangePicker
            md={3}
            style={{width: "100%"}}
            id="dateRangePicker"
            onChange={(dates) => handleFilterChange(dates, "date")}
            size="large"
          />
        </Space>{" "}
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <TextField
          label="Start Price"
          type="number"
          name="startPrice"
          size="small"
          value={filter.startPrice}
          onChange={handleFilterChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <TextField
          label="End Price"
          type="number"
          name="endPrice"
          size="small"
          value={filter.endPrice}
          onChange={handleFilterChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <FormGroup>
          <div className="flex">
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.gender === "male"}
                  onChange={handleFilterChange}
                  name="gender"
                  value="male"
                />
              }
              label="Male"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filter.gender === "female"}
                  onChange={handleFilterChange}
                  name="gender"
                  value="female"
                />
              }
              label="Female"
            />
          </div>
        </FormGroup>
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <FormGroup>
          <div className="flex">
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.marriage_status === "married"}
                onChange={handleFilterChange}
                name="marriage_status"
                value="married"
              />
            }
            label="Married"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={filter.marriage_status === "single"}
                onChange={handleFilterChange}
                name="marriage_status"
                value="single"
              />
            }
            label="Single"
          />
          </div>

        </FormGroup>
      </Grid>

      <Grid item xs={10} sm={6} md={3}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="business-type-label">Business Type</InputLabel>
          <Select
            labelId="business-type-label"
            id="business_type"
            name="business_type"
            multiple
            value={filter.business_type}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="Hotel">Hotel</MenuItem>
            <MenuItem value="Guest House">Guest House</MenuItem>
            {/* Add more business type options */}
          </Select>
        </FormControl>
      </Grid>

      {/* Add more filter components as needed */}

      <Grid item >
        <Button variant="contained" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
