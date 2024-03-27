import  React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Restaurants from './Restaurants';
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
                element:<About/>
            },    {
                path: '/contact',
                element:<Contact/>
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