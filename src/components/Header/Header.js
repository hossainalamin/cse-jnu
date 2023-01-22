import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className='bg-img'>
                <img src="https://picsum.photos/1350/300"alt=''></img>
            </div>
            <nav className='nav-bar'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/course">Courses</Link>
                <Link to="/faculties">Faculties</Link>
                <Link to="/hero">Our Heros</Link>
            </nav>
        </div>
    );
};

export default Header;