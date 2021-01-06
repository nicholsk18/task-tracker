import React from 'react'

const Activity = ({ name }) => {
    return (
        <div>
            <h2 className="activity-component">
                Activity
                <span>{name}</span>
            </h2>
        </div>
    )
}

export default Activity