import { configureStore } from '@reduxjs/toolkit';
import activityReducer from '../features/activity/activitySlice';
import allActivitiesReducer from '../features/allActivities/allActivitiesSlice';

export default configureStore({
  reducer: {
    activity: activityReducer,
    allActivities: allActivitiesReducer,
  },
});
