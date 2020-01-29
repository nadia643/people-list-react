import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Books() {
    return (
    <section className="books">
        <Book />
        <Book />
        <Book />
    </section>
    );
}

const Book = () => {
    return (
    <article className="book">
        <CoverImage />
        <Title />
        <Author />
    </article>
    );
}

const CoverImage = () => <img width="100" src="https://m.media-amazon.com/images/I/71tWaxdJNWL._AC_UY218_ML3_.jpg" alt="wonkey donkey" />
const Title = () => <h1>The wonkey donkey</h1>;
const Author = () => <p>by Craig Smith</p>;

ReactDom.render(<Books />, document.getElementById('root'));