import React, { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Box } from '@material-ui/core';
import ViewSortableListFragment from '../sortable/ViewSortableListFragment';
import Loading from '../../components/Loading';
import { getSchedule } from '../../app/fetchData';

interface IUseParams {
  id: string;
}
interface ISchedule {
  id: number;
  sortableIds: number[];
}

const ViewSchedule: FunctionComponent = () => {
  const [schedule, setSchedule] = useState<ISchedule>()
  const [scheduleId, setScheduleId] = useState<number>()
  const [params, setParams] = useState<IUseParams>(useParams());

  useEffect(() => {
    const id = parseInt(params.id)
    setScheduleId(id)
  }, [setScheduleId])

  useEffect(() => {
    const loadSchedule = async () => {
      if (scheduleId) {
        setSchedule(await getSchedule(scheduleId))
      }
    }

    loadSchedule()
  }, [scheduleId]);

  if (!schedule) {
    return <Loading />;
  }

  return (
    <Box mx='auto' my={3} maxWidth='450px'>
      <h2>View Schedule Screen</h2>

      <Box my={3}>
        <Card variant='outlined'>
          <h3>Sortables</h3>
          <ViewSortableListFragment sortableIds={schedule.sortableIds} />
        </Card>
      </Box>
    </Box>
  );
};

export default ViewSchedule;
