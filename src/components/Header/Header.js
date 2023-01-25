import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <div className='bg-img'>
                <img src="https://picsum.photos/1400/300"alt=''></img>
            </div>
            <nav className='nav-bar'>
                <NavLink to="/" className = {({isActive}) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/about" className = {({isActive}) => isActive ? 'active' : ''}>About</NavLink>
                <NavLink to="/course" className = {({isActive}) => isActive ? 'active' : ''}>Courses</NavLink>
                <NavLink to="/faculties"className = {({isActive}) => isActive ? 'active' : ''}>Faculties</NavLink>
                <NavLink to="/hero"className = {({isActive}) => isActive ? 'active' : ''}>Our Heros</NavLink>
            </nav>
        </div>
    );
};

export default Header;