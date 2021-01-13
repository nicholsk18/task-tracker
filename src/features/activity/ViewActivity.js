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
  const [ oldID, setOldID ] = useState(id)

  // I know useEffect has to rely on something to not get stuck in a loop
  // would love ideas to do this a better way
  useEffect(()=>{
      dispatch(fetchActivity(id))
  }, [oldID])

  if (loading) {
    return <p>LOADING</p>;
  }
  return (
    <div>
      <p>Id: {activity.id}</p>
      <p>Name: {activity.name}</p>
      <p>Schedule: {activity.schedule}</p>
    </div>
  );
}
