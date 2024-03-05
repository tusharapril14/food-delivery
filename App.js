import  React from 'react';
import ReactDOM from 'react-dom/client';


const element = React.createElement("div",
    {id:"parent"},[
        React.createElement("div",{id:"child"},[
            React.createElement("h1",{id:"h1"},"Hello H1"),
            React.createElement("h2",{id:"child"},"Hello H1")
        ]),
        React.createElement("div",{id:"child2"},[
            React.createElement("h1",{id:"h1"},"Hello H1"),
            React.createElement("h2",{id:"child"},"Hello H1")
        ]),
    ]

);





const root = ReactDOM.createRoot(document.getElementById('root'))
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root.render(element)
root2.render(element)