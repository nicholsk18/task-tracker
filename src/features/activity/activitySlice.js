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
    resetState: (state) => {
      state.loading = true;
      state.activity = {};
    },
    setActivity: (state, action) => {
      state.activity = action.payload;
      state.loading = false;
    },
  },
});

export const { resetState, setActivity } = activitySlice.actions;

export const fetchActivity = (id) => (dispatch) => {
  dispatch(resetState());

  // const data = fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
  const data = fetch(`http://localhost:3001/${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setActivity({ id: json.id, name: json.name }));
    });

  // setTimeout(() => {
  //   dispatch(setActivity({ id: id, name: "Running" }));
  // }, 1000);
};

export const resetActivity = (id) => (dispatch) => {
  dispatch(resetState()); // this is just for laoding
  dispatch(setActivity({ id: 0, name: "" }));
};

export const selectActivity = (state) => state.activity.activity;
export const isLoading = (state) => state.activity.loading;

export default activitySlice.reducer;
