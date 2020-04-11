import React, { lazy, Suspense } from 'react'
const App = lazy(() => import('./features/app/App'));
const User = lazy(() => import('./features/user/user'));

const Loading = () => {
    return (<>Loading</>)
}

const routes = {
    "/": () => <Suspense fallback={<Loading />}><App /></Suspense>,
    "/user": () => <Suspense fallback={<Loading />}><User /></Suspense>,
}

export default routes;