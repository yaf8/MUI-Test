/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  FormControlLabel,
  Checkbox,
  FormGroup,
  Container,
} from "@mui/material";

const CheckboxList = () => {
  const initialValues = ["A", "B", "C", "D", "E", "T"];
  const [checkedValues, setCheckedValues] = useState(initialValues);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      // If the value is already in the array, remove it
      console.log("Check values : ")
      setCheckedValues((prevValues) => prevValues.filter((v) => v !== value));
    } else {
      // If the value is not in the array, add it
      setCheckedValues((prevValues) => [...prevValues, value]);
    }
  };

  return (
    <Container>
      <FormGroup>
        <div className="flex">
          {initialValues.map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Checkbox
                  checked={checkedValues.includes(value)}
                  onChange={() => handleCheckboxChange(value)}
                />
              }
              label={value}
            />
          ))}
        </div>
      </FormGroup>
      {checkedValues != null && checkedValues.length > 0 && (
        <div className="m-24 ">
          <strong>Checked Values:</strong>{" "}
          <span className="text-xl py-4 px-10 text-black bg-gradient-to-br from-amber-200 to-amber-300 inset-0 hover:from-amber-300 hover:to-amber-400 delay-300 transition-all ease-in-out cursor-pointer rounded-sm shadow-sm hover:shadow-md">
            {checkedValues.join(", ")}
          </span>
        </div>
      )}
    </Container>
  );
};

export default CheckboxList;
