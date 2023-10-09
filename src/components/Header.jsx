import React from 'react';
import Logo from '../assets/Logo Transparent.png';
import { Link, NavLink } from 'react-router-dom';

function Header () {
    return (
        <>
            <header class="nav-bar">
                <Link to="/">
                    <img class="logo" src={Logo} alt="WeShine Logo" />
                </Link>
                <nav class="links">
                    <NavLink to="/about" className={({isActive}) => isActive ? "active-header" : null}>About</NavLink>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "active-header" : null}>Contact</NavLink>
                </nav>
            </header>
            <div id="nav-padding"></div>
        </>

    );
}

export default Header;
