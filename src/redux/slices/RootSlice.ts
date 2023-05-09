import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        make: "Make",
        model: "Model",
        year: "Year",
    },
    reducers: {
        choosMake: (state, action) => {state.make = action.payload},
        chooseModel: (state, action) => {state.model = action.payload},
        choseYear: (state, action) => {state.year = action.payload},
    }

})

export const reducer = rootSlice.reducer;
export const { choosMake, chooseModel, choseYear } = rootSlice.actions;