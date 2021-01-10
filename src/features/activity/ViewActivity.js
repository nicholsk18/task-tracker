import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActivity,
  isLoading,
  fetchActivity,
  resetActivity,
} from "./activitySlice";

export function ViewActivity() {
  const activity = useSelector(selectActivity);
  const loading = useSelector(isLoading);
  const dispatch = useDispatch();

  if (loading) {
    return <p>LOADING</p>;
  }

  return (
    <div>
      {activity.id === 0 && (
        <button onClick={() => dispatch(fetchActivity(1))}>Load id 1</button>
      )}
      <p>Id: {activity.id}</p>
      <p>Name: {activity.name}</p>

      {activity.name && (
        <button onClick={() => dispatch(resetActivity())}>reset</button>
      )}
    </div>
  );
}
