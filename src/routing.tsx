import User from './features/user/user'
import App from './App'
import React from 'react'

const routes = {
    "/": () => <App />,
    "/user": () => <User />,
}

export default routes;