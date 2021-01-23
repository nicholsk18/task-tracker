import { configureStore } from '@reduxjs/toolkit';
import activityReducer from '../features/activity/activitySlice';
import allActivitiesReducer from '../features/allActivities/allActivitiesSlice';
import sessionReducer from '../features/session/sessionSlice';

export default configureStore({
  reducer: {
    activity: activityReducer,
    allActivities: allActivitiesReducer,
    session: sessionReducer,
  },
});
