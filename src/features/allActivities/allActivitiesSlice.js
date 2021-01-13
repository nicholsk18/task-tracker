import { createSlice } from "@reduxjs/toolkit"

export const allActivitiesSlice = createSlice({
    name: "allActivities",
    initialState: {
        loaded: false,
        allActivities: []
    },
    reducers: {
        finishLoading: (state) => {
          state.loaded = true
        },
        setAllActivities: (state, action) => {
            state.allActivities = action.payload
        }
    }
})

export const { setAllActivities, finishLoading } = allActivitiesSlice.actions

export const fetchAllActivities = () => (dispatch) => {
    fetch('http://localhost:3001')
        .then((response) => response.json())
        .then((json) => {
            dispatch(setAllActivities(json))
            dispatch(finishLoading())
        })
}

export const selectAllActivities = (state) => state.allActivities.allActivities
export const isLoaded = (state) => state.allActivities.loaded

export default allActivitiesSlice.reducer