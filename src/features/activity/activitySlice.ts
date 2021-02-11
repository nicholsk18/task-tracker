import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from '../../models/Activity';

export const activitySlice = createSlice({
  name: 'activity',
  initialState: {
    loading: true,
    activity: {
      id: 0,
      name: '',
      tagIds: [],
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
      state.activity = { id: 0, name: '', tagIds: [] };
    },
    setActivity: (
      state,
      action: PayloadAction<{ id: number; name: string; tagIds: [] }>
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
export const fetchActivity = (id: string) => (dispatch: any): void => {
  // just for now lets keep it
  dispatch(startLoading());

  // Timeout just for loading
  fetch(`http://localhost:3001/activity/${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(
        setActivity({ id: json.id, name: json.name, tagIds: json.tagIds })
      );
      dispatch(finishLoading());
    });
};

export const resetActivity = () => (dispatch: any): any => {
  dispatch(resetState());
};

export const selectActivity = (state: any): Activity => state.activity.activity;
export const isLoading = (state: any): boolean => state.activity.loading;

export default activitySlice.reducer;
