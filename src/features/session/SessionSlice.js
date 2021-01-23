import { createSlice } from '@reduxjs/toolkit';
import { setActivity } from '../activity/activitySlice';

const Session = createSlice({
  name: 'session',
  initialState: {
    session: {
      // not this (will rework)
      sessionId: 0,
      schedule: ['all sortables here'],
      activity: 'activity name here',
    },
    reducers: {
      setSession: (state, action) => {
        state.session = action.payload;
      },
    },
  },
});

export const { setSession } = SessionSlice.actions;

export const fetchSession = (id) => (dispatch) => {
  // fetch here
  dispatch(setActivity({ sessionId: 1, scheduleId: 1, activityId: 1 }));
};
