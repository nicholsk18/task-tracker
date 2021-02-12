import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Box } from '@material-ui/core';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import { getSchedule } from '../../app/fetchData';
import Loading from '../../components/Loading';

interface IProps {
  scheduleId: number;
}

interface ISchedule {
  id: number;
  sortableIds: [];
}

const ViewScheduleFragment: FunctionComponent<IProps> = ({ scheduleId }) => {
  const [schedule, setSchedule] = useState<ISchedule>();

  useEffect(() => {
    const loadSchedule = async () => {
      setSchedule(await getSchedule(scheduleId));
    };

    loadSchedule();
  }, [scheduleId]);

  if (!schedule) {
    return <Loading />;
  }

  return (
    <Box mx={3} my={3}>
      <Link to={`/view/schedule/${schedule.id}`}>
        <Card variant='outlined'>
          <CardContent>
            <h3>Schedule</h3>
            {schedule.id !== 0 && (
              <ViewSortableListFragment sortableIds={schedule.sortableIds} />
            )}
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default ViewScheduleFragment;
