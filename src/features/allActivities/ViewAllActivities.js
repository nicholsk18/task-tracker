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

    if (!loaded) {
        dispatch(fetchAllActivities())
    }

    const allActivities = activities.map(({ id, name }) =>
            <div key={id} className={style.activity_container}>
                <Link to={`/view/${id}`}>
                    {name}
                </Link>

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