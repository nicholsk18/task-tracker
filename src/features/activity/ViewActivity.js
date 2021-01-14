import React, {useEffect, useState} from "react";
import ViewScheduleFragment from "../../components/ViewScheduleFragment";
import { useSelector, useDispatch } from "react-redux";
import {
  selectActivity,
  isLoading,
  fetchActivity,
} from "./activitySlice";
import style from './ViewActivity.module.css'

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
        return (
            <div className={style.view_container}>
                <p>LOADING</p>
            </div>
        )
    }
    return (
        <div className={style.view_container}>
            <h2>Activity</h2>
            <p>Id: {activity.id}</p>
            <p>Name: {activity.name}</p>
            <div>
                <ViewScheduleFragment schedule={ activity.schedule } />
            </div>
        </div>
    );
}
