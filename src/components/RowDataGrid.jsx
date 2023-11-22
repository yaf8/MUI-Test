import { useState, useEffect } from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function RowDataGrid() {
  const { data } = useDemoData({
    dataSet: 'Employee',
    rowLength: 100,
  });

  const [filteredData, setFilteredData] = useState([]);
  const [apiRef, setApiRef] = useState(null);

  const handleFilterChange = (model) => {
    const items = model.items;

    // Define a filtering function
    const filterData = (data, filterItems) => {
      return data.filter((row) => {
        // Initialize a flag to check if all filters match
        let allFiltersMatch = true;

        // Iterate over each filter item
        filterItems.forEach((filterItem) => {
          const { field, operator, value } = filterItem;
          const cellValue = row[field].toString().toLowerCase();

          // Apply filtering logic based on operator
          switch (operator) {
            case 'contains':
              if (!cellValue.includes(value.toLowerCase())) {
                allFiltersMatch = false;
              }
              break;
            case 'equals':
              if (cellValue !== value.toLowerCase()) {
                allFiltersMatch = false;
              }
              break;
            // Add more cases for other operators as needed
          }
        });

        return allFiltersMatch;
      });
    };

    // Call the filterData function with your data and filter items
    const filteredRows = filterData(data.rows, items);

    setFilteredData(filteredRows);
  };

  useEffect(() => {
    if (apiRef) {
      apiRef.current.updateRows(filteredData); // Update the rows in the DataGrid
    }
  }, [filteredData, apiRef]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        {...data}
        onFilterModelChange={(model) => handleFilterChange(model)}
        apiRef={(ref) => setApiRef(ref)}
        unstable_headerFilters
      />
    </div>
  );
}
