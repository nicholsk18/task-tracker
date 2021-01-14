import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActivity,
  isLoading,
  fetchActivity,
  resetActivity,
} from "./activitySlice";

export function ViewActivity({ id }) {
  const activity = useSelector(selectActivity); // function?
  const loading = useSelector(isLoading); // function?
  const dispatch = useDispatch(); // redux stuff
  const [ activityId, setActivityId ] = useState(id)

  // I think this is right! Changed the name to be better though.
  useEffect(()=>{
      dispatch(fetchActivity(activityId))
  }, [activityId])

  if (loading) {
    return <p>LOADING</p>;
  }
  return (
    <div>
      <p>Id: {activity.id}</p>
      <p>Name: {activity.name}</p>
      {/* We will change this to <ViewScheduleFragment schedule={activity.schedule} /> */}
      <p>Schedule: {activity.schedule}</p>
    </div>
  );
}
