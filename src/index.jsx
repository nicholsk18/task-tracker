import React from 'react'
import { render } from 'react-dom'

import App from './App'

const Index = () => {
    return (
        <div>
            <h1 className="main-title">Task Tracker</h1>
            <App />
        </div>
    )
}

render(<Index />, document.getElementById('root'))