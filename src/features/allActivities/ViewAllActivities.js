//https://reactjs.org/docs/lists-and-keys.html

import React, { useState } from 'react'
import { ViewActivity } from "../activity/ViewActivity";
import {
    BrowserRouter,
    Link,
    Switch,
    Route,
} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import {
    fetchAllActivities,
    selectAllActivities,
    isLoaded
} from '../allActivities/allActivitiesSlice'
import style from './ViewAllActivities.module.css'

export function ViewAllActivities() {
    const activities = useSelector(selectAllActivities)
    const loaded = useSelector(isLoaded)
    const dispatch = useDispatch()

    // This needs to be useEffect. Can pass in []
    // eg
    // useEffect(()=>{
    //     dispatch(fetchAllActivities())
    // }, [])
    if (!loaded) {
        dispatch(fetchAllActivities())
    }

    // Much nicer to use the object name
    const allActivities = activities.map((activity) =>
            <div key={id} className={style.activity_container}>
                <Link to={`/view/${activity.id}`}>
                    {activity.name}
                </Link>
                {/* We should make this into a <ActivityListItem/> component */}

                {/* This react router code doesn't belong in this file, and will be hurting the clarity of other concepts */}
                <Switch>
                    <Route path={`/view/${id}`}>
                        <ViewActivity id={id} />
                    </Route>
                </Switch>
            </div>
     )

    return (
        <div className={style.container}>
            <BrowserRouter>
                {allActivities}
            </BrowserRouter>
        </div>
    )

}