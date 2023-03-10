
import { createSlice } from "@reduxjs/toolkit";
import { loadingType } from '../../constants/loading'


export const initialState = { 
    loading: loadingType.idle,
    gender: [],
    error: null
}

const genderSlice = createSlice({
    name: "gender",
    initialState,
    reducers: {
        getGenderLoading(state, action) {
            state.loading = action.payload
        },
        getAllGender(state, action) {
          state.gender = action.payload?.data
        },
        error(state, action) {
            state.error = action.payload?.message || "An error occurred, please try again later."
        }
     }
});

export const {
    getAllGender,
    getGenderLoading,
    error,
} = genderSlice.actions

export default genderSlice.reducer
