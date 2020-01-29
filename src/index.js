import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

const Person = ({img, name, job, children}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/75.jpg`
    return(
        <article className="person">
            <img src={url} alt="person" />
            <h4>{name}</h4>
            <h4>{job}</h4>
            {children}
        </article>
    )

}
const PersonList = () => {
    return(
        <section className="person-list">
            <Person img="34" name="Bob" job="Reggae King"/>
            <Person img="22" name="Christina" job="Popstar"> 
            <p>lorem20 paragraph</p>
            </Person>
            <Person img="56" name="Elizabeth" job="Queen"/>

        </section>
    )
}

ReactDom.render(<PersonList />, document.getElementById('root'));
