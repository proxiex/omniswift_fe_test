
import { createSlice } from "@reduxjs/toolkit";
import { loadingType } from '../../constants/loading'


export const initialState = { 
    loading: loadingType.idle,
    allData: [],
    error: null
}

const allDataSlice = createSlice({
    name: "allData",
    initialState,
    reducers: {
        getAllDataLoading(state, action) {
            state.loading = action.payload
        },
        getAllData(state, action) {
          state.allData = action.payload  
        },
        filterAllData(state, action) {
            state.allData = action.payload
        },
        viewResults(state, action) {
            state.singleData = action.payload
        },
        error(state, action) {
            state.error = action.payload?.message || "An error occurred, please try again later."
        }
     }
});

export const {
    getAllDataLoading,
    getAllData,
    filterAllData,
    viewResults,
    error,
} = allDataSlice.actions

export default allDataSlice.reducer
