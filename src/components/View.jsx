import React from 'react'

const View = ({ name }) => {
    return (
        <>
            <div className="view-component">
                <h2>
                    { name }
                </h2>
                {/* 
                    Should we generate session from data you get here?
                */}
                <div className="view-sortables">
                    <div>
                        [Every][Friday]
                    </div>
                    <div>
                        [After][Work]
                    </div>
                </div>

                <div className="view-sortables">
                    <div>
                        [on the][02/03/21]
                    </div>
                    <div>
                        [Start at][7:00]
                    </div>
                </div>
            </div>

            <div className="view-component">
                <h2>
                    Sessions
                </h2>
                <div className="view-sortables">
                    1/1/20
                </div>
                <div className="view-sortables">
                    1/8/20
                </div>
                <div className="view-sortables">
                    1/15/20
                </div>

                <div>
                    <button className="btn">Load More</button>
                </div>
            </div>

        </>
    )
}

export default View