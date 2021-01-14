import React from 'react'
import { Link } from 'react-router-dom'

const ViewScheduleFragment = ({ schedule }) => {
    return (
        <div>
            <p>Schedule title will be here</p>
            <small>loop over schedule here?</small>
            <br />
            { schedule }

            <div>
                <Link to='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default ViewScheduleFragment