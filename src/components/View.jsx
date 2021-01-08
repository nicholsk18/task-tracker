import React from 'react'
import './View.css'

const View = ({ name }) => {
    return (
        <>
            <div className="view-component">
                <h2>
                    { name }
                </h2>
            </div>
        </>
    )
}

export default View