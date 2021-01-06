import React from 'react'
import { render } from 'react-dom'

import App from './App'

const Index = () => {
    return (
        <div>
            <h1>this is a test</h1>
            <App />
        </div>
    )
}

render(<Index />, document.getElementById('root'))