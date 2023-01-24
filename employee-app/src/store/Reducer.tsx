import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


  const [data, setData] = useState([]);
  useEffect(() => {
  fetch("record.json")
  .then((response) => {
    return response.json();
  })
  .then((convertedData) => {
    console.log("++++++++",convertedData);
    setData(convertedData);
 
  })
  .catch((error) => {
    console.log("this is error=", error);
  });
  },[])

export const counterSlice = createSlice({
  name: "task",
  initialState: {
    value: [],
  },
  reducers: {
    updateTask: (state, action: PayloadAction<string>) => {
      console.log("action-----", action.payload);

      // state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateTask } = counterSlice.actions;
export default counterSlice.reducer;
