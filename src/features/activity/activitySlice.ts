import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    loading: true,
    activity: {
      id: 0,
      name: '',
    },
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    resetState: (state) => {
      state.activity = { id: 0, name: '' };
    },
    setActivity: (
      state,
      action: PayloadAction<{ id: number; name: string }>
    ) => {
      state.activity = action.payload;
    },
  },
});

export const {
  startLoading,
  finishLoading,
  resetState,
  setActivity,
} = activitySlice.actions;

// all this below need to be in different file?
export const fetchActivity = (id: string) => (dispatch: any) => {
  // just for now lets keep it
  dispatch(startLoading());

  // Timeout just for loading
  fetch(`http://localhost:3001/activity/${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setActivity({ id: json.id, name: json.name }));
      dispatch(finishLoading());
    });
};

export const resetActivity = (id: string) => (dispatch: any) => {
  dispatch(resetState());
};

export const selectActivity = (state: any) => state.activity.activity;
export const isLoading = (state: any) => state.activity.loading;

export default activitySlice.reducer;
