/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";

export default function CustomFilter() {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 100,
  });

  const [filteredData, setFilteredData] = useState([]);
  const [filterItems, setFilterItems] = useState([]);
  const [apiRef, setApiRef] = useState(null);

  const handleFilterChange = (model) => {
    // console.log("Filter model: ", model);

    const items = model.items;
    console.log("Items : ", items);

    setFilterItems(items);

    filterItems.map((item, index) => {
      console.log("Item : " + index, item);
    });

    // Filter the lodgingitemsData based on filter criteria
    const filteredData = data.rows.filter((fItems) => {
      for (const filter of filterItems) {
        if (filter.operator === "contains") {
          if (fItems[filter.field].includes(filter.value)) {
            continue;
          }
        } else if (filter.operator === "=") {
          if (fItems[filter.field] === filter.value) {
            continue;
          }
        }
        return false;
      }
      return true;
    });

    console.log("FILTERED DATA : ", filteredData)
  };

  const addFilteredData = (filterdValue) => {
    setFilteredData((filteredData) => [...filteredData, filterdValue]);
  };

  const handleFilterChange2 = (filterModel) => {
    console.log("MODEL : ", filterModel);
  };

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGridPro
        {...data}
        onFilterModelChange={(model) => handleFilterChange(model)}
        apiRef={(ref) => setApiRef(ref)}
        unstable_headerFilters
      />
    </div>
  );
}
