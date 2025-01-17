import { createSlice } from "@reduxjs/toolkit";
import { initialEntries } from "../App";

// var initialEntries = [
//     {
//         id: 1,
//         description: "Work income",
//         value: 1000.0,
//         isExpense: false,
//     },
//     {
//         id: 2,
//         description: "Water bill",
//         value: 20.0,
//         isExpense: true,
//     },
//     {
//         id: 3,
//         description: "Rent",
//         value: 20.0,
//         isExpense: true,
//     },
//     {
//         id: 4,
//         description: "Power bill",
//         value: 50.0,
//         isExpense: true,
//     },
// ];

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        add: (state, action) => {
            state.value += action.payload;
        },
        reduce: (state, action) => {
            state.value -= action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, reduce } = counterSlice.actions;

export default counterSlice.reducer;
