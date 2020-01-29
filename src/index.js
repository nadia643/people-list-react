import React from 'react';
import ReactDom from 'react-dom';
// import './index.css';

// function sayName(name) {
//     console.log(name);
// }
// sayName("John");

function People() {
    return(
        <section>
            <Person />
        </section>

    )
}



const Person = (props) => {
    console.log(props);

    return(
        <article>
            <h1>John Doe</h1>
            <p>Developer
            </p>
            <hr />
        </article>
    )
}

ReactDom.render(<People />, document.getElementById('root'));