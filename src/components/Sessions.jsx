import React from 'react'
import Session from '../Session'

const Sessions = () => {
    return (
        <div className="sessions-component">
            <h2>
                Sessions
            </h2>
            <div className="sessions-sortables">
                1/1/20
            </div>
            <div className="sessions-sortables">
                1/8/20
            </div>
            <div className="sessions-sortables">
                1/15/20
            </div>

            <div>
                <button className="btn">Load More</button>
            </div>
        </div>
    )
}

export default Sessions