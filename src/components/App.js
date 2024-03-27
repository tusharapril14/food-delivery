import  React, {lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from './Error';
import Restaurants from './Restaurants';
const About = lazy(()=>import('./About'));
const Contact = lazy(()=>import('./Contact'));
const AppLayout = ()=>{
return (
        <div className='app-layout'>
            <Header/>
            <Outlet/>
        </div>
        )
}
const router = createBrowserRouter([
    {
        path: '/',
        element:<AppLayout/>,
        children:[
            {
                path: '/',
                element:<Body/>
            },
            {
                path: '/about',
                element:<Suspense fallback={<h1>loading</h1>}> <About/></Suspense>
            },    {
                path: '/contact',
                element:<Suspense fallback={<h1>loading</h1>}> <Contact/></Suspense>
            },
            {
            path: '/restaurants/:id',
            element:<Restaurants/>
        }
        ],
        errorElement:<Error/>
    },    
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)