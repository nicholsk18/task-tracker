import { configureStore } from '@reduxjs/toolkit';
import activityReducer from '../features/activity/activitySlice';
import allActivitiesReducer from '../features/allActivities/allActivitiesSlice';
import sessionReducer from '../features/session/sessionSlice';
import scheduleReducer from '../features/schedule/scheduleSlice';

export default configureStore({
  reducer: {
    activity: activityReducer,
    allActivities: allActivitiesReducer,
    session: sessionReducer,
    schedule: scheduleReducer,
  },
});
