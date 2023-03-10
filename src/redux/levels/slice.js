
import { createSlice } from "@reduxjs/toolkit";
import { loadingType } from '../../constants/loading'


export const initialState = { 
    loading: loadingType.idle,
    levels: [],
    error: null
}

const levelsSlice = createSlice({
    name: "levels",
    initialState,
    reducers: {
        getLevelsLoading(state, action) {
            state.loading = action.payload
        },
        getAllLevels(state, action) {
          state.levels = action.payload?.data 
        },
        error(state, action) {
            state.error = action.payload?.message || "An error occurred, please try again later."
        }
     }
});

export const {
    getLevelsLoading,
    getAllLevels,
    error,
} = levelsSlice.actions

export default levelsSlice.reducer
