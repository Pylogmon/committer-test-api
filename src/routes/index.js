import { lazy, Suspense } from 'react'
import { Navigate } from 'react-router-dom'
const Committer = lazy(() => import('../pages/Committer'))
const Other = lazy(() => import('../pages/Other'))


const routes = [
    {
        path: "/committer",
        element: <Suspense fallback={<h1>Loading...</h1>}><Committer /></Suspense>
    },
    {
        path: "/other",
        element: <Suspense fallback={<h1>Loading...</h1>}><Other /></Suspense>
    },
    {
        path: "/",
        element: <Navigate to='/committer' />
    }
]

export default routes