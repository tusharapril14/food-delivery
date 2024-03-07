## React js Notes Episode 1.
CDN:- CDN is Content delivery network and it is used to delliver content from server to the client that requested it, it can be js, css, html, videos, etc.
Crossorigin :  crossorigin is used to request content from different server.
React is used to create element while ReactDOM is used to render elements

React CreateElements gives elements and it takes three arguments => createElements(arg1, arg2, arg3);
    Here arg1 can be any tag for example div,h1,script,etc...
    arg2 is props (attributes) for example :- 
        {
            id:'child',
            type:'text',
            xyz:true
        }
    arg3 is content here we can pass another create element or array of createElements or we can pass content in string for example "hello world"
    Note :- arg2 + arg3 = props;
    Example:-
    React.createElement("div",{id:'parent'},
        React.createElement("div",{id:'children'},[
                React.createElement("h1",{id:'child1'},"Hello i'm child 1"),
                React.createElement("h2",{id:'child1'},"Hello i'm child 1"),
            ])
        )
    this piece of code shall result in the code below: - 
    <div id="parent">
        <div id="children">
            <h1 id="child1">i'm child 1</h1>
            <h2 id="child2">i'm child 1</h2>
        </div>
    </div>

=>React Element is an object and at the end in converts in to Html Element.

=>ReactDOM.createRoot(document.getElementById('root')) =>  This is basically a syntax to create a root in which you can render all the elements that you have 
created using reactCreateElement.

=>You can create as many root but with different id of an html element.

=>To Create a root you to have an element in the html with id root or any other name , from there you can use the syntax above to replace the content in that 
    html element with the element you created using reactCreateElement
    for Example:   
        const element = React.createElement("div",
            {id:"parent"},[
            React.createElement("div",{id:"child"},[
                React.createElement("h1",{id:"h1"},"Hello H1"),
                React.createElement("h2",{id:"child"},"Hello H1")
            ])
        ]
    );

const root = ReactDOM.createRoot(document.getElementById('root')) ==> here we are creating the root element and injecting in the html element with id root that will replace the content of the root HTMl element with the element you created using reactCreateElement.

=>  root element only replace the content of the root html element not the content outside of the html element.


## React js Notes Episode 2.
=>NPM :  npm is a repository for all the packages , we use npm cmd tools to install those packages in our application

=>npx : npx is used to execute a package installed from the npm.

=>Parcel/Webpack = parcel/vite/babel are bundlers used for code optimization, minification of code, compress images and videos in the project , removing extra functions or code (unused code ) using tree shaking algorithm , It does hot module replacement for faster loading (by creating cache), it supports browserslisting to support different browsers and their versions.it also provides local server and use file watching algo for HMR.
this is a dev dependency.

=>dependencies: 
there are two types of dependencies:
    normal dependencies=> these are the dependencies that are required to run our application properly in production environment.
    dev dependencies=> these are the dependencies that are used for testing and development environment.
=> package.json : it keeps tracks of the dependencies.
=> package.lock.json : it keeps track of the exact version of the dependencies.
=> node_modules are like db for the dependencies.


## React js Notes Episode 3.
JSX is a combination of javascript and Html, it has html like syntax.
React is differnt and jsx is different
At the end JSX is transpiled before going to the browser to be understood by JavaScript engine.
Babel is the package that transpiles our jsx.
Jsx and react.createElement are both same object.
