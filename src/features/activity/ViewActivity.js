import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActivity, isLoading, fetchActivity } from "./activitySlice";

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
        <button onClick={() => dispatch(fetchActivity(12))}>Load id 12</button>
      )}
      <p>Id: {activity.id}</p>
      <p>Name: {activity.name}</p>
    </div>
  );
}
