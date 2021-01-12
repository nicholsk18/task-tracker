import { createSlice } from "@reduxjs/toolkit";

export const activitySlice = createSlice({
  name: "activity",
  initialState: {
    loading: false,
    activity: {
      id: 0,
      name: "",
    },
  },
  reducers: {
    startLoading: (state, action) => {
      state.loading = true
    },
    finishLoading: (state) => {
      state.loading = false
    },
    resetState: (state) => {
      state.activity = { id: 0, name: '' };
    },
    setActivity: (state, action) => {
      state.activity = action.payload;
    },
  },
});

export const { startLoading, finishLoading, resetState, setActivity } = activitySlice.actions;

// all this below need to be in different file?
export const fetchActivity = (id) => (dispatch) => {
  // just for now lets keep it
  dispatch(startLoading())

  // Timeout just for loading
  setTimeout(() => {
    fetch(`http://localhost:3001/${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(setActivity({ id: json.id, name: json.name }));
        dispatch(finishLoading())
      });

  }, 1000)
};

export const resetActivity = (id) => (dispatch) => {
  dispatch(resetState({ id }));
};


export const selectActivity = (state) => state.activity.activity;
export const isLoading = (state) => state.activity.loading;


export default activitySlice.reducer;
