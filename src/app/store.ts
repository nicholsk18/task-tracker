import { configureStore } from '@reduxjs/toolkit';
import activityReducer from '../features/activity/activitySlice';
import allActivitiesReducer from '../features/allActivities/allActivitiesSlice';
import sessionReducer from '../features/session/sessionSlice';
import scheduleReducer from '../features/schedule/scheduleSlice';
import sortableListReducer from '../features/sortable/sortableListSlice';
import tagReducer from '../features/tag/tagSlice';

export const store = configureStore({
  reducer: {
    activity: activityReducer,
    allActivities: allActivitiesReducer,
    session: sessionReducer,
    schedule: scheduleReducer,
    sortableList: sortableListReducer,
    tag: tagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
