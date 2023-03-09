
import { createSlice } from "@reduxjs/toolkit";
import { loadingType } from '../../constants/loading'


export const initialState = { 
    loading: loadingType.idle,
    states: [],
    error: null
}

const statesSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        getStatesLoading(state, action) {
            state.loading = action.payload
        },
        getAllStates(state, action) {
          state.states = action.payload  
        },
        error(state, action) {
            state.error = action.payload?.message || "An error occurred, please try again later."
        }
     }
});

export const {
    getAllStates,
    getStatesLoading,
    error,
} = statesSlice.actions

export default statesSlice.reducer
