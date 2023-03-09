
import { createSlice } from "@reduxjs/toolkit";
import { loadingType } from '../../constants/loading'


export const initialState = { 
    loading: loadingType.idle,
    ages: [],
    error: null
}

const agesSlice = createSlice({
    name: "ages",
    initialState,
    reducers: {
        getAgesLoading(state, action) {
            state.loading = action.payload
        },
        getAllAges(state, action) {
          state.ages = action.payload  
        },
        error(state, action) {
            state.error = action.payload?.message || "An error occurred, please try again later."
        }
     }
});

export const {
    getAgesLoading,
    getAllAges,
    error,
} = agesSlice.actions

export default agesSlice.reducer
