/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function FilterRowDataGrid() {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
  });

  const [filteredData, setFilteredData] = useState([]);
  const [apiRef, setApiRef] = useState(null);

  const handleFilterChange = (filterModel) => {
    console.log("Filter model: ", filterModel);
    // if (apiRef) {
    //   const filteredRows = apiRef.current.getState().rows; // Get the filtered rows
    //   setFilteredData(filteredRows);
    //   console.log(filteredRows);
    // }
  };

  //   useEffect(() => {
  //     if (apiRef) {
  //       apiRef.current.selectRows(
  //         (params) => params.id === 1 // Example: Select rows based on a condition
  //       );
  //       console.log(apiRef.current.getSelectedRows());
  //     }
  //   }, [apiRef]);

  const handleFilterChange2 = (filterModel) => {
    console.log("MODEL : ", filterModel);
    let filteredData = [data.rows]; // Make a copy of your original data

    filterModel.items.forEach((filter) => {

        console.log("Filter :II ", filter)
      if (filter.value && filter.field) {
        const filterValue = filter.value.toString().toLowerCase();

        filteredData = filteredData.filter((row) => {
          const value = row[filter.columnField];
          const cellValue = value.toString().toLowerCase();

          console.log("Filter operatorValue : ", filter.operatorValue)

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

            
            default:
              return true;
          }
        });
      }
    });

    console.log("Filtered Data::::", filteredData); // Log the filtered data
  };


  return (
    <div style={{ height: 400, width: "100%" }}>
      {console.log("Data from MUI: ", data)}
      <DataGridPro
        {...data}
        onFilterModelChange={(model) => handleFilterChange2(model)}
        apiRef={(ref) => setApiRef(ref)}
        unstable_headerFilters
        
        on
      />
    </div>
  );
}
