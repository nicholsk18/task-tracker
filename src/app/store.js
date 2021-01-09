import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import activityReducer from '../features/activity/activitySlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    activity: activityReducer
  },
});
