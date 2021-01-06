import React from 'react'
import Activity from './components/Activity'
import Schedule from './components/Schedule'
import Sessions from './components/Sessions'

const Session = () => {
    return (
        <div>
            <Activity name="Running" />
            <Schedule />
            <Sessions />
        </div>
    )
}

export default Session