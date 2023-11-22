/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const FilterGRIDDATA = () => {
    const { data } = useDemoData({
        dataSet: "Employee",
        rowLength: 100,
      });
  const apiRef = useGridApiRef();

  const handleFilterChange = (params) => {
    // Get the filtered rows from the Data Grid
    const filteredRows = apiRef.current.getRow();

    console.log("API REF : ", apiRef.current)

    // Log the filtered data to the console
    // console.log('Filtered Rows:', apiRef.current.state);
    console.log('Filtered Rows:', apiRef.current.state.filter.filteredRowsLookup);

    

    // You can process the filtered data further here
  };

  // Render your Data Grid component
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        apiRef={apiRef}
        columns={data.columns}
        rows={data.rows}
        onFilterModelChange={(params) => handleFilterChange(params)}
      />
    </div>
  );
};

export default FilterGRIDDATA;
