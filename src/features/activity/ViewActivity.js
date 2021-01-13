import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActivity,
  isLoading,
  fetchActivity,
  resetActivity,
} from "./activitySlice";

export function ViewActivity() {
  const activity = useSelector(selectActivity); // function?
  const loading = useSelector(isLoading); // function?
  const dispatch = useDispatch(); // redux stuff

  // I wanted to keep this in for fun
  // Maybe change it to a spinner?
  if (loading) {
    return <p>LOADING</p>;
  }
  return (
    <div>
      <p>Id: {activity.id}</p>
      <p>Name: {activity.name}</p>

      {activity.id === 0 && (
          <button onClick={() => (dispatch(fetchActivity(1)))}>Load id 1</button>
      )}

      {activity.name && (
        <button onClick={() => dispatch(resetActivity(1))}>reset</button>
      )}
    </div>
  );
}
