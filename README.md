## React js Notes Episode 1.
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
