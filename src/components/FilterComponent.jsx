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

const FilterComponent = ({ applyFilters }) => {
  const [filter, setFilter] = useState({
    reason: [],
    region: [],
    date: "",
    checkInDate: "",
    checkOutDate: "",
    subcity: [],
    city: [],
    startPrice: "",
    endPrice: "",
    gender: "", // Leave this as it is
    marriage_status: "",
    business_type: [],
  });

  const handleFilterChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Special handling for checkboxes
    if (type === "checkbox") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: checked ? value : "", // Use an empty string for unchecked checkboxes
      }));
    } else {
      setFilter((prevFilter) => ({
        ...prevFilter,
        [name]: value,
      }));
    }
  };

  const handleApplyFilters = () => {
    applyFilters(filter);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="reason-label">Reason</InputLabel>
          <Select
            labelId="reason-label"
            id="reason"
            name="reason"
            multiple
            value={filter.reason}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="Leisure">Leisure</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            {/* Add more reason options */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <FormControl fullWidth sx={{ marginBottom: 2 }}>
          <InputLabel id="region-label">Region</InputLabel>
          <Select
            labelId="region-label"
            id="region"
            name="region"
            multiple
            value={filter.region}
            onChange={handleFilterChange}
            renderValue={(selected) => selected.join(", ")}
          >
            <MenuItem value="North">North</MenuItem>
            <MenuItem value="South">South</MenuItem>
            {/* Add more region options */}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="Start Price"
          type="number"
          name="startPrice"
          value={filter.startPrice}
          onChange={handleFilterChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          label="End Price"
          type="number"
          name="endPrice"
          value={filter.endPrice}
          onChange={handleFilterChange}
          fullWidth
          sx={{ marginBottom: 2 }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={filter.gender === "male"} onChange={handleFilterChange} name="gender" value="male" />}
            label="Male"
          />
          <FormControlLabel
            control={<Checkbox checked={filter.gender === "female"} onChange={handleFilterChange} name="gender" value="female" />}
            label="Female"
          />
        </FormGroup>
      </Grid>

      <Grid item xs={12} md={6}>
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

      <Grid item xs={12}>
        <Button variant="contained" onClick={handleApplyFilters}>
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default FilterComponent;
