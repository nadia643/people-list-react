import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
    return (
    <div> 
        <h1>this is nadia and this is not my first react component, but it is my first rodeo </h1> 
    </div>
    );
}


ReactDom.render(<Greeting />, document.getElementById('root'));