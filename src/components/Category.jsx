import React from 'react';
import { NavLink } from 'react-router-dom';
import './Categories.css'


const Category = ({ category }) => {

    const { name, categories } = category;
    return (
        <nav id='links' >
            <li className=' text-2xl flex mx-auto my-3 w-48 rounded-xl'>
                <NavLink to={`./ProductCards/${categories}`} className='btn w-32'> {name}</NavLink>
            </li>
        </nav>
    );
};

export default Category;