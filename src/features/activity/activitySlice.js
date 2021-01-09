import { createSlice } from '@reduxjs/toolkit';

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    loading: false,
    activity: {
      id: 0,
      name: ""
    }
  },
  reducers: {
    resetState: state => {
      state.loading = true;
      state.activity = {};
    },
    setActivity: (state, action) => {
      state.activity = action.payload;
      state.loading = false;
    }

  },
});

export const { resetState, setActivity} = activitySlice.actions;

export const fetchActivity = id => dispatch => {
  dispatch(resetState());
  setTimeout(() => {
    dispatch(setActivity({id:id, name:"Running"}));
  }, 1000);
};

export const selectActivity = state => state.activity.activity;
export const isLoading = state => state.activity.loading;

export default activitySlice.reducer;
