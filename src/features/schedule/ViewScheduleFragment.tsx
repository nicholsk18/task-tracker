import React, { FunctionComponent, useEffect, useState } from 'react';
import { Card } from '@material-ui/core';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import { getSchedule } from '../../app/fetchData';
import Loading from '../../components/Loading';

interface IProps {
  scheduleId: number;
}

interface ISchedule {
  id: number;
  sortableIds: number[];
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
    <Card variant='outlined'>
      <h3>Schedule</h3>
      <ViewSortableListFragment sortableIds={schedule.sortableIds} />
    </Card>
  );
};

export default ViewScheduleFragment;
