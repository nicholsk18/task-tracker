import React from 'react'
import Activity from './components/Activity'
import View from './components/View'

const Session = () => {
    return (
        <div>
            <h2>View Session</h2>
            <Activity name="Running" />
            <View name="Schedule" />
        </div>
    )
}

export default Session