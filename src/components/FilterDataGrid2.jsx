/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {
  Typography,
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Box,
} from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import axios from "axios";
import { Close, Info } from "@mui/icons-material";
import { useDemoData } from "@mui/x-data-grid-generator";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FilterDataGrid2 = ({ id }) => {
  axios.defaults.withCredentials = true;

  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
  });

  const [filteredRows, setFilteredRows] = React.useState(data.rows);

  const handleFilterChange = (filterModel) => {
    console.log("Filter each : ", filterModel);
    let filteredData = [data.rows]; // Make a copy of your original data

    filterModel.forEach((filter) => {
      if (filter.value && filter.columnField) {
        const filterValue = filter.value.toString().toLowerCase();

        filteredData = filteredData.filter((row) => {
          const value = row[filter.columnField];
          const cellValue = value.toString().toLowerCase();

          switch (filter.operatorValue) {
            case "contains":
              return cellValue.includes(filterValue);

            case "equals":
              return cellValue === filterValue;

            case "startsWith":
              return cellValue.startsWith(filterValue);

            case "endsWith":
              return cellValue.endsWith(filterValue);

            case "notContains":
              return !cellValue.includes(filterValue);

            case "notEquals":
              return cellValue !== filterValue;

            case "greaterThan":
              if (!isNaN(value) && !isNaN(filterValue)) {
                return parseFloat(value) > parseFloat(filterValue);
              }
              return false;

            case "greaterThanOrEquals":
              if (!isNaN(value) && !isNaN(filterValue)) {
                return parseFloat(value) >= parseFloat(filterValue);
              }
              return false;

            case "lessThan":
              if (!isNaN(value) && !isNaN(filterValue)) {
                return parseFloat(value) < parseFloat(filterValue);
              }
              return false;

            case "lessThanOrEquals":
              if (!isNaN(value) && !isNaN(filterValue)) {
                return parseFloat(value) <= parseFloat(filterValue);
              }
              return false;

            case "date_equals":
              if (isValidDate(value) && isValidDate(filterValue)) {
                return (
                  new Date(value).toDateString() ===
                  new Date(filterValue).toDateString()
                );
              }
              return false;

            case "date_before":
              if (isValidDate(value) && isValidDate(filterValue)) {
                return new Date(value) < new Date(filterValue);
              }
              return false;

            case "date_after":
              if (isValidDate(value) && isValidDate(filterValue)) {
                return new Date(value) > new Date(filterValue);
              }
              return false;

            default:
              return true;
          }
        });
      }
    });

    console.log("Filtered Data:", filteredData); // Log the filtered data

    setFilteredRows(filteredData);
  };

  function isValidDate(dateString) {
    const d = new Date(dateString);
    return !isNaN(d.getTime());
  }

  return (
    <Box style={{ margin: 15 }} sx={{ xs: { marginTop: 3 }, marginTop: 5 }}>
      <Typography variant="h4" gutterBottom>
        Booking Details
      </Typography>
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          onSelectionModelChange={(props) => {
            console.log(props);
          }}
          onFilterModelChange={(model) => {
            handleFilterChange(model);
            console.log("Modle : ", model);
          }}
          rows={data.rows} // Use filtered rows here
          apiRef={(apiRef) => console.log("API REF : ", apiRef)}
          columns={data.columns} // Use the modified columns array
        />
      </div>
    </Box>
  );
};

export default FilterDataGrid2;
