import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import ViewScheduleFragment from '../schedule/ViewScheduleFragment';
import ViewActivityFragment from '../activity/ViewActivityFragment';
import Loading from '../../components/Loading';
import { getSession } from '../../app/fetchData';

interface ISession {
  id: number;
  activityId: number;
  scheduleId: number;
}

const ViewSession: FunctionComponent = () => {
  const [session, setSession] = useState<ISession>()
  const [sessionId, setSessionId] = useState<number>(1)

  useEffect(() => {
    const loadSession = async () => {
      // keeping the pattern
      // later it will be in params?
      if (sessionId) {
        setSession(await getSession(sessionId))
      }
    }

    loadSession()
  }, []);

  if (!session) {
    return <Loading />;
  }

  return (
    <Box>
      <h1>View Session Screen</h1>
      <div>
        <Link to={`/view/activity/${session.activityId}`}>
          <ViewActivityFragment activityId={session.activityId} />
        </Link>
        <ViewScheduleFragment scheduleId={session.scheduleId} />
      </div>
    </Box>
  );
};

export default ViewSession;
