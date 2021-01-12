import { createSlice } from "@reduxjs/toolkit"

export const allActivitiesSlice = createSlice({
    name: "allActivities",
    initialState: {
        allActivities: {
            name: ""
        }
    },
    reducers: {
        setAllActivities: (state, action) => {
            state.allActivities = action.payload
        }
    }
})

export const { setAllActivities } = allActivitiesSlice.actions

export const fetchAllActivities = () => (dispatch) => {
    fetch('http://localhost:3001')
        .then((response) => response.json())
        .then((json) => {
            dispatch(setAllActivities({ name: json.name }))
        })
}

export const selectAllActivities = (state) => state.allActivities.allActivities

export default allActivitiesSlice.reducer