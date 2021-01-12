import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activityReducer from '../features/activity/activitySlice'
import allActivitiesReducer from '../features/allActivities/allActivitiesSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    activity: activityReducer,
    allActivities: allActivitiesReducer
  },
});
