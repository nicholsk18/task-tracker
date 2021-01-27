import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../App.css';
import { fetchSession, selectSession } from '../session/sessionSlice';
import { fetchSchedule, selectSchedule } from './scheduleSlice';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import { fetchActivity, selectActivity } from '../activity/activitySlice';
import Loading from '../../components/Loading';

export interface IUseParams {
  id: string;
}

const ViewSchedule = () => {
  const dispatch = useDispatch();
  const session = useSelector(selectSession);
  const schedule = useSelector(selectSchedule);
  const activity = useSelector(selectActivity);
  const [params, setParams] = useState<IUseParams>(useParams());
  const [sessionState, setSessionState] = useState(undefined);

  useEffect(() => {
    const { id } = params;
    dispatch(fetchSession(id));
    if (sessionState) {
      dispatch(fetchActivity(session.activityId));
      dispatch(fetchSchedule(session.scheduleId));
    }
  }, [params, dispatch, fetchSession, sessionState]);

  // how do you do this cleaner?
  if (session.sessionId !== 0 && !sessionState) {
    setSessionState(session);
  }

  // wait till all the ids are fetched before displaying
  if (activity.id == 0 || schedule.id == 0) {
    return <Loading />;
  }

  return (
    <div className='container'>
      <h2>View Schedule Screen</h2>
      <div className='view-item'>{<h3>{activity.name}</h3>}</div>

      <div className='view-item'>
        <h3>Sortables</h3>
        <ViewSortableListFragment sortableIds={schedule.sortableIds} />
      </div>

      <div className='view-item'>
        <h3>Sessions</h3>
      </div>
    </div>
  );
};

export default ViewSchedule;
