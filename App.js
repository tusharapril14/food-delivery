import  React from 'react';
import ReactDOM from 'react-dom/client';


const element = <h1 id='heading' className='test'>Hello React Js using jsx.</h1>


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)