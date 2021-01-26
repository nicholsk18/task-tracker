import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState: {
    loading: true,
    schedule: {
      id: 0,
      sortableIds: [],
    },
  },
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    finishLoading: (state) => {
      state.loading = false;
    },
    setSchedule: (
      state,
      action: PayloadAction<{ id: number; sortableIds: [] }>
    ) => {
      state.schedule = action.payload;
    },
  },
});

export const {
  setSchedule,
  startLoading,
  finishLoading,
} = scheduleSlice.actions;

// all this below need to be in different file?
export const fetchSchedule = (id: any) => (dispatch: any) => {
  // just for now lets keep it
  dispatch(startLoading());

  // Timeout just for loading
  fetch(`http://localhost:3001/schedule/${id}`)
    .then((response) => response.json())
    .then((json) => {
      dispatch(setSchedule({ id: json.id, sortableIds: json.sortableIds }));
      dispatch(finishLoading());
    });
};

export const selectSchedule = (state: any) => state.schedule.schedule;
export const isLoading = (state: any) => state.schedule.loading;

export default scheduleSlice.reducer;
